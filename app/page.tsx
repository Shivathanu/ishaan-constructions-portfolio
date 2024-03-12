import { SliderData } from '@/data/sliderData'
import Projects from '../components/Projects'
import Home from './home'
import Services from './services'

export default async function Page() {
  return (
    <>
      <Home/>
      <Projects slides={SliderData} />
      <Services />
    </>
  )
}
