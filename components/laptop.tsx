// 'use client';

// import { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';

// // Spline doesn't support SSR, use ssr:false but with proper fallback
// const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
//   ssr: false,
//   loading: () => null  // No fallback—skeleton shown in parent
// });

// export default function Laptop() {
//   const [showSpline, setShowSpline] = useState(false);

//   useEffect(() => {
//     // Start showing Spline immediately after mount (client-side only)
//     setShowSpline(true);
//   }, []);

//   return (
//     <div className='z-1 relative'>
//       <div className='h-100 w-100 md:h-120 md:w-120 z-20 contain-layout contain-paint'>
//         {showSpline ? (
//           <Spline
//             scene="https://prod.spline.design/EC0u9YUH5viaINhA/scene.splinecode"
//             className='z-20' 
//           />
//         ) : null}
//       </div>
//     </div>
//   );
// }


import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
      <div className=' absolute w-120 h-120'>
      <Spline
        scene="https://prod.spline.design/nVqeorqEl3iSj7pi/scene.splinecode" 
      />
    </div>
  );
}




// import Spline from '@splinetool/react-spline/next';

// export default function Home() {
//   return (
//     <>
//       <div className='w-120 h-120'>

//       <Spline
//         scene="https://prod.spline.design/UIAjffU-6HcnKFap/scene.splinecode" 
//         />
//         </div>
//     </>
//   );
// }

