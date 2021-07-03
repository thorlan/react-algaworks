import { useState } from 'react';

export default function Clock() {
   
    const [data, setData] = useState<Date>();

    setInterval(() => {
        setData(new Date())
    }, 1000);
   
    return (
        <div>
            { data?.toLocaleTimeString() }
        </div>);
}