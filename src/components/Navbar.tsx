import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';
import logoLight from './63e54f69-5c1f-4b54-b18c-a4c6593d5380.png';
import logoDark from './305d4988-8b34-4b2a-adc1-90e272e5b73e.png';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export function Navbar({ currentTab, onTabChange }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = ['Home', 'Projects', 'Notes', 'Progress'];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={theme === 'light' ? logoLight : logoDark}
              alt="Logo"
              className="h-10 w-auto transition-all duration-300"
            />
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:flex items-center space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                  currentTab === tab
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0d1117] overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 py-3' : 'max-h-0'
        }`}
      >
        <div className="px-4 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                onTabChange(tab);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                currentTab === tab
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
