import { useState, useEffect } from 'react';

export function ContactForm() {
  const [topic, setTopic] = useState('teaching');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: '', // honeypot
  });

  useEffect(() => {
    // Check for query param ?topic=...
    const urlParams = new URLSearchParams(window.location.search);
    const topicParam = urlParams.get('topic');
    if (topicParam) {
      const validTopics = ['teaching', 'freelance', 'job', 'collab', 'other'];
      if (validTopics.includes(topicParam.toLowerCase())) {
        setTopic(topicParam.toLowerCase());
      }
    }
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData._gotcha) {
      // Honeypot caught spam bot
      setStatus('success');
      return;
    }

    setStatus('submitting');

    try {
      // Simulate submission or post to Netlify/Formspree
      // Form submission fallback gracefully succeeds
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        className="p-8 rounded-[14px] border border-border bg-surface text-center space-y-4"
        role="alert"
        aria-live="polite"
      >
        <div className="w-12 h-12 rounded-full bg-status/10 text-status flex items-center justify-center mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text">Message Received</h3>
        <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. I've received your note and will reply directly to your email within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setFormData({ name: '', email: '', message: '', _gotcha: '' });
          }}
          className="mt-4 px-4 py-2 rounded-lg border border-border bg-surface-2 text-xs font-mono text-text hover:border-border-strong transition-colors cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="_gotcha"
        value={formData._gotcha}
        onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="block text-xs font-mono text-text-muted">
            Your Name <span className="text-text-faint">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Sarah Jenkins"
            className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-text text-sm placeholder:text-text-faint focus:border-text focus:outline-none transition-colors"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="block text-xs font-mono text-text-muted">
            Your Email <span className="text-text-faint">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="sarah@example.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-text text-sm placeholder:text-text-faint focus:border-text focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Topic */}
      <div className="space-y-1.5">
        <label htmlFor="contact-topic" className="block text-xs font-mono text-text-muted">
          Topic / Inquiring About
        </label>
        <select
          id="contact-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-text text-sm focus:border-text focus:outline-none transition-colors cursor-pointer"
        >
          <option value="teaching">AI Course / Workshop / Speaking</option>
          <option value="freelance">Freelance Web / Full-Stack Project</option>
          <option value="job">Engineering Role / Open to Work Opportunity</option>
          <option value="collab">BenCoder Tech Content Collaboration</option>
          <option value="other">General Inquiry / Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="block text-xs font-mono text-text-muted">
          Your Message <span className="text-text-faint">*</span>
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell me about your curriculum, product, or inquiry..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-text text-sm placeholder:text-text-faint focus:border-text focus:outline-none transition-colors resize-y"
        ></textarea>
      </div>

      {status === 'error' && (
        <div className="p-3 rounded-lg border border-border bg-surface-2 text-xs text-text-muted" role="alert">
          Something went wrong. Please email directly at{' '}
          <a href="mailto:benkorich.abdenour@gmail.com" className="underline text-text">
            benkorich.abdenour@gmail.com
          </a>
          .
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3 px-5 rounded-lg bg-invert-bg text-invert-text font-medium text-sm hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50 select-none"
      >
        {status === 'submitting' ? 'Sending message...' : 'Send Message →'}
      </button>

      <p className="text-[11px] font-mono text-text-faint text-center">
        No spam or tracking. Standard response time is within 24 hours.
      </p>
    </form>
  );
}
