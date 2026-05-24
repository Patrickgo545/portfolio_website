export default function Nav() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/80 border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-neutral-900 tracking-tight text-sm">PG</span>
        <nav className="flex gap-6 text-sm text-neutral-500">
          <a href="#about" className="hover:text-neutral-900 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-neutral-900 transition-colors">
            Projects
          </a>
          <a href="#resume" className="hover:text-neutral-900 transition-colors">
            Resume
          </a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
