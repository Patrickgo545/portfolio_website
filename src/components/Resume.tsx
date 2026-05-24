'use client';

import { useState } from 'react';
import { Eye, Download } from 'lucide-react';
import ResumeModal from './ResumeModal';

export default function Resume() {
  const [open, setOpen] = useState(false);

  return (
    <section id="resume" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-3">Resume</h2>
        <p className="text-neutral-500 text-sm mb-10">My background and experience at a glance.</p>

        <div className="max-w-xl mx-auto">
          {/* Clickable PDF preview thumbnail */}
          <div
            role="button"
            tabIndex={0}
            aria-label="View full resume"
            className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 cursor-pointer group mb-5 focus-visible:ring-2 focus-visible:ring-neutral-400 outline-none"
            style={{ height: '480px' }}
            onClick={() => setOpen(true)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(true); }}
          >
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="absolute top-0 left-0 pointer-events-none select-none"
              style={{
                width: '816px',
                height: '1056px',
                transform: 'scale(0.7)',
                transformOrigin: 'top left',
              }}
              title="Resume preview"
              tabIndex={-1}
            />
            {/* fade bottom edge */}
            <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            {/* hover hint */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-neutral-800 bg-white/90 rounded-full px-4 py-2 shadow-sm">
                View full resume
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-medium rounded-lg py-2.5 hover:bg-neutral-700 transition-colors"
            >
              <Eye size={15} />
              View Resume
            </button>
            <a
              href="/resume.pdf"
              download
              className="flex-1 flex items-center justify-center gap-2 border border-neutral-200 text-neutral-700 text-sm font-medium rounded-lg py-2.5 hover:bg-neutral-50 transition-colors"
            >
              <Download size={15} />
              Download PDF
            </a>
          </div>
        </div>
      </div>

      {open && <ResumeModal onClose={() => setOpen(false)} />}
    </section>
  );
}
