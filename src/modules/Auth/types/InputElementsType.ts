import { LucideProps } from "lucide-react"
interface InputElementsType {
    type: string,
    name: string,
    placeholder: string,
    textLabel:string,
    Icon?:React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    register?:any
}
export default InputElementsType