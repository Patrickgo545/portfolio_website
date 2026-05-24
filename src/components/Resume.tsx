'use client';

import { useState } from 'react';
import ResumeModal from './ResumeModal';

export default function Resume() {
  const [open, setOpen] = useState(false);

  return (
    <section id="resume" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-10">Resume</h2>

        <div className="max-w-xl mx-auto">
          <article
            className="border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer focus-visible:ring-2 focus-visible:ring-neutral-400 outline-none"
            role="button"
            tabIndex={0}
            onClick={() => setOpen(true)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(true); }}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              {/* <h3 className="text-lg font-medium text-neutral-900">Resume</h3>
              <span className="text-xs text-neutral-400 whitespace-nowrap pt-0.5">PDF</span> */}
            </div>

            <div className="aspect-video bg-neutral-50 rounded-lg overflow-hidden mb-4 relative">
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                className="absolute top-0 left-0 pointer-events-none select-none"
                style={{
                  width: '816px',
                  height: '1056px',
                  transform: 'scale(0.65)',
                  transformOrigin: 'top left',
                }}
                title="Resume preview"
                tabIndex={-1}
              />
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none" />
            </div>

            <p className="text-sm text-neutral-500">
              ↗{' '}
              <a
                href="/resume.pdf"
                download
                className="hover:text-neutral-900 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Download PDF
              </a>
            </p>
          </article>
        </div>
      </div>

      {open && <ResumeModal onClose={() => setOpen(false)} />}
    </section>
  );
}
