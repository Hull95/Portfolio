"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {ContactFormData, contactSchema} from "@/components/validation/contactShema";
import FeedbackForm from "@/components/Notifications";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    type: "success" as "success" | "error",
    message: "",
    isVisible: false,
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message, isVisible: true });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        showNotification("success", "Thank you! Your message has been sent successfully.");
        reset();
      } else {
        showNotification("error", result.error || "Something went wrong. Please try again.");
      }
    } catch {
      showNotification("error", "Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-start text-blue-color-light">Name *</label>
                <input
                    {...register("name")}
                    type="text"
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 border rounded-lg ${
                        errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.name && <p className="text-sm text-red-600 text-start">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-start text-blue-color-light">Surname *</label>
                <input
                    {...register("surname")}
                    type="text"
                    placeholder="Enter your surname"
                    className={`w-full px-4 py-3 border rounded-lg ${
                        errors.surname ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.surname && <p className="text-sm text-red-600 text-start">{errors.surname.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-start text-blue-color-light">Email *</label>
              <input
                  {...register("email")}
                  type="email"
                  placeholder="example@email.com"
                  className={`w-full px-4 py-3 border rounded-lg ${
                      errors.email ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.email && <p className="text-sm text-red-600 text-start">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-start text-blue-color-light">Phone *</label>
              <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+38165331962"
                  className={`w-full px-4 py-3 border rounded-lg ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.phone && <p className="text-sm text-red-600 text-start">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-start text-blue-color-light">Description *</label>
              <textarea
                  {...register("description")}
                  rows={4}
                  maxLength={250}
                  className={`w-full px-4 py-3 border rounded-lg resize-none ${
                      errors.description ? "border-red-500" : "border-gray-300"
                  }`}
              />
              <div className="flex justify-between text-xs text-gray-500">
                {errors.description && <p className="text-red-600 text-start">{errors.description.message}</p>}
                <p className={"text-blue-color-light"}>250 characters max</p>
              </div>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium button-interactive bcg-main-green text-white ${
                    isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "button-interactive"
                }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <FeedbackForm
            type={notification.type}
            message={notification.message}
            isVisible={notification.isVisible}
        />
      </>
  );
}
