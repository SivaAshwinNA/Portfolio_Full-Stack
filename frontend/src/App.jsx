import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const fallbackProjects = [
  {
    id: 1,
    title: "IoT Digital Signal Pollution Tracker",
    description: "An IoT system designed to scan, collect, store and visualize wireless signal-density data using an ESP32-based architecture.",
    technologies: "ESP32, IoT, Python, PostgreSQL, Streamlit",
    github_url: "#",
    live_url: "#"
  },
  {
    id: 2,
    title: "AI-Powered Cybersecurity Threat Detection",
    description: "A machine-learning oriented security project for detecting anomalous activity and supporting threat mitigation workflows.",
    technologies: "Python, ML, NLP, Hugging Face, FastAPI",
    github_url: "#",
    live_url: "#"
  },
  {
    id: 3,
    title: "Smart Warranty & Bill Management System",
    description: "A full-stack application concept for organizing bills, warranties, authentication and notification workflows.",
    technologies: "Java, Spring Boot, PostgreSQL, JWT",
    github_url: "#",
    live_url: "#"
  },
  {
    id: 4,
    title: "Stress Detection in Academic Forums",
    description: "An NLP project exploring stress classification from academic forum text using transformer-based language models.",
    technologies: "Python, NLP, DistilBERT, Transformers",
    github_url: "#",
    live_url: "#"
  }
];

const skills = [
  "C / C++", "Java", "Python", "JavaScript", "React.js",
  "Node.js", "Express.js", "PostgreSQL", "Git & GitHub",
  "REST APIs", "Machine Learning", "IoT"
];

function App() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((res) => {
        if (!res.ok) throw new Error("API unavailable");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length) setProjects(data);
      })
      .catch(() => {});
  }, []);

  const submitContact = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Unable to send");
      setStatus("Message submitted successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Backend is not connected yet. Start the server and try again.");
    }
  };

  return (
    <div>
      <header className="nav">
        <a className="brand" href="#home">Siva Ashwin<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">COMPUTER SCIENCE • FULL STACK • AI/ML</p>
            <h1>Building useful software with <span>code, data & curiosity.</span></h1>
            <p className="hero-text">
              Computer Science student focused on full-stack development, AI/ML,
              and practical engineering projects.
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">View Projects</a>
              <a className="button secondary" href="#contact">Contact Me</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="avatar">SA</div>
            <p>Full Stack Developer</p>
            <small>Open to learning, building and collaborating.</small>
          </div>
        </section>

        <section id="about" className="section">
          <p className="eyebrow">01 — ABOUT</p>
          <h2>About Me</h2>
          <div className="two-col">
            <p>
              I am a Computer Science & Engineering student interested in software
              engineering, full-stack development, artificial intelligence and
              machine learning. I enjoy turning concepts into working projects
              and continuously improving my engineering fundamentals.
            </p>
            <div className="info-card">
              <div><strong>Education</strong><span>B.Tech CSE</span></div>
              <div><strong>Current Focus</strong><span>Full Stack Development</span></div>
              <div><strong>Interests</strong><span>AI/ML • Web • Systems</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="eyebrow">02 — SKILLS</p>
          <h2>Technical Skills</h2>
          <div className="skill-grid">
            {skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">03 — PROJECTS</p>
          <h2>Selected Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project" key={project.id}>
                <div className="project-number">PROJECT {String(project.id).padStart(2, "0")}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {(Array.isArray(project.technologies)
                    ? project.technologies
                    : (project.technologies || "").split(",")
                  ).map((t) => (
                     <span key={t.trim()}>{t.trim()}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github_url && project.github_url !== "#" && <a href={project.github_url}>GitHub ↗</a>}
                  {project.live_url && project.live_url !== "#" && <a href={project.live_url}>Live ↗</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <p className="eyebrow">04 — EXPERIENCE</p>
          <h2>Internship</h2>
          <div className="experience-card">
            <div>
              <p className="date">17 AUG 2026 — 16 SEP 2026</p>
              <h3>Intern — Full Stack Development</h3>
              <p className="company">Thiranex · Remote / Project-Based</p>
            </div>
            <p>
              Working on practical, project-based development under industry
              mentorship, with a focus on integrating frontend, backend and
              database technologies.
            </p>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <p className="eyebrow">05 — CONTACT</p>
          <h2>Let's build something.</h2>
          <div className="contact-grid">
            <div>
              <p>
                Interested in collaboration, projects, internships or technical
                discussions? Send a message.
              </p>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/sivaashwin-na-b42158319" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="https://github.com/SivAAshwinNA" target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
            <form onSubmit={submitContact}>
              <input required placeholder="Your name" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input required type="email" placeholder="Email address" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <textarea required rows="5" placeholder="Message" value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button className="button primary" type="submit">Send Message</button>
              {status && <small className="form-status">{status}</small>}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Siva Ashwin NA</span>
        <span>Built with React + Express + MongoDB</span>
      </footer>
    </div>
  );
}

export default App;