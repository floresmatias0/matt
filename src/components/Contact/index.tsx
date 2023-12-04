import Image from 'next/image'
import ContactForm from '../ContactForm'
import { useTranslations } from 'next-intl'

const Contact = () => {
  const t = useTranslations('Index')

  return (
    <div id='contacto' className='flex flex-col md:flex-row gap-4 mt-10'>
      <div className="w-full md:w-2/4 text-right relative px-4">
        <Image src='/CircleSmall.svg' alt='decoration' width={100} height={100} className='absolute -z-10 hidden md:block w-[500px] aspect-square -right-20 -top-20' />
        <h2 className="md:pl-28 mb-2 text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-text-gradient" style={{ lineHeight: 1.2 }}>
          {t("intro.section_3.title")}
        </h2>
        <p className="md:pl-28 text-merli-white text-base md:text-xl">
          {t("intro.section_3.description")}
        </p>
      </div>
      <div className="w-full md:w-2/4 px-4">
        <ContactForm
            lengendSubject={t("contact.form.name")}
            legendEmail={t("contact.form.email")}
            legendMessage={t("contact.form.msg")}
            prefixWhatsapp={t("contact.whatsapp.prefix")}
            legendError={t("contact.form.errors.error")}
            legendPending={t("contact.form.errors.pending")}
            legendSuccess={t("contact.form.errors.success")}
            legendSending={t("contact.form.button.sending")}
            legendSend={t("contact.form.button.send")}
        />
      </div>
    </div>
  )
}

export default Contact