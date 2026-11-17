import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function Starfield({ count = 1400 }) {
	const ref = useRef();
	const positions = useMemo(() => {
		const arr = new Float32Array(count * 3);
		for (let i = 0; i < count; i++) {
			const r = 6 + Math.random() * 10;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);
			arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
			arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
			arr[i * 3 + 2] = r * Math.cos(phi);
		}
		return arr;
	}, [count]);

	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.y += delta * 0.03;
			ref.current.rotation.x += delta * 0.01;
		}
	});

	return (
		<points ref={ref}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					count={count}
					array={positions}
					itemSize={3}
				/>
			</bufferGeometry>
			<pointsMaterial
				size={0.035}
				color="#8ea2c9"
				transparent
				opacity={0.8}
				sizeAttenuation
				depthWrite={false}
			/>
		</points>
	);
}

function Blob() {
	const ref = useRef();
	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		if (ref.current) {
			ref.current.rotation.y = t * 0.18;
			ref.current.rotation.z = t * 0.06;
		}
	});
	return (
		<Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.1}>
			<Icosahedron ref={ref} args={[1.6, 12]}>
				<MeshDistortMaterial
					color="#38bdf8"
					emissive="#1e3a8a"
					emissiveIntensity={0.35}
					distort={0.4}
					speed={1.6}
					roughness={0.15}
					metalness={0.6}
				/>
			</Icosahedron>
		</Float>
	);
}

function Rig() {
	useFrame((state) => {
		const x = state.pointer.x * 0.4;
		const y = state.pointer.y * 0.3;
		state.camera.position.x += (x - state.camera.position.x) * 0.04;
		state.camera.position.y += (y - state.camera.position.y) * 0.04;
		state.camera.lookAt(0, 0, 0);
	});
	return null;
}

export default function HeroScene() {
	const prefersReduced =
		typeof window !== "undefined" &&
		window.matchMedia &&
		window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	return (
		<Canvas
			camera={{ position: [0, 0, 5], fov: 45 }}
			dpr={[1, 1.6]}
			frameloop={prefersReduced ? "demand" : "always"}
			gl={{ antialias: true, alpha: true }}
			style={{ pointerEvents: "none" }}
		>
			<ambientLight intensity={0.6} />
			<directionalLight position={[3, 3, 3]} intensity={1.4} color="#a5b4fc" />
			<pointLight position={[-4, -2, -2]} intensity={2} color="#22d3ee" />
			<Suspense fallback={null}>
				<Blob />
				<Starfield />
			</Suspense>
			{!prefersReduced && <Rig />}
		</Canvas>
	);
}
