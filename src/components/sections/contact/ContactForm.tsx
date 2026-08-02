"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/contact-schema";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message ?? "Failed to send message.");
        return;
      }

      toast.success("Message sent successfully!");

      reset();
    } catch {
      toast.error("Network error. Please try again.");
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      noValidate
    >
      <h3 className="text-2xl font-bold text-white-400">
        Send a Message
      </h3>

      <div className="mt-8 space-y-6">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name")}
            aria-invalid={!!errors.name}
            className="w-full rounded-xl border border-white-400 bg-transparent p-4 text-white-400 outline-none transition focus:border-cyan-400"
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Your Email"
            {...register("email")}
            className="w-full rounded-xl border border-white-400 bg-transparent p-4 text-white-400 outline-none transition focus:border-cyan-400"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <input
            type="text"
            placeholder="Subject"
            {...register("subject")}
            className="w-full rounded-xl border border-white-400 bg-transparent p-4 text-white-400 outline-none transition focus:border-cyan-400"
          />

          {errors.subject && (
            <p className="mt-2 text-sm text-red-400">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            rows={6}
            placeholder="Your Message"
            {...register("message")}
            className="w-full rounded-xl border border-white-400 bg-transparent p-4 text-white-400 outline-none transition focus:border-cyan-400"
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <div
          className="hidden"
          aria-hidden="true"
        >
          <label htmlFor="website">
            Website
          </label>

          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-black transition-all duration-300 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <svg
                className="mr-2 h-5 w-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  opacity="0.25"
                />
                <path
                  d="M22 12a10 10 0 0 1-10 10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>

              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
}