import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Star, ChevronRight, ChevronLeft, Check
} from 'lucide-react';

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  // Question flow remains the same as in your original component
//   const questionFlow = [
//     // ... (same as your original questionFlow array)
//   ];
const questionFlow = [
    {
      id: 'profession',
      type: 'multiple_choice',
      title: "What's your profession?",
      question: "",
      options: [
        { id: 'student', text: "🎓 Student" },
        { id: 'software_engineer', text: "👨‍💻 Software Engineer" },
        { id: 'designer', text: "🎨 Designer" },
        { id: 'teacher', text: "👩‍🏫 Teacher/Educator" },
        { id: 'healthcare', text: "⚕️ Healthcare Professional" },
        { id: 'marketing', text: "📊 Marketing/PR" },
        { id: 'finance', text: "💵 Finance/Banking" },
        { id: 'entrepreneur', text: "🚀 Entrepreneur" },
        { id: 'artist', text: "🎭 Artist/Creative" },
        { id: 'research', text: "🔬 Research/Scientist" },
        { id: 'government', text: "🏛️ Government/Public Service" },
        { id: 'developer', text: "💻 Developer" },
        { id: 'retired', text: "🌴 Retired" },

        { id: 'other_profession', text: "🤷 Other" }
      ]
    },
    {
      id: 'hobbies',
      type: 'multiple_choice',
      title: "What are your main hobbies?",
      question: "",
      options: [
        { id: 'reading', text: "📚 Reading" },
        { id: 'gaming', text: "🎮 Gaming" },
        { id: 'sports', text: "⚽ Sports/Fitness" },
        { id: 'travel', text: "✈️ Travel" },
        { id: 'cooking', text: "👨‍🍳 Cooking" },
        { id: 'photography', text: "📸 Photography" },
        { id: 'music', text: "🎵 Music" },
        { id: 'art', text: "🎨 Art/Crafts" },
        { id: 'technology', text: "💻 Technology" },
        { id: 'gardening', text: "🌿 Gardening" },
        { id: 'movies', text: "🎬 Movies/TV" },
        { id: 'news', text: "📰 News" },
        { id: 'outdoors', text: "🏕️ Outdoors/Nature" },
        { id: 'other_hobbies', text: "🤷 Other" }
      ]
    },
    {
      id: 'news_consumption',
      type: 'multiple_choice',
      title: "How do you currently get your news?",
      question: "",
     options: [
  { id: 'social_media', text: "📱 Social media feeds (Twitter, Facebook, LinkedIn)", weight: { digital: 3, quick: 2 } },
  { id: 'news_apps', text: "📰 News apps and websites", weight: { traditional: 3, structured: 2 } },
  { id: 'tv_news', text: "📺 TV news channels", weight: { traditional: 3, visual: 2 } },
  { id: 'podcasts', text: "🎧 News podcasts during commute", weight: { audio: 3, deep: 2 } },
  { id: 'newsletters', text: "📧 Email newsletters and summaries", weight: { curated: 3, structured: 3 } },
  { id: 'youtube_video', text: "📷 YouTube or other video-based news channels", weight: { digital: 3, visual: 3 } },
  { id: 'print_newspaper', text: "📰 Print newspapers and magazines", weight: { traditional: 3, detailed: 3 } },
  { id: 'radio_news', text: "📻 Radio news broadcasts", weight: { audio: 3, traditional: 2 } },
  { id: 'messaging_apps', text: "💬 Messaging apps (WhatsApp, Telegram, etc.)", weight: { social: 3, quick: 2 } },
  { id: 'dont_follow', text: "🤷 I don't actively follow news", weight: { casual: 3 } }
]

    },
    {
      id: 'news_categories',
      type: 'topic_selection',
      title: "What news topics interest you most?",
      question: "",
      categories: {
        politics: {
          title: "🏛️ Politics & Government",
          topics: ["US Politics", "International Politics", "Elections", "Policy Changes", "Government News"]
        },
        business: {
          title: "💼 Business & Economy",
          topics: ["Stock Market", "Tech Companies", "Startups", "Economic News", "Cryptocurrency", "Real Estate"]
        },
        technology: {
          title: "💻 Technology",
          topics: ["AI & Machine Learning", "Tech Innovation", "Cybersecurity", "Social Media", "Gadgets", "Space Tech"]
        },
        international: {
          title: "🌍 World News",
          topics: ["International Conflicts", "Global Economy", "Climate Change", "Natural Disasters", "Cultural Events"]
        },
        science: {
          title: "🔬 Science & Health",
          topics: ["Medical Breakthroughs", "Scientific Discoveries", "Health & Wellness", "Environmental Science", "Psychology"]
        },
        entertainment: {
          title: "🎬 Entertainment & Culture",
          topics: ["Celebrity News", "Movies & TV", "Music Industry", "Sports", "Art & Culture", "Gaming"]
        },
        lifestyle: {
          title: "🏠 Lifestyle",
          topics: ["Travel", "Food & Restaurants", "Fashion", "Education", "Parenting", "Personal Finance"]
        }
      }
    },
    // {
    //   id: 'news_depth',
    //   type: 'rating',
    //   title: "How do you prefer your news served?",
    //   question: "",
    //   options: [
    //     { id: 'headlines', text: "Quick headlines with key points", category: 'format' },
    //     { id: 'summaries', text: "Brief summaries (2-3 sentences)", category: 'format' },
    //     { id: 'detailed', text: "Detailed articles with background", category: 'format' },
    //     { id: 'analysis', text: "Expert analysis and opinion", category: 'format' },
    //     { id: 'data_driven', text: "Charts, graphs, and data visualizations", category: 'format' },
    //     { id: 'multiple_sources', text: "Multiple perspectives on same story", category: 'format' }
    //   ]
    // },
    {
      id: 'news_priorities',
      type: 'multiple_choice',
      title: "What matters most to you in news?",
      question: "",
   options: [
  
  { id: 'impact', text: "📈 Stories that impact my life or work", weight: { personal: 3, relevance: 3 } },
  { id: 'trends', text: "📊 Trends and patterns over time", weight: { analytical: 3, trends: 3 } },
  { id: 'global', text: "🌍 Understanding the bigger picture", weight: { global: 3, context: 3 } },
  { id: 'local', text: "🏠 Local and community news", weight: { local: 3, community: 2 } },
  { id: 'positive', text: "✨ Positive and inspiring stories", weight: { positive: 3, inspiration: 2 } },
  { id: 'investigative', text: "🕵️ Investigative journalism and in-depth reports", weight: { depth: 3, accountability: 3 } },
  { id: 'balanced', text: "⚖️ Balanced and unbiased reporting", weight: { fairness: 3, neutrality: 3 } },
  { id: 'expert', text: "🎯 Expert opinions and analysis", weight: { expertise: 3, insight: 2 } },
  { id: 'visual', text: "📷 Visual storytelling (photos, videos, infographics)", weight: { visual: 3, engaging: 2 } },
  { id: 'public_reaction', text: "💬 Public reaction and social discussion", weight: { social: 3, opinion: 2 } },
  { id: 'historical', text: "📚 Historical context and background", weight: { context: 3, depth: 2 } }
]

    },
    // {
    //   id: 'information_style',
    //   type: 'slider',
    //   title: "Customize your news experience",
    //   question: "",
    //   sliders: [
    //     { 
    //       id: 'speed_vs_depth', 
    //       label: 'Information Processing', 
    //       left: 'Quick updates', 
    //       right: 'In-depth analysis',
    //       leftWeight: { quick: 3, surface: 2 },
    //       rightWeight: { deep: 3, analytical: 2 }
    //     },
    //     { 
    //       id: 'global_vs_local', 
    //       label: 'Geographic Focus', 
    //       left: 'Local & national news', 
    //       right: 'International & global',
    //       leftWeight: { local: 3, national: 2 },
    //       rightWeight: { international: 3, global: 2 }
    //     },
    //     { 
    //       id: 'breaking_vs_analysis', 
    //       label: 'News Timing', 
    //       left: 'Breaking news first', 
    //       right: 'Well-researched stories',
    //       leftWeight: { breaking: 3, immediate: 2 },
    //       rightWeight: { researched: 3, quality: 2 }
    //     }
    //   ]
    // },
    {
      id: 'reading_behavior',
      type: 'multiple_choice',
      title: "How do you read news?",
      question: "",
      options: [
        { id: 'quick_scan', text: "⚡ 2-5 minutes - Just scan headlines", weight: { time_limited: 3, headlines: 3 } },
        { id: 'coffee_read', text: "☕ 10-15 minutes - Read while having coffee", weight: { moderate: 3, routine: 2 } },
        { id: 'commute_digest', text: "🚇 15-30 minutes - Read during commute", weight: { extended: 2, mobile: 3 } },
        { id: 'deep_dive', text: "📚 30+ minutes - I like to dive deep", weight: { thorough: 3, analytical: 2 } },
        { id: 'throughout_day', text: "🔄 Check updates throughout the day", weight: { frequent: 3, continuous: 2 } }
      ]
    }
  ];
  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const nextStep = () => {
    if (currentStep < questionFlow.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Pass assessment answers to email collection
      navigate('/email-collection', { state: { assessmentAnswers: answers } });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/');
    }
  };

  const handleMultipleChoice = (questionId, optionId) => {
    setAnswers(prev => {
      const currentAnswers = prev[questionId] || [];
      
      // Toggle selection
      const newAnswers = currentAnswers.includes(optionId)
        ? currentAnswers.filter(id => id !== optionId)
        : [...currentAnswers, optionId];
      
      return {
        ...prev,
        [questionId]: newAnswers
      };
    });
  };

//   // renderQuestion function remains the same as in your original component
//   const renderQuestion = () => {
//     // ... (same as your original renderQuestion function)
//   };
const renderQuestion = () => {
    const question = questionFlow[currentStep];
    
    switch (question.type) {
      case 'multiple_choice':
        return (
          <div className="space-y-4">
            {/* <h3 className="text-2xl font-bold mb-6">{question.title}</h3> */}
            <p className="text-gray-600 mb-6">{question.question}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.options.map(option => {
                const isSelected = answers[question.id]?.includes(option.id);
                return (
                  <button
                    key={option.id}
                    onClick={() => handleMultipleChoice(question.id, option.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md flex items-start gap-3 ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-xl">{option.text.split(' ')[0]}</div>
                    <div className="flex-1">{option.text.substring(option.text.indexOf(' ') + 1)}</div>
                    {isSelected && (
                      <div className="ml-auto text-blue-500">
                        <Check className="w-5 h-5" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 'scenario':
        return (
          <div className="space-y-4">
            {/* <h3 className="text-2xl font-bold mb-6">{question.title}</h3> */}
            <div className="space-y-3">
              {question.options.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(question.id, option.id)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                    answers[question.id] === option.id 
                      ? 'border-blue-500 bg-blue-50 text-blue-700' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">{option.text.split(' ')[0]}</div>
                    <div className="flex-1">{option.text.substring(option.text.indexOf(' ') + 1)}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'topic_selection':
        return (
          <div className="space-y-6">
            {/* <h3 className="text-2xl font-bold mb-6">{question.title}</h3> */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm">
                <strong>💡 Tip:</strong> Select topics you want in your Monday morning email. 
                We'll find the top 10 stories from these categories each week.
              </p>
            </div>
            {Object.entries(question.categories).map(([categoryId, category]) => (
              <div key={categoryId} className="bg-white border rounded-lg p-6">
                <h4 className="font-bold text-lg mb-4">{category.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.topics.map(topic => (
                    <button
                      key={topic}
                      onClick={() => {
                        const currentTopics = answers[question.id] || {};
                        const categoryTopics = currentTopics[categoryId] || [];
                        const isSelected = categoryTopics.includes(topic);
                        
                        const updatedCategoryTopics = isSelected
                          ? categoryTopics.filter(t => t !== topic)
                          : [...categoryTopics, topic];
                        
                        handleAnswer(question.id, {
                          ...currentTopics,
                          [categoryId]: updatedCategoryTopics
                        });
                      }}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                        answers[question.id]?.[categoryId]?.includes(topic)
                          ? 'border-blue-500 bg-blue-500 text-white'
                          : 'border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Selected: {answers[question.id]?.[categoryId]?.length || 0} topics
                </p>
              </div>
            ))}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm">
                Total topics selected: {
                  Object.values(answers[question.id] || {})
                    .reduce((total, topics) => total + topics.length, 0)
                }
              </p>
            </div>
          </div>
        );

      case 'rating':
        return (
          <div className="space-y-6">
            {/* <h3 className="text-2xl font-bold mb-6">{question.title}</h3> */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 text-sm">
                <strong>📊 This helps us format your news:</strong> Rate how much you prefer each format (1 = not interested, 5 = love it)
              </p>
            </div>
            {question.options.map(option => (
              <div key={option.id} className="bg-white border rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium">{option.text}</span>
                  <span className="text-lg font-bold text-blue-600">
                    {answers[question.id]?.[option.id] || 0}/5
                  </span>
                </div>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map(rating => (
                    <button
                      key={rating}
                      onClick={() => {
                        const currentRatings = answers[question.id] || {};
                        handleAnswer(question.id, {
                          ...currentRatings,
                          [option.id]: rating
                        });
                      }}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        (answers[question.id]?.[option.id] || 0) >= rating
                          ? 'bg-blue-500 border-blue-500 text-white'
                          : 'border-gray-300 hover:border-blue-300'
                      }`}
                    >
                      <Star className={`w-5 h-5 mx-auto ${
                        (answers[question.id]?.[option.id] || 0) >= rating ? 'fill-current' : ''
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'slider':
        return (
          <div className="space-y-8">
            {/* <h3 className="text-2xl font-bold mb-6">{question.title}</h3> */}
            {question.sliders.map(slider => (
              <div key={slider.id} className="bg-white border rounded-lg p-6">
                <h4 className="font-semibold mb-4">{slider.label}</h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{slider.left}</span>
                    <span>{slider.right}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={answers[question.id]?.[slider.id] || 50}
                    onChange={(e) => {
                      const currentSliders = answers[question.id] || {};
                      handleAnswer(question.id, {
                        ...currentSliders,
                        [slider.id]: parseInt(e.target.value)
                      });
                    }}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-center text-lg font-medium text-blue-600">
                    {answers[question.id]?.[slider.id] || 50}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-6">
          {/* <button
            onClick={prevStep}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </button> */}
        </div>
        
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">News Interest Profiler</h1>
            <span className="text-gray-500">
              Step {currentStep + 1} of {questionFlow.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questionFlow.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-600 mt-2">
            {Math.round(((currentStep + 1) / questionFlow.length) * 100)}% complete - Creating your personalized news profile
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {questionFlow[currentStep].title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
          </div>
          
          {renderQuestion()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">
              Question {currentStep + 1} of {questionFlow.length}
            </div>
            <div className="flex space-x-2">
              {questionFlow.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={nextStep}
            disabled={!answers[questionFlow[currentStep].id] || 
              (questionFlow[currentStep].type === 'multiple_choice' && 
               answers[questionFlow[currentStep].id]?.length === 0)}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {currentStep === questionFlow.length - 1 ? 'Complete Profile' : 'Next Question'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/muba.today.svg" 
                  alt="Muba.today Logo" 
                  className="h-6 w-auto"
                />
              </div>
              <p className="text-slate-600 mb-4 max-w-md">
                Your AI-powered news companion. Get the top 10 stories that matter to you, 
                delivered every Monday morning. No fluff, just clarity.
              </p>
              <div className="flex space-x-4">
                <button className="text-slate-400 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="text-slate-400 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="text-slate-400 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => navigate('/')}
                    className="text-slate-600 hover:text-purple-600 transition-colors text-left"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/')}
                    className="text-slate-600 hover:text-purple-600 transition-colors text-left"
                  >
                    How It Works
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => navigate('/about')} 
                    className="text-slate-600 hover:text-purple-600 transition-colors text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/contact')} 
                    className="text-slate-600 hover:text-purple-600 transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-600 text-sm mb-4 md:mb-0">
                © 2024 NewsIQ. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <button 
                  onClick={() => navigate('/privacy-policy')} 
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => navigate('/terms-of-service')}
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => navigate('/cookie-policy')}
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Assessment;