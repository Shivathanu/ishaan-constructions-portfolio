import {
  ArchitectureDesign, BuildingPlans, Construction, Estimates, Renovation
} from './icons'

const components = {
  architectureDesign: ArchitectureDesign,
  buildingPlans: BuildingPlans,
  estimates: Estimates,
  renovation: Renovation,
  construction: Construction
}

type ServicesIconProps = {
  kind: keyof typeof components
  size?: number
}

const ServicesIcon = ({ kind, size = 12 }: ServicesIconProps) => {
  const ServicesSvg = components[kind]

  return (
    <>
      <span className="sr-only">{kind}</span>
      <ServicesSvg
        className={`fill-current text-gray-700 hover:text-yellow-500 dark:text-gray-200 dark:hover:text-yellow-400 h-${size} w-${size}`}
      />
    </>
  )
}

export default ServicesIcon
