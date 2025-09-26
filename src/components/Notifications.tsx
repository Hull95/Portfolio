"use client";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface NotificationProps {
    type: "success" | "error";
    message: string;
    isVisible: boolean;
}

export default function Notification({ type, message, isVisible }: NotificationProps) {
    
    if (!isVisible) return null;

    const icon = type === "success" ? (
        <CheckCircleIcon className="w-6 h-6 text-main-green" aria-hidden="true" />
    ) : (
        <XCircleIcon className="w-6 h-6 text-color-red" aria-hidden="true" />
    );

    const title = type === "success" ? "Successfully send email!" : "Error occurred!";
    const description = message;

    return (
        <div
            className={`fixed top-4 left-2 right-2 sm:left-auto sm:right-4 z-50 transform transition-all duration-300 ease-in-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
        >
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
                <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">{icon}</div>
                    <div className="flex-1">
                        <h6 className="text-lg font-bold text-blue-color-light mb-1 text-start">{title}</h6>
                        <p className="text-sm text-blue-color-light text-start">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}