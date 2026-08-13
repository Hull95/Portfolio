import { ImageResponse } from 'next/og'

export const alt = 'Stefan Vranjes - Senior Frontend Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: '#05314b',
                    padding: '80px',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', color: '#28df7d', fontSize: 30, letterSpacing: 4 }}>
                    PORTFOLIO
                </div>
                <div
                    style={{
                        display: 'flex',
                        color: '#ffffff',
                        fontSize: 88,
                        fontWeight: 800,
                        marginTop: 16,
                    }}
                >
                    Stefan Vranjes
                </div>
                <div style={{ display: 'flex', color: '#28df7d', fontSize: 44, marginTop: 8 }}>
                    Senior Frontend Developer &amp; Team Leader
                </div>
                <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
                    {['React', 'TypeScript', 'Next.js', 'React Native'].map((tech) => (
                        <div
                            key={tech}
                            style={{
                                display: 'flex',
                                color: '#ffffff',
                                fontSize: 28,
                                border: '2px solid #28df7d',
                                borderRadius: 999,
                                padding: '8px 24px',
                            }}
                        >
                            {tech}
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', color: '#9fb6c4', fontSize: 28, marginTop: 48 }}>
                    Banja Luka, Bosnia and Herzegovina
                </div>
            </div>
        ),
        size
    )
}