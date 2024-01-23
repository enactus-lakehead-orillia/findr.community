import './App.css';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="app-body">
      <Header />
      <h1>Findr Communities</h1>
      <main>
        <section id="about-section">
          {/* Content for the About section */}
        </section>
        <section id="services-section">
          {/* Content for the Services section */}
        </section>
        <section id="contact-section">
          {/* Content for the Contact section */}
        </section>
        {/* Other sections/components */}
      </main>
    </div>
  );
}

export default App;
