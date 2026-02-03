import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_LOOK_SUGGESTION, RoutePath } from '../constants';
import FeedbackModal from './FeedbackModal';

interface LookDetailScreenProps {
  // We can pass a prop `lookId` or fetch from URL params
}

const LookDetailScreen: React.FC<LookDetailScreenProps> = () => {
  const navigate = useNavigate();
  const { lookId } = useParams<{ lookId: string }>();
  const [showFeedbackModal, setShowFeedbackModal] = useState<boolean>(false);

  // In a real app, fetch look details based on lookId
  const look = MOCK_LOOK_SUGGESTION; // Using mock data for now

  if (!look) {
    return (
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark">
        <p className="text-text-muted">Look not found.</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-primary dark:text-link-blue hover:underline">
          Go Back
        </button>
      </div>
    );
  }

  const handleLookAction = (action: 'like' | 'dislike' | 'wear') => {
    console.log(`User ${action}d look: ${look.name}`);
    if (action === 'dislike') {
      setShowFeedbackModal(true);
    } else {
      alert(`Look "${look.name}" saved as chosen!`);
      navigate(RoutePath.Home); // Go back to home after action
    }
  };

  const handleItemDetailClick = (itemId: string) => {
    navigate(RoutePath.ItemDetail.replace(':itemId', itemId));
  };

  const handleFeedbackSubmit = (feedback: string[]) => {
    console.log('Feedback submitted:', feedback);
    // Process feedback, then dismiss modal
    setShowFeedbackModal(false);
    navigate(RoutePath.Home); // Navigate away or update UI
  };

  return (
    <div className="relative h-full flex flex-col bg-black animate-fade-in">
      {/* Full-width Image Carousel (single image for simplicity) */}
      <div className="absolute inset-0 z-10">
        <div className="h-full w-full relative">
          <img alt={look.name} className="w-full h-full object-cover" src={look.imageUrl} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/0 pointer-events-none"></div>
        </div>
      </div>

      {/* Header for Style Me branding */}
      <header className="relative z-[50] pt-4 text-center">
        <h1 className="font-display text-2xl tracking-luxury-lg font-bold text-white drop-shadow-md">STYLE ME</h1>
      </header>

      {/* Bottom Sheet for Look Details */}
      <div className="absolute bottom-0 left-0 right-0 z-[100] bg-card-light dark:bg-card-dark rounded-t-3xl ios-shadow-top flex flex-col transition-all duration-500 ease-out h-[380px] animate-slide-up-lux opacity-0">
        <div className="w-full flex justify-center py-4">
          <div className="w-12 h-1.5 bg-sheet-handle rounded-full"></div>
        </div>

        <div className="px-8 overflow-y-auto hide-scrollbar flex-1 pb-24">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">{look.name}</h2>
              <p className="text-[10px] font-accent font-bold tracking-luxury-sm text-text-muted uppercase mt-1">{look.occasion}</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-display font-bold text-primary">{look.matchScore}%</span>
              <p className="text-[8px] font-accent font-medium tracking-luxury-sm text-text-muted uppercase">Match Score</p>
            </div>
          </div>

          <div className="bg-background-light dark:bg-slate-700 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-sm text-primary dark:text-slate-200">auto_awesome</span>
              <span className="text-[9px] font-accent font-bold tracking-luxury-sm text-primary dark:text-slate-200 uppercase">Style AI Reasoning</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
              {look.reasoning}
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <h3 className="text-[9px] font-accent font-bold tracking-luxury-sm text-text-muted uppercase">Item Breakdown</h3>
            {look.items.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b border-background-light dark:border-slate-800 pb-3" onClick={() => handleItemDetailClick(item.id)}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-background-light dark:bg-slate-700 rounded-lg overflow-hidden flex items-center justify-center">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">{item.name}</p>
                    <p className="text-[9px] text-slate-400">{item.source === 'mine' ? 'Your Wardrobe' : 'The Row Collection'}</p> {/* Mock collection */}
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-300 dark:text-slate-500 text-lg">arrow_forward_ios</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex gap-2">
              <button
                className="w-12 h-12 rounded-full border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 transition-all"
                onClick={() => handleLookAction('dislike')}
              >
                <span className="material-symbols-outlined text-xl">thumb_down</span>
              </button>
              <button
                className="w-12 h-12 rounded-full border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 transition-all"
                onClick={() => handleLookAction('like')}
              >
                <span className="material-symbols-outlined text-xl">favorite</span>
              </button>
            </div>
            <button
              className="flex-1 bg-primary text-white font-accent tracking-luxury-sm text-[11px] font-bold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-all uppercase"
              onClick={() => handleLookAction('wear')}
            >
              É o meu Look!
            </button>
          </div>
        </div>
      </div>

      {showFeedbackModal && (
        <FeedbackModal
          onClose={() => setShowFeedbackModal(false)}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  );
};

export default LookDetailScreen;