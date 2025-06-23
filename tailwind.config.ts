import type {Config} from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                neutral: {
                    50: "#F7F9FF",
                    100: "#EFF5FD",
                    200: "#DDE5EF",
                    300: "#C4D2DF",
                    400: "#889BB3",
                    500: "#526780",
                    600: "#33465D",
                    700: "#1E3146",
                    800: "#10192E",
                    900: "#030A16"
                },
                primary: {
                    100: "#DEEDFF",
                    200: "#8EC1FF",
                    300: "#276CC0",
                    400: "#235CA2",
                    500: "#113D73"
                },
                secondary: {
                    100: "#ED6463",
                    200: "#E34645",
                    300: "#CA2221",
                    400: "#AA100F",
                    500: "#861514"
                },
                success: {
                    100: "#E6FEF4",
                    200: "#27EBAA",
                    300: "#02B870",
                    400: "#006E45",
                    500: "#04412A"
                },
                warning: {
                    100: "#F7F1D4",
                    200: "#FFE9AB",
                    300: "#FEC956",
                    400: "#FDBB04",
                    500: "#E79003"
                },
                error: {
                    100: "#D6CACB",
                    200: "#D47B80",
                    300: "#D30423",
                    400: "#A30107",
                    500: "#680008"
                },
                tones: {
                    0: "#FFFFFF",
                    100: "#000000"
                },
                customGray: {
                    300: "#D4D4D4",
                    400: "#BCBCBC"
                }
            },
            boxShadow: {
                sm: '0 0 16px var(--shadow-sm)',
                m: '0 0 24px var(--shadow-m)',
                l: '0 0 20px var(--shadow-l)',
            }
        },
    },
    plugins: [],
} satisfies Config;
