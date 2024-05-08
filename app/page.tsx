import HomeHero from '@/app/components/common/hero/HomeHero'
import Carousel from '@/app/components/common/carouselComponent/Carousel'
import About from '@/app/components/About'
import Services from '@/app/components/Services'

export default function Home() {
  return (
    <div className=''>
      <HomeHero />
      <Carousel />
      <About />
      <Services />
    </div>
  );
}
