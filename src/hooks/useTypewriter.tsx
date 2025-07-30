import { useState, useEffect } from "react";

export function useTypewriter(
    text: string,
    speed: number,
    options?: { enabled?: boolean }
) {
    const [displayed, setDisplayed] = useState("");
    useEffect(() => {
        if (options?.enabled === false) {
            setDisplayed("");
            return;
        }
        let i = 0;
        setDisplayed("");
        const interval = setInterval(() => {
            setDisplayed((prev) => prev + text[i]);
            i++;
            if (i >= text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed, options?.enabled]);
    return displayed;
}