
import { useState } from "react";

export default function Person(){

    const [person] = useState<string>('Thiago');

    return(
        <div>
            <h1>Perfil</h1>
            <p>Este é o perfil de {person} </p>
        </div>
    );
}