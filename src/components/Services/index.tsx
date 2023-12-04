import { services } from "@/config/config"
import Service from "../Service"
import { useTranslations } from "next-intl"

const Services = () => {
  const t = useTranslations("Index")

  return (
    <div>
      <h2 className="my-4 text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-text-gradient" style={{ lineHeight: 1.2 }}>{t('services.title')}</h2>
      {
        services.map(service => 
          <Service
            key={service.number}
            number={service.number}
            title={t(`services.${service.number}.title`)}
            description={t(`services.${service.number}.description`)}
            image={service.image}
            orientation={service.orientation}
            link={service.link}
            legendPicture={t('services.picture.hover')}
          />)
      }
    </div>
  )
}

export default Services