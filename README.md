import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, ShieldCheck, Sparkles, Hammer, Droplets, Ruler, CheckCircle2, Star, Quote, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

// If you're integrating into a Next.js app, place this component in app/page.tsx or a route file.
// TailwindCSS is assumed. Adjust colors and content to match your brand.

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: <Sparkles className="w-6 h-6" />, 
    title: "Tile & Grout Cleaning",
    desc: "Deep-clean extraction that lifts grime, soap scum, and years of stains.",
  },
  {
    icon: <Droplets className="w-6 h-6" />, 
    title: "Grout Sealing",
    desc: "Premium penetrating sealers to repel moisture and reduce re-staining.",
  },
  {
    icon: <Hammer className="w-6 h-6" />, 
    title: "Regrouting & Recaulking",
    desc: "Replace failing grout/caulk to stop leaks and restore a crisp, clean look.",
  },
  {
    icon: <Ruler className="w-6 h-6" />, 
    title: "Grout Color Sealing",
    desc: "Even out discoloration and lock in a like-new, uniform grout color.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />, 
    title: "Shower Restoration",
    desc: "From mildew to minerals—revive tile showers with lasting protection.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />, 
    title: "Stone Polishing (Optional)",
    desc: "Polish and hone natural stone for a refined, low-sheen finish.",
  },
];

const gallery = [
  // Replace with your actual images
  "https://images.unsplash.com/photo-1600566752707-8d2d3d48fb24?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616594039964-ae9021a968df?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753151-384129cb4bd8?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582582429416-d6d6c2dff4e4?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582582429416-789c8792ad7b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579888388782-32d66c1613e4?q=80&w=1600&auto=format&fit=crop",
];

const reviews = [
  {
    name: "Alex P.",
    text: "Our shower looks brand new. Fast, friendly, and meticulous!",
    rating: 5,
  },
  {
    name: "Jamie R.",
    text: "The color-seal matched perfectly. Huge difference—highly recommend.",
    rating: 5,
  },
  {
    name: "Morgan T.",
    text: "They revived our kitchen floor in an afternoon. Worth every penny.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "How long does grout color sealing last?",
    a: "With proper care and neutral cleaners, color sealing typically lasts 5–10 years.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes—virtual or on-site quotes are free with no obligation.",
  },
  {
    q: "How soon can we use the shower/floors?",
    a: "Floors are walkable within hours; showers usually need 24 hours before use.",
  },
  {
    q: "Are your products safe for kids and pets?",
    a: "We use pro-grade, low-VOC products and ensure proper ventilation.",
  },
];

const phoneNumber = "+1 (555) 123-4567"; // TODO: replace with your business number
const emailAddress = "hello@groutrestorations.com"; // TODO: replace with your business email
const serviceArea = "Greater Metro Area"; // TODO: replace

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );
}

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
);

const Header = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-xl">
          <span className="inline-flex w-8 h-8 rounded-xl bg-emerald-600 text-white items-center justify-center">GR</span>
          Grout Restorations
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-gray-700 hover:text-emerald-700">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700">
            <Calendar className="w-4 h-4" /> Free Quote
          </a>
        </nav>
        <a href={`tel:${phoneNumber.replace(/[^+\d]/g, "")}`} className="md:hidden inline-flex items-center gap-2 rounded-2xl px-3 py-2 bg-emerald-600 text-white">
          <Phone className="w-4 h-4" /> Call
        </a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <Section id="home" className="pt-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Make your tile & grout look brand new—without replacing it
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Professional cleaning, color sealing, and restoration for showers, floors, and backsplashes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${phoneNumber.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-emerald-600 text-white hover:bg-emerald-700">
              <Phone className="w-5 h-5" /> Call {phoneNumber}
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-gray-300 hover:border-gray-400">
              <Calendar className="w-5 h-5" /> Get a Free Quote
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600"/> Licensed & Insured</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600"/> Eco‑friendly Options</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600"/> 100% Satisfaction Guarantee</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <img src="https://images.unsplash.com/photo-1600566753161-7c1a5d02bd08?q=80&w=1600&auto=format&fit=crop" alt="Freshly restored tile shower" className="rounded-3xl shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-2xl shadow p-4 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600"/>
            <div className="text-sm">
              <div className="font-semibold">Sealed for Protection</div>
              <div className="text-gray-600">Up to 10 years with proper care</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </Section>
);

const Services = () => (
  <Section id="services" className="py-20 bg-gradient-to-b from-white to-emerald-50/40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold">Services</h2>
      <p className="mt-2 text-gray-600">Everything you need to refresh tile, fix grout, and protect your investment.</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group rounded-3xl p-6 bg-white border shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center">
              {s.icon}
            </div>
            <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
            <p className="mt-1 text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const ValueBar = () => (
  <div className="bg-emerald-700 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-6">
      <div className="flex items-center gap-2 text-sm"><ShieldCheck className="w-4 h-4"/> Licensed & Insured</div>
      <div className="flex items-center gap-2 text-sm"><Sparkles className="w-4 h-4"/> Commercial‑grade Equipment</div>
      <div className="flex items-center gap-2 text-sm"><Hammer className="w-4 h-4"/> Experienced Technicians</div>
      <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4"/> Satisfaction Guaranteed</div>
    </div>
  </div>
);

const Gallery = () => (
  <Section id="gallery" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Before & After</h2>
          <p className="mt-2 text-gray-600">Real results from recent grout and tile restorations.</p>
        </div>
        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-emerald-600 text-white">Get a Quote</a>
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((src, i) => (
          <figure key={i} className="group relative overflow-hidden rounded-2xl border bg-white">
            <img src={src} alt={`Gallery tile ${i+1}`} className="aspect-square object-cover group-hover:scale-105 transition" />
          </figure>
        ))}
      </div>
    </div>
  </Section>
);

const Reviews = () => (
  <Section id="reviews" className="py-20 bg-emerald-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">5‑Star Service</h2>
          <p className="mt-2 text-gray-600">Don’t take our word for it—hear it from homeowners like you.</p>
        </div>
        <StarRow />
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <blockquote key={r.name} className="rounded-3xl p-6 bg-white border shadow-sm">
            <StarRow />
            <p className="mt-3 text-gray-700">“{r.text}”</p>
            <footer className="mt-4 flex items-center gap-2 text-sm text-gray-600">
              <Quote className="w-4 h-4"/> {r.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </Section>
);

const About = () => (
  <Section id="about" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop" alt="Technician restoring grout" className="rounded-3xl border shadow"/>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Why Grout Restorations?</h2>
          <p className="mt-3 text-gray-600">We’re a local, family‑owned team specializing exclusively in tile and grout. That focus means better methods, better materials, and better results—every time.</p>
          <ul className="mt-6 space-y-3">
            {[
              "Up‑front, itemized pricing",
              "Clean, courteous technicians",
              "Floor and surface protection at every job",
              "Clear post‑care instructions",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5"/><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Section>
);

const FAQ = () => (
  <Section id="faq" className="py-20 bg-gradient-to-b from-white to-emerald-50/40">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold">FAQ</h2>
      <div className="mt-8 divide-y rounded-2xl border bg-white">
        {faqs.map((f, i) => (
          <details key={i} className="group p-6">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
              {f.q}
              <span className="ml-4 text-emerald-700">+</span>
            </summary>
            <p className="mt-3 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">Get a Free Quote</h2>
          <p className="mt-2 text-gray-600">Tell us about your tile and we’ll follow up fast—usually the same day.</p>
          <form className="mt-6 grid gap-4" action="https://formspree.io/f/your-id" method="POST">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Your name"/>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="name@example.com"/>
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="(555) 123-4567"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Project Details</label>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Location (kitchen, shower, etc.), approximate square footage, issues you’re seeing..."/>
            </div>
            <button className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-emerald-600 text-white hover:bg-emerald-700" type="submit">
              <Mail className="w-5 h-5"/> Request Quote
            </button>
            <p className="text-xs text-gray-500">Prefer email? <a className="underline" href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
          </form>
        </div>
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex items-center gap-2"><Phone className="w-5 h-5 text-emerald-600"/> <a href={`tel:${phoneNumber.replace(/[^+\d]/g, "")}`}>{phoneNumber}</a></li>
            <li className="flex items-center gap-2"><Mail className="w-5 h-5 text-emerald-600"/> <a href={`mailto:${emailAddress}`}>{emailAddress}</a></li>
            <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-emerald-600"/> {serviceArea}</li>
            <li className="flex items-center gap-2"><Clock className="w-5 h-5 text-emerald-600"/> Mon–Sat: 8am–6pm</li>
          </ul>
          <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border"><Facebook className="w-4 h-4"/> Facebook</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border"><Instagram className="w-4 h-4"/> Instagram</a>
          </div>
          <div className="mt-6 rounded-2xl overflow-hidden">
            <iframe title="Map" className="w-full h-64 border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353158448!3d-37.81627974201159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE1LjQiRQ!5e0!3m2!1sen!2sus!4v1632984761234"></iframe>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const CTA = () => (
  <Section className="py-16">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-emerald-700 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Ready to love your tile again?</h3>
          <p className="mt-2 text-emerald-50">Book a no‑pressure estimate today. Most projects completed in a single visit.</p>
        </div>
        <div className="flex gap-3">
          <a href={`tel:${phoneNumber.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-emerald-700">
            <Phone className="w-5 h-5"/> Call Us
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-white/50">
            <Calendar className="w-5 h-5"/> Free Quote
          </a>
        </div>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="border-t">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span className="inline-flex w-8 h-8 rounded-xl bg-emerald-600 text-white items-center justify-center">GR</span>
            Grout Restorations
          </div>
          <p className="mt-3 text-sm text-gray-600">Tile & grout cleaning, color‑sealing, and restoration. Serving {serviceArea}.</p>
        </div>
        <div className="text-sm">
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-2 space-y-2">
            {navItems.map((n) => (
              <li key={n.href}><a className="text-gray-600 hover:text-emerald-700" href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold">Contact</div>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><a href={`tel:${phoneNumber.replace(/[^+\d]/g, "")}`}>{phoneNumber}</a></li>
            <li><a href={`mailto:${emailAddress}`}>{emailAddress}</a></li>
            <li>{serviceArea}</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Grout Restorations. All rights reserved.</div>
    </div>
  </footer>
);

export default function GroutRestorationsSite() {
  React.useEffect(() => {
    // Inject basic meta & structured data for SEO when rendered in a SPA environment
    document.title = "Grout Restorations | Tile & Grout Cleaning, Sealing, and Restoration";
    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', 'Professional tile and grout cleaning, color sealing, regrouting, and shower restoration. Free quotes. Licensed & insured.');
    document.head.appendChild(metaDesc);

    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Grout Restorations",
      telephone: phoneNumber,
      email: emailAddress,
      areaServed: serviceArea,
      url: typeof window !== 'undefined' ? window.location.href : 'https://groutrestorations.com',
      image: gallery.slice(0, 2),
      priceRange: "$$",
      address: { "@type": "PostalAddress", addressLocality: serviceArea },
      sameAs: ["https://facebook.com/", "https://instagram.com/"],
      makesOffer: services.map((s) => ({ "@type": "Offer", name: s.title })),
    });
    document.head.appendChild(ld);

    return () => { ld.remove(); };
  }, []);

  return (
    <main className="font-sans text-gray-900">
      <Header />
      <Hero />
      <ValueBar />
      <Services />
      <Gallery />
      <Reviews />
      <About />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
