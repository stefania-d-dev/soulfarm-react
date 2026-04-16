# 🌿 Soulfarm | React 19 & Tailwind 4 Refactor

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react) 
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css) 
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite) 
![Version](https://img.shields.io/badge/Version-2.0.0-emerald?style=for-the-badge)

**Soulfarm** è una web application moderna sviluppata per un'azienda agricola multifunzionale. Questa versione (**v2.0.0**) rappresenta un refactoring integrale del progetto originale, focalizzato sulla transizione alle tecnologie frontend d'avanguardia del 2026.

---

## ✨ Caratteristiche Principali

* 🚜 **Full Responsive Design:** Ottimizzato per mobile, tablet e desktop senza l'uso di hack CSS.
* 🔭 **Planetario & Eventi:** Sezioni interattive per la gestione delle attività didattiche e stagionali.
* 🛍️ **Bottega Digitale:** Carosello prodotti performante basato su scroll nativo e zero dipendenze esterne.
* 📧 **Newsletter System:** Gestione degli stati del form con feedback utente in tempo reale.

---

## 🛠️ Evoluzione Tecnica (v2.0.0)

Il progetto è stato migrato da un'architettura legacy a un sistema **Production-Ready**:

- [x] **Engine:** Migrazione a **Tailwind CSS v4** (Native CSS-engine) per una riduzione del bundle size e build ultra-rapide.
- [x] **Core:** Aggiornamento a **React 19**, sfruttando le ottimizzazioni nel rendering e la nuova gestione degli hook.
- [x] **Performance:** - Ottimizzazione delle immagini tramite caricamento adattivo (`eager` / `lazy`).
    - Implementazione di **CSS Grid** per eliminare il Cumulative Layout Shift (CLS).
- [x] **Semantica:** Refactoring dei componenti con tag HTML5 (`<section>`, `<article>`, `<nav>`) per SEO e accessibilità (WCAG).

---

## 🚀 Installazione & Sviluppo Locale

```bash
# 1. Clona il repository
git clone [https://github.com/stefania-d-dev/soulfarm-react.git](https://github.com/stefania-d-dev/soulfarm-react.git)

# 2. Entra nella cartella
cd soulfarm-react

# 3. Installa le dipendenze
npm install

# 4. Avvia il server di sviluppo
npm run dev
```
---

## 📂 Struttura del progetto
```bash
src/
 ├── assets/             # Immagini, icone e font (MADE Dillan, Lexend)
 ├── components/         # Componenti React atomizzati (Hero, Carousel, Planetarium...)
 ├── styles/             # Configurazione globale Tailwind 4 (@theme)
 └── App.tsx             # Entry point dell'applicazione
```
---

 ## 👩‍💻 Credits & Team

* Replica in React & Refactoring 2026: Stefania Deliso

* Design Originale: Michele Fasani

* Codice Originale: Emiliano Bucci

---

## 📄 Licenza

* Distribuito sotto licenza MIT.

---

### *Progetto realizzato a scopo formativo per dimostrare competenze avanzate di Refactoring, State Management e Modern CSS.*
