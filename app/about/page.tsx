import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <AuthorLayout content={{
        name: 'Gopirajan',
        occupation: 'Civil Contractor',
        company: 'Ishaan Infra Projects',
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
        experience: {
          details: [
            'A Strategic professional with 30+ years of extensive experience in Project Planning & Management in the Construction sector.',
            'Comprehensive experience in civil construction undertaking operations related to Cost Estimation & Budgeting, Design Reviewing, Procurement & Material Management, Client Interaction and MEP Trade Estimation.',
            'Proven track record in leading multidisciplinary teams throughout all project phases, from conceptualization and planning to execution and completion. Skilled in project scheduling, budgeting, resource allocation, and risk management to ensure timely and cost-effective project delivery.',
            'Extensive experience overseeing construction activities to ensure adherence to specifications, codes, and quality standards. Proficient in resolving on-site challenges, coordinating with contractors, and implementing effective construction methodologies to optimize project outcomes.',
            'In-depth knowledge of regulatory requirements and permitting processes governing civil engineering projects. Demonstrated ability to navigate complex regulatory frameworks and obtain necessary approvals while ensuring compliance with environmental, safety, and zoning regulations.',
            'Expertise in evolving systems / procedures in civil construction domain for change management in Project Operations entailing mapping business processes and studying workflow to designing / installation and commissioning of solutions, ensuring business functionality adherence as well as enhancing competitive advantage.',
            'Proficiency in managing development and implementation of key procurement & sourcing / alternate sourcing strategies (raw material, process items & maintenance items) & contingency plans, ensuring that plans are aligned with project as well as the production / project requirements for various units.',
            'Skilled in ensuring effective site management and discipline to ensure safety / hygiene & timely execution of projects in accordance with standards pertaining to machinery & equipment.',
            'Strong relationship management & communication capabilities with skills to identify & network with project engineers, engineering consultants / clients / vendors / suppliers / sub-contractors / local officials / authority with consummate ease as well as obtaining necessary approvals for the projects.',
            'Adept at identifying and resolving technical challenges, design constraints, and construction issues through innovative problem-solving approaches. Possess a keen attention to detail and a proactive mindset to address project complexities and optimize project outcomes.',
            'With over three decades of hands-on experience and a proven track record of delivering successful civil engineering projects, I am well-equipped to provide strategic leadership, technical expertise, and innovative solutions to drive the success of future endeavors in the field'
          ]
        }
      }}>
      </AuthorLayout>
    </>
  )
}
