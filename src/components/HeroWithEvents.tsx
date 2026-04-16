import React from "react";
import heroBg from "../assets/images/hero-image.png";
import EventsGrid from "./EventsGrid";

const HeroWithEvents: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Sezione Hero */}
      <section className="relative flex h-236 w-full overflow-hidden self-stretch">
        
        {/* Overlay sfumato: migliorata la transizione per leggibilità testo */}
        <div className="absolute inset-0 z-10 w-1/2 bg-linear-to-r from-white via-white/95 to-transparent" />

        <div className="relative z-20 flex w-full max-w-200 items-center px-6 lg:px-20">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="font-dillan text-[60px] leading-[1.1] text-zinc-900 md:text-[80px] lg:text-[100px]">
              <span className="bg-linear-to-b from-green-400 to-emerald-700 bg-clip-text text-transparent">
                Soulfarm
              </span>
              <br /> 
              Agricoltura <br /> 
              Familiare
            </h1>
            
            <p className="font-lexend text-[18px] font-bold leading-6.5 text-zinc-800 lg:text-[20px]">
              L’azienda è certificata biologica ed è<br className="hidden md:block" /> 
              composta da orto, frutteto<br className="hidden md:block" /> 
              e pascolo.
            </p>
          </div>
        </div>

        {/* Immagine Hero: Caricamento ottimizzato */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Paesaggio agricolo Soulfarm"
            className="h-full w-full object-cover object-center"
            loading="eager" // Fondamentale per la Hero: carica subito
            decoding="async"
          />
        </div>
      </section>

      {/* Grid Eventi: Margine negativo per effetto overlap */}
      <div className="relative z-30 -mt-24 px-6 lg:px-20">
        <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-black/5">
          <EventsGrid />
        </div>
      </div>
    </div>
  );
};

export default HeroWithEvents;