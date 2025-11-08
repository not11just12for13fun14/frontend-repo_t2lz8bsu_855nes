import Hero from './components/Hero';
import Scene from './components/Scene';
import Quotes from './components/Quotes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-rose-900">
      <Hero />
      <Scene />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
