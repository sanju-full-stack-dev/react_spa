import React from 'react'
import './App.css'

function App() {
  const features = [
    'Fast development setup',
    'Hot reload & live preview',
    'Minimal, focused UI components',
  ]

  const codeSample = [
    "// Welcome to your dev playground",
    "function greet(name) {",
    "  return `Hello, ${name}!`",
    "}",
    "console.log(greet('Coder'))",
  ]

  const redirect = () => {
    const url = 'https://github.com/sanjaysanthosh140/'
    // open in a new tab safely
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Get Started redirect
  const goToGetStarted = () => {
    const url = 'https://saastoola-b3f60.web.app'
    // open external site in new tab safely
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className="welcome-root">
      <div className="bg-blobs" aria-hidden />

      <header className="site-header">
        <div className="brand">Coder<span className="dot">.</span></div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#code">Snippet</a>
        </nav>
      </header>

      <main className="hero">
        <section className="hero-left">
          <h1 className="hero-title">Welcome, Coder</h1>
          <p className="hero-sub">Design, build and ship delightful apps — your code canvas awaits.</p>

          <div className="hero-actions">
            <button className="btn primary" onClick={goToGetStarted}>Get Started</button>
            <button className="btn ghost" onClick={redirect}>View Portfolio</button>
          </div>

          <ul id="features" className="feature-list">
            {features.map((f, i) => (
              <li key={i} className="feature-item">{f}</li>
            ))}
          </ul>
        </section>

        <aside className="hero-right" id="code">
          <div className="code-card" role="region" aria-label="Code preview">
            <div className="code-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <pre className="code-block">
{codeSample.map((line, i) => (
  <code key={i} className={i === codeSample.length -1 ? 'last-line' : ''}>{line}
</code>
))}
            </pre>
          </div>
        </aside>
      </main>

      <footer className="site-footer">Made with ❤️ — Happy hacking</footer>
    </div>
  )
}

export default App
