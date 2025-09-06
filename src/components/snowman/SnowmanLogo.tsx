import { useConfigContext } from "@/context/ConfigContext"
import { IMAGE_URLS } from "@/utils/constants"

interface SnowmanLogoProps {
  className?: string
  alt?: string
}

const SnowmanLogo = ({ className = "h-8 w-8", alt = "Snowman logo" }: SnowmanLogoProps) => {
  const { isDark } = useConfigContext()

  // Use white snowman for dark theme, black background snowman for light theme
  const snowmanSrc = isDark ? IMAGE_URLS.SNOWMAN : IMAGE_URLS.SNOWMAN_BLACK

  return <img src={snowmanSrc} alt={alt} className={className} />
}

export default SnowmanLogo
