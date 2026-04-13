import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'alejandrocp.dev@gmail.com',
    href: 'mailto:alejandrocp.dev@gmail.com',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+34 622 713 901',
    href: 'tel:+34622713901',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Málaga, España',
    href: '#',
  },
];

const INPUT_CLASS =
  'w-full px-4 py-3 bg-white/[0.04] border border-white/8 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all duration-200 font-sans';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { ref: titleRef, visible: titleVisible } = useScrollReveal();
  const { ref: leftRef, visible: leftVisible } = useScrollReveal(0.1);
  const { ref: rightRef, visible: rightVisible } = useScrollReveal(0.1);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-24 bg-surface relative">
      <div className="section-divider" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title */}
        <div
          ref={titleRef}
          className={`reveal ${titleVisible ? 'visible' : ''} mb-16`}
        >
          <p className="text-blue-400 font-mono text-xs mb-3 tracking-[0.2em] uppercase">
            04 — Contacto
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Hablemos
          </h2>
          <span className="title-accent" />
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
          {/* Left */}
          <div
            ref={leftRef}
            className={`reveal-left ${leftVisible ? 'visible' : ''} space-y-8`}
            style={{ transitionDelay: '80ms' }}
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Estoy siempre abierto a nuevos desafíos y oportunidades. Si quieres
                colaborar, tienes una idea o simplemente quieres charlar de tecnología,
                no dudes en escribirme.
              </p>
            </div>

            {/* Contact items */}
            <div className="space-y-3">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 p-4 card-glow rounded-xl"
                >
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200 flex-shrink-0">
                    <Icon size={17} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                    <p className="text-slate-200 text-sm group-hover:text-white transition-colors duration-200">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/Nol3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] hover:bg-white/[0.07] border border-white/8 hover:border-white/15 text-slate-400 hover:text-white rounded-lg text-sm transition-all duration-200"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/alejandro-cardenas-parejo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] hover:bg-white/[0.07] border border-white/8 hover:border-white/15 text-slate-400 hover:text-white rounded-lg text-sm transition-all duration-200"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div
            ref={rightRef}
            className={`reveal-right ${rightVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '160ms' }}
          >
            <div className="card-glow rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                    <CheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">¡Mensaje enviado!</h4>
                    <p className="text-slate-400 text-sm">
                      Gracias por contactarme. Te responderé lo antes posible.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs mb-1.5 font-mono uppercase tracking-wider">
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        placeholder="Tu nombre"
                        className={INPUT_CLASS}
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs mb-1.5 font-mono uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        placeholder="tu@email.com"
                        className={INPUT_CLASS}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5 font-mono uppercase tracking-wider">
                      Asunto
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={onChange}
                      required
                      placeholder="¿En qué puedo ayudarte?"
                      className={INPUT_CLASS}
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5 font-mono uppercase tracking-wider">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      required
                      rows={5}
                      placeholder="Cuéntame sobre tu proyecto..."
                      className={`${INPUT_CLASS} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full py-3 px-6 rounded-xl text-white text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                      submitting
                        ? 'bg-blue-500/40 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-400 shadow-lg shadow-blue-500/20 hover:shadow-blue-400/25'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
