import { SliderData } from '@/data/sliderData'
import Projects from '../components/Projects'
import Main from './main'
import Services from './services'

export default async function Page() {
  return (
    <>
      <Main/>
      <Projects slides={SliderData} />
      <Services />
    </>
  )
}
