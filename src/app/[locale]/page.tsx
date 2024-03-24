import Header from '@/components/Header'
import Footer from '@/components/Footer'

import Intro from '@/components/Intro'
import Services from '@/components/Services'
import Processes from '@/components/Processes'
import Contact from '@/components/Contact'

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="">
      <Header 
        btnLegendTranslate={t('header.btn_translate')}
        btnLegendContact={t('header.btn_contact')}
        textLogo={t('header.text_logo')}
      />
      <div className='md:mb-8 md:mt-2 flex flex-col gap-24 container mx-auto px-14'>
        <Intro 
          title={t("intro.section_1.title")}
          subtitle={t("intro.section_1.subtitle")}
          description={t("intro.section_1.description")}
        />
        <Services />
        <Processes />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
