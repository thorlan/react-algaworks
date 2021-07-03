import { PropsWithChildren } from "react";

interface CardProps{
    //children?: JSX.Element
    title: string
}

export default function Card(props: PropsWithChildren<CardProps>){

    return(
        <div
            style={{
                background: 'rgba(0,0,0,.25',
                borderRadius: 8,
                padding: 16,
                }}> 
           
           {props.children}
        </div>
    )
}