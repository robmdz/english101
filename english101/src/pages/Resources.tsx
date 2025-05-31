

const Resources = () => {
  const resources = [
    {
      category: "Online Courses",
      items: [
        { name: "BBC Learning English", link: "https://www.bbc.co.uk/learningenglish" },
        { name: "Coursera English Courses", link: "https://www.coursera.org/browse/language-learning/english" },
        { name: "edX English Programs", link: "https://www.edx.org/learn/english" }
      ]
    },
    {
      category: "Practice Tools",
      items: [
        { name: "Duolingo", link: "https://www.duolingo.com" },
        { name: "Memrise", link: "https://www.memrise.com" },
        { name: "Quizlet", link: "https://quizlet.com" }
      ]
    },
    {
      category: "Reading Materials",
      items: [
        { name: "Project Gutenberg", link: "https://www.gutenberg.org" },
        { name: "News in Levels", link: "https://www.newsinlevels.com" },
        { name: "ESL Fast", link: "https://www.eslfast.com" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <nav className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <a href="/" className="text-3xl font-bold text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300">English 101</a>
          <div className="flex items-center space-x-4">
            <a href="/vocabulary" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Vocabulary</a>
            <a href="/grammar" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Grammar</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Resources</h1>
        <div className="space-y-8">
          {resources.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <p className="text-blue-600 hover:text-blue-800">{item.name}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources; 