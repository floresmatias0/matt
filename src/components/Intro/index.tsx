'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

type Props = {
  title: string,
  subtitle: string,
  description: string
}

const Intro = ({title, subtitle, description}: Props) => {

  const [lang, setLang] = useState("es")

  useEffect(() => {
    const langAttribute = document.documentElement.lang;
    setLang(langAttribute)
  }, [])

  return (
    <div className="flex flex-col md:flex-row mt-6">
      <div className="w-full md:w-6/12 mb-6 md:mr-12 lg:mr-32 md:mb-0">
        <h2 className="pb-4 text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold text-clip text-transparent bg-clip-text bg-text-gradient-dark">
          {title}
        </h2>
        <h4 className="pb-8 text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold text-clip text-transparent bg-clip-text bg-text-gradient-dark">
          {subtitle}
        </h4>
        <p className="text-merli-white text-base md:text-xl lg:text-2xl">
          {description}
        </p>
        <div className="relative w-[300px] my-6 mx-auto md:mx-0">
          <Image src='/CircleSmall.svg' alt="circle-small" width={100} height={100} className="w-[300px]"/>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
            <Image src='/profile.jpeg' alt="perfil-matias" width={250} height={250} className="rounded-full"/>
          </div>
        </div>
      </div>
      <Image src={lang === "en" ? '/CircleGroup2.svg' :'/CircleGroup.svg'} alt="circle-qualities" width={100} height={100} className="w-full md:w-5/12"/>
    </div>
  )
}

export default Intro