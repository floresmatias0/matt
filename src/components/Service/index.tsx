
import Image from "next/image"

enum Orientation { left, right }

type Service = {
  number: string
  title: string
  description: string
  image: string
  orientation: Orientation,
  link: string,
  legendPicture: string
}

const Service : React.FC<Service> = ({number, title, description, image, orientation, link, legendPicture}) => {

  return (
    <div className="text-merli-gray-light group my-2">
      <div className={`w-full flex items-center justify-between mb-6 text-2xl md:text-5xl`}>
        <p className="">{number}</p>
        <div className="flex-1 border-2 border-merli-gray-light mx-6"></div>
        <h3>{title}</h3>
      </div>
      <div className={`w-full flex items-center justify-between mb-6 gap-8 text-2xl md:text-5xl flex-col-reverse md:flex-row md:group-even:flex-row-reverse`}>
        <div className={`w-full px-4 md:w-3/5 md:px-0 flex ${orientation === 1 ? 'justify-end' : 'justify-start'} items-center`}>
          <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-2xl">
            <a href={link} target="_blank" rel="noreferrer" className="w-full h-full">
              <Image src={image} alt={title} width={300} height={300} className="m-auto w-full h-full object-cover"/>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 bg-black-transparent transition-opacity duration-300">
                <p className="text-white text-xl">{legendPicture}</p>
              </div>
            </a>
          </div>
        </div>
        <p className={`w-full text-merli-white md:w-2/5 text-base md:text-2xl text-left group-odd:text-right`}>{description}</p>
      </div>
    </div>
  )
}

export default Service