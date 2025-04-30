import Image from 'next/image';

const Roadmap = () => {
  return (
    <section className="w-full py-16 text-white relative z-10">
      {/* Local yellow glow for roadmap section only */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-500/10 blur-3xl rounded-full z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-lg uppercase font-bold tracking-wider">THE ROADMAP</h2>
          <div className="flex items-center">
            <h3 className="text-4xl md:text-5xl font-bold">
              INPHY<span className="text-yellow-400">NITICS</span>
            </h3>
          </div>
          <div className="flex items-center mt-2 space-x-1">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`h-1 w-6 ${i % 2 === 0 ? 'bg-white' : 'bg-yellow-400'}`}></div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 relative">
          {/* Dotted path - mobile only shows vertical path */}
          <div className="absolute hidden md:block" style={{ zIndex: 1 }}>
            {/* First segment: top right to center */}
            {/* <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" 
                 className="absolute top-32 right-0" style={{ transform: 'translateX(50%)' }}>
              <path d="M0,0 Q150,50 300,100" stroke="#FFD700" strokeWidth="5" strokeDasharray="15 10" strokeLinecap="round" />
            </svg> */}
            
            {/* Second segment: center to bottom right
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="absolute top-56 left-1/2" style={{ transform: 'translateX(-50%)' }}>
              <path d="M0,50 Q150,150 300,250" stroke="#FFD700" strokeWidth="5" strokeDasharray="15 10" strokeLinecap="round" />
            </svg> */}
          </div>
          
          {/* Mobile dotted path (vertical) */}
          <div className="absolute block md:hidden h-full left-4" style={{ zIndex: 1 }}>
            {/* <svg width="10" height="100%" viewBox="0 0 10 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5,0 L5,600" stroke="#FFD700" strokeWidth="5" strokeDasharray="15 10" strokeLinecap="round" />
            </svg> */}
          </div>

          {/* First item - right aligned */}
          <div className="col-span-2 md:col-span-1 md:col-start-2">
            <div className="bg-gray-800/50 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/assets/img1.png" 
                alt="Engage with interactive content" 
                width={600} 
                height={350} 
                className="w-full object-cover"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-3xl font-bold mb-2">Engage</h3>
              <p className="text-gray-300">
                Get high-quality on-demand video interactive modules 
                and dynamic content like 3D animations and vector 
                graphics to help you rise through the learning process.
              </p>
            </div>
          </div>
          
          {/* Empty cell for first row (mobile hidden) */}
          <div className="hidden md:block md:col-span-1"></div>
          
          {/* Empty cell for second row (mobile hidden) */}
          <div className="hidden md:block md:col-span-1"></div>
          
          {/* Second item - left aligned */}
          <div className="col-span-2 md:col-span-1 mt-16 md:mt-0">
            <div className="bg-gray-800/50 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/assets/img2.png" 
                alt="Entertaining physics learning" 
                width={600} 
                height={350} 
                className="w-full object-cover"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-3xl font-bold mb-2">Entertain</h3>
              <p className="text-gray-300">
                Enjoy learning physics through fun, gamified 
                experiences that make complex concepts memorable 
                and keep you motivated throughout your educational 
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap;