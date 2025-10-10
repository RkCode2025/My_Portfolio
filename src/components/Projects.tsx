import React from 'react';
import { Github, ExternalLink, BookOpen, Cpu, Database, Binary } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  icon?: 'book' | 'cpu' | 'database'| 'binary';
}

const iconMap = {
  book: BookOpen,
  cpu: Cpu,
  database: Database,
  binary: Binary,
};

export function Projects() {
  const projects: Project[] = [
    {
  title: 'MLP for Handwritten Digit Recognition from Scratch',
  description:
    'Implementation of a Multilayer Perceptron (MLP) from scratch using NumPy. Demonstrating how feedforward neural network can learn to recognize handwritten digits (MNIST) through forward propagation',
  tags: ['Python', 'NumPy', 'Machine Learning', 'Neural Networks', 'MNIST'],
  githubUrl: 'https://github.com/RkCode2025/Hand_Digit_Recognition_with_Multilayer_Perceptron',
  icon: 'binary',
    },
    {
      title: 'Perceptron Implementation using Scikit-learn and NumPy',
      description:
        'A clean and simple implementation of the Perceptron algorithm from scratch using NumPy and Scikit-learn. Demonstrates how linear classifiers learn decision boundaries through iterative weight updates.',
      tags: ['Python', 'NumPy', 'Scikit-learn', 'Machine Learning'],
      githubUrl: 'https://github.com/RkCode2025/Perceptron-implementation-using-scikit-learn-and-Numpy',
      icon: 'cpu',
    },
    {
      title: 'Linear Regression: Step-by-Step Implementation',
      description:
        'Detailed mathematical and programmatic breakdown of Linear Regression using Gradient Descent. Includes derivations, visualizations, and practical insights into model optimization.',
      tags: ['Python', 'NumPy', 'Mathematics', 'Regression'],
      githubUrl: 'https://github.com/RkCode2025/Linear-Regression-step-by-step-detailed-Implementation-with-Gradient-Descent',
      icon: 'cpu',
    },
    {
      title: 'Amazon Bestseller Books 2009–2019 Analysis',
      description:
        'Data analysis project exploring trends, categories, and insights from Amazon bestseller books between 2009 and 2019 using Python libraries for visualization and data cleaning.',
      tags: ['Python', 'Pandas', 'Data Visualization', 'Matplotlib'],
      githubUrl: 'https://github.com/RkCode2025/Amazon-Bestseller-Books-2009-2019-Analysis',
      icon: 'database',
    },
    {
      title: 'Notes of ML with PyTorch and Scikit-Learn by Sebastian Raschka',
      description:
        'Comprehensive, chapter-by-chapter notes and code examples from the book “Machine Learning with PyTorch and Scikit-Learn.” Covers core ML concepts with hands-on implementations.',
      tags: ['PyTorch', 'Scikit-learn', 'Machine Learning', 'Notes'],
      githubUrl: 'https://github.com/RkCode2025/Notes-of-ML-with-Pytorch-and-Scikit-Learn-by-Sebastian-Raschka',
      icon: 'book',
    },
    {
      title: 'Adaline from Scratch (by ML with PyTorch and Scikit-Learn)',
      description:
        'Implementation of the Adaline (Adaptive Linear Neuron) algorithm completely from scratch, demonstrating concepts of gradient descent and continuous value optimization.',
      tags: ['Python', 'NumPy', 'PyTorch', 'Deep Learning'],
      githubUrl: 'https://github.com/RkCode2025/Adaline-from-scratch-by-Machine-Learning-with-Pytorch-and-Scikit-learn-by-Sebastian-Raschka',
      icon: 'cpu',
    },
  ];

  const getIcon = (icon?: string) => {
    switch (icon) {
      case 'book':
        return BookOpen;
      case 'binary':
        return Binary;
      case 'cpu':
        return Cpu;
      case 'database':
        return Database;
      default:
        return BookOpen;
    }
  };

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Some of my recent work and experiments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = getIcon(project.icon);
            return (
              <div
                key={index}
                className="group bg-white dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl dark:hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
