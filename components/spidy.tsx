import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main>
      <div className='h-[90%] w-[90%] md:h-[500px] md:w-[650px]'>
      <Spline
        scene="https://prod.spline.design/nD1PzlwPGO37154V/scene.splinecode" 
      />
      </div>
    </main>
  );
}
