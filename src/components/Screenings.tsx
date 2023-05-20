import { FC } from "react"
import { ScreeningProps } from "@/types"
import Link from "next/link"

const Screenings:FC<ScreeningProps> = ({ screenings }) => {
        return(
            <ul className="w-100 flex flex-col bg-container-color ">
                {screenings.map((item, index) => {
                    const time = new Date(item.attributes.start_time)
                    return (
                    <li className="m-1.5 w-full grid grid-cols-4 grid-rows-2 " 
                    key={index}>
                    <span className="col-start-2 col-end-4">{time.toUTCString() } </span>
                    <span className="col-start-2"
                    >{'Salong: '+ item.attributes.room}</span>
                    <Link 
                    className="p-1 bg-btn-primary-color rounded-full text-sm h-7 w-11 text-center col-start-4 justify-self-center"
                    href={'/booking/' + item.id}
                    >
                     Boka
                    </Link>
                    <div className="w-full h-0.5 col-start-1 col-end-5 my-1 bg-slate-400"></div>
                    </li>
                    )
                })}
            </ul>
            
        )
    

}
export default Screenings;