'use client';

import { useEffect } from 'react';
import { X, Download } from 'lucide-react';

export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 shrink-0">
          <h2 className="text-lg font-semibold text-neutral-900">Resume</h2>
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <Download size={15} />
              Download
            </a>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
              aria-label="Close resume"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0"
          className="w-full rounded-b-2xl"
          style={{ flex: 1, minHeight: 0, height: '75vh' }}
          title="Resume"
        />
      </div>
    </div>
  );
}
