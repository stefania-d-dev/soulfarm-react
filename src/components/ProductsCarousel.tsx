import React, { useRef } from 'react';

// Immagini
import product1 from '../assets/images/product1.png';
import product2 from '../assets/images/product2.png';
import product3 from '../assets/images/product3.png';
import product4 from '../assets/images/product4.png';

interface Product {
  id: number;
  title: string;
  imageUrl: string;
  price?: string;
}

const products: Product[] = [
  { id: 1, title: 'Mele di bosco', imageUrl: product1 },
  { id: 2, title: 'Miele di Castagno', imageUrl: product2 },
  { id: 3, title: 'Confettura Bio', imageUrl: product3 },
  { id: 4, title: 'Succo di Mela', imageUrl: product4 },
  { id: 5, title: 'Noci Nostrane', imageUrl: product1 },
];

const ProductsCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320; // Larghezza card + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="flex flex-col gap-12 bg-zinc-100 px-6 py-20 lg:px-20">
      
      {/* Header Carosello */}
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="font-dillan text-4xl text-zinc-900 lg:text-5xl">
            Le novità in bottega
          </h2>
          <p className="font-lexend text-zinc-600 max-w-xl">
            Nella nostra cucina professionale trasformiamo i frutti della terra 
            in delizie genuine, seguendo tradizioni antiche e standard moderni.
          </p>
        </div>

        {/* Pulsanti di Navigazione Custom */}
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-300 text-zinc-600 transition-all hover:bg-zinc-900 hover:text-white active:scale-90"
            aria-label="Scorri a sinistra"
          >
            <span className="text-xl">←</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white transition-all hover:bg-zinc-700 active:scale-90"
            aria-label="Scorri a destra"
          >
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      {/* Area Carosello */}
      <div 
        ref={carouselRef} 
        className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-4 outline-none"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group min-w-70 shrink-0 scroll-snap-align-start flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:shadow-xl"
          >
            {/* Image Container */}
            <div className="h-48 w-full overflow-hidden rounded-2xl bg-zinc-50">
              <img 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                src={product.imageUrl} 
                alt={product.title} 
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-4">
              <h3 className="font-lexend text-xl font-bold text-zinc-900">
                {product.title}
              </h3>
              
              <button className="flex items-center justify-between rounded-full bg-[#d1f864] py-3 px-6 transition-all hover:bg-zinc-900 hover:text-white group/btn">
                <span className="font-bold">Scopri di più</span>
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsCarousel;