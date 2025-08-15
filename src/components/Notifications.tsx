interface NotificationProps {
    type: "success" | "error";
    message: string;
    isVisible: boolean;
}

export default function Notification({ type, message, isVisible }: NotificationProps) {
    if (!isVisible) return null;

    const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
    const icon = type === "success" ? (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    ) : (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );

    return (
        <div
            className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ease-in-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
        >
            <div className={`${bgColor} rounded-lg shadow-lg p-4 max-w-sm w-full flex items-center space-x-3`}>
                <div>{icon}</div>
                <p className="text-white text-sm">{message}</p>
            </div>
        </div>
    );
}
