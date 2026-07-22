"use client";

import Image from "next/image";
import { ArrowRight, CalendarDays, Check, ChevronDown, Heart, MapPin, Menu, Plane, Play, Quote, Search, ShieldCheck, Sparkles, Star, Users, X } from "lucide-react";
import { useState } from "react";

const destinations = [
  { city: "Santorini", country: "Greece", trips: "18 experiences", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85" },
  { city: "Kyoto", country: "Japan", trips: "12 experiences", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85" },
  { city: "Serengeti", country: "Tanzania", trips: "9 experiences", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85" },
  { city: "Amalfi Coast", country: "Italy", trips: "15 experiences", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85" },
];

const packages = [
  { title: "Bali: Soul of the Island", place: "Ubud & Nusa Penida", days: 7, rating: 4.9, reviews: 128, price: 1290, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85", tag: "Best seller" },
  { title: "Nordic Lights Escape", place: "Reykjavík, Iceland", days: 6, rating: 4.8, reviews: 96, price: 1890, image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1000&q=85", tag: "Small group" },
  { title: "Moroccan Mosaic", place: "Marrakech & Sahara", days: 8, rating: 4.9, reviews: 104, price: 1490, image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1000&q=85", tag: "Cultural" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [saved, setSaved] = useState<number[]>([]);
  const [query, setQuery] = useState("");

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return <main>
    <header className="nav-wrap">
      <nav className="nav container">
        <button className="brand" onClick={() => scrollTo("home")}><span className="brand-mark"><Plane size={20}/></span>roamly.</button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("destinations")}>Destinations</button><button onClick={() => scrollTo("journeys")}>Journeys</button><button onClick={() => scrollTo("story")}>Our story</button><button onClick={() => scrollTo("journal")}>Journal</button>
          <button className="nav-cta" onClick={() => scrollTo("contact")}>Plan my trip <ArrowRight size={16}/></button>
        </div>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </nav>
    </header>

    <section className="hero" id="home">
      <Image src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2200&q=90" alt="Traveler overlooking a mountain valley" fill priority sizes="100vw" className="hero-image"/>
      <div className="hero-overlay"/><div className="hero-grain"/>
      <div className="hero-content container">
        <span className="eyebrow light"><Sparkles size={14}/> Curated journeys, lasting stories</span>
        <h1>Go where you feel<br/><em>most alive.</em></h1>
        <p>Thoughtfully designed adventures that connect you with remarkable places, people, and moments.</p>
        <div className="hero-actions"><button className="button primary" onClick={() => scrollTo("journeys")}>Explore journeys <ArrowRight size={18}/></button><button className="watch"><span><Play size={15} fill="currentColor"/></span> See our story</button></div>
      </div>
      <div className="search-bar container">
        <label><span><MapPin size={17}/> Where to?</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try Bali or Iceland"/></label>
        <label><span><CalendarDays size={17}/> When?</span><button>Choose dates <ChevronDown size={15}/></button></label>
        <label><span><Users size={17}/> Travelers</span><button>2 guests <ChevronDown size={15}/></button></label>
        <button className="search-btn" onClick={() => scrollTo("journeys")}><Search size={20}/><span>Find my journey</span></button>
      </div>
    </section>

    <section className="trust-strip"><div className="container trust-grid"><div><strong>12k+</strong><span>happy travelers</span></div><div><strong>48</strong><span>countries explored</span></div><div><strong>4.9/5</strong><span>average guest rating</span></div><div className="trust-copy"><ShieldCheck size={25}/><span>Expert-led, flexible,<br/>and financially protected</span></div></div></section>

    <section className="section container" id="destinations">
      <div className="section-head"><div><span className="eyebrow">Places worth the journey</span><h2>Find your next<br/><em>wonder.</em></h2></div><p>From quiet island mornings to wild open plains, explore places selected for their beauty, spirit, and unforgettable character.</p></div>
      <div className="destination-grid">{destinations.map((d,i)=><article className={`destination-card d${i}`} key={d.city}><Image src={d.image} alt={`${d.city}, ${d.country}`} fill sizes="(max-width: 800px) 100vw, 25vw"/><div className="card-shade"/><div className="destination-copy"><span>{d.country}</span><h3>{d.city}</h3><p>{d.trips} <ArrowRight size={14}/></p></div></article>)}</div>
    </section>

    <section className="section journeys" id="journeys"><div className="container">
      <div className="section-head compact"><div><span className="eyebrow">Loved by travelers</span><h2>Journeys to<br/><em>remember.</em></h2></div><button className="text-link">View all journeys <ArrowRight size={17}/></button></div>
      <div className="package-grid">{packages.filter(p => !query || `${p.title} ${p.place}`.toLowerCase().includes(query.toLowerCase())).map((p,i)=><article className="package-card" key={p.title}><div className="package-image"><Image src={p.image} alt={p.title} fill sizes="(max-width: 800px) 100vw, 33vw"/><span className="tag">{p.tag}</span><button aria-label="Save trip" className={`heart ${saved.includes(i)?"active":""}`} onClick={()=>setSaved(s=>s.includes(i)?s.filter(x=>x!==i):[...s,i])}><Heart size={18} fill={saved.includes(i)?"currentColor":"none"}/></button></div><div className="package-body"><div className="meta"><span><MapPin size={14}/>{p.place}</span><span><Star size={14} fill="currentColor"/>{p.rating} <small>({p.reviews})</small></span></div><h3>{p.title}</h3><div className="package-footer"><span>{p.days} days</span><p>From <strong>${p.price.toLocaleString()}</strong> / person</p></div></div></article>)}</div>
    </div></section>

    <section className="story section container" id="story"><div className="story-images"><div className="story-main"><Image src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=85" alt="Friends exploring together" fill sizes="50vw"/></div><div className="story-small"><Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=85" alt="Road trip" fill sizes="25vw"/></div><div className="experience"><strong>14</strong><span>years of<br/>curiosity</span></div></div><div className="story-copy"><span className="eyebrow">Travel made personal</span><h2>More than a trip.<br/><em>Your story.</em></h2><p>We believe the best journeys don’t just show you a place—they shift your perspective. That’s why every Roamly trip is shaped around you, with thoughtful details and local connections that turn travel into something deeply personal.</p><ul><li><Check/>Local experts, never tourist traps</li><li><Check/>Small groups and unhurried moments</li><li><Check/>24/7 support, wherever you roam</li></ul><button className="button dark">Meet the people behind Roamly <ArrowRight size={17}/></button></div></section>

    <section className="testimonial section"><div className="container quote-wrap"><Quote size={42}/><div><div className="stars">★★★★★</div><blockquote>“Every detail felt effortless, yet the whole trip felt completely ours. We came home with stories we’ll be telling for years.”</blockquote><p><strong>Maya & Daniel</strong><span>Moroccan Mosaic, May 2025</span></p></div></div></section>

    <section className="section journal container" id="journal"><div className="section-head compact"><div><span className="eyebrow">The Roamly journal</span><h2>Stories for the<br/><em>curious.</em></h2></div><button className="text-link">Read all stories <ArrowRight size={17}/></button></div><div className="journal-grid"><article><Image src="https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&w=900&q=85" alt="Japanese food" width={800} height={500}/><span>Food & culture · 6 min</span><h3>A local’s guide to eating your way through Kyoto</h3></article><article><Image src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60b?auto=format&fit=crop&w=900&q=85" alt="Northern lights" width={800} height={500}/><span>Travel notes · 8 min</span><h3>Chasing the northern lights without chasing the crowds</h3></article><article><Image src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=85" alt="Island coast" width={800} height={500}/><span>Slow travel · 5 min</span><h3>Why the best island days start before sunrise</h3></article></div></section>

    <section className="newsletter" id="contact"><div className="container newsletter-inner"><div><span className="eyebrow light">A little wonder in your inbox</span><h2>Let’s go<br/><em>somewhere.</em></h2></div><div><p>Get travel stories, thoughtful tips, and first access to new journeys. No clutter—just inspiration.</p><form onSubmit={e=>e.preventDefault()}><input type="email" required placeholder="Your email address"/><button aria-label="Subscribe"><ArrowRight/></button></form><small>By subscribing, you agree to our privacy policy.</small></div></div></section>

    <footer><div className="container footer-grid"><div><button className="brand light-brand"><span className="brand-mark"><Plane size={20}/></span>roamly.</button><p>Travel beyond ordinary.</p></div><div><strong>Explore</strong><a href="#destinations">Destinations</a><a href="#journeys">Journeys</a><a href="#journal">Journal</a></div><div><strong>Company</strong><a href="#story">Our story</a><a href="#">Careers</a><a href="#contact">Contact</a></div><div><strong>Follow</strong><a href="#">Instagram</a><a href="#">Pinterest</a><a href="#">YouTube</a></div></div><div className="container footer-bottom"><span>© 2026 Roamly Travel Co.</span><span>Privacy · Terms · Cookies</span></div></footer>
  </main>;
}
