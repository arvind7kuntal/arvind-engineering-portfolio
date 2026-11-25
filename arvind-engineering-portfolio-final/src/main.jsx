import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2,
  Database, Boxes, RadioTower, Server, Workflow, Terminal, CheckCircle2,
  BriefcaseBusiness, Download, Send, ExternalLink, Sparkles
} from 'lucide-react';
import './styles.css';

const PROFILE = {
  name: 'Arvind Kumar',
  role: 'Backend Software Engineer',
  email: 'arvind7kuntal@gmail.com',
  github: 'https://github.com/arvind7kuntal',
  linkedin: 'https://www.linkedin.com/in/arvind7kuntal/',
  resumePath: '/Arvind-Kumar-Resume.pdf',
};

const skills = [
  { title: 'Programming', items: ['Java', 'Core Java', 'Java 11'], icon: Code2 },
  { title: 'Backend', items: ['Spring Boot', 'REST APIs', 'Spring Security'], icon: Server },
  { title: 'Architecture', items: ['Microservices', 'Distributed Systems', 'API Design'], icon: Boxes },
  { title: 'Messaging & Cache', items: ['Apache Kafka', 'Redis'], icon: RadioTower },
  { title: 'Data', items: ['Oracle DB', 'SQL', 'Neo4j'], icon: Database },
  { title: 'Engineering Tools', items: ['Jenkins', 'Maven', 'Tomcat', 'Git'], icon: Workflow },
];

const projects = [
  {
    number: '01',
    name: 'CricketPulse',
    type: 'PERSONAL PROJECT · REAL-TIME ANALYTICS',
    description: 'A real-time cricket analytics platform designed around event-driven backend services. Processes ball-by-ball events and turns them into live match insights.',
    highlights: ['Spring Boot microservices', 'Kafka event streaming', 'Redis-backed analytics', 'WebSocket live updates'],
    stack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'AWS EC2', 'React'],
    link: 'https://github.com/arvind7kuntal/cricketpulse',
    linkLabel: 'Explore on GitHub',
  },
  {
    number: '02',
    name: 'Nexus Repository Manager Plugin',
    type: 'PROFESSIONAL ENGINEERING EXPERIENCE',
    description: 'Contributed to plugin development involving Nexus Repository Manager APIs, Swagger metadata parsing and application model integration.',
    highlights: ['Parsed Swagger API metadata', 'Worked with repository, asset and component models', 'XML mapping and serialization', 'Security-minded XML processing'],
    stack: ['Java', 'Nexus', 'Swagger', 'XStream', 'JDOM', 'JUnit'],
    link: '',
    linkLabel: '',
  },
];

const opportunities = [
  ['Full-time roles', 'Backend Engineer · Java Developer · Software Engineer'],
  ['Part-time engagements', 'Ongoing backend development and engineering support'],
  ['Contract projects', 'API development, integrations and backend services'],
  ['Freelance work', 'Focused Java, Spring Boot and database assignments'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', type: 'Full-time role', details: '' });

  const closeMenu = () => setMenuOpen(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setSubmitError('');
    try {
      const response = await fetch('https://formspree.io/f/mgakrbpz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _replyto: form.email,
          _subject: `Portfolio enquiry — ${form.type}`,
          opportunity: form.type,
          message: form.details,
        }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result?.errors?.map((item) => item.message).join(' ') || 'Your enquiry could not be submitted. Please try again.');
      }
      setSent(true);
      setForm({ name: '', email: '', type: 'Full-time role', details: '' });
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong. Please try again or email me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="site-shell">
      <div className="topline"><span className="pulse" /> OPEN TO NEW OPPORTUNITIES <span className="topline-right">BASED IN INDIA · OPEN TO REMOTE & RELOCATION</span></div>
      <header className="nav-wrap">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">AK</span><span>ARVIND KUMAR<span className="brand-sub">BACKEND ENGINEER</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['About', 'Expertise', 'Work', 'Experience', 'Contact'].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={closeMenu}>{x}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> JAVA · SPRING BOOT · MICROSERVICES</div>
            <h1>Engineering the<br/><span className="gradient-text">systems behind</span><br/>great products.</h1>
            <p className="hero-lede">I'm Arvind, a backend software engineer with <strong>3.8 years of experience</strong> building APIs, backend services and distributed applications.</p>
            <p className="hero-sub">I turn complex requirements into reliable, maintainable software — and I'm ready to bring that mindset to your team or next project.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Discuss an opportunity <ArrowUpRight size={17}/></a>
              <a className="button button-secondary" href={PROFILE.resumePath} download><Download size={16}/> Download resume</a>
            </div>
            <div className="hero-socials">
              <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={12}/></a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={12}/></a>
              <a href={`mailto:${PROFILE.email}`}><Mail size={17}/> Email <ArrowUpRight size={12}/></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
            <div className="code-card">
              <div className="code-top"><div className="window-dots"><i/><i/><i/></div><span>backend-engineer.java</span><span className="code-live">● LIVE</span></div>
              <div className="code-content">
                <div><span className="ln">01</span><span className="code-purple">public class</span> <span className="code-yellow">Engineer</span> {'{'}</div>
                <div><span className="ln">02</span>  <span className="code-purple">private final</span> String focus =</div>
                <div><span className="ln">03</span>    <span className="code-green">"Backend systems";</span></div>
                <div><span className="ln">04</span></div>
                <div><span className="ln">05</span>  Stack build() {'{'}</div>
                <div><span className="ln">06</span>    <span className="code-purple">return</span> Stack.of(</div>
                <div><span className="ln">07</span>      <span className="code-green">"Java"</span>, <span className="code-green">"Spring Boot"</span>,</div>
                <div><span className="ln">08</span>      <span className="code-green">"Kafka"</span>, <span className="code-green">"Redis"</span></div>
                <div><span className="ln">09</span>    );</div>
                <div><span className="ln">10</span>  {'}'}</div>
                <div><span className="ln">11</span>{'}'}</div>
              </div>
              <div className="code-footer"><span><span className="status-dot"/> Available for opportunities</span><span>IND · IST</span></div>
            </div>
            <div className="float-chip chip-a"><span className="chip-icon"><Terminal size={15}/></span><span><b>3.8 years</b><small>Engineering experience</small></span></div>
            <div className="float-chip chip-b"><span className="chip-icon purple"><Sparkles size={15}/></span><span><b>Event-driven</b><small>Backend architecture</small></span></div>
          </div>
          <a href="#about" className="scroll-cue"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
        </section>

        <section className="metrics-strip">
          <div><strong>3.8<span>+</span></strong><small>YEARS EXPERIENCE</small></div>
          <div><strong>Java</strong><small>CORE SPECIALIZATION</small></div>
          <div><strong>Backend</strong><small>ENGINEERING FOCUS</small></div>
          <div><strong>4 ways</strong><small>TO WORK TOGETHER</small></div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-kicker">01 / ABOUT</div>
          <div className="section-grid">
            <h2>Practical engineering.<br/><span className="muted-heading">Thoughtful execution.</span></h2>
            <div className="about-copy">
              <p className="large-copy">I’m a backend engineer who enjoys understanding how systems work under the hood — from API design and data modelling to asynchronous processing and production reliability.</p>
              <p>At eQ Technologic, I worked on enterprise software and Java-based backend/plugin development. Alongside professional experience, I build hands-on projects that help me explore system design, event-driven architecture and real-time data processing.</p>
              <p>I value clean code, clear communication, ownership and solutions that solve the actual problem — not just the immediate ticket.</p>
              <div className="about-tags"><span>Problem solving</span><span>API design</span><span>System thinking</span><span>Continuous learning</span></div>
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="section-kicker">02 / TECHNICAL EXPERTISE</div>
          <div className="section-heading-row"><h2>The tools I build with.</h2><p>A practical backend toolkit across application development, data and delivery.</p></div>
          <div className="skills-grid">
            {skills.map(({title, items, icon: Icon}, i) => <article className="skill-card" key={title}><div className="skill-card-top"><span className="skill-icon"><Icon size={19}/></span><span className="skill-index">0{i+1}</span></div><h3>{title}</h3><div className="skill-pills">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading-row"><h2>Built with purpose.</h2><p>Selected engineering work that shows how I approach backend problems.</p></div>
          <div className="projects">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className="project-main"><div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div><h3>{project.name}</h3><p>{project.description}</p>
                <div className="project-highlights">{project.highlights.map(x => <span key={x}><CheckCircle2 size={14}/>{x}</span>)}</div>
                <div className="project-stack">{project.stack.map(x => <span key={x}>{x}</span>)}</div>
                {project.link && <a className="text-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={15}/></a>}
              </div>
              <div className="project-art"><div className="art-glow"/><div className="architecture-card"><div className="arch-title"><span/> SYSTEM FLOW</div><div className="arch-node">EVENT PRODUCER</div><div className="arch-arrow">↓</div><div className="arch-node highlight-node">KAFKA · EVENT STREAM</div><div className="arch-arrow">↓</div><div className="arch-branches"><div className="arch-node">ANALYTICS</div><div className="arch-node">REDIS</div><div className="arch-node">WEBSOCKET</div></div><div className="arch-caption">CRICKETPULSE · HIGH-LEVEL CONCEPT</div></div></div>
            </article>)}
          </div>
          <div className="github-banner"><div><Github size={22}/><span><b>More code, less talk.</b><small>Explore repositories and ongoing work on GitHub.</small></span></div><a href={PROFILE.github} target="_blank" rel="noreferrer" className="button button-secondary">View GitHub <ExternalLink size={15}/></a></div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-kicker">04 / EXPERIENCE</div>
          <div className="section-grid">
            <h2>Where I've<br/><span className="muted-heading">made an impact.</span></h2>
            <div className="experience-item">
              <div className="experience-line"><span/></div>
              <div className="experience-content"><div className="experience-date">PROFESSIONAL EXPERIENCE</div><h3>Backend Engineer / Java Developer</h3><h4>eQ Technologic · Pune, India</h4><p>Worked on eQube® DaaS, an enterprise data integration platform, building Java backend capabilities and connector integrations for enterprise systems.</p>
                <ul><li>Designed connector integrations for Neo4j, Sonatype Nexus, Bitbucket and ThingWorx using extensible connector patterns.</li><li>Built REST APIs and bulk data ingestion flows; improved Neo4j ingestion performance by approximately 70% through batch operations.</li><li>Implemented enterprise authentication flows including SAML bearer-token integration and Basic Authentication fallback.</li><li>Worked with Java, Spring Boot, Kafka, Swagger/OpenAPI, JUnit, Maven, Jenkins and Agile delivery practices.</li></ul>
                <div className="experience-note">Aug 2022 – Apr 2026 · 3 years 9 months. Selected outcomes are based on the experience details in my resume.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="opportunity-section">
          <div className="section section-inner">
            <div className="section-kicker">05 / WORKING TOGETHER</div>
            <div className="opportunity-heading"><h2>Good engineering can<br/>start with a conversation.</h2><p>I'm open to different ways of contributing. If you need someone who can take ownership of backend work, let's talk.</p></div>
            <div className="opportunity-grid">{opportunities.map(([title, desc], i) => <div className="opportunity-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p><a href="#contact">Discuss this <ArrowUpRight size={14}/></a></div>)}</div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-kicker">06 / CONTACT</div>
          <div className="contact-grid">
            <div className="contact-copy"><h2>Have a role or<br/><span className="gradient-text">project in mind?</span></h2><p>Tell me what you're building or hiring for. I'll get back to you as soon as I can.</p>
              <a className="contact-email" href={`mailto:${PROFILE.email}`}><Mail size={18}/>{PROFILE.email}<ArrowUpRight size={15}/></a>
              <div className="contact-social"><a href={PROFILE.github} target="_blank" rel="noreferrer"><Github/> GitHub</a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a></div>
            </div>
            <form className="contact-form" onSubmit={submit}>
              <div className="form-heading"><BriefcaseBusiness size={18}/><span>START A CONVERSATION</span></div>
              <label>Your name<input name="name" value={form.name} onChange={update} placeholder="Name" required/></label>
              <label>Email address<input type="email" name="email" value={form.email} onChange={update} placeholder="you@company.com" required/></label>
              <label>What are you reaching out about?<select name="type" value={form.type} onChange={update}><option>Full-time role</option><option>Part-time role</option><option>Contract opportunity</option><option>Freelance project</option><option>Other</option></select></label>
              <label>Tell me a little about it<textarea name="details" value={form.details} onChange={update} placeholder="Role, project, timeline or anything useful..." rows="4" required/></label>
              <button className="button button-primary submit-button" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send enquiry'} <Send size={16}/></button>
              {sent && <p className="form-note" role="status">Thanks — your enquiry has been submitted successfully. I’ll get back to you soon.</p>}
              {submitError && <p className="error-note" role="alert">{submitError}</p>}
              <p className="privacy-note">Your enquiry is submitted securely through Formspree. Your email address will be used to reply to you.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">AK</span><span>ARVIND KUMAR<span className="brand-sub">BACKEND ENGINEER</span></span></a><span>Designed to make good work easy to discover.</span><span>© {new Date().getFullYear()} Arvind Kumar</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /><Analytics /></React.StrictMode>);