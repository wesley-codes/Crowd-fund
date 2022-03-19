
import { ReactNode, SVGProps } from "react"





export interface AngelSVGProps  {

    width: number,
    height: number,
    props? : SVGProps<SVGSVGElement>

}




export interface ButtonProps {

    radius: number,
    bgColor?: string,
    padding: number,
    children: ReactNode

}



export type InputProps={

    placeholder: string,
    type: string,
    label: string,
    min? : number


}



export type ModalProps = {
   closeModal: () => void

}