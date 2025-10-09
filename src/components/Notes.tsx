import { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface ChapterInfo {
  title: string;
  description: string;
  link: string;
}

const chapterData: { [key: string]: { description: string; chapters: ChapterInfo[] } } = {
  'Notes for Machine Learning with PyTorch and Scikit-Learn Chapters 2–3': {
    description: 'These chapters cover the basics of training machine learning algorithms and a tour of classifiers using Scikit-Learn.',
    chapters: [
      {
        title: 'Chapter 2: Training Simple Machine Learning Algorithms for Classification',
        description:
          'Introduction to training ML algorithms for classification tasks, including data preparation, model selection, and evaluation metrics.',
        link: 'https://www.notion.so/Chapter-2-Training-Simple-Machine-Learning-Algorithms-for-Classification-24f17241bce58004958cd1886e621505?v=24f17241bce5809294b3000c49592101&source=copy_link',
      },
      {
        title: 'Chapter 3: A Tour of Machine Learning Classifiers Using Scikit-Learn',
        description:
          'Exploration of various ML classifiers using Scikit-Learn, including decision trees, support vector machines, and k-nearest neighbors.',
        link: 'https://www.notion.so/Chapter-3-A-Tour-of-Machine-Learning-Classifiers-Using-Scikit-Learn-25317241bce5809ba6a7cfb3f541f859?v=24f17241bce5809294b3000c49592101&source=copy_link',
      },
    ],
  },
  'Notes for Machine Learning with PyTorch and Scikit-Learn Chapters 4–5': {
    description: 'These chapters focus on data preprocessing and hyperparameter tuning to improve model performance.',
    chapters: [
      {
        title: 'Chapter 4: Data Preprocessing',
        description:
          'Techniques for preparing data, handling missing values, encoding categorical variables, and feature scaling.',
        link: 'https://www.notion.so/Chapter-4-Data-Preprocessing-25917241bce580ea8065e4bd0247c0c9?v=24f17241bce5809294b3000c49592101&source=copy_link',
      },
      {
        title: 'Chapter 5: Hyperparameter Tuning',
        description:
          'Methods like grid search, random search, and cross-validation to optimize model hyperparameters for better performance.',
        link: 'https://www.notion.so/Chapter-5-HyperParameter-Tuning-25d17241bce5802e9480c75d42185564?v=24f17241bce5809294b3000c49592101&source=copy_link',
      },
    ],
  },
};

export function Notes() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (section: string) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              My Notes
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Organized chapter-wise notes and summaries
          </p>
        </div>

        <div className="space-y-6">
          {Object.entries(chapterData).map(([section, data]) => (
            <div
              key={section}
              className="group bg-white dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-in-out"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleExpand(section)}
                className="w-full text-left flex items-center justify-between text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
              >
                <span>{section}</span>
                <span className={`text-gray-500 dark:text-gray-400 text-2xl transform transition-transform duration-300 ${expanded === section ? 'rotate-180' : 'rotate-0'}`}>
                  +
                </span>
              </button>

              {/* Section Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-2">{data.description}</p>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expanded === section ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {data.chapters.map((chapter, idx) => (
                  <div
                    key={idx}
                    className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3 p-2 rounded-xl hover:bg-blue-50 dark:hover:bg-cyan-900 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <BookOpen className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110" />
                      <span className="text-sm font-medium text-blue-600 dark:text-cyan-400 uppercase tracking-wide">
                        {chapter.title.split(':')[0]}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 transition-all duration-300 hover:text-blue-600 dark:hover:text-cyan-400">
                      {chapter.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{chapter.description}</p>
                    <a
                      href={chapter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-cyan-400 text-sm hover:underline hover:text-blue-700 dark:hover:text-cyan-300 transition-colors duration-300"
                    >
                      Read Chapter
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
