export default function About() {
  return (
    <section className="v2section" id="about">
      <div className="v2-eyebrow v2reveal">02 · ABOUT ME</div>
      <h2 className="v2-title v2reveal">
        Engineering with <em>intent</em>.<br />
        Designing for <em>scale</em>.
      </h2>
      <p className="v2-lede v2reveal v2reveal-d2">
        I&apos;m a full-stack engineer based in Tarbela, Pakistan, with 3+ years building scalable
        web applications. Currently shipping at{' '}
        <strong style={{ color: 'var(--v2-fg)' }}>Zapply</strong> — a Chrome extension that
        automates job applications.
      </p>

      <div className="about-grid2">
        <div className="about-card v2reveal v2reveal-d2">
          <h4>// Personal Info</h4>
          <div className="kv">
            <span className="k">Name</span>
            <span className="v">Muhammad Anas</span>
          </div>
          <div className="kv">
            <span className="k">Location</span>
            <span className="v">Tarbela, Pakistan</span>
          </div>
          <div className="kv">
            <span className="k">Email</span>
            <span className="v">anas538438@gmail.com</span>
          </div>
          <div className="kv">
            <span className="k">Languages</span>
            <span className="v">English, Urdu</span>
          </div>
          <div className="kv">
            <span className="k">Freelance</span>
            <span className="v" style={{ color: '#4ade80' }}>
              Available
            </span>
          </div>
        </div>

        <div className="about-card v2reveal v2reveal-d3">
          <h4>// What I Do</h4>
          <p style={{ color: 'var(--v2-fg-muted)', fontSize: 14, marginBottom: 20 }}>
            I translate business requirements into clean, performant, maintainable code. From
            frontend interactions to backend architecture and the new AI layer — I work across the
            full stack.
          </p>
          <div className="kv">
            <span className="k">Frontend</span>
            <span className="v">React · Tailwind</span>
          </div>
          <div className="kv">
            <span className="k">Backend</span>
            <span className="v">Laravel · Node</span>
          </div>
          <div className="kv">
            <span className="k">AI / ML</span>
            <span className="v">LLM Fine-Tuning</span>
          </div>
          <div className="kv">
            <span className="k">CMS</span>
            <span className="v">WordPress · Elementor</span>
          </div>
          <div className="kv">
            <span className="k">Education</span>
            <span className="v">MS CS · GIKI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
