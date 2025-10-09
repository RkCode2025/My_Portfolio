import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Home() {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/RkCode2025' },
    { icon: Twitter, label: 'Twitter/X', href: 'https://twitter.com/Rakshit5352535' }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 blur-3xl opacity-20 animate-pulse"></div>

          <div className="relative text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white transition-all duration-300">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Syphax</span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-light">
                Exploring AI, code, and creation
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Currently exploring machine learning, deep learning and NLP.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-[#161b22] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            <div className="pt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for collaboration
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
