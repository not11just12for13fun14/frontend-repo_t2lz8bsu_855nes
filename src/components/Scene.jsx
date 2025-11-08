import Spline from '@splinetool/react-spline';

export default function Scene() {
  return (
    <section id="scene" className="relative h-[70vh] w-full">
      <Spline
        scene="https://prod.spline.design/vLr7mZ0VJrX5yy0A/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/70" />
    </section>
  );
}
