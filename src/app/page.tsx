import Navbar from './components/Navbar'
import HeroSection from "./components/HeroSection"
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black to-black relative overflow-hidden">
      {/* Background wave patterns */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-500/30 via-transparent to-transparent"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-full h-full">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-yellow-400/20">
            <path
              fill="currentColor"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-1.5C87,13.4,81.3,26.8,73.6,39.2C65.9,51.7,56.1,63.3,43.4,70.7C30.7,78.1,15.3,81.4,0.4,80.8C-14.6,80.1,-29.2,75.5,-41.2,67.5C-53.2,59.5,-62.7,48.1,-69.6,35.3C-76.5,22.4,-80.8,8.1,-79.2,-5.7C-77.5,-19.4,-69.9,-32.7,-60.4,-43.9C-50.9,-55.2,-39.5,-64.3,-26.9,-72.1C-14.3,-79.9,-0.7,-86.4,13.2,-86.1C27.1,-85.8,54.2,-78.7,67.7,-67.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute -top-1/4 -right-1/4 w-full h-full">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-yellow-400/20">
            <path
              fill="currentColor"
              d="M39.9,-65.7C54.3,-60,70.2,-54.3,79.7,-43C89.2,-31.7,92.3,-15.8,89.8,-1.5C87.3,12.9,79.1,25.8,70.2,38.2C61.3,50.7,51.7,62.7,39.4,70.2C27.1,77.7,12.1,80.7,-2.4,84.3C-16.9,87.9,-30.9,92.1,-43.4,88.1C-55.9,84.1,-66.9,71.9,-74.4,58.1C-81.9,44.2,-85.9,28.8,-87.1,13.5C-88.3,-1.8,-86.7,-17,-80.5,-29.7C-74.3,-42.3,-63.5,-52.3,-50.9,-58.7C-38.3,-65.1,-23.9,-67.8,-10.2,-72.3C3.5,-76.8,17.1,-83.1,28,-79.8C38.9,-76.5,47.1,-63.7,55.3,-51.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <Roadmap/>
        <Footer/>
      </div>
    </main>
  )
}
