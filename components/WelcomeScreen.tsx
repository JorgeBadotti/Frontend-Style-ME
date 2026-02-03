import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../constants';

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleJourneySelect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-0 bg-portrait w-full h-full">
      <main className="relative z-10 w-full max-w-md min-h-screen flex flex-col items-center px-6 py-10 space-y-6">
        <header className="flex flex-col items-center text-center space-y-2 mb-2">
          <div className="text-white drop-shadow-lg">
            <span className="material-symbols-outlined text-5xl font-extralight">checkroom</span>
          </div>
          <h1 className="text-2xl font-extralight tracking-widest text-white uppercase text-shadow-sm">Style Me</h1>
          <p className="text-[9px] tracking-luxury-xl text-white/90 uppercase font-medium">The Art of Dressing</p>
        </header>

        <div className="glass-card w-full rounded-4xl p-6 shadow-2xl border border-white/50 flex flex-col space-y-4">
          <div className="text-center space-y-1 mb-2">
            <h2 className="font-display text-2xl font-semibold text-primary italic">Escolha sua Jornada</h2>
            <div className="w-12 h-[1px] bg-luxury-gold mx-auto my-3"></div>
            <p className="text-[9px] text-text-muted font-bold tracking-widest uppercase">Exclusividade em cada detalhe</p>
          </div>

          <button className="nav-link-card group" onClick={() => handleJourneySelect(RoutePath.Login)}>
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-2 border-white">
              <img
                alt="Consumidor Elegante"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm4gefef3AxLHDGqtRt4bw5OkwXYP_q6Obl4e1PfETaq7UdZF6DW8-4RLVPj7H6vtZ7uSviS46UPc5JX89hCY5FulDjPwXprf_SbbUmjBhGAheRXezGzM-hLnHhXaX-dEY1IEqkxPxGC_0xORvSiHmw45I8UwHDerbxmzIkw-b5OwLBZiPE3QhOZlVnHaXShfT1YpOXU8Wr16xvkweTOBMAx_iMElZzcAJN3tfgaKkN85t7gp8G-k7RN1nwC53_x97R95ecTzYdjPow"
              />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-1">CONSUMIDOR</h3>
              <p className="text-[9px] text-gray-600 mb-2 leading-relaxed font-medium uppercase tracking-luxury-md">ANÁLISE CORPORAL E CURADORIA PERSONALIZADA PARA SEU ESTILO.</p>
              <div className="text-[9px] font-bold tracking-luxury-lg text-luxury-gold flex items-center group-hover:translate-x-1 transition-all uppercase">
                ENTRAR <span className="material-symbols-outlined text-[10px] ml-1">arrow_forward_ios</span>
              </div>
            </div>
          </button>

          <div className="h-[1px] bg-gray-200/60 w-[85%] mx-auto"></div>

          <button className="nav-link-card group" onClick={() => handleJourneySelect(RoutePath.Login)}>
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-2 border-white">
              <img
                alt="Stylist Profissional"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA_hUOTJyMi78_MY6D-l_PGGsTFlDdlIljKN930CJHS9fPsC7ZoY5jRKTCKCvFrTmIb4SvlBSb93QOegJIYMuG8n6elmVZEu09_87qdYN9G16r8xnG0YEjmey1q9S74GezbgRsZzJ5JknZNyKuRnlcfGM0cY_lRSAI7iEnk-RrTJuDKnGE6N7F57Z0JQxe8ydEA0LEIhOKTQtOCrDcOFuBKHhrKdUssYOzGLuJW82hgm2_4GerDXKe2YFq-tQAtpnbLaBTxE70UJN"
              />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-1">STYLIST</h3>
              <p className="text-[9px] text-gray-600 mb-2 leading-relaxed font-medium uppercase tracking-luxury-md">ECOSSISTEMA DIGITAL PARA ELEVAR SEU ATENDIMENTO DE LUXO.</p>
              <div className="text-[9px] font-bold tracking-luxury-lg text-luxury-gold flex items-center group-hover:translate-x-1 transition-all uppercase">
                ENTRAR <span className="material-symbols-outlined text-[10px] ml-1">arrow_forward_ios</span>
              </div>
            </div>
          </button>

          <div className="h-[1px] bg-gray-200/60 w-[85%] mx-auto"></div>

          <button className="nav-link-card group" onClick={() => handleJourneySelect(RoutePath.Login)}>
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-2 border-white">
              <img
                alt="Boutique de Luxo"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeD69HC5_3MMzbmWRFkm_-EkfqT4_rxFoy6lnkB1wkxY93BueKn9XX-oQzpjmR4zceSuv3Cp311mlMaPMXuLKtB3N49vm1cERm0IYBW2nCyr7Fb345JjCWmMbsSmOw4W6P7CRY-rOSji9BSAaZ-3q8ZQg-2ipHmL-z0qHM6PWVH50HWUFeTu9h5IpvdxcwGXqalFZYYDero2O65A2AkdCbTI811bolmqilZsvm_c6YpDJ0hzgtzIZnPWNKHeS58dk54B-yKX8hMF1W"
              />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-1">LOJA</h3>
              <p className="text-[9px] text-gray-600 mb-2 leading-relaxed font-medium uppercase tracking-luxury-md">IA GENERATIVA INTEGRADA PARA CONVERSÃO E FIDELIZAÇÃO.</p>
              <div className="text-[9px] font-bold tracking-luxury-lg text-luxury-gold flex items-center group-hover:translate-x-1 transition-all uppercase">
                ENTRAR <span className="material-symbols-outlined text-[10px] ml-1">arrow_forward_ios</span>
              </div>
            </div>
          </button>

          <div className="pt-4 mt-2 border-t border-gray-100/80 flex justify-between items-center opacity-80">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">V</span>
              </div>
              <span className="text-[7px] font-bold tracking-widest uppercase leading-none">VESTTAG<br/><span className="font-light">BODY ANALYSIS</span></span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-[7px] font-bold tracking-widest uppercase text-right leading-none">POWERED BY<br/><span className="font-light text-[6px]">GOOGLE AI</span></span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.4-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
            </div>
          </div>
        </div>

        <div className="w-full pt-4 flex flex-col items-center space-y-4">
          <p className="text-[8px] tracking-luxury-lg text-white/80 uppercase font-semibold">As featured in</p>
          <div className="flex items-center justify-center space-x-10 opacity-70 brightness-150">
            <span className="font-display text-sm italic tracking-tight text-white">VOGUE</span>
            <span className="font-display text-sm uppercase tracking-widest text-white">ELLE</span>
            <span className="font-display text-sm uppercase tracking-luxury-lg text-white">BAZAAR</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomeScreen;