import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-0 sm:max-w-[1280px] sm:px-0 xl:max-w-[1920px] xl:px-0">{children}</section>
  )
}
