import { Brain, CheckCircle2, Circle } from 'lucide-react';

interface ProgressItem {
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  progress?: number;
  icon: 'brain';
}

export function Progress() {
  const progressItems: ProgressItem[] = [
    {
      title: 'Machine Learning Specialization by Andrew Ng',
      description:
        'Completed the full ML specialization, covering supervised and unsupervised learning, linear regression, logistic regression, and neural networks.',
      status: 'completed',
      progress: 100,
      icon: 'brain',
    },
    {
      title: 'Titanic Dataset Prediction',
      description:
        'Built a machine learning model to predict Titanic survivors, achieving 79% accuracy on the test set. Demonstrates data preprocessing, feature engineering, and model evaluation..',
      progress: 100,
      status: 'completed',
      icon: 'brain',
    },
    {
      title: 'Improving Neural Networks Course',
      description:
        'Completed a course focused on advanced neural network techniques, regularization, optimization, and hyperparameter tuning.',
      status: 'completed',
      progress: 100,
      icon: 'brain',
    },
    {
      title: 'ML with PyTorch and Scikit-Learn (first 9 of 19 chapters)',
      description:
        'Completed the first 9 chapters, covering core ML concepts with hands-on PyTorch and Scikit-Learn implementations. Remaining chapters are still in progress.',
      status: 'in-progress',
      progress: 47,
      icon: 'brain',
    },
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'brain':
        return Brain;
      default:
        return Brain;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 dark:text-green-400';
      case 'in-progress':
        return 'text-blue-600 dark:text-cyan-400';
      case 'planned':
        return 'text-gray-400 dark:text-gray-500';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">My Progress</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Current learning journey and skill development
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800"></div>

          <div className="space-y-8">
            {progressItems.map((item, index) => {
              const Icon = getIcon(item.icon);
              const statusColor = getStatusColor(item.status);

              return (
                <div key={index} className="relative flex gap-6">
                  <div className="flex-shrink-0 w-16 flex justify-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-white dark:bg-[#161b22] border-2 ${
                        item.status === 'completed'
                          ? 'border-green-500'
                          : item.status === 'in-progress'
                          ? 'border-blue-500 dark:border-cyan-400'
                          : 'border-gray-300 dark:border-gray-700'
                      } flex items-center justify-center z-10 transition-all duration-300`}
                    >
                      <Icon className={`w-7 h-7 ${statusColor}`} />
                    </div>
                  </div>

                  <div className="flex-1 pb-8">
                    <div className="bg-white dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg dark:hover:shadow-cyan-500/10 transition-all duration-300">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        {item.status === 'completed' ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                        ) : (
                          <Circle className={`w-5 h-5 ${statusColor} flex-shrink-0`} />
                        )}
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400 capitalize">
                            {item.status.replace('-', ' ')}
                          </span>
                          <span className={`font-medium ${statusColor}`}>
                            {item.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              item.status === 'completed'
                                ? 'bg-green-500'
                                : item.status === 'in-progress'
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400'
                                : 'bg-gray-400 dark:bg-gray-600'
                            }`}
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
