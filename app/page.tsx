import { SliderData } from '@/data/sliderData'
import Projects from '../components/Projects'
import Home from './home'
import Services from './services'
import Values from './values'
import Testimonials from '@/components/TestimonialSlider'
import testimonials from '@/data/testimonialSubmissions.json'
import ScrollToTopButton from '@/components/ScrollToTopButton'

export default async function Page() {
  return (
    <>
      <Home/>
      <Projects slides={SliderData} />
      <Values />
      <Services />
      <Testimonials testimonials={testimonials} />
      <ScrollToTopButton />
    </>
  )
}
