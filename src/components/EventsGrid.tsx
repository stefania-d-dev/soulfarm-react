import React from "react";

// Import delle immagini (Assicurati che i percorsi siano corretti)
import event1 from "../assets/images/event1.png";
import event2 from "../assets/images/event2.png";
import event3 from "../assets/images/event3.png";
import event4 from "../assets/images/event4.png";
import event5 from "../assets/images/event5.png";

// Definizione dell'interfaccia per TypeScript
interface EventItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category?: string;
}

// Mock dei dati (In una versione Pro, questi potrebbero venire da un file .json o un'API)
const EVENTS_DATA: EventItem[] = [
  {
    id: 1,
    title: "Sabato in Planetario",
    description: "L’azienda è certificata biologica ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio.",
    image: event1,
    category: "Educazione"
  },
  {
    id: 2,
    title: "Momenti di Agri-creatività",
    description: "Un laboratorio dedicato alla scoperta della natura attraverso l'arte e il riciclo creativo dei materiali della fattoria.",
    image: event2,
    category: "Laboratori"
  },
  {
    id: 3,
    title: "Ruota dell'Anno Celtico",
    description: "Celebriamo i passaggi delle stagioni con rituali agricoli tradizionali e degustazioni di prodotti bio locali.",
    image: event3,
    category: "Cultura"
  },
  {
    id: 4,
    title: "Yoga nel Vigneto",
    description: "Ritrova l'equilibrio tra i filari del nostro vigneto biologico, seguito da una colazione contadina sana e genuina.",
    image: event4,
    category: "Benessere"
  },
  {
    id: 5,
    title: "Vendemmia Solidale",
    description: "Partecipa alla raccolta dell'uva e scopri i segreti della vinificazione naturale della nostra agricoltura familiare.",
    image: event5,
    category: "Esperienze"
  },
  {
    id: 6,
    title: "Astro-Trekking Notturno",
    description: "Una camminata sotto le stelle tra i pascoli della Soulfarm per ammirare il cielo lontano dall'inquinamento luminoso.",
    image: event1, // Riutilizzata per demo
    category: "Natura"
  }
];

// Sotto-componente per la singola card: aumenta la leggibilità e la manutenibilità
const EventCard: React.FC<{ event: EventItem }> = ({ event }) => {
  return (
    <article className="group flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2">
      {/* Immagine Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-md">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Badge Categoria (Opzionale, molto apprezzato nei portfolio) */}
        {event.category && (
          <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-900 shadow-sm backdrop-blur-sm">
            {event.category}
          </span>
        )}
      </div>

      {/* Contenuto Testuale */}
      <div className="flex flex-col gap-2 px-1">
        <h3 className="font-dillan text-2xl leading-tight text-zinc-900 lg:text-3xl">
          {event.title}
        </h3>
        <p className="font-lexend text-sm leading-relaxed text-zinc-600 md:text-base">
          {event.description}
        </p>
      </div>
    </article>
  );
};

const EventsGrid: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-360 px-6 py-20 lg:px-20" id="eventi">
      {/* Header della sezione (Opzionale per dare contesto) */}
      <div className="mb-12 flex flex-col gap-4 text-center lg:text-left">
        <h2 className="font-dillan text-4xl text-zinc-900 md:text-5xl">I Nostri Eventi</h2>
        <div className="h-1 w-20 bg-[#d1f864] lg:mx-0 mx-auto" />
      </div>

      {/* Grid Responsiva: 1 colonna mobile, 2 tablet, 3 desktop */}
      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {EVENTS_DATA.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Call to Action: Bottone semantico */}
      <div className="mt-20 flex justify-center">
        <button 
          className="group flex items-center gap-3 rounded-full bg-[#d1f864] px-10 py-4 font-lexend font-bold text-zinc-900 transition-all hover:bg-[#c1e854] hover:shadow-xl active:scale-95"
          aria-label="Visualizza tutti gli eventi Soulfarm"
        >
          <span>Scopri tutti gli eventi</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default EventsGrid;