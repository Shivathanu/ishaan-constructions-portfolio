import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {

  return (
    <>
      <AuthorLayout content={{}}>
        <p>Hi! I am author</p>
      </AuthorLayout>
    </>
  )
}
