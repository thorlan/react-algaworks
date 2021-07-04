import { PropsWithChildren } from "react";

import * as C from './Cards.styles'

interface CardProps{
    title: string
    align?: 'center' | 'left' | 'right'
}

export default function Card(props: PropsWithChildren<CardProps>){

    return(
        <C.Wrapper align={props.align || "left"}>
            <C.Title>
                {props.children}
            </C.Title>
        </C.Wrapper>
    )
}