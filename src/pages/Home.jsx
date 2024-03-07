import React from 'react'

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="login-register">Login/Register</div>
      </header>
      <main>
        <h1>Good evening/morning avi!</h1>
        <div className="search-section">
          <input type="text" placeholder="from" />
          <input type="text" placeholder="to" />
          <button className="search-button">search</button>
        </div>
        <section className="popular-guides">
          <div className="guide">1</div>
          <div className="guide">2</div>
          <div className="guide">3</div>
          <div className="guide">4</div>
        </section>
        <div className="plan-trip">
          <button className="plan-trip-button">Button</button>
        </div>
        <div className="explore-destinations">
          <button className="explore-button">Explore destinations</button>
        </div>
      </main>
      <footer className="App-footer">
        [Footer]
      </footer>
    </div>
  )
}
