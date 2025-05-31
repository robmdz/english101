const Grammar = () => {
  const grammarTopics = [
    {
      title: "Articles",
      content: [
        { rule: "Use 'a' before words that begin with a consonant sound", example: "a book, a university" },
        { rule: "Use 'an' before words that begin with a vowel sound", example: "an apple, an hour" },
        { rule: "Use 'the' for specific or unique things", example: "the sun, the moon" }
      ]
    },
    {
      title: "Present Simple",
      content: [
        { rule: "Use for habits and routines", example: "I play tennis every Sunday" },
        { rule: "Use for general truths", example: "The sun rises in the east" },
        { rule: "Use for scheduled events", example: "The train leaves at 6 PM" }
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
            <a href="/resources" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Resources</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Grammar & Articles</h1>
        <div className="space-y-8">
          {grammarTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{topic.title}</h3>
              <div className="space-y-4">
                {topic.content.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 mb-1">{item.rule}</p>
                    <p className="text-gray-500 italic">Example: {item.example}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grammar; 