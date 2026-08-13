/**
 * Renders the full text into the DOM immediately (so it is present in the
 * server-rendered HTML for crawlers) and reveals it character by character
 * with a pure CSS animation instead of slicing the string in JavaScript.
 */
type TypewriterProps = {
    text: string;
    speed?: number;
};

export default function Typewriter({ text, speed = 60 }: TypewriterProps) {
    return (
        <span className="typewriter">
            {Array.from(text).map((char, index) => (
                <span
                    key={index}
                    className="typewriter-char"
                    style={{ animationDelay: `${index * speed}ms` }}
                >
                    {char}
                </span>
            ))}
        </span>
    );
}