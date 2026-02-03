import React, { useState } from 'react';
import { FeedbackOption } from '../types';
import { MOCK_FEEDBACK_OPTIONS } from '../constants';

interface FeedbackModalProps {
  onClose: () => void;
  onSubmit: (feedbackReasons: string[], otherReason?: string) => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ onClose, onSubmit }) => {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [otherReason, setOtherReason] = useState<string>('');

  const handleChipClick = (value: string) => {
    setSelectedReasons(prev =>
      prev.includes(value) ? prev.filter(reason => reason !== value) : [...prev, value]
    );
  };

  const handleSubmit = () => {
    onSubmit(selectedReasons, otherReason);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Dimmed Backdrop Overlay */}
      <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={onClose}></div>

      {/* Bottom Sheet Modal Content */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-stretch">
        <div className="flex flex-col items-center bg-card-light dark:bg-background-dark rounded-t-4xl pt-3 animate-slide-up-lux opacity-0">
          <div className="h-1.5 w-12 rounded-full bg-sheet-handle mb-4"></div>

          <div className="w-full text-center px-6 pt-2 pb-6">
            <h3 className="text-primary dark:text-slate-100 tracking-luxury-sm text-xl font-extrabold leading-tight">
              WHAT DIDN'T WORK?
            </h3>
          </div>

          <div className="flex flex-wrap gap-3 px-6 justify-center">
            {MOCK_FEEDBACK_OPTIONS.map((option: FeedbackOption) => (
              <button
                key={option.value}
                className={`flex h-11 items-center justify-center rounded-full border transition-colors ${
                  selectedReasons.includes(option.value)
                    ? 'border-primary bg-primary text-white'
                    : 'border-border-light bg-filter-bg dark:bg-card-dark dark:border-border-dark text-primary dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                } px-5`}
                onClick={() => handleChipClick(option.value)}
              >
                <p className="text-[13px] font-bold leading-normal uppercase">{option.label}</p>
              </button>
            ))}
          </div>

          <div className="w-full max-w-md px-6 py-8">
            <label className="flex flex-col gap-2">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wide uppercase pl-2">Other Reason</span>
              <input
                className="form-input w-full rounded-full border border-border-light dark:border-border-dark bg-filter-bg dark:bg-card-dark h-14 px-6 text-primary dark:text-slate-100 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm"
                placeholder="Tell us more... (Optional)"
                type="text"
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
              />
            </label>
          </div>

          <div className="w-full px-6 pb-10 pt-2">
            <button
              className="group relative flex w-full h-16 items-center justify-center overflow-hidden rounded-full bg-primary text-white text-base font-bold tracking-luxury-sm transition-all active:scale-95"
              onClick={handleSubmit}
            >
              <span className="z-10 uppercase">SUBMIT &amp; DISCARD</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
          <div className="h-6 w-full bg-card-light dark:bg-background-dark"></div> {/* iOS Home Indicator Spacing */}
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;