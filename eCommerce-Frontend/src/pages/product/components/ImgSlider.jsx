import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

const ImgSlider = ({ imgs }) => {
  return (
    <div className="relative block md:hidden">
      <div className="overflow-hidden">
        <ul className="flex">
          {imgs.map((img, index) => (
            <li className="flex-none h-full w-full overflow-hidden" key={index}>
              <img className="h-full w-full object-center object-cover" src={img} alt="" />
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute right-4 bottom-4 flex gap-2">
        <button className="h-10 w-10 rounded-full bg-surface-muted grid place-items-center cursor-pointer"><ArrowLeft size={20}/></button>
        <button className="h-10 w-10 rounded-full bg-surface-muted grid place-items-center cursor-pointer"><ArrowRight size={20} /></button>
      </div>
    </div>
  )
}

export default ImgSlider