import React from 'react';
import logo from '../assets/images/logo.png';
import FlagEU from '../assets/images/partner1.png';
import RepIta from '../assets/images/partner2.png';
import RegPiemonte from '../assets/images/partner3.png';
import FondoEU from '../assets/images/partner4.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-green px-6 py-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Logo iniziale */}
        <div className="mb-8">
          <img className="h-10 w-auto object-contain" src={logo} alt="Logo Soulfarm" />
        </div>

        <div className="mb-12 h-px w-full bg-white/20" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Colonna 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-lexend text-base font-bold text-[#d1f864] underline underline-offset-4">
              Azienda agricola
            </h4>
            <nav className="flex flex-col gap-2">
              {['Agricoltura', 'Allevamenti', 'Bottega agricola', 'Punti vendita'].map((link) => (
                <a key={link} href="#" className="font-lexend text-sm text-white transition-colors hover:text-[#d1f864]">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Colonna 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-lexend text-base font-bold text-[#d1f864] underline underline-offset-4">
              Fattoria didattica
            </h4>
            <nav className="flex flex-col gap-2">
              {['Attività scuole', 'Attività per grandi e piccoli', 'Planetario', 'Fattoria sociale'].map((link) => (
                <a key={link} href="#" className="font-lexend text-sm text-white transition-colors hover:text-[#d1f864]">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Colonna 3 */}
          <div className="flex flex-col gap-5">
            {['AGRITURISMO', 'BIO E SOSTENIBILITÀ', 'TURISMO E TERRITORIO', 'CONTATTI'].map((item) => (
              <a key={item} href="#" className="font-lexend text-sm font-bold text-[#d1f864] transition-colors hover:text-white">
                {item}
              </a>
            ))}
          </div>

          {/* Colonna 4: Loghi Istituzionali */}
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-inner">
            <p className="font-lexend text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Partner Istituzionali</p>
            <div className="flex flex-wrap items-center gap-4">
              <img className="h-10 w-auto grayscale transition-all hover:grayscale-0" src={FlagEU} alt="Bandiera Europa" />
              <img className="h-10 w-auto grayscale transition-all hover:grayscale-0" src={RepIta} alt="Repubblica Italiana" />
              <img className="h-10 w-auto grayscale transition-all hover:grayscale-0" src={RegPiemonte} alt="Regione Piemonte" />
              <img className="h-12 w-auto grayscale transition-all hover:grayscale-0" src={FondoEU} alt="Fondo Europeo Agricolo" />
            </div>
          </div>
        </div>

        <div className="my-12 h-px w-full bg-white/10" />

        {/* Bottom Bar: Credits & Legal */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-8 md:flex-row">
          <div className="flex flex-col text-center md:text-left">
            <p className="font-lexend text-sm text-white/80">
              © {currentYear} Azienda Agricola "Elilu" di Gastaldi Elisa - Agricultura Familiare
            </p>
            <p className="font-lexend text-sm font-bold text-white">P.IVA 02322540184</p>
          </div>

          {/* Credits Team */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/60">
            <span className="flex items-center gap-1">✏️ <strong className="text-white/90">Code</strong> Emiliano Bucci</span>
            <span className="flex items-center gap-1">💻 <strong className="text-white/90">React Replica</strong> Stefania Deliso</span>
            <span className="flex items-center gap-1">🎨 <strong className="text-white/90">Design</strong> Michele Fasani</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;