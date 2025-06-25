"use client";


export function Section3() {
  return (
    <>
    <div className='w-full h-[100vh] relative'>
      <video className='w-full h-full object-cover' src="/Video/high2.mp4" autoPlay playsInline preload="auto" crossOrigin="anonymous" loop muted></video>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-white text-center'>Building Dreams, Creating Legacies</h1>
      </div>
    </div>
    </>
  );
}

export default Section3;

