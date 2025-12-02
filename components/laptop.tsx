import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className='z-1 relative'>
      <div className='md:h-120 md:w-120 z-20'>
      <Spline
        scene="https://prod.spline.design/EC0u9YUH5viaINhA/scene.splinecode"
        className='z-20' 
      />
      </div>
    </div>
  );
}
