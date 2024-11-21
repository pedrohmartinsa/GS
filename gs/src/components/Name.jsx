import { useState, useEffect } from "react";

export default function Name() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <h2 
            className={`text-6xl md:text-8xl transform transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            VibraVolt
            </h2>
      
        </>
    )
}