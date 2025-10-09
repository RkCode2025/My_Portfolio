import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Notes } from './components/Notes';
import { Progress } from './components/Progress';
import { Footer } from './components/Footer';

function App() {
  const [currentTab, setCurrentTab] = useState('Home');

  const renderContent = () => {
    switch (currentTab) {
      case 'Home':
        return <Home />;
      case 'Projects':
        return <Projects />;
      case 'Notes':
        return <Notes />;
      case 'Progress':
        return <Progress />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0d1117] transition-colors duration-300">
        <Navbar currentTab={currentTab} onTabChange={setCurrentTab} />
        <main className="transition-opacity duration-300">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
