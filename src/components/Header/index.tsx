'use client'

import { ButtonVariation } from '@/datamodels/models'
import Button from '../Button'
import { useRouter } from '../../navigation';
import { useEffect } from 'react';
import Image from 'next/image';

type Props = {
	btnLegendTranslate: string,
	btnLegendContact: string,
};

const Header = ({btnLegendTranslate, btnLegendContact}: Props) => {
  const router = useRouter();

  useEffect(() => {
    const langAttribute = document.documentElement.lang;
    localStorage.removeItem("language")
    localStorage.setItem("language", langAttribute)
  }, [])

  const handleChangeLanguage = () => {
    const language = localStorage?.getItem("language")
    router.replace('/', { locale: language === "es" ? "en" : "es" })
  }

  return (
    <header className='flex items-center justify-between px-8 md:px-14'>
      <Image src='/Logo.svg' alt='Merliteam' width={100} height={100} className='w-32 md:w-36'/>
      <div className='button-container hidden md:flex'>
        <Button clickHandler={handleChangeLanguage} label={btnLegendTranslate} variant={ButtonVariation.outline} className='mr-2'/> 
        <Button href={'/#contacto'} label={btnLegendContact} variant={ButtonVariation.outline} />
      </div>
      <div className='button-container block md:hidden'>
        <Button className="py-0" clickHandler={handleChangeLanguage} label={btnLegendTranslate} variant={ButtonVariation.outline}/> 
      </div>
    </header>
  )
}

export default Header