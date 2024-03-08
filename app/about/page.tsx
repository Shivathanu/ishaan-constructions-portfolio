import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <AuthorLayout content={{
        name: 'Gopirajan',
        occupation: 'Civil Contractor',
        company: 'Ishaan Constructions',
        email: 'sathi1967@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sathi-azimuth-2a3b4b5a/',
        title: 'About',
        description: 'About page',
        image: '/static/images/profile.jpg',
        imageAlt: 'Author',
        imageWidth: 100,
        imageHeight: 100,
        date: '2022-02-22',
        timeToRead: 5,
      }}>
      </AuthorLayout>
    </>
  )
}
