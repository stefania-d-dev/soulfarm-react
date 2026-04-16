import React from 'react';
import planetariumImage from '../assets/images/planetarium-image.png';
import planetariumPattern from '../assets/images/planetarium-pattern.png';

const PlanetariumSection: React.FC = () => {
  return (
    <section className="relative flex min-h-145 w-full items-center justify-center overflow-hidden bg-brand-green px-6 py-20 lg:px-20">
      
      {/* LAYER 1: Background Pattern - Opacità ridotta per un effetto texture professionale */}
      <div 
        className="absolute inset-0 z-0 opacity-15"
        style={{ 
          backgroundImage: `url(${planetariumPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '220px', // Scala ridotta per non distrarre
        }}
      />

      {/* LAYER 2: Gradiente radiale per dare profondità (vignettatura) */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* LAYER 3: Contenuto Principale */}
      <div className="relative z-20 flex max-w-7xl flex-col items-center gap-12 md:flex-row lg:gap-24">
        
        {/* Immagine con Ombra Profonda e bordo stondato */}
        <div className="shrink-0 transition-transform duration-500 hover:scale-[1.02]">
          <img
            className="h-75 w-100 rounded-[2.5rem] object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 lg:h-95 lg:w-130"
            src={planetariumImage}
            alt="Il nostro Planetario"
            loading="lazy"
          />
        </div>

        {/* Testo e CTA */}
        <div className="flex max-w-125 flex-col gap-8 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <h2 className="font-dillan text-5xl leading-tight text-white lg:text-7xl">
              Il Planetario
            </h2>
            <p className="font-lexend text-base leading-relaxed text-emerald-50/80 lg:text-lg">
              Finalmente il nostro planetario vi potrà accogliere anche nei mesi invernali. 
              Ci aspettano una serie di appuntamenti pomeridiani — <span className="text-white font-bold">ogni sabato pomeriggio</span> — 
              per scoprire i segreti del cielo e una serie di appuntamenti speciali dedicati alla Ruota dell'Anno Celtico.
            </p>
          </div>

          {/* Bottone migliorato */}
          <button className="group mx-auto flex w-fit items-center gap-3 rounded-full bg-[#d1f864] px-10 py-4 font-lexend font-bold text-zinc-900 transition-all hover:bg-[#c1e854] hover:shadow-[0_0_20px_rgba(209,248,100,0.3)] active:scale-95 md:mx-0">
            <span>Visita il planetario</span>
            <svg 
              className="h-5 w-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlanetariumSection;