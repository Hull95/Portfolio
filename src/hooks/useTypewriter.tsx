import {useState, useEffect} from "react";

export function useTypewriter(text:string, speed = 60){
    const [displayed, setDisplayedText] = useState<string>("")

    useEffect(() => {
        if(displayed.length < text.length){
            const timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, displayed.length + 1));
            }, speed); // Adjust speed here
            return () => clearTimeout(timeout);
        }
    }, [displayed.length, speed, text]);

    return displayed;
}