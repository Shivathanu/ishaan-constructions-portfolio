import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <AuthorLayout content={{
        name: 'Gopirajan',
        occupation: 'Civil Contractor',
        company: 'Ishaan Infra',
        email: 'ishaaninfras@gmail.com',
        linkedin: 'http://linkedin.com/in/sivagopi-rajan-18095956',
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
