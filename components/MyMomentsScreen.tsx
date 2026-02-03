import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_WEATHER_INFO, MOCK_LOOK_SUGGESTION, RoutePath } from '../constants';

const MyMomentsScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLookClick = (lookId: string) => {
    navigate(RoutePath.LookDetail.replace(':lookId', lookId));
  };

  return (
    <div className="relative h-full flex flex-col bg-background-light dark:bg-background-dark animate-fade-in">
      {/* Background Image (fixed to top part of the screen) */}
      <div className="absolute top-0 left-0 right-0 h-1/2 z-0">
        <img
          alt="Minimalist Wardrobe"
          className="w-full h-full object-cover brightness-95"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCltnMpvuznHnzsZyT25M7ZRB37PzP6c3N3G-aOqCClIJB9gN6qGqX5rN362zclRU_GJjegf4Y9d0ODwVGpRwO7lKjz0VCCkucpbVz2YFjPDF_vxz--UHvhQIcSUOkqiptCoCn7e2Pop6vcrfspA6dj6x-arN7gCIyINZ5IOKqDRHGJFVwoaEkXWls49xmBnlftkG8UE-i3LwZJuuYaGFN-Ansc56maJVIDMBZAWuw4mA2qbgtFu0ObKtmH0ZB603NnkwCP5wIpQGKa"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>
        <div className="absolute top-16 left-0 right-0 text-center">
          <h1 className="font-display text-2xl tracking-luxury-lg font-bold uppercase text-white drop-shadow-md">STYLE ME</h1>
        </div>
      </div>

      {/* Bottom Sheet Section */}
      <div className="absolute bottom-0 left-0 right-0 h-[72%] bg-card-light dark:bg-card-dark rounded-t-4xl ios-shadow-top z-40 flex flex-col animate-slide-up-lux opacity-0">
        <div className="w-full flex justify-center py-3">
          <div className="w-10 h-1.5 bg-sheet-handle rounded-full"></div>
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar">
          <div className="px-6 mt-2">
            <div className="bg-slate-100 dark:bg-card-dark border border-border-light dark:border-border-dark p-1 rounded-full flex items-center w-full">
              <button className="flex-1 py-2 rounded-full text-slate-400 font-accent font-bold text-[8px] tracking-luxury-sm uppercase transition-all duration-300">
                MY CLOSET
              </button>
              <button className="flex-1 py-2 rounded-full bg-primary text-white font-accent font-bold text-[8px] tracking-luxury-sm uppercase transition-all duration-300">
                HYBRID
              </button>
              <button className="flex-1 py-2 rounded-full text-slate-400 font-accent font-bold text-[8px] tracking-luxury-sm uppercase transition-all duration-300">
                STORE
              </button>
            </div>
          </div>

          <div className="mt-6 px-6 text-left">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100 uppercase">MY MOMENTS</h2>
            <p className="text-[10px] text-text-muted mt-1 uppercase tracking-widest font-sans">Intelligent suggestions for your day</p>
          </div>

          <section className="mt-6 px-6">
            <div className="bg-background-light dark:bg-card-dark rounded-2xl p-4 flex items-center justify-between border border-border-light dark:border-border-dark">
              <div className="flex flex-col">
                <p className="text-[9px] font-accent font-bold tracking-luxury-sm text-text-muted uppercase mb-1">Weather-based suggestions</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">partly_cloudy_day</span>
                  <h3 className="font-accent font-bold text-xs tracking-luxury-sm text-slate-900 dark:text-slate-100 uppercase">
                    {MOCK_WEATHER_INFO.temperature}°C - {MOCK_WEATHER_INFO.condition}
                  </h3>
                </div>
              </div>
              <div className="h-8 w-[1px] bg-slate-200 dark:bg-border-dark"></div>
              <div className="text-right">
                <p className="text-[8px] font-accent font-bold text-primary tracking-widest uppercase">Perfect for</p>
                <p className="text-[9px] font-accent text-slate-500 uppercase">{MOCK_WEATHER_INFO.recommendation}</p>
              </div>
            </div>
          </section>

          <section className="mt-8 pb-32">
            <div className="px-6 flex flex-col gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">work</span>
                <h3 className="font-accent font-bold text-xs tracking-luxury-sm text-slate-900 dark:text-slate-100 uppercase">Work Day</h3>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[9px] font-bold tracking-luxury-sm uppercase">Corporate</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-[9px] font-bold tracking-luxury-sm uppercase">Fresh</span>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto hide-scrollbar px-6 snap-x snap-mandatory">
              {/* Mock Look 1 */}
              <div className="min-w-[240px] flex flex-col snap-start">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-background-light dark:bg-card-dark mb-3">
                  <img
                    alt="Business Modern"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6RCwAduhgD7Gtue8XNUDI7rLwqKh691pxWhRSWKTrDy_1S2gJ55_wn0g8YGFYhEYJ5ljk6_D7Q5h6KDtGQ5GMttBo_fYTcSO6uVjb_1_ARXSF3itfnkifSl5a0SfGXut8Txo8qAPmuKW-apQBGH1XM-bYzwN_jD9JyswDqlfIL883fIuLIpJrOUGEBUSHfGU3PfiOsyU6LJlN71OGi8URXJR2lUqyztV-dU9frN5HLO1x8PeqFnah0FmtdPZDdQOlv9liJIWfGuu6"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <button
                      className="w-full bg-white/90 backdrop-blur-md text-primary font-accent font-bold text-[9px] py-3 rounded-xl uppercase tracking-luxury-sm shadow-lg active:scale-95 transition-transform"
                      onClick={() => handleLookClick('look-business-modern')}
                    >
                      I'll wear this today
                    </button>
                  </div>
                </div>
                <div className="px-1">
                  <h4 className="text-[10px] font-accent font-bold tracking-luxury-sm text-slate-900 dark:text-slate-100 uppercase">Business Modern</h4>
                  <p className="text-[8px] font-accent tracking-luxury-sm text-text-muted uppercase">Blazer &amp; Tailoring</p>
                </div>
              </div>

              {/* Mock Look 2 */}
              <div className="min-w-[240px] flex flex-col snap-start">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-background-light dark:bg-card-dark mb-3">
                  <img
                    alt="Office Casual"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdHN5EW_VuccR6dT-1nIbNuzBCxW0F1yDHkl0OHGMQxyLMS-phwZERCQo6srhuXmD7pELbwMIXGIQ4pmSuklLXzpyidf65qdUbEFFa2lAvIOPc1TL6gHnaHudjYGjH1BD6xHosoBKIOzzAzRAUO4CBrAbVE-zG9RLPZwhl9qwMh8iYFNmJd5eEavqlvLD8xIqaCV7UTEL0T8MDTQTjEJBRZoCVvaAzdhFNP6dpvce_tXYK9jko7FYgunx0KVPyr9dG_ucVagrb7dLs"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <button
                      className="w-full bg-white/90 backdrop-blur-md text-primary font-accent font-bold text-[9px] py-3 rounded-xl uppercase tracking-luxury-sm shadow-lg active:scale-95 transition-transform"
                      onClick={() => handleLookClick('look-office-casual')}
                    >
                      I'll wear this today
                    </button>
                  </div>
                </div>
                <div className="px-1">
                  <h4 className="text-[10px] font-accent font-bold tracking-luxury-sm text-slate-900 dark:text-slate-100 uppercase">Office Casual</h4>
                  <p className="text-[8px] font-accent tracking-luxury-sm text-text-muted uppercase">Light &amp; Elegant</p>
                </div>
              </div>

              {/* Add more mock looks as needed */}
              <div className="min-w-[240px] flex flex-col snap-start">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-background-light dark:bg-card-dark mb-3">
                  <img
                    alt="Afternoon Chic"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCltnMpvuznHnzsZyT25M7ZRB37PzP6c3N3G-aOqCClIJB9gN6qGqX5rN362zclRU_GJjegf4Y9d0ODwVGpRwO7lKjz0VCCkucpbVz2YFjPDF_vxz--UHvhQIcSUOkqiptCoCn7e2Pop6vcrfspA6dj6x-arN7gCIyINZ5IOKqDRHGJFVwoaEkXWls49xmBnlftkG8UE-i3LwZJuuYaGFN-Ansc56maJVIDMBZAWuw4mA2qbgtFu0ObKtmH0ZB603NnkwCP5wIpQGKa"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <button
                      className="w-full bg-white/90 backdrop-blur-md text-primary font-accent font-bold text-[9px] py-3 rounded-xl uppercase tracking-luxury-sm shadow-lg active:scale-95 transition-transform"
                      onClick={() => handleLookClick(MOCK_LOOK_SUGGESTION.id)}
                    >
                      I'll wear this today
                    </button>
                  </div>
                </div>
                <div className="px-1">
                  <h4 className="text-[10px] font-accent font-bold tracking-luxury-sm text-slate-900 dark:text-slate-100 uppercase">Afternoon Chic</h4>
                  <p className="text-[8px] font-accent tracking-luxury-sm text-text-muted uppercase">Comfort &amp; Style</p>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MyMomentsScreen;