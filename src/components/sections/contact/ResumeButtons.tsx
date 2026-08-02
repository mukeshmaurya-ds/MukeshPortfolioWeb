import { Download, Eye } from "lucide-react";

export default function ResumeButtons() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      <a
        href="/resume/Mukesh-Maurya-Resume.pdf"
        download
        className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
      >
        <Download size={18} />
        Download Resume
      </a>

      <a
        href="/resume/Mukesh-Maurya-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white-400 transition-all duration-300 hover:border-cyan-400 hover:bg-white/10"
      >
        <Eye size={18} />
        Preview Resume
      </a>
    </div>
  );
}