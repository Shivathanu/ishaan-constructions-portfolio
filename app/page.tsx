import { SliderData } from '@/data/sliderData'
import Projects from '../components/Projects'
import Home from './home'
import Services from './services'
import Values from './values'
import Testimonials from '@/components/TestimonialSlider'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import { getTestimonials } from 'app/actions';

export default async function Page(props) {
  return (
    <>
      <Home/>
      <Projects slides={SliderData} />
      <Values />
      <Services />
      <Testimonials getTestimonials={getTestimonials} />
      <ScrollToTopButton />
    </>
  )
}
