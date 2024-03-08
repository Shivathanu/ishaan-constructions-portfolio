import { SliderData } from '@/data/sliderData'
import Slider from '../components/Slider'
import Main from './Main'

export default async function Page() {
  return (
    <>
      <Main/>
      <Slider slides={SliderData} />
    </>
  )
}
