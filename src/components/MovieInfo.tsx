import { FC } from "react";
import { getMovieById } from "@/app/api/cmsData/getData";


const MovieInfo: FC = ({ id }) => {
    async function getData () {
        const res = await getMovieById('1')
        return res
    }
    
    const data = getData()
    return (
        <p>{data}</p>
    )
}
export default MovieInfo;