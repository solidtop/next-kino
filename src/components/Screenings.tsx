import { FC } from "react"
import { Screening } from "@/types"
import { link } from "fs"
import Link from "next/link"
type x = {
    Screening: Screening[]
}
const Screenings:FC<x> = ({ Screening }) => {
    
    
        return(
            <ul className="w-100 flex flex-col">
                {Screening.map((item, index) => {
                return (
                <li className="items-center flex-1" key={index}>{item.attributes.start_time +' --- '+ item.attributes.room} 
                <Link 
                className="absolute mx-1 bg-btn-primary-color justify-self-end"
                href={'/booking/' + item.id}
                >
                    book
                </Link>
                </li>
                )
                })}
            </ul>
            
        )
    

}
export default Screenings;