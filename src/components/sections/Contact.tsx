import React, { useState } from 'react';
import { profileData } from '../../data/portfolioData';
import {
  Mail,
  MapPin,
  Send,
  MessageSquare,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '../icons/BrandIcons';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web Development',
    subject: initialSubject,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successInfo, setSuccessInfo] = useState('');

  const services = [
    'Full-Stack Web Development',
    'Backend API & Database Design',
    'Offline Desktop Software Architecture',
    'Church Media & Livestream Production',
    'Video Editing & Post-Production',
    'Graphic Design & Event Posters',
    'Administrative / Virtual Assistance',
    'General Inquiry & Collaboration',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please provide a subject line.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message with at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedStatus('error');
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmittedStatus('idle');

    try {
      // 1. Direct transmission to user's email via FormSubmit AJAX API
      const response = await fetch('https://formsubmit.co/ajax/blessingstechnologies4@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          _subject: `[Blessing Technologies Lead] ${formData.service}: ${formData.subject}`,
          message: formData.message,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      // 2. Also register with Netlify Forms in the background
      try {
        const netlifyParams = new URLSearchParams();
        netlifyParams.append('form-name', 'contact');
        netlifyParams.append('name', formData.name);
        netlifyParams.append('email', formData.email);
        netlifyParams.append('service', formData.service);
        netlifyParams.append('subject', formData.subject);
        netlifyParams.append('message', formData.message);

        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: netlifyParams.toString(),
        }).catch(() => {});
      } catch {
        // Silently ignore secondary Netlify post error
      }

      if (response.ok) {
        const data = await response.json();
        setSubmittedStatus('success');
        if (data && data.message && data.message.includes('Activation')) {
          setSuccessInfo(
            'Inquiry dispatched directly to blessingstechnologies4@gmail.com! Please check your email inbox to confirm initial activation if prompted.'
          );
        } else {
          setSuccessInfo(
            'Your message has been sent directly to blessingstechnologies4@gmail.com! We have received your inquiry and will respond within 24 hours.'
          );
        }

        // Reset form inputs
        setFormData({
          name: '',
          email: '',
          service: 'Full-Stack Web Development',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Direct email service error');
      }
    } catch (err) {
      console.warn('Network error during direct email submission, falling back to mail client:', err);
      // Fallback: construct mailto so no communication is ever lost
      const recipient = profileData.contact.email;
      const emailSubject = encodeURIComponent(`[${formData.service}] ${formData.subject}`);
      const emailBody = encodeURIComponent(
        `From: ${formData.name}\nEmail: ${formData.email}\nService Interested: ${formData.service}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
      window.location.href = mailtoUrl;

      setSubmittedStatus('success');
      setSuccessInfo(
        'Your message has been formatted and opened in your email client addressed to blessingstechnologies4@gmail.com. You can also reach out via WhatsApp!'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Blessing Technologies! My name is ${formData.name || 'a visitor'}. I am inquiring regarding ${
        formData.service
      }: ${formData.message || 'I would like to discuss a project with you.'}`
    );
    window.open(`https://wa.me/${profileData.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090d16] light:bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
            Initiate Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-sm sm:text-base text-slate-400 light:text-slate-600">
            Whether you have a remote job opening, freelance software project, church media requirement, or technical question, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Gateways & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-[#0b0f1a] light:bg-white border border-slate-800 light:border-slate-200 shadow-xl space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white light:text-slate-900">
                  Direct Communication Channels
                </h3>
                <p className="text-xs text-slate-400 light:text-slate-600 mt-1">
                  Prompt replies typically within 24 hours.
                </p>
              </div>

              {/* Contact Channels List */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900/70 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 light:text-slate-500">
                      Email Address
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white light:text-slate-800 group-hover:text-blue-400 transition-colors break-all">
                      {profileData.contact.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900/70 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 hover:border-emerald-500/40 transition-colors group text-left"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 light:text-slate-500">
                      WhatsApp Quick Chat
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white light:text-slate-800 group-hover:text-emerald-400 transition-colors">
                      {profileData.contact.phone}
                    </div>
                    <div className="text-[10px] text-emerald-400">
                      Click to start immediate conversation
                    </div>
                  </div>
                </button>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900/70 light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
                  <div className="p-2.5 rounded-xl bg-purple-600/10 text-purple-400 border border-purple-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 light:text-slate-500">
                      Location & Timezone
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white light:text-slate-800">
                      {profileData.location}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      East Africa Time (UTC+3) • Open to Global Teams
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-4 border-t border-slate-800/80 light:border-slate-200">
                <div className="text-xs font-bold text-white light:text-slate-900 uppercase tracking-wider mb-3">
                  Professional Profiles & Portals
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 light:border-slate-200 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 light:border-slate-200 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={profileData.contact.upwork}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 light:border-slate-200 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-emerald-400" />
                    <span>Upwork</span>
                  </a>

                  <a
                    href={profileData.contact.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 light:border-slate-200 transition-colors"
                  >
                    <YoutubeIcon className="w-4 h-4 text-rose-500" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0b0f1a] light:bg-white border border-slate-800 light:border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold text-white light:text-slate-900 mb-1">
                Send a Message or Project Brief
              </h3>
              <p className="text-xs text-slate-400 light:text-slate-600 mb-6">
                Fill out the form below. Inquiries are sent directly to <span className="text-blue-400 font-semibold">blessingstechnologies4@gmail.com</span> for prompt response.
              </p>

              {/* Status Banner */}
              {submittedStatus === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Message Delivered Successfully!</strong>
                    <span>{successInfo}</span>
                  </div>
                </div>
              )}

              {submittedStatus === 'error' && Object.keys(errors).length > 0 && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Please check the required fields below.</strong>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Don’t fill this out: <input name="bot-field" /></label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 light:text-slate-700">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Okello"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900 light:bg-slate-50 text-white light:text-slate-900 border ${
                        errors.name ? 'border-rose-500' : 'border-slate-800 light:border-slate-300'
                      } focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-60`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-400">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 light:text-slate-700">
                      Your Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900 light:bg-slate-50 text-white light:text-slate-900 border ${
                        errors.email ? 'border-rose-500' : 'border-slate-800 light:border-slate-300'
                      } focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-60`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-400">{errors.email}</p>}
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 light:text-slate-700">
                    Service or Project Category
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900 light:bg-slate-50 text-white light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-60"
                  >
                    {services.map((srv, idx) => (
                      <option key={idx} value={srv} className="bg-slate-900 text-white">
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 light:text-slate-700">
                    Subject Line <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Inquiring about School System / Freelance Web Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900 light:bg-slate-50 text-white light:text-slate-900 border ${
                      errors.subject ? 'border-rose-500' : 'border-slate-800 light:border-slate-300'
                    } focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-60`}
                  />
                  {errors.subject && <p className="text-[11px] text-rose-400">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 light:text-slate-700">
                    Message Details <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Provide details about your project timeline, requirements, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900 light:bg-slate-50 text-white light:text-slate-900 border ${
                      errors.message ? 'border-rose-500' : 'border-slate-800 light:border-slate-300'
                    } focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-60`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-400">{errors.message}</p>}
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Quick WhatsApp Chat</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Interactive Location Map Banner */}
        <div className="mt-12 rounded-3xl bg-[#0b0f1a] light:bg-white border border-slate-800 light:border-slate-200 shadow-2xl overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-800 light:border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/50 light:bg-slate-50/80">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-md">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white light:text-slate-900 flex items-center gap-2">
                  <span>Operating Base & Regional Presence</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </h3>
                <p className="text-xs text-slate-400 light:text-slate-600">
                  Kampala, Uganda • East Africa Time (UTC+3) — Serving clients locally & across the globe
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <a
                href="https://maps.google.com/?q=Kampala,Uganda"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-slate-200 light:text-slate-800 border border-slate-700 light:border-slate-300 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              </a>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-md shadow-emerald-600/20"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Quick WhatsApp Chat</span>
              </button>
            </div>
          </div>

          {/* Map Frame */}
          <div className="relative w-full h-[320px] sm:h-[420px] bg-slate-950">
            <iframe
              title="Blessing Technologies Location Map - Kampala, Uganda"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.27431114539!2d32.53587428807966!3d0.3130283120155259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb655b3b0d49%3A0x6b804f5e1f0e4912!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <div className="p-4 sm:px-6 bg-[#080c14] light:bg-slate-50 border-t border-slate-800/80 light:border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 light:text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Available for on-site media & livestreaming in Kampala/Mukono + global remote software roles</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Timezone: <strong>East Africa Time (UTC+3)</strong></span>
              <span>Direct Phone: <strong className="text-blue-400">{profileData.contact.phone}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
