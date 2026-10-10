import { motion } from 'framer-motion';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="landing-shell">
      <header className="landing-header">
        <div className="logo-wrap">
          <div className="brand-mark"><Sparkles size={15} /></div>
          <span>VEXA AI</span>
        </div>

        <nav className="landing-nav">
          <a href="#features">Features</a>
          <a href="#security">Security</a>
          <a href="#status">Status</a>
        </nav>

        <div className="header-actions">
          <Link to="/app/chat" className="ghost-btn">Open app</Link>
          <Link to="/app/chat" className="primary-btn">Try demo</Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Personal AI assistant</span>
          <h1>Built for life, work, voice and memory.</h1>
          <p>
            VEXA AI is a premium personal assistant for multilingual chat, daily planning, search, memory, and Android-ready mobile experience.
          </p>
          <div className="cta-row">
            <Link to="/app/chat" className="primary-btn large">Launch app <ArrowRight size={17} /></Link>
            <a href="#features" className="ghost-btn large">View features</a>
          </div>
        </div>

        <div className="hero-visual">
          <motion.div className="orb-demo" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} />
          <div className="orb-center"><Bot size={52} /></div>
        </div>
      </section>

      <section id="features" className="feature-grid">
        <div className="feature-card">
          <h3>AI chat</h3>
          <p>English, Hindi and Hinglish support with OpenAI-powered server backend.</p>
        </div>
        <div className="feature-card">
          <h3>Memory</h3>
          <p>Explicit consent, memory viewing, editing and safe deletion workflows.</p>
        </div>
        <div className="feature-card">
          <h3>Voice</h3>
          <p>Mic input, speech output, mute controls, and clearer “Hey Boss” messaging.</p>
        </div>
        <div className="feature-card">
          <h3>Daily assistant</h3>
          <p>Schedule, reminders, and work planning from a premium dashboard.</p>
        </div>
        <div className="feature-card">
          <h3>Web search</h3>
          <p>Clickable sources and citations with secure backend fetching.</p>
        </div>
        <div className="feature-card">
          <h3>Automation</h3>
          <p>Permission-based server tools for safe actions with explicit approval.</p>
        </div>
      </section>

      <section id="security" className="info-banner">
        <h2>Privacy-first by design</h2>
        <p>OpenAI keys stay in secure server-side env vars. No secrets in frontend code. All access is protected by auth and database policies.</p>
      </section>

      <section id="status" className="status-banner">
        <h2>Real status</h2>
        <ul>
          <li>Website shell: working</li>
          <li>App layout: working</li>
          <li>AI backend: requires configuration</li>
          <li>APK: requires Android Studio setup and build</li>
        </ul>
      </section>
    </div>
  );
}
