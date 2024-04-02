import SocialIcon from "@/components/social-icons"
import Image from "next/image"

interface Props {
  content: any
}

export default function AuthorLayout({ content }: Props) {
  return (
    <>
      <section className="max-container padding-container bg-blue-900 h-full py-20">
        <div className="space-y-2 pb-8 pt-20 md:space-y-5">
          <span className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">About Us</span>
        </div>
        <div className="prose max-w-none pb-14 pt-8 dark:prose-invert xl:col-span-2">
          <p>Ishaan Infra Projects is a dynamic and dedicated small construction company specializing in delivering
          personalized service and high-quality craftsmanship. With a focus on attention to detail and
          customer satisfaction, we take pride in turning our clients&#39; visions into reality.
          </p>

          <p>At Ishaan Infra Projects, our mission is to provide exceptional construction services tailored to the
          unique needs of each client. We strive to build lasting relationships based on trust, reliability, and
          superior workmanship.
          </p>
        </div>
        <hr className="py-8 border-1" />
        <div className="space-y-2 pb-2 pt-2 md:space-y-5">
          <span className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-600">Our Founder&apos;s Story</span>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {content.image && (
              <Image
                src={content.image}
                alt="image"
                width={192}
                height={192}
                className="h-58 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{content.name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{content.occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{content.company}</div>
            <div className="mb-3 mt-3 flex space-x-4">
              <SocialIcon kind="mail" href={`mailto:${content.email}`} size={6} />
              <SocialIcon kind="linkedin" href={content.linkedin} size={6} />
            </div>
          </div>
          <div className="prose max-w-none pb-14 pt-8 dark:prose-invert xl:col-span-2">
            {content.experience.details.map((detail, index) => (
              <p key={index} className="text-md mb-2">{detail}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
