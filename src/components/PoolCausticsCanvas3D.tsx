import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PoolCausticsCanvas3DProps {
  scrollProgress: number;
  isPaused: boolean;
  rippleCount: number;
  onTriggerRipple: () => void;
}

const POOL_VERTEX_SHADER = `
  varying vec2 vUv;
  varying vec3 vWorldPos;
  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

// Hyper-realistic Voronoi + Dual-Wave Swimming Pool Caustics & Submerged Shadow Shader
const POOL_FRAGMENT_SHADER = `
  uniform float uTime;
  uniform vec2 uRingCenter;
  uniform float uRingScale;
  uniform vec2 uRippleCenter;
  uniform float uRippleAge;
  varying vec2 vUv;
  varying vec3 vWorldPos;

  vec2 hash2(vec2 p) {
    return fract(
      sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453
    );
  }

  // Smooth 2nd-order Voronoi distance for sharp spiderweb sunlight caustics
  float voronoiCaustic(vec2 x, float time) {
    vec2 n = floor(x);
    vec2 f = fract(x);
    float f1 = 8.0;
    float f2 = 8.0;

    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 g = vec2(float(i), float(j));
        vec2 o = hash2(n + g);
        o = 0.5 + 0.44 * sin(time * 1.35 + 6.2831 * o);
        vec2 r = g - f + o;
        float d = dot(r, r);
        if (d < f1) {
          f2 = f1;
          f1 = d;
        } else if (d < f2) {
          f2 = d;
        }
      }
    }
    float edge = sqrt(f2) - sqrt(f1);
    return exp(-edge * 6.2);
  }

  void main() {
    vec2 p = vWorldPos.xy * 0.42;

    // Interactive click / pointer ripple wave distortion
    vec2 toRipple = vWorldPos.xy - uRippleCenter;
    float rippleDist = length(toRipple);
    float rippleWave = 0.0;
    if (uRippleAge < 4.5) {
      float radius = uRippleAge * 2.4;
      float band = exp(-pow(rippleDist - radius, 2.0) * 3.5);
      rippleWave = sin((rippleDist - radius) * 14.0) * band * (1.0 - uRippleAge / 4.5) * 0.055;
      p += normalize(toRipple + 0.0001) * rippleWave;
    }

    // Gentle organic water refraction distortion
    vec2 warp = vec2(
      sin(p.y * 2.7 + uTime * 0.9) + cos(p.x * 2.1 - uTime * 0.7),
      cos(p.x * 2.5 + uTime * 0.8) + sin(p.y * 3.1 + uTime * 0.65)
    ) * 0.14;

    vec2 uvDistorted = p + warp;

    // Subtle submerged ceramic pool tile grid
    vec2 tileGrid = abs(fract(uvDistorted * 3.6 - 0.5) - 0.5) / fwidth(uvDistorted * 3.6);
    float tileLine = 1.0 - min(min(tileGrid.x, tileGrid.y), 1.0);

    // Base turquoise-aqua swimming pool water gradient matching Float Club
    vec3 deepAqua = vec3(0.06, 0.62, 0.70);
    vec3 midTurquoise = vec3(0.13, 0.76, 0.82);
    vec3 brightCyan = vec3(0.36, 0.91, 0.87);

    float radialGrad = clamp(length(vWorldPos.xy) * 0.11, 0.0, 1.0);
    vec3 waterColor = mix(brightCyan, midTurquoise, radialGrad * 0.75);
    waterColor = mix(waterColor, deepAqua, smoothstep(0.35, 1.0, radialGrad) * 0.45);
    waterColor = mix(waterColor, deepAqua * 0.88, tileLine * 0.08);

    // Dual-scale Voronoi caustic networks (primary sharp + secondary fine shimmer)
    float c1 = voronoiCaustic(uvDistorted * 2.15 + vec2(uTime * 0.08, -uTime * 0.05), uTime);
    float c2 = voronoiCaustic(uvDistorted * 3.65 - vec2(uTime * 0.06, uTime * 0.09) + 3.4, uTime * 1.15);
    float c3 = voronoiCaustic(uvDistorted * 1.25 + vec2(-uTime * 0.04, uTime * 0.06), uTime * 0.8);

    float causticNet = pow(clamp(c1 * 0.68 + c2 * 0.45 + c3 * 0.35, 0.0, 1.35), 1.65);

    // Subtle chromatic dispersion on bright caustic filaments
    vec3 causticTint = vec3(0.88, 1.0, 0.98) * causticNet * 0.68;
    waterColor += causticTint;

    // Submerged Pool Floor Shadow & Refractive Caustic Halo directly beneath the 3D Float Ring
    vec2 shadowOffset = vWorldPos.xy - (uRingCenter + vec2(-0.12, -0.34));
    float rDist = length(shadowOffset) / uRingScale;

    // Torus shadow profile (outer radius ~1.95, inner hole ~0.85)
    float torusBand = smoothstep(0.52, 0.92, rDist) * (1.0 - smoothstep(1.62, 2.18, rDist));
    // Soft underwater caustic focus ring around the shadow edge
    float causticFocus = exp(-pow(rDist - 1.92, 2.0) * 9.0) * 0.28 +
                         exp(-pow(rDist - 0.68, 2.0) * 12.0) * 0.22;

    vec3 shadowTeal = vec3(0.03, 0.40, 0.46);
    waterColor = mix(waterColor, shadowTeal, torusBand * 0.56);
    waterColor += vec3(0.75, 0.98, 0.95) * causticFocus * (0.6 + 0.4 * c1);

    // Add bright ring highlight when user clicks water ripple
    if (uRippleAge < 4.5) {
      waterColor += vec3(0.95, 1.0, 1.0) * max(0.0, rippleWave * 6.5);
    }

    gl_FragColor = vec4(waterColor, 1.0);
  }
`;

function createStripedRingTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // 8 alternating segments (4 vibrant tangerine orange, 4 warm glossy white)
  const segments = 8;
  const segWidth = canvas.width / segments;

  for (let i = 0; i < segments; i++) {
    const isOrange = i % 2 === 0;
    const x0 = i * segWidth;

    if (isOrange) {
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0.0, '#F57C2C');
      grad.addColorStop(0.5, '#F26D1D');
      grad.addColorStop(1.0, '#E05A0E');
      ctx.fillStyle = grad;
    } else {
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0.0, '#FFFFFF');
      grad.addColorStop(0.5, '#FAF8F4');
      grad.addColorStop(1.0, '#EDEAE2');
      ctx.fillStyle = grad;
    }
    ctx.fillRect(x0, 0, segWidth + 1, canvas.height);

    // Subtle heat-welded vinyl seam groove between orange & white panels
    ctx.fillStyle = 'rgba(120, 55, 20, 0.14)';
    ctx.fillRect(x0, 0, 4, canvas.height);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function createPoolReflectionEnv(renderer: THREE.WebGLRenderer): THREE.Texture {
  const envScene = new THREE.Scene();
  const sphereGeo = new THREE.SphereGeometry(20, 32, 24);
  const sphereMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vDir;
      void main() {
        // Upper hemisphere: bright summer sky + warm sun studio softbox
        // Lower hemisphere: glowing turquoise pool bounce light
        vec3 skyWhite = vec3(0.96, 0.99, 1.0);
        vec3 sunWarm = vec3(1.0, 0.98, 0.90);
        vec3 poolBounce = vec3(0.12, 0.82, 0.88);

        vec3 col = vDir.y > 0.0
          ? mix(skyWhite, sunWarm, pow(max(0.0, vDir.y), 2.0))
          : mix(poolBounce, vec3(0.05, 0.52, 0.60), -vDir.y);

        float sunSpot = pow(max(0.0, dot(vDir, normalize(vec3(0.25, 0.88, 0.42)))), 14.0);
        col += vec3(1.0, 0.99, 0.94) * sunSpot * 1.4;
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  envScene.add(new THREE.Mesh(sphereGeo, sphereMat));

  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileCubemapShader();
  const envTex = pmrem.fromScene(envScene, 0.03).texture;
  pmrem.dispose();
  sphereGeo.dispose();
  sphereMat.dispose();
  return envTex;
}

export const PoolCausticsCanvas3D: React.FC<PoolCausticsCanvas3DProps> = ({
  scrollProgress,
  isPaused,
  onTriggerRipple,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ scrollProgress, isPaused });

  useEffect(() => {
    stateRef.current = { scrollProgress, isPaused };
  }, [scrollProgress, isPaused]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      36,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, -1.65, 6.85);
    camera.lookAt(0, -0.15, 0);

    const envMap = createPoolReflectionEnv(renderer);
    scene.environment = envMap;

    // 1. POOL WATER & CAUSTICS SHADER PLANE
    const poolUniforms = {
      uTime: { value: 0 },
      uRingCenter: { value: new THREE.Vector2(0, 0.2) },
      uRingScale: { value: 1.0 },
      uRippleCenter: { value: new THREE.Vector2(0, 0) },
      uRippleAge: { value: 10.0 },
    };

    const poolMat = new THREE.ShaderMaterial({
      uniforms: poolUniforms,
      vertexShader: POOL_VERTEX_SHADER,
      fragmentShader: POOL_FRAGMENT_SHADER,
    });
    const poolPlane = new THREE.Mesh(new THREE.PlaneGeometry(32, 24), poolMat);
    poolPlane.position.z = -0.32;
    scene.add(poolPlane);

    // 2. 3D ORANGE-AND-WHITE STRIPED INFLATABLE POOL RING ASSEMBLY
    const floatRingGroup = new THREE.Group();
    floatRingGroup.position.set(0, 0.22, 0.15);
    scene.add(floatRingGroup);

    const stripeTexture = createStripedRingTexture();
    const vinylMaterial = new THREE.MeshPhysicalMaterial({
      map: stripeTexture,
      roughness: 0.14,
      metalness: 0.02,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
      envMapIntensity: 1.25,
    });

    const majorR = 1.38;
    const minorR = 0.54;
    const torusGeo = new THREE.TorusGeometry(majorR, minorR, 80, 192);
    // Slightly plump and flatten the vertical profile like a real inflated vinyl tube
    torusGeo.scale(1.0, 1.0, 0.86);
    const torusMesh = new THREE.Mesh(torusGeo, vinylMaterial);
    floatRingGroup.add(torusMesh);

    // Inner & Outer Heat-Welded Seam Flange Rims (matching real PVC pool floats)
    const seamMat = new THREE.MeshPhysicalMaterial({
      color: '#F4F1EA',
      roughness: 0.25,
      clearcoat: 0.8,
      transparent: true,
      opacity: 0.88,
    });
    const innerSeam = new THREE.Mesh(
      new THREE.TorusGeometry(majorR - minorR + 0.015, 0.024, 16, 128),
      seamMat
    );
    innerSeam.scale.set(1.0, 1.0, 0.35);
    floatRingGroup.add(innerSeam);

    const outerSeam = new THREE.Mesh(
      new THREE.TorusGeometry(majorR + minorR - 0.015, 0.022, 16, 128),
      seamMat
    );
    outerSeam.scale.set(1.0, 1.0, 0.35);
    floatRingGroup.add(outerSeam);

    // Submerged Refracted Underwater Skirt Reflection (visible in codex_19.jpg & codex_16.jpg!)
    const submergedRefractionMat = new THREE.MeshBasicMaterial({
      map: stripeTexture,
      transparent: true,
      opacity: 0.24,
      color: '#88F4FA',
    });
    const submergedTorus = new THREE.Mesh(
      new THREE.TorusGeometry(majorR * 1.02, minorR * 0.96, 36, 96),
      submergedRefractionMat
    );
    submergedTorus.position.set(-0.04, -0.18, -0.26);
    submergedTorus.scale.set(1.02, 1.02, 0.45);
    floatRingGroup.add(submergedTorus);

    // 3. INSTANCED 3D GLISTENING WATER DROPLETS ON THE RING SURFACE (codex_19.jpg / codex_23.jpg)
    const dropletCount = 210;
    const dropletGeo = new THREE.SphereGeometry(1, 14, 12);
    const dropletMat = new THREE.MeshPhysicalMaterial({
      color: '#FFFFFF',
      roughness: 0.02,
      metalness: 0.05,
      transmission: 0.85,
      ior: 1.333,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      envMapIntensity: 2.2,
    });
    const dropletsInstanced = new THREE.InstancedMesh(dropletGeo, dropletMat, dropletCount);

    const dummy = new THREE.Object3D();
    // Deterministic pseudo-random generator so droplets look natural and organic
    let seed = 42;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    for (let i = 0; i < dropletCount; i++) {
      const u = rand() * Math.PI * 2;
      // Place droplets across the upper sun-facing surface of the torus
      const v = (rand() - 0.5) * 1.85;
      const cosV = Math.cos(v);
      const sinV = Math.sin(v);

      const x = (majorR + minorR * sinV) * Math.cos(u);
      const y = (majorR + minorR * sinV) * Math.sin(u);
      const z = minorR * cosV * 0.86;

      dummy.position.set(x, y, z);

      // Compute surface normal on the torus to orient the flattened water bead
      const nx = sinV * Math.cos(u);
      const ny = sinV * Math.sin(u);
      const nz = cosV;
      dummy.lookAt(x + nx, y + ny, z + nz);

      // Mix of larger glistening beads and tiny water mist droplets
      const sizeBucket = rand();
      const baseScale =
        sizeBucket > 0.84
          ? 0.026 + rand() * 0.014
          : sizeBucket > 0.45
          ? 0.015 + rand() * 0.009
          : 0.008 + rand() * 0.006;

      dummy.scale.set(baseScale, baseScale * (0.85 + rand() * 0.35), baseScale * 0.52);
      dummy.updateMatrix();
      dropletsInstanced.setMatrixAt(i, dummy.matrix);
    }
    dropletsInstanced.instanceMatrix.needsUpdate = true;
    floatRingGroup.add(dropletsInstanced);

    // 4. LIGHTING (Bright Summer Overhead Sun + Turquoise Pool Bounce)
    const ambientLight = new THREE.AmbientLight('#D8FAFC', 1.45);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight('#FFFDF4', 2.85);
    sunLight.position.set(1.8, 3.2, 6.5);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight('#6CF5FF', 1.35);
    rimLight.position.set(-3.5, -2.5, 3.0);
    scene.add(rimLight);

    // Interactive Click / Pointer Ripple Raycasting
    const raycaster = new THREE.Raycaster();
    const pointerNDC = new THREE.Vector2();
    const mouseParallax = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseParallax.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseParallax.targetY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handlePointerDown = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      pointerNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointerNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointerNDC, camera);
      const hits = raycaster.intersectObject(poolPlane);
      if (hits.length > 0) {
        poolUniforms.uRippleCenter.value.set(hits[0].point.x, hits[0].point.y);
        poolUniforms.uRippleAge.value = 0.0;
        onTriggerRipple();
      }
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mousedown', handlePointerDown);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // 6-Chapter Camera & Ring Keyframes matching codex_15, codex_23, codex_16, codex_11
    const keyframes = [
      // Chapter 1: "A little less hurry." (codex_15.jpg / codex_19.jpg)
      {
        camPos: new THREE.Vector3(0, -1.75, 6.55),
        lookAt: new THREE.Vector3(0, -0.12, 0),
        ringPos: new THREE.Vector3(0.0, 0.22, 0.15),
        ringRot: new THREE.Vector3(-0.08, 0.04, 0.18),
        ringScale: 1.0,
      },
      // Chapter 2: "Let the day drift." — Zoomed close-up on the striped ring (codex_23.jpg)
      {
        camPos: new THREE.Vector3(0.05, -0.55, 4.35),
        lookAt: new THREE.Vector3(0.02, 0.02, 0),
        ringPos: new THREE.Vector3(-0.04, 0.06, 0.22),
        ringRot: new THREE.Vector3(-0.02, 0.06, 0.42),
        ringScale: 1.12,
      },
      // Chapter 3: "Nowhere to be." — Medium-close angled drift (codex_16.jpg)
      {
        camPos: new THREE.Vector3(-0.15, -1.55, 5.85),
        lookAt: new THREE.Vector3(0, -0.05, 0),
        ringPos: new THREE.Vector3(0.02, 0.08, 0.18),
        ringRot: new THREE.Vector3(-0.06, -0.04, 0.68),
        ringScale: 1.02,
      },
      // Chapter 4: "Just warm water." — Sunlit tilt across water droplets
      {
        camPos: new THREE.Vector3(0.55, -1.85, 5.15),
        lookAt: new THREE.Vector3(0.1, 0.05, 0),
        ringPos: new THREE.Vector3(-0.12, 0.15, 0.2),
        ringRot: new THREE.Vector3(-0.12, 0.12, 1.05),
        ringScale: 1.06,
      },
      // Chapter 5: "Unplug the noise." — Tranquil afternoon float
      {
        camPos: new THREE.Vector3(-0.45, -1.65, 5.65),
        lookAt: new THREE.Vector3(-0.05, 0.0, 0),
        ringPos: new THREE.Vector3(0.14, 0.12, 0.16),
        ringRot: new THREE.Vector3(-0.05, -0.08, 1.42),
        ringScale: 1.0,
      },
      // Chapter 6: "Stay a little longer." — High wide view with ring centered below headline (codex_11.jpg)
      {
        camPos: new THREE.Vector3(0, -2.35, 7.65),
        lookAt: new THREE.Vector3(0, 0.08, 0),
        ringPos: new THREE.Vector3(0.0, -0.18, 0.14),
        ringRot: new THREE.Vector3(-0.14, 0.02, 1.85),
        ringScale: 0.88,
      },
    ];

    let simTime = 0;
    let lastClock = performance.now();
    let frameId = 0;

    const targetCam = new THREE.Vector3();
    const targetLook = new THREE.Vector3();
    const currentLook = new THREE.Vector3(0, -0.12, 0);
    const targetRingPos = new THREE.Vector3();

    const animate = (now: number) => {
      frameId = requestAnimationFrame(animate);
      const dt = Math.min(0.05, (now - lastClock) / 1000);
      lastClock = now;

      const { scrollProgress: sp, isPaused: paused } = stateRef.current;
      if (!paused) {
        simTime += dt;
      }

      poolUniforms.uTime.value = simTime;
      poolUniforms.uRippleAge.value += dt;

      mouseParallax.x += (mouseParallax.targetX - mouseParallax.x) * 0.06;
      mouseParallax.y += (mouseParallax.targetY - mouseParallax.y) * 0.06;

      // Interpolate between the 6 scroll chapters smoothly
      const scaledProgress = Math.min(4.9999, Math.max(0, sp * 5));
      const idx = Math.floor(scaledProgress);
      const frac = scaledProgress - idx;
      const smoothFrac = frac * frac * (3 - 2 * frac);

      const kfA = keyframes[idx];
      const kfB = keyframes[Math.min(5, idx + 1)];

      targetCam.lerpVectors(kfA.camPos, kfB.camPos, smoothFrac);
      targetCam.x += mouseParallax.x * 0.18;
      targetCam.y += mouseParallax.y * 0.14;

      targetLook.lerpVectors(kfA.lookAt, kfB.lookAt, smoothFrac);

      camera.position.lerp(targetCam, 0.08);
      currentLook.lerp(targetLook, 0.08);
      camera.lookAt(currentLook);

      // Gentle buoyant water bobbing on the inflatable ring
      const bobX = Math.sin(simTime * 0.85) * 0.045;
      const bobY = Math.cos(simTime * 0.72) * 0.055;
      const bobZ = Math.sin(simTime * 1.35) * 0.03;

      targetRingPos.lerpVectors(kfA.ringPos, kfB.ringPos, smoothFrac);
      floatRingGroup.position.x = THREE.MathUtils.lerp(
        floatRingGroup.position.x,
        targetRingPos.x + bobX,
        0.08
      );
      floatRingGroup.position.y = THREE.MathUtils.lerp(
        floatRingGroup.position.y,
        targetRingPos.y + bobY,
        0.08
      );
      floatRingGroup.position.z = targetRingPos.z + bobZ;

      const rotX =
        THREE.MathUtils.lerp(kfA.ringRot.x, kfB.ringRot.x, smoothFrac) +
        Math.sin(simTime * 0.95) * 0.035 +
        mouseParallax.y * 0.05;
      const rotY =
        THREE.MathUtils.lerp(kfA.ringRot.y, kfB.ringRot.y, smoothFrac) +
        Math.cos(simTime * 0.82) * 0.035 +
        mouseParallax.x * 0.05;
      const rotZ =
        THREE.MathUtils.lerp(kfA.ringRot.z, kfB.ringRot.z, smoothFrac) + simTime * 0.06;

      floatRingGroup.rotation.set(rotX, rotY, rotZ);

      const scaleVal = THREE.MathUtils.lerp(kfA.ringScale, kfB.ringScale, smoothFrac);
      floatRingGroup.scale.setScalar(scaleVal);

      // Sync pool floor shadow with ring position & scale
      poolUniforms.uRingCenter.value.set(
        floatRingGroup.position.x,
        floatRingGroup.position.y
      );
      poolUniforms.uRingScale.value = scaleVal;

      renderer.render(scene, camera);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      envMap.dispose();
      stripeTexture.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [onTriggerRipple]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-full z-0 cursor-pointer"
      title="Click anywhere on the turquoise pool water to send a sun ripple"
    />
  );
};
