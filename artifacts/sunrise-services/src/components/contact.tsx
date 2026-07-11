import React, { useState } from 'react';
import { FadeIn } from './fade-in';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

// ─── Email configuration ──────────────────────────────────────────────────────
// Form submissions are delivered via Web3Forms (free, no backend needed).
// To activate: visit https://web3forms.com → enter sunriseservices0001@gmail.com
// → copy the Access Key you receive → paste it below.
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';
// ─────────────────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${formData.name} — Sunrise Services website`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: '',
        }),
      });

      const json = await res.json();
      if (json.success) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      }
    } catch {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Left column: contact details ── */}
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              Get Involved
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6 leading-tight">
              Let's Build a Better Tomorrow, Together.
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Whether you want to volunteer, partner with us, or simply learn more about our programs, we'd love to hear from you. Reach out to us at our Delhi office or drop a message.
            </p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2 font-serif">Visit Our Office</h4>
                  <p className="text-gray-600 leading-relaxed">
                    D-35, 1st Floor, Office No-102,<br />
                    Near Pillar No 33, Laxmi Nagar,<br />
                    Delhi – 110092, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2 font-serif">Call Us</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Talk to us directly — we're happy to help.<br />
                    <a
                      href="tel:+919310811949"
                      className="text-primary font-semibold hover:underline mt-1 inline-block"
                    >
                      +91 93108 11949
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2 font-serif">Email Us</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Send us your queries and partnership proposals.<br />
                    <a
                      href="mailto:sunriseservices0001@gmail.com"
                      className="text-primary font-semibold hover:underline mt-1 inline-block"
                    >
                      sunriseservices0001@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Right column: contact form ── */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-secondary text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <h3 className="text-3xl font-serif font-bold mb-8 relative z-10">Send us a message</h3>

              {formState === 'success' ? (
                <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                    <Send className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold">Message Received!</h4>
                  <p className="text-gray-300 max-w-xs">
                    Thank you for reaching out. We'll get back to you shortly at <span className="text-primary font-semibold">{formData.email || 'your email'}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  {/* Hidden honeypot for spam prevention */}
                  <input type="checkbox" name="botcheck" className="hidden" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      How can you help?
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="I want to volunteer for..."
                    ></textarea>
                  </div>

                  {formState === 'error' && (
                    <p className="text-red-400 text-sm text-center">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-primary hover:bg-orange-600 text-white rounded-xl px-6 py-4 font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Floating phone CTA */}
      <a
        href="tel:+919310811949"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-orange-600 transition-all cursor-pointer group"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6 animate-pulse group-hover:animate-none" />
      </a>
    </section>
  );
}
