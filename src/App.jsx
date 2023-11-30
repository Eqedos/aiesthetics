import React, { useState } from 'react';
import NavBar from './components/NavBar';
import DesignToolForm from './components/DesignToolForm';


const HeroSection = ({ onDesignClick }) => (
  <div className="flex flex-col items-center justify-center pt-16 mt-16 pb-8">
    <h1 className="text-5xl font-bold mb-2" style={{ color: '#263238' }}>Design Your Space</h1>
    <p className="text-xl mb-4">Customize your room with our sleek design tool.</p>
    <button
      onClick={onDesignClick}
      className="inline-block px-6 py-3 border border-black rounded-full font-bold hover:bg-black hover:text-white transition-colors"
      style={{ borderColor: '#263238' }}
    >
      Start Designing
    </button>
  </div>
);

const FeatureCard = ({ title, description }) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow-md" style={{ maxWidth: '300px' }}>
    <h2 className="font-bold text-lg">{title}</h2>
    <p>{description}</p>
  </div>
);

const MainContent = () => (
  <main className="w-full max-w-7xl mx-auto px-4 py-8" id="design-section">
    <div className="flex justify-center items-start flex-wrap gap-4">
      <FeatureCard
        title="Intuitive Controls"
        description="Navigate through our tool with ease and design without any hassle. What are you waiting for?"
      />
      <FeatureCard
        title="Real Furniture"
        description="Our tool uses real furniture from our partners to give you the most accurate representation of your room."
      />
      <FeatureCard
        title="Live Preview"
        description="View changes in real-time as you customize your room to perfection. Now onto the fun part!"
      />
    </div>
  </main>
);

const DesignTool = () => (
  <div className="py-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Design Tool</h2>
      <p>Start using the design tool to create your ideal room.</p>
      {/* Additional content for the design tool goes here */}
    </div>
    <div className="mt-8">
      <DesignToolForm />
      </div>
  </div>
);

const App = () => {
  const [showDesignTool, setShowDesignTool] = useState(false);

  const handleDesignClick = () => {
    setShowDesignTool(true);
    setTimeout(() => {
      document.getElementById('design-tool').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <NavBar />
      <HeroSection onDesignClick={handleDesignClick} />
      <MainContent />
      <div id="design-tool">
      {showDesignTool && <DesignTool/>}
      </div>
    </div>
  );
};

export default App;