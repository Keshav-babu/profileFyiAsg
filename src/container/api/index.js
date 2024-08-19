import { productAPIEndPoint } from "./apiConfig"
import axios from "axios"
export const getProductsData=async()=>{

    const response = await axios.get(productAPIEndPoint)

    return response.data

}