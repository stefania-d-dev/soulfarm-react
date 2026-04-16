import React, { useState } from 'react';
import newsletterImage from '../assets/images/newsletter-image.png';
import mailSvg from '../assets/images/mail.svg';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('loading');
    
    // Simuliamo un invio (ottimo per far vedere come gestisci gli stati asincroni)
    console.log('Email submitted:', email);
    
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="w-full bg-[#f8f1e2] px-6 py-20 lg:px-20">
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-zinc-800 px-6 py-24 shadow-xl lg:py-32"
        style={{
          backgroundImage: `url(${newsletterImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay per la leggibilità del testo */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="font-dillan text-4xl text-white lg:text-5xl">
              Rimani aggiornato
            </h2>
            <p className="font-lexend text-lg text-emerald-50">
              Per non perderti nessuna novità dal mondo Soulfarm!
            </p>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="group relative flex w-full max-w-135 items-center overflow-hidden rounded-full bg-white p-1.5 shadow-lg transition-all focus-within:ring-2 focus-within:ring-[#d1f864]"
          >
            {/* Icona Mail */}
            <div className="absolute left-6 flex h-6 w-6 items-center justify-center opacity-50">
              <img src={mailSvg} alt="" aria-hidden="true" className="h-full w-full" />
            </div>

            <input
              type="email"
              placeholder="Inserisci la tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent py-4 pl-14 pr-32 font-lexend text-zinc-900 outline-none placeholder:text-zinc-400"
              disabled={status === 'loading'}
            />

            <button
              type="submit"
              disabled={status !== 'idle'}
              className={`absolute right-1.5 h-13 w-30 rounded-full font-lexend font-bold transition-all active:scale-95 
                ${status === 'success' 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-[#d1f864] text-zinc-900 hover:bg-[#c1e854]'
                }`}
            >
              {status === 'loading' ? '...' : status === 'success' ? 'Fatto!' : 'Iscriviti'}
            </button>
          </form>

          {status === 'success' && (
            <p className="absolute -bottom-10 font-lexend text-white text-sm animate-fade-in">
              Grazie! Ti sei iscritto correttamente.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;