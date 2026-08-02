"use client";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ResumeButtons from "./ResumeButtons";
import SocialLinks from "./SocialLinks";

export default function ContactInfo() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="text-2xl font-bold text-white-400">
        Contact Information
      </h3>

      <p className="mt-4 text-gray-400 leading-7">
        Feel free to reach out through email or connect with me on social
        platforms.
      </p>

      <div className="mt-10 space-y-6">
        <div className="flex gap-4">
          <Mail className="mt-1 text-cyan-400" />

          <div>
            <p className="font-semibold text-white-400">
              Email
            </p>

            <p className="text-gray-400">
              mukesh.maurya.dev@email.com
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Phone className="mt-1 text-cyan-400" />

          <div>
            <p className="font-semibold text-white-400">
              Phone
            </p>

            <p className="text-gray-400">
              +91 9598199393
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <MapPin className="mt-1 text-cyan-400" />

          <div>
            <p className="font-semibold text-white-400">
              Location
            </p>

            <p className="text-gray-400">
              Maharashtra, India
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
        <h4 className="text-lg font-semibold text-white-400">
          Open to Opportunities
        </h4>

        <p className="mt-3 text-gray-400 leading-7">
          Currently looking for internships, freelance work,
          collaborative projects, and full-time opportunities in
          Data Science, AI/ML, and Software Development.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
            Available
          </span>

          <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">
            Replies within 24 Hours
          </span>
        </div>

        <ResumeButtons />
      </div>

      <SocialLinks />
    </div>
  );
}