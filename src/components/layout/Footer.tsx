export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="container-custom flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Mukesh Maurya. All rights reserved.
        </p>

        <p>
          Built with Next.js, React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}