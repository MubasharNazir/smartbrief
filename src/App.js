// import React, { useState } from 'react';
// import { db } from './firebase';
// import { collection, addDoc } from "firebase/firestore";
// import { 
//   Mail, Star, Clock, TrendingUp, BookOpen, Briefcase, Play, Globe,
//   ChevronRight, ChevronLeft, Check, Zap, Target, Users, Award,
//   BarChart3, Lightbulb, Coffee, Gamepad2, Music, Camera, Palette,
//   Code, Rocket, Heart, Shield, Smartphone, Car, Home, Plane,
//   DollarSign, PieChart, Newspaper, Headphones, Film, Book, Send,
//   Calendar, Database, CheckCircle, Eye, Settings, Brain
// } from 'lucide-react';

// const WeeklyNewsProfiler = () => {
//   const [currentView, setCurrentView] = useState('landing');
//   const [currentStep, setCurrentStep] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [userProfile, setUserProfile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [emailData, setEmailData] = useState({ name: '', email: '', country: '' });

//   // Country options (ISO-3166 common list)
//   const countryOptions = [
//     'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan',
//     'Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi',
//     'Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo (Congo-Brazzaville)','Costa Rica','Côte d’Ivoire','Croatia','Cuba','Cyprus','Czechia',
//     'Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic',
//     'Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia',
//     'Fiji','Finland','France',
//     'Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana',
//     'Haiti','Honduras','Hungary',
//     'Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy',
//     'Jamaica','Japan','Jordan',
//     'Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan',
//     'Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg',
//     'Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar',
//     'Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','North Macedonia','Norway',
//     'Oman',
//     'Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal',
//     'Qatar',
//     'Romania','Russia','Rwanda',
//     'Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria',
//     'Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu',
//     'Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan',
//     'Vanuatu','Venezuela','Vietnam',
//     'Yemen',
//     'Zambia','Zimbabwe'
//   ];

//   // Focused question flow for news interest profiling
//   const questionFlow = [
//     {
//       id: 'news_consumption',
//       type: 'scenario',
//       title: "How do you currently get your news?",
//       question: "",
//       options: [
//         { id: 'social_media', text: "📱 Social media feeds (Twitter, Facebook, LinkedIn)", weight: { digital: 3, quick: 2 } },
//         { id: 'news_apps', text: "📰 News apps and websites", weight: { traditional: 3, structured: 2 } },
//         { id: 'tv_news', text: "📺 TV news channels", weight: { traditional: 3, visual: 2 } },
//         { id: 'podcasts', text: "🎧 News podcasts during commute", weight: { audio: 3, deep: 2 } },
//         { id: 'newsletters', text: "📧 Email newsletters and summaries", weight: { curated: 3, structured: 3 } },
//         { id: 'dont_follow', text: "🤷 I don't actively follow news", weight: { casual: 3 } }
//       ]
//     },
//     {
//       id: 'news_categories',
//       type: 'topic_selection',
//       title: "What news topics interest you most?",
//       question: "",
//       categories: {
//         politics: {
//           title: "🏛️ Politics & Government",
//           topics: ["US Politics", "International Politics", "Elections", "Policy Changes", "Government News"]
//         },
//         business: {
//           title: "💼 Business & Economy",
//           topics: ["Stock Market", "Tech Companies", "Startups", "Economic News", "Cryptocurrency", "Real Estate"]
//         },
//         technology: {
//           title: "💻 Technology",
//           topics: ["AI & Machine Learning", "Tech Innovation", "Cybersecurity", "Social Media", "Gadgets", "Space Tech"]
//         },
//         international: {
//           title: "🌍 World News",
//           topics: ["International Conflicts", "Global Economy", "Climate Change", "Natural Disasters", "Cultural Events"]
//         },
//         science: {
//           title: "🔬 Science & Health",
//           topics: ["Medical Breakthroughs", "Scientific Discoveries", "Health & Wellness", "Environmental Science", "Psychology"]
//         },
//         entertainment: {
//           title: "🎬 Entertainment & Culture",
//           topics: ["Celebrity News", "Movies & TV", "Music Industry", "Sports", "Art & Culture", "Gaming"]
//         },
//         lifestyle: {
//           title: "🏠 Lifestyle",
//           topics: ["Travel", "Food & Restaurants", "Fashion", "Education", "Parenting", "Personal Finance"]
//         }
//       }
//     },
//     {
//       id: 'news_depth',
//       type: 'rating',
//       title: "How do you prefer your news served?",
//       question: "",
//       options: [
//         { id: 'headlines', text: "Quick headlines with key points", category: 'format' },
//         { id: 'summaries', text: "Brief summaries (2-3 sentences)", category: 'format' },
//         { id: 'detailed', text: "Detailed articles with background", category: 'format' },
//         { id: 'analysis', text: "Expert analysis and opinion", category: 'format' },
//         { id: 'data_driven', text: "Charts, graphs, and data visualizations", category: 'format' },
//         { id: 'multiple_sources', text: "Multiple perspectives on same story", category: 'format' }
//       ]
//     },
//     {
//       id: 'news_priorities',
//       type: 'scenario',
//       title: "What matters most to you in news?",
//       question: "",
//       options: [
//         { id: 'breaking', text: "🚨 Breaking news and real-time updates", weight: { urgency: 3, breaking: 3 } },
//         { id: 'impact', text: "📈 Stories that impact my life or work", weight: { personal: 3, relevance: 3 } },
//         { id: 'trends', text: "📊 Trends and patterns over time", weight: { analytical: 3, trends: 3 } },
//         { id: 'global', text: "🌍 Understanding the bigger picture", weight: { global: 3, context: 3 } },
//         { id: 'local', text: "🏠 Local and community news", weight: { local: 3, community: 2 } },
//         { id: 'positive', text: "✨ Positive and inspiring stories", weight: { positive: 3, inspiration: 2 } }
//       ]
//     },
//     {
//       id: 'information_style',
//       type: 'slider',
//       title: "Customize your news experience",
//       question: "",
//       sliders: [
//         { 
//           id: 'speed_vs_depth', 
//           label: 'Information Processing', 
//           left: 'Quick updates', 
//           right: 'In-depth analysis',
//           leftWeight: { quick: 3, surface: 2 },
//           rightWeight: { deep: 3, analytical: 2 }
//         },
//         { 
//           id: 'global_vs_local', 
//           label: 'Geographic Focus', 
//           left: 'Local & national news', 
//           right: 'International & global',
//           leftWeight: { local: 3, national: 2 },
//           rightWeight: { international: 3, global: 2 }
//         },
//         { 
//           id: 'breaking_vs_analysis', 
//           label: 'News Timing', 
//           left: 'Breaking news first', 
//           right: 'Well-researched stories',
//           leftWeight: { breaking: 3, immediate: 2 },
//           rightWeight: { researched: 3, quality: 2 }
//         }
//       ]
//     },
//     {
//       id: 'reading_behavior',
//       type: 'scenario',
//       title: "How do you read news?",
//       question: "",
//       options: [
//         { id: 'quick_scan', text: "⚡ 2-5 minutes - Just scan headlines", weight: { time_limited: 3, headlines: 3 } },
//         { id: 'coffee_read', text: "☕ 10-15 minutes - Read while having coffee", weight: { moderate: 3, routine: 2 } },
//         { id: 'commute_digest', text: "🚇 15-30 minutes - Read during commute", weight: { extended: 2, mobile: 3 } },
//         { id: 'deep_dive', text: "📚 30+ minutes - I like to dive deep", weight: { thorough: 3, analytical: 2 } },
//         { id: 'throughout_day', text: "🔄 Check updates throughout the day", weight: { frequent: 3, continuous: 2 } }
//       ]
//     }
//   ];

//   const calculateNewsProfile = () => {
//     const scores = {
//       politics: 0,
//       business: 0,
//       technology: 0,
//       international: 0,
//       science: 0,
//       entertainment: 0,
//       lifestyle: 0
//     };

//     const preferences = {
//       format: 'summary', // headlines, summary, detailed, analysis
//       delivery: 'structured', // quick, structured, deep
//       focus: 'balanced', // local, national, international
//       timing: 'morning' // fixed for Monday morning
//     };

//     // Process topic selections (most important for news categorization)
//     if (answers.news_categories) {
//       Object.entries(answers.news_categories).forEach(([category, topics]) => {
//         scores[category] = topics.length * 10; // High weight for explicit topic selection
//       });
//     }

//     // Process other answers for preferences and additional scoring
//     Object.entries(answers).forEach(([questionId, answer]) => {
//       const question = questionFlow.find(q => q.id === questionId);
      
//       if (question && question.type === 'rating') {
//         // Process format preferences
//         Object.entries(answer).forEach(([optionId, rating]) => {
//           if (optionId === 'headlines' && rating >= 4) preferences.format = 'headlines';
//           if (optionId === 'detailed' && rating >= 4) preferences.format = 'detailed';
//           if (optionId === 'analysis' && rating >= 4) preferences.format = 'analysis';
//         });
//       }
      
//       if (question && question.type === 'slider') {
//         Object.entries(answer).forEach(([sliderId, value]) => {
//           if (sliderId === 'speed_vs_depth') {
//             preferences.delivery = value < 30 ? 'quick' : value > 70 ? 'deep' : 'structured';
//           }
//           if (sliderId === 'global_vs_local') {
//             preferences.focus = value < 30 ? 'local' : value > 70 ? 'international' : 'balanced';
//           }
//         });
//       }

//       if (question && question.type === 'scenario') {
//         const option = question.options.find(opt => opt.id === answer);
//         if (option && option.weight) {
//           // Add contextual scoring based on scenario answers
//           if (questionId === 'reading_behavior') {
//             if (answer === 'quick_scan') preferences.delivery = 'quick';
//             if (answer === 'deep_dive') preferences.delivery = 'deep';
//           }
//         }
//       }
//     });

//     // Normalize scores and determine top interests
//     const maxScore = Math.max(...Object.values(scores));
//     const normalizedScores = Object.entries(scores)
//       .map(([category, score]) => ({
//         category,
//         score,
//         percentage: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0
//       }))
//       .sort((a, b) => b.score - a.score)
//       .filter(item => item.score > 0); // Only include categories they selected

//     return { interests: normalizedScores, preferences };
//   };

//   const handleAnswer = (questionId, answer) => {
//     setAnswers(prev => ({
//       ...prev,
//       [questionId]: answer
//     }));
//   };

//   const nextStep = () => {
//     if (currentStep < questionFlow.length - 1) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       setCurrentView('email_collection');
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

 
// const completeProfileCreation = async () => {
//   setLoading(true);
//   setTimeout(async () => {
//     const profile = calculateNewsProfile();

//     // Build question/answer array
//     const question_answers = questionFlow.map(q => {
//       let answer = answers[q.id];
//       // For topic_selection, show selected topics as a readable string
//       if (q.type === 'topic_selection' && answer) {
//         answer = Object.entries(answer)
//           .map(([cat, topics]) => `${cat}: ${topics.join(', ')}`)
//           .join(' | ');
//       }
//       // For rating, show as JSON string
//       if (q.type === 'rating' && answer) {
//         answer = JSON.stringify(answer);
//       }
//       // For slider, show as JSON string
//       if (q.type === 'slider' && answer) {
//         answer = JSON.stringify(answer);
//       }
//       return {
//         id: q.id,
//         question: q.title,
//         answer: answer || ''
//       };
//     });

//     // Prepare full profile data for Firestore
//     const fullProfile = {
//       timestamp: new Date().toLocaleString(),
//       name: emailData.name,
//       email: emailData.email,
//       country: emailData.country,
//       primary_interests: profile.interests.slice(0, 3).map(i => i.category).join(', '),
//       all_interest_scores: profile.interests,
//       content_format: profile.preferences.format,
//       delivery_style: profile.preferences.delivery,
//       geographic_focus: profile.preferences.focus,
//       selected_topics: answers.news_categories,
//       raw_answers: answers,
//       question_answers // <-- Add this field
//     };

//     // Save full profile to Firestore
//     try {
//       await addDoc(collection(db, "users"), fullProfile);
//       console.log('Full profile saved to Firebase:', fullProfile);
//     } catch (error) {
//       console.error('Error saving to Firebase:', error);
//     }

//     setUserProfile({
//       ...profile,
//       userData: emailData,
//       sheetData: fullProfile
//     });
//     setCurrentView('confirmation');
//     setLoading(false);
//   }, 2000);
// };
//   const renderQuestion = () => {
//     const question = questionFlow[currentStep];
    
//     switch (question.type) {
//       case 'scenario':
//         return (
//           <div className="space-y-4">
//             <h3 className="text-2xl font-bold mb-6">{question.question}</h3>
//             <div className="space-y-3">
//               {question.options.map(option => (
//                 <button
//                   key={option.id}
//                   onClick={() => handleAnswer(question.id, option.id)}
//                   className={`w-full p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
//                     answers[question.id] === option.id 
//                       ? 'border-blue-500 bg-blue-50 text-blue-700' 
//                       : 'border-gray-200 hover:border-blue-300'
//                   }`}
//                 >
//                   <div className="flex items-start space-x-3">
//                     <div className="text-xl">{option.text.split(' ')[0]}</div>
//                     <div className="flex-1">{option.text.substring(option.text.indexOf(' ') + 1)}</div>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         );

//       case 'topic_selection':
//         return (
//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold mb-6">{question.question}</h3>
//             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
//               <p className="text-blue-800 text-sm">
//                 <strong>💡 Tip:</strong> Select topics you want in your Monday morning email. 
//                 We'll find the top 10 stories from these categories each week.
//               </p>
//             </div>
//             {Object.entries(question.categories).map(([categoryId, category]) => (
//               <div key={categoryId} className="bg-white border rounded-lg p-6">
//                 <h4 className="font-bold text-lg mb-4">{category.title}</h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//                   {category.topics.map(topic => (
//                     <button
//                       key={topic}
//                       onClick={() => {
//                         const currentTopics = answers[question.id] || {};
//                         const categoryTopics = currentTopics[categoryId] || [];
//                         const isSelected = categoryTopics.includes(topic);
                        
//                         const updatedCategoryTopics = isSelected
//                           ? categoryTopics.filter(t => t !== topic)
//                           : [...categoryTopics, topic];
                        
//                         handleAnswer(question.id, {
//                           ...currentTopics,
//                           [categoryId]: updatedCategoryTopics
//                         });
//                       }}
//                       className={`p-3 rounded-lg border text-sm font-medium transition-all ${
//                         answers[question.id]?.[categoryId]?.includes(topic)
//                           ? 'border-blue-500 bg-blue-500 text-white'
//                           : 'border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50'
//                       }`}
//                     >
//                       {topic}
//                     </button>
//                   ))}
//                 </div>
//                 <p className="text-xs text-gray-500 mt-3">
//                   Selected: {answers[question.id]?.[categoryId]?.length || 0} topics
//                 </p>
//               </div>
//             ))}
//             <div className="bg-green-50 border border-green-200 rounded-lg p-4">
//               <p className="text-green-800 text-sm">
//                 Total topics selected: {
//                   Object.values(answers[question.id] || {})
//                     .reduce((total, topics) => total + topics.length, 0)
//                 }
//               </p>
//             </div>
//           </div>
//         );

//       case 'rating':
//         return (
//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold mb-6">{question.question}</h3>
//             <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
//               <p className="text-yellow-800 text-sm">
//                 <strong>📊 This helps us format your news:</strong> Rate how much you prefer each format (1 = not interested, 5 = love it)
//               </p>
//             </div>
//             {question.options.map(option => (
//               <div key={option.id} className="bg-white border rounded-lg p-4">
//                 <div className="flex justify-between items-center mb-3">
//                   <span className="font-medium">{option.text}</span>
//                   <span className="text-lg font-bold text-blue-600">
//                     {answers[question.id]?.[option.id] || 0}/5
//                   </span>
//                 </div>
//                 <div className="flex space-x-2">
//                   {[1, 2, 3, 4, 5].map(rating => (
//                     <button
//                       key={rating}
//                       onClick={() => {
//                         const currentRatings = answers[question.id] || {};
//                         handleAnswer(question.id, {
//                           ...currentRatings,
//                           [option.id]: rating
//                         });
//                       }}
//                       className={`w-12 h-12 rounded-full border-2 transition-all ${
//                         (answers[question.id]?.[option.id] || 0) >= rating
//                           ? 'bg-blue-500 border-blue-500 text-white'
//                           : 'border-gray-300 hover:border-blue-300'
//                       }`}
//                     >
//                       <Star className={`w-5 h-5 mx-auto ${
//                         (answers[question.id]?.[option.id] || 0) >= rating ? 'fill-current' : ''
//                       }`} />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         );

//       case 'slider':
//         return (
//           <div className="space-y-8">
//             <h3 className="text-2xl font-bold mb-6">{question.question}</h3>
//             {question.sliders.map(slider => (
//               <div key={slider.id} className="bg-white border rounded-lg p-6">
//                 <h4 className="font-semibold mb-4">{slider.label}</h4>
//                 <div className="space-y-4">
//                   <div className="flex justify-between text-sm text-gray-600">
//                     <span>{slider.left}</span>
//                     <span>{slider.right}</span>
//                   </div>
//                   <input
//                     type="range"
//                     min="0"
//                     max="100"
//                     value={answers[question.id]?.[slider.id] || 50}
//                     onChange={(e) => {
//                       const currentSliders = answers[question.id] || {};
//                       handleAnswer(question.id, {
//                         ...currentSliders,
//                         [slider.id]: parseInt(e.target.value)
//                       });
//                     }}
//                     className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                   />
//                   <div className="text-center text-lg font-medium text-blue-600">
//                     {answers[question.id]?.[slider.id] || 50}%
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   if (currentView === 'landing') {
//     return (
//       <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
//         {/* background removed for clean white layout */}

//         {/* App Bar */}
//         <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200">
//           <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full w-10 h-10 flex items-center justify-center shadow">
//                 <Mail className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-lg font-bold tracking-tight">Smartbreif</span>
//             </div>
//           </div>
//         </header>
 
//         <div className="relative container mx-auto px-4 pt-32 md:pt-40 pb-12 mt-15 md:mt-20">
//           {/* New Hero Section */}
//           <section className="rounded-3xl mb-16 md:mb-20">
//             <div className="grid lg:grid-cols-2 gap-10 items-center">
//               {/* Left copy */}
//               <div className="max-w-2xl">
//                 <h1 className="text-slate-900 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 md:mb-6">
//                   Stay informed, not overwhelmed.
//                 </h1>
//                 <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//                   With Smartbreif, your week begins with clarity.
//                 </h2>
//                 <p className="text-lg md:text-xl text-slate-700 mb-8">
//                   Get a Monday-morning brief of the top 10 stories tailored to your interests. No fluff. No noise. Just what matters to you.
//                 </p>
//                 <div className="text-sm text-slate-600 mb-3">
//                   Where your week is understood — Get NewsIQ.
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                   <button
//                     onClick={() => setCurrentView('assessment')}
//                     className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-transform hover:scale-[1.02]"
//                   >
//                     <Target className="w-5 h-5" /> Build My News Profile
//                   </button>
//                   <button
//                     onClick={() => setCurrentView('confirmation')}
//                     className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-800 bg-white hover:bg-slate-50"
//                   >
//                     <Eye className="w-5 h-5" /> See Sample Issue
//                   </button>
//                 </div>
//               </div>

//               {/* Right media */}
//               <div className="relative">
//                 <div className="mx-auto w-full max-w-md rounded-3xl p-[3px] bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
//                   <div className="rounded-3xl bg-white">
//                     <img
//                       src="/ai2.png"
//                       alt="NewsIQ preview"
//                       className="w-full h-auto object-contain rounded-3xl"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Social Proof */}
//           {/* <div className="text-center mb-24 md:mb-32">
//             <div className="bg-white rounded-2xl px-8 py-6 inline-block border border-slate-200 shadow-sm">
//               <div className="flex items-center gap-8 text-center text-slate-700">
//                 <div>
//                   <div className="text-3xl font-bold text-yellow-500">12,847</div>
//                   <div className="text-sm text-slate-600">Active Readers</div>
//                 </div>
//                 <div className="w-px h-12 bg-slate-200"></div>
//                 <div>
//                   <div className="text-3xl font-bold text-green-600">94%</div>
//                   <div className="text-sm text-slate-600">Read Rate</div>
//                 </div>
//                 <div className="w-px h-12 bg-slate-200"></div>
//                 <div>
//                   <div className="text-3xl font-bold text-blue-600">4.9★</div>
//                   <div className="text-sm text-slate-600">User Rating</div>
//                 </div>
//               </div>
//             </div>
//           </div> */}

//           {/* Problem Statement */}
          

//           {/* Solution Features */}
//           <div className="grid md:grid-cols-3 gap-8 mb-24 md:mb-32 mt-50 md:mt-60">
//             <div className="group bg-white rounded-3xl p-8 text-center border border-slate-200 hover:shadow-md transition-all duration-300">
//               <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
//                 <Brain className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-slate-900">AI-Powered Curation</h3>
//               <p className="text-slate-700 leading-relaxed">Our advanced AI analyzes thousands of sources and selects only the stories that match your unique interests and preferences.</p>
//               <div className="mt-6 text-sm text-blue-700 bg-blue-50 rounded-lg px-4 py-2">
//                 🔥 Saves 2-3 hours per week
//               </div>
//             </div>
            
//             <div className="group bg-white rounded-3xl p-8 text-center border border-slate-200 hover:shadow-md transition-all duration-300">
//               <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
//                 <Calendar className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-slate-900">Perfect Timing</h3>
//               <p className="text-slate-700 leading-relaxed">Delivered every Monday at 7 AM, giving you the perfect start to your week with everything you need to know.</p>
//               <div className="mt-6 text-sm text-purple-700 bg-purple-50 rounded-lg px-4 py-2">
//                 ⏰ 94% open rate on Mondays
//               </div>
//             </div>
            
//             <div className="group bg-white rounded-3xl p-8 text-center border border-slate-200 hover:shadow-md transition-all duration-300">
//               <div className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
//                 <Target className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-slate-900">Zero Fluff</h3>
//               <p className="text-slate-700 leading-relaxed">Only the top 10 most relevant stories. No clickbait, no noise, no endless scrolling. Just what matters to you.</p>
//               <div className="mt-6 text-sm text-emerald-700 bg-emerald-50 rounded-lg px-4 py-2">
//                 🎯 10 stories = 100% relevance
//               </div>
//             </div>
//           </div>

//           <div className="text-center mb-24 md:mb-32 mt-24 md:mt-32">
//             <div className="max-w-4xl mx-auto px-4">
//               <h2 className="text-5xl font-bold mb-8 text-slate-900">Tired of Information Overload?</h2>
//               <div className="grid md:grid-cols-3 gap-6 mb-12">
//                 <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
//                   <div className="text-4xl mb-4">😵‍💫</div>
//                   <h3 className="font-bold text-lg mb-2 text-slate-900">Too Much Noise</h3>
//                   <p className="text-slate-700 text-sm">Scrolling through hundreds of irrelevant stories every day</p>
//                 </div>
//                 <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
//                   <div className="text-4xl mb-4">⏰</div>
//                   <h3 className="font-bold text-lg mb-2 text-slate-900">No Time</h3>
//                   <p className="text-slate-700 text-sm">Spending hours trying to find what actually matters to you</p>
//                 </div>
//                 <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
//                   <div className="text-4xl mb-4">🎯</div>
//                   <h3 className="font-bold text-lg mb-2 text-slate-900">Missing Important</h3>
//                   <p className="text-slate-700 text-sm">Key stories buried under clickbait and irrelevant content</p>
//                 </div>
//               </div>
//               <div className="text-2xl font-semibold text-slate-700">
//                 What if you could get <span className="text-blue-600">exactly what you need</span> in just <span className="text-purple-600">5 minutes</span> every Monday?
//               </div>
//             </div>
//           </div>

//           {/* How It Works - Enhanced */}
//           <div className="bg-white rounded-3xl p-12 text-center mb-24 md:mb-32 border border-slate-200 shadow-sm">
//             <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               How Smartbreif Works Its Magic
//             </h2>
//             <div className="grid md:grid-cols-4 gap-8">
//               <div className="relative">
//                 <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-6 text-white shadow">1</div>
//                 <h3 className="text-xl font-semibold mb-4 text-slate-900">Smart Profiling</h3>
//                 <p className="text-slate-700 text-sm leading-relaxed">Take our intelligent 5-minute quiz that understands your news DNA better than you do</p>
//                 <div className="absolute top-20 right-0 w-16 h-px bg-gradient-to-r from-purple-500 to-transparent hidden md:block"></div>
//               </div>
//               <div className="relative">
//                 <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-6 text-white shadow">2</div>
//                 <h3 className="text-xl font-semibold mb-4 text-slate-900">AI Analysis</h3>
//                 <p className="text-slate-700 text-sm leading-relaxed">Our neural network creates your unique news fingerprint from 1000+ data points</p>
//                 <div className="absolute top-20 right-0 w-16 h-px bg-gradient-to-r from-pink-500 to-transparent hidden md:block"></div>
//               </div>
//               <div className="relative">
//                 <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-6 text-white shadow">3</div>
//                 <h3 className="text-xl font-semibold mb-4 text-slate-900">Weekly Curation</h3>
//                 <p className="text-slate-700 text-sm leading-relaxed">Scan 10,000+ articles from 500+ sources to find your perfect 10 stories</p>
//                 <div className="absolute top-20 right-0 w-16 h-px bg-gradient-to-r from-red-500 to-transparent hidden md:block"></div>
//               </div>
//               <div>
//                 <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-6 text-white shadow">4</div>
//                 <h3 className="text-xl font-semibold mb-4 text-slate-900">Perfect Delivery</h3>
//                 <p className="text-slate-700 text-sm leading-relaxed">Monday 7 AM: Your personalized digest lands in your inbox, ready to fuel your week</p>
//               </div>
//             </div>
//           </div>

//           {/* Testimonials */}
//           <div className="mb-24 md:mb-32">
//             <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">What Our Readers Say</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">SJ</div>
//                   <div className="ml-3">
//                     <div className="font-semibold text-slate-900">Sarah Johnson</div>
//                     <div className="text-sm text-slate-600">Marketing Director</div>
//                   </div>
//                 </div>
//                 <div className="text-yellow-500 mb-3">★★★★★</div>
//                 <p className="text-slate-700 text-sm italic">"Finally, news that doesn't waste my time. I actually look forward to Monday mornings now!"</p>
//               </div>
//               <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">MR</div>
//                   <div className="ml-3">
//                     <div className="font-semibold text-slate-900">Mike Rodriguez</div>
//                     <div className="text-sm text-slate-600">Tech Entrepreneur</div>
//                   </div>
//                 </div>
//                 <div className="text-yellow-500 mb-3">★★★★★</div>
//                 <p className="text-slate-700 text-sm italic">"NewsIQ saved me 3 hours a week. The AI actually gets what I care about."</p>
//               </div>
//               <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">AL</div>
//                   <div className="ml-3">
//                     <div className="font-semibold text-slate-900">Anna Lee</div>
//                     <div className="text-sm text-slate-600">Financial Analyst</div>
//                   </div>
//                 </div>
//                 <div className="text-yellow-500 mb-3">★★★★★</div>
//                 <p className="text-slate-700 text-sm italic">"Best decision I made this year. Now I'm the most informed person in every meeting."</p>
//               </div>
//             </div>
//           </div>

//           {/* Final CTA */}
//           <div className="text-center bg-white rounded-3xl p-16 border border-slate-200 shadow-sm mb-12">
//             <div className="text-6xl mb-6">🧠</div>
//             <h3 className="text-5xl font-bold mb-6 text-slate-900">
//               Your Smarter News Journey Starts Now
//             </h3>
//             <p className="text-2xl text-slate-700 mb-10 max-w-3xl mx-auto">
//               Join 12,847 professionals who start their week with perfectly curated news. 
//               <span className="text-green-700 font-semibold"> It takes 5 minutes to set up, saves hours every week.</span>
//             </p>
//             <button
//               onClick={() => setCurrentView('assessment')}
//               className="group relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 px-16 py-8 rounded-2xl font-bold text-2xl hover:shadow-2xl transition-all transform hover:scale-105 mb-6 overflow-hidden"
//             >
//               <span className="relative z-10 flex items-center gap-4 text-white">
//                 <Rocket className="w-8 h-8" />
//                 Build My NewsIQ Profile
//                 <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
//               </span>
//             </button>
//             <div className="flex justify-center items-center gap-8 text-sm text-slate-600">
//               <div className="flex items-center gap-2">
//                 <Shield className="w-4 h-4 text-green-600" />
//                 <span>No spam guarantee</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="w-4 h-4 text-blue-600" />
//                 <span>5-minute setup</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Heart className="w-4 h-4 text-red-600" />
//                 <span>Free forever</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (currentView === 'assessment') {
//     return (
//       <div className="min-h-screen bg-white p-4">
//         <div className="max-w-4xl mx-auto">
//           {/* Progress bar */}
//           <div className="mb-8">
//             <div className="flex items-center justify-between mb-4">
//               <h1 className="text-2xl font-bold text-gray-800">News Interest Profiler</h1>
//               <span className="text-gray-500">
//                 Step {currentStep + 1} of {questionFlow.length}
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-3">
//               <div 
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
//                 style={{ width: `${((currentStep + 1) / questionFlow.length) * 100}%` }}
//               ></div>
//             </div>
//             <div className="text-sm text-gray-600 mt-2">
//               {Math.round(((currentStep + 1) / questionFlow.length) * 100)}% complete - Creating your personalized news profile
//             </div>
//           </div>

//           {/* Question card */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
//             <div className="mb-6">
//               <h2 className="text-3xl font-bold text-gray-800 mb-2">
//                 {questionFlow[currentStep].title}
//               </h2>
//               <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
//             </div>
            
//             {renderQuestion()}
//           </div>

//           {/* Navigation */}
//           <div className="flex justify-between items-center">
//             <button
//               onClick={prevStep}
//               disabled={currentStep === 0}
//               className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5" />
//               Previous
//             </button>

//             <div className="text-center">
//               <div className="text-sm text-gray-500 mb-1">
//                 Question {currentStep + 1} of {questionFlow.length}
//               </div>
//               <div className="flex space-x-2">
//                 {questionFlow.map((_, index) => (
//                   <div
//                     key={index}
//                     className={`w-3 h-3 rounded-full ${
//                       index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>

//             <button
//               onClick={nextStep}
//               disabled={!answers[questionFlow[currentStep].id]}
//               className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
//             >
//               {currentStep === questionFlow.length - 1 ? 'Complete Profile' : 'Next Question'}
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (currentView === 'email_collection') {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4 flex items-center justify-center">
//         <div className="max-w-2xl mx-auto">
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <div className="text-center mb-8">
//               <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
//                 <Mail className="w-10 h-10 text-white" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">Almost Done! 🎉</h2>
//               <p className="text-gray-600 text-lg">
//                 We've analyzed your preferences. Now let's set up your weekly news delivery.
//               </p>
//             </div>

//             <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
//               <h3 className="font-bold text-blue-800 mb-3">📧 What You'll Receive:</h3>
//               <ul className="space-y-2 text-blue-700 text-sm">
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="w-4 h-4" />
//                   <span>Top 10 personalized news stories every Monday at 7 AM</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="w-4 h-4" />
//                   <span>Stories curated from the past week based on your interests</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="w-4 h-4" />
//                   <span>Brief summaries with links to full articles</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="w-4 h-4" />
//                   <span>Easy unsubscribe anytime</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   What should we call you? *
//                 </label>
//                 <input
//                   type="text"
//                   value={emailData.name}
//                   onChange={(e) => setEmailData(prev => ({ ...prev, name: e.target.value }))}
//                   placeholder="Enter your first name"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Email address *
//                 </label>
//                 <input
//                   type="email"
//                   value={emailData.email}
//                   onChange={(e) => setEmailData(prev => ({ ...prev, email: e.target.value }))}
//                   placeholder="your.email@example.com"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//                 <p className="text-xs text-gray-500 mt-1">
//                   We'll only use this to send your weekly news digest. No spam, ever.
//                 </p>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Country *
//                 </label>
//                 <select
//                   value={emailData.country}
//                   onChange={(e) => setEmailData(prev => ({ ...prev, country: e.target.value }))}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 >
//                   <option value="" disabled>
//                     Select your country
//                   </option>
//                   {countryOptions.map(country => (
//                     <option key={country} value={country}>{country}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="bg-gray-50 rounded-lg p-4">
//                 <div className="flex items-center gap-3 mb-3">
//                   <Calendar className="w-5 h-5 text-blue-500" />
//                   <span className="font-semibold">Delivery Schedule</span>
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   <div className="flex items-center gap-2 mb-1">
//                     <Check className="w-4 h-4 text-green-500" />
//                     <span>Every Monday at 7:00 AM</span>
//                   </div>
//                   <div className="flex items-center gap-2 mb-1">
//                     <Check className="w-4 h-4 text-green-500" />
//                     <span>Top 10 stories from the past week</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Check className="w-4 h-4 text-green-500" />
//                     <span>Personalized to your interests</span>
//                   </div>
//                 </div>
//               </div>

//               <button
//                 onClick={completeProfileCreation}
//                 disabled={!emailData.name || !emailData.email || !emailData.country}
//                 className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
//               >
//                 Start My Weekly News 🚀
//               </button>

//               <p className="text-xs text-gray-500 text-center">
//                 By clicking "Start My Weekly News", you agree to receive weekly email updates. 
//                 You can unsubscribe at any time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="relative mb-8">
//             <div className="w-24 h-24 border-4 border-blue-200 rounded-full animate-spin"></div>
//             <div className="absolute top-0 left-0 w-24 h-24 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
//             <div className="absolute top-6 left-6 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//               <Database className="w-6 h-6 text-blue-600" />
//             </div>
//           </div>
//           <h3 className="text-3xl font-bold text-gray-800 mb-4">Setting Up Your News Profile...</h3>
//           <p className="text-gray-600 mb-6 max-w-md">
//             We're analyzing your preferences and preparing your personalized news experience
//           </p>
//           <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
//             <div className="space-y-3 text-sm text-gray-600">
//               <div className="flex items-center gap-3">
//                 <Check className="w-4 h-4 text-green-500" />
//                 <span>Processing your interest profile</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Check className="w-4 h-4 text-green-500" />
//                 <span>Setting up personalization engine</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-4 h-4 border-2 border-blue-300 rounded-full animate-pulse"></div>
//                 <span>Saving to Google Sheets database</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-4 h-4 border-2 border-blue-300 rounded-full animate-pulse"></div>
//                 <span>Scheduling your first Monday email</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   if (currentView === 'confirmation' && !userProfile) {
//   return (
//     <div className="min-h-screen bg-white p-4">
//       <div className="max-w-3xl mx-auto">
//          <button
//           onClick={() => setCurrentView('landing')}
//           className="flex items-center gap-2 mb-8 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium shadow-sm"
//         >
//           <ChevronLeft className="w-5 h-5" />
//           Back to Home
//         </button>
//         <div className="text-center mb-10">
//           <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
//             <Mail className="w-12 h-12 text-white" />
//           </div>
//           <h1 className="text-5xl font-bold text-gray-800 mb-4">
//             Sample Monday Morning NewsIQ Issue
//           </h1>
//           <p className="text-lg text-gray-600 max-w-xl mx-auto">
//             Here’s what your personalized Monday morning email could look like.<br />
//             <span className="text-blue-600 font-semibold">15 stories. 5 minutes. 100% relevance.</span>
//           </p>
//         </div>

//         <div className="bg-gray-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
//           <div className="border-b border-gray-200 pb-4 mb-4">
//             <div className="text-sm text-gray-500 mb-1">From: news@mondaymorningnews.com</div>
//             <div className="text-sm text-gray-500 mb-1">To: you@email.com</div>
//             <div className="text-lg font-bold">📰 Your Top 15 News Stories - Week of August 12, 2025</div>
//           </div>
//           <div className="bg-white rounded p-4 border-l-4 border-blue-500 mb-6">
//             <div className="font-bold text-blue-800 mb-2">Good morning, Reader! ☀️</div>
//             <div className="text-gray-700 text-sm">
//               Here are your top stories this week, curated just for you by NewsIQ’s AI.<br />
//               <span className="text-purple-700 font-semibold">Categories: Technology, Business, Science, World, Lifestyle</span>
//             </div>
//           </div>
//           <div className="space-y-4">
//             {/* 1-10 */}
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 1. <span className="text-blue-700">AI Breakthrough: New Model Outperforms Doctors in Diagnosing Rare Diseases</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 Researchers unveil an AI system that can diagnose over 7,000 rare diseases from a single blood test, potentially revolutionizing healthcare.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 2. <span className="text-blue-700">Stock Markets Rally as Inflation Cools</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 Global markets surged this week after new data showed inflation rates dropping to a 3-year low, boosting investor confidence.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 3. <span className="text-blue-700">NASA Confirms Water on the Moon’s South Pole</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 NASA’s Artemis mission has detected ice deposits, opening new possibilities for lunar exploration and future missions.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 4. <span className="text-blue-700">Global Leaders Meet to Tackle Climate Crisis</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 The UN Climate Summit saw major economies pledge new funding and stricter emissions targets to combat global warming.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 5. <span className="text-blue-700">Startup Raises $100M to Reinvent Remote Work</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 FlexSpace, a new platform for hybrid teams, secures major funding to expand its AI-powered workspace solutions.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 6. <span className="text-blue-700">World Cup: Underdog Team Shocks Favorites</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 In a stunning upset, Morocco defeats Brazil in the quarterfinals, making history and thrilling fans worldwide.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 7. <span className="text-blue-700">How to Build a Healthier Morning Routine</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 Experts share science-backed tips for boosting energy, focus, and well-being before 9 AM.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 8. <span className="text-blue-700">The Art World Embraces AI Creativity</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 From digital paintings to music, artists are using AI to push the boundaries of creativity and collaboration.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 9. <span className="text-blue-700">Travel: Top 5 Destinations for 2025</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 Discover the most exciting, safe, and affordable places to visit this year, from Iceland to Vietnam.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 10. <span className="text-blue-700">Personal Finance: How to Beat Rising Interest Rates</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 Financial advisors explain smart strategies for saving, investing, and managing debt in 2025.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             {/* 11-15 */}
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 11. <span className="text-blue-700">Mental Health: New App Offers Free Therapy Sessions</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 A new startup is providing free, AI-powered therapy sessions to help millions manage stress and anxiety.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 12. <span className="text-blue-700">Education: Schools Embrace Virtual Reality Classrooms</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 Teachers report higher engagement as students explore history, science, and art through immersive VR lessons.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 13. <span className="text-blue-700">Environment: Cities Turn Rooftops Into Urban Forests</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 Major cities are planting trees and gardens on rooftops to fight pollution and cool urban heat islands.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 14. <span className="text-blue-700">Tech: Quantum Computing Breaks Encryption Barrier</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 Scientists announce a quantum computer that can solve problems previously thought impossible, raising new security questions.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//             <div className="bg-white rounded p-3 border">
//               <div className="font-medium text-gray-800 mb-1">
//                 15. <span className="text-blue-700">Culture: Global Festival Celebrates Diversity in Music</span>
//               </div>
//               <div className="text-sm text-gray-600 mb-2">
//                 Artists from over 50 countries perform in a week-long virtual festival, highlighting the power of music to unite.
//               </div>
//               <div className="text-xs text-blue-600">📖 <a href="#" className="underline">Read full article</a></div>
//             </div>
//           </div>
//           <div className="text-center text-gray-500 text-sm py-6">
//             <span className="font-semibold text-blue-700">NewsIQ</span> — Your week, perfectly curated.<br />
//             <span className="italic">Want this in your inbox? <span className="underline cursor-pointer text-blue-600" onClick={() => setCurrentView('assessment')}>Build your profile now</span>.</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//   if (currentView === 'confirmation' && userProfile) {
//     const topInterests = userProfile.interests.slice(0, 3);
    
//     return (
//       <div className="min-h-screen bg-white p-4">
//         <div className="max-w-4xl mx-auto">
//         <button
//         onClick={() => setCurrentView('landing')}
//         className="flex items-center gap-2 mb-8 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium shadow-sm"
//       >
//         <ChevronLeft className="w-5 h-5" />
//         Back to Home
//       </button>
//           {/* Success Header */}
//           <div className="text-center mb-12">
//             <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
//               <CheckCircle className="w-12 h-12 text-white" />
//             </div>
//             <h1 className="text-5xl font-bold text-gray-800 mb-4">
//               Welcome to Monday Morning News! 🎉
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Hi {userProfile.userData.name}! Your personalized news profile is ready. 
//               Your first email will arrive this Monday at 7 AM.
//             </p>
//           </div>

//           {/* Profile Summary */}
// <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
//   <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//     <Mail className="w-6 h-6 text-blue-500" />
//     Email Delivery Details
//   </h2>
//   <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 flex flex-col md:flex-row gap-8 items-center">
//     <div className="flex-1 space-y-4">
//       <div className="flex items-center gap-3">
//         <Calendar className="w-5 h-5 text-blue-600" />
//         <span className="font-semibold text-gray-800">Delivery Time:</span>
//         <span className="text-gray-700">Every Monday at 7:00 AM</span>
//       </div>
//       <div className="flex items-center gap-3">
//         <Mail className="w-5 h-5 text-green-600" />
//         <span className="font-semibold text-gray-800">To:</span>
//         <span className="text-gray-700">{userProfile.userData.email}</span>
//       </div>
//       <div className="flex items-center gap-3">
//         <Globe className="w-5 h-5 text-purple-600" />
//         <span className="font-semibold text-gray-800">Country:</span>
//         <span className="text-gray-700">{userProfile.userData.country}</span>
//       </div>
//       <div className="flex items-center gap-3">
//         <TrendingUp className="w-5 h-5 text-yellow-600" />
//         <span className="font-semibold text-gray-800">What You'll Get:</span>
//         <span className="text-gray-700">Top 10 stories, personalized for you</span>
//       </div>
//     </div>
//     <div className="flex-shrink-0">
//       <div className="bg-gradient-to-br from-blue-500 to-green-400 rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
//         <Mail className="w-10 h-10 text-white mb-2" />
//         <span className="text-white font-bold text-lg text-center"></span>
//       </div>
//     </div>
//   </div>
//   <div className="mt-6 text-sm text-gray-500 text-center">
//     Your personalized news will arrive in your inbox every Monday morning.<br />
//     You can update your preferences or unsubscribe anytime.
//   </div>
// </div>

//           {/* Sample Email Preview */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">📧 Email News Template</h3>
//             <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
//               <div className="border-b border-gray-200 pb-4 mb-4">
//                 <div className="text-sm text-gray-500 mb-1">From: news@mondaymorningnews.com</div>
//                 <div className="text-sm text-gray-500 mb-1">To: {userProfile.userData.email}</div>
//                 <div className="text-lg font-bold">📰 Your Top 10 News Stories - Week of [Date]</div>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="bg-white rounded p-4 border-l-4 border-blue-500">
//                   <div className="font-bold text-blue-800 mb-2">Good morning, {userProfile.userData.name}! ☀️</div>
//                   <div className="text-gray-700 text-sm">
//                     Here are your top 10 personalized news stories from this week, 
//                     selected based on your interests in {topInterests.map(i => i.category).join(', ')}.
//                   </div>
//                 </div>
                
//                 <div className="space-y-3">
//                   {[1, 2, 3].map(num => (
//                     <div key={num} className="bg-white rounded p-3 border">
//                       <div className="font-medium text-gray-800 mb-1">
//                         {num}. [Sample News Headline Based on Your {topInterests[num-1]?.category || 'interests'}]
//                       </div>
//                       <div className="text-sm text-gray-600 mb-2">
//                         Brief summary of the story that matches your preferences...
//                       </div>
//                       <div className="text-xs text-blue-600">📖 Read full article →</div>
//                     </div>
//                   ))}
//                   <div className="text-center text-gray-500 text-sm py-2">
//                     ... and 7 more stories selected just for you
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

        
//           {/* Next Steps */}
//           <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center mb-8">
//             <h3 className="text-3xl font-bold mb-4">What Happens Next?</h3>
//             <div className="grid md:grid-cols-3 gap-6 mb-8">
//               <div className="bg-white bg-opacity-10 rounded-lg p-4">
//                 <div className="text-3xl mb-2">📅</div>
//                 <div className="font-bold mb-2">This Weekend</div>
//                 <div className="text-sm">Our AI will scan hundreds of news sources from the past week</div>
//               </div>
//               <div className="bg-white bg-opacity-10 rounded-lg p-4">
//                 <div className="text-3xl mb-2">🤖</div>
//                 <div className="font-bold mb-2">Monday Morning</div>
//                 <div className="text-sm">Your personalized top 10 stories will be selected and sent at 7 AM</div>
//               </div>
//               <div className="bg-white bg-opacity-10 rounded-lg p-4">
//                 <div className="text-3xl mb-2">📈</div>
//                 <div className="font-bold mb-2">Every Week</div>
//                 <div className="text-sm">Content gets more personalized as we learn your reading preferences</div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="text-center space-y-6">
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="bg-white rounded-lg p-6 shadow-sm text-center">
//                 <Eye className="w-12 h-12 text-blue-500 mx-auto mb-4" />
//                 <h4 className="font-bold mb-2">Preview Sample Email</h4>
//                 <p className="text-gray-600 text-sm mb-4">See what your Monday email will look like</p>
//                 <button className="text-blue-500 hover:text-blue-600 font-medium">
//                   View Sample
//                 </button>
//               </div>

//               <div className="bg-white rounded-lg p-6 shadow-sm text-center">
//                 <Settings className="w-12 h-12 text-green-500 mx-auto mb-4" />
//                 <h4 className="font-bold mb-2">Update Preferences</h4>
//                 <p className="text-gray-600 text-sm mb-4">Change your interests anytime</p>
//                 <button 
//                   onClick={() => {
//                     setCurrentView('assessment');
//                     setCurrentStep(0);
//                     setAnswers({});
//                   }}
//                   className="text-green-500 hover:text-green-600 font-medium"
//                 >
//                   Retake Quiz
//                 </button>
//               </div>

//               <div className="bg-white rounded-lg p-6 shadow-sm text-center">
//                 <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
//                 <h4 className="font-bold mb-2">Share with Friends</h4>
//                 <p className="text-gray-600 text-sm mb-4">Help others get personalized news too</p>
//                 <button className="text-purple-500 hover:text-purple-600 font-medium">
//                   Invite Friends
//                 </button>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg p-6 shadow-sm">
//               <h4 className="font-bold text-lg mb-3">🚀 Ready to get even better news?</h4>
//               <p className="text-gray-600 mb-4">
//                 Your personalized news experience starts this Monday. We'll continuously improve 
//                 your recommendations based on what you read and engage with.
//               </p>
//               <div className="text-sm text-gray-500">
//                 Questions? Email us at support@mondaymorningnews.com
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return null;
// };

// export default WeeklyNewsProfiler;


import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";
import { 
  Mail, Star, Clock, TrendingUp, BookOpen, Briefcase, Play, Globe,
  ChevronRight, ChevronLeft, Check, Zap, Target, Users, Award,
  BarChart3, Lightbulb, Coffee, Gamepad2, Music, Camera, Palette,
  Code, Rocket, Heart, Shield, Smartphone, Car, Home, Plane,
  DollarSign, PieChart, Newspaper, Headphones, Film, Book, Send,
  Calendar, Database, CheckCircle, Eye, Settings, Brain
} from 'lucide-react';

const WeeklyNewsProfiler = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emailData, setEmailData] = useState({ name: '', email: '', country: '' });

  // Country options (ISO-3166 common list)
  const countryOptions = [
    'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan',
    'Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi',
    'Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo (Congo-Brazzaville)','Costa Rica','Côte d’Ivoire','Croatia','Cuba','Cyprus','Czechia',
    'Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic',
    'Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia',
    'Fiji','Finland','France',
    'Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana',
    'Haiti','Honduras','Hungary',
    'Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy',
    'Jamaica','Japan','Jordan',
    'Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan',
    'Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg',
    'Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar',
    'Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','North Macedonia','Norway',
    'Oman',
    'Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal',
    'Qatar',
    'Romania','Russia','Rwanda',
    'Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria',
    'Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu',
    'Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan',
    'Vanuatu','Venezuela','Vietnam',
    'Yemen',
    'Zambia','Zimbabwe'
  ];

  // Updated question flow with profession and hobbies
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
    {
      id: 'news_depth',
      type: 'rating',
      title: "How do you prefer your news served?",
      question: "",
      options: [
        { id: 'headlines', text: "Quick headlines with key points", category: 'format' },
        { id: 'summaries', text: "Brief summaries (2-3 sentences)", category: 'format' },
        { id: 'detailed', text: "Detailed articles with background", category: 'format' },
        { id: 'analysis', text: "Expert analysis and opinion", category: 'format' },
        { id: 'data_driven', text: "Charts, graphs, and data visualizations", category: 'format' },
        { id: 'multiple_sources', text: "Multiple perspectives on same story", category: 'format' }
      ]
    },
    {
      id: 'news_priorities',
      type: 'multiple_choice',
      title: "What matters most to you in news?",
      question: "",
   options: [
  { id: 'breaking', text: "🚨 Breaking news and real-time updates", weight: { urgency: 3, breaking: 3 } },
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
    {
      id: 'information_style',
      type: 'slider',
      title: "Customize your news experience",
      question: "",
      sliders: [
        { 
          id: 'speed_vs_depth', 
          label: 'Information Processing', 
          left: 'Quick updates', 
          right: 'In-depth analysis',
          leftWeight: { quick: 3, surface: 2 },
          rightWeight: { deep: 3, analytical: 2 }
        },
        { 
          id: 'global_vs_local', 
          label: 'Geographic Focus', 
          left: 'Local & national news', 
          right: 'International & global',
          leftWeight: { local: 3, national: 2 },
          rightWeight: { international: 3, global: 2 }
        },
        { 
          id: 'breaking_vs_analysis', 
          label: 'News Timing', 
          left: 'Breaking news first', 
          right: 'Well-researched stories',
          leftWeight: { breaking: 3, immediate: 2 },
          rightWeight: { researched: 3, quality: 2 }
        }
      ]
    },
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

  const calculateNewsProfile = () => {
    const scores = {
      politics: 0,
      business: 0,
      technology: 0,
      international: 0,
      science: 0,
      entertainment: 0,
      lifestyle: 0
    };

    const preferences = {
      format: 'summary', // headlines, summary, detailed, analysis
      delivery: 'structured', // quick, structured, deep
      focus: 'balanced', // local, national, international
      timing: 'morning' // fixed for Monday morning
    };

    // Add profession and hobbies to profile
    const personalProfile = {
      profession: answers.profession || [],
      hobbies: answers.hobbies || []
    };

    // Process topic selections (most important for news categorization)
    if (answers.news_categories) {
      Object.entries(answers.news_categories).forEach(([category, topics]) => {
        scores[category] = topics.length * 10; // High weight for explicit topic selection
      });
    }

    // Process other answers for preferences and additional scoring
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questionFlow.find(q => q.id === questionId);
      
      if (question && question.type === 'rating') {
        // Process format preferences
        Object.entries(answer).forEach(([optionId, rating]) => {
          if (optionId === 'headlines' && rating >= 4) preferences.format = 'headlines';
          if (optionId === 'detailed' && rating >= 4) preferences.format = 'detailed';
          if (optionId === 'analysis' && rating >= 4) preferences.format = 'analysis';
        });
      }
      
      if (question && question.type === 'slider') {
        Object.entries(answer).forEach(([sliderId, value]) => {
          if (sliderId === 'speed_vs_depth') {
            preferences.delivery = value < 30 ? 'quick' : value > 70 ? 'deep' : 'structured';
          }
          if (sliderId === 'global_vs_local') {
            preferences.focus = value < 30 ? 'local' : value > 70 ? 'international' : 'balanced';
          }
        });
      }

      if (question && question.type === 'scenario') {
        const option = question.options.find(opt => opt.id === answer);
        if (option && option.weight) {
          // Add contextual scoring based on scenario answers
          if (questionId === 'reading_behavior') {
            if (answer === 'quick_scan') preferences.delivery = 'quick';
            if (answer === 'deep_dive') preferences.delivery = 'deep';
          }
        }
      }
    });

    // Normalize scores and determine top interests
    const maxScore = Math.max(...Object.values(scores));
    const normalizedScores = Object.entries(scores)
      .map(([category, score]) => ({
        category,
        score,
        percentage: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0
      }))
      .sort((a, b) => b.score - a.score)
      .filter(item => item.score > 0); // Only include categories they selected

    return { interests: normalizedScores, preferences, personalProfile };
  };

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
      setCurrentView('email_collection');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
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

  const completeProfileCreation = async () => {
    setLoading(true);
    setTimeout(async () => {
      const profile = calculateNewsProfile();

      // Build question/answer array
      const question_answers = questionFlow.map(q => {
        let answer = answers[q.id];
        // For multiple choice, show as comma-separated string
        if (q.type === 'multiple_choice' && answer) {
          answer = answer.join(', ');
        }
        // For topic_selection, show selected topics as a readable string
        if (q.type === 'topic_selection' && answer) {
          answer = Object.entries(answer)
            .map(([cat, topics]) => `${cat}: ${topics.join(', ')}`)
            .join(' | ');
        }
        // For rating, show as JSON string
        if (q.type === 'rating' && answer) {
          answer = JSON.stringify(answer);
        }
        // For slider, show as JSON string
        if (q.type === 'slider' && answer) {
          answer = JSON.stringify(answer);
        }
        return {
          id: q.id,
          question: q.title,
          answer: answer || ''
        };
      });

      // Prepare full profile data for Firestore
      const fullProfile = {
        timestamp: new Date().toLocaleString(),
        name: emailData.name,
        email: emailData.email,
        country: emailData.country,
        profession: answers.profession || [],
        hobbies: answers.hobbies || [],
        primary_interests: profile.interests.slice(0, 3).map(i => i.category).join(', '),
        all_interest_scores: profile.interests,
        content_format: profile.preferences.format,
        delivery_style: profile.preferences.delivery,
        geographic_focus: profile.preferences.focus,
        selected_topics: answers.news_categories,
        raw_answers: answers,
        question_answers
      };

      // Save full profile to Firestore
      try {
        await addDoc(collection(db, "users"), fullProfile);
        console.log('Full profile saved to Firebase:', fullProfile);
      } catch (error) {
        console.error('Error saving to Firebase:', error);
      }

      setUserProfile({
        ...profile,
        userData: emailData,
        sheetData: fullProfile
      });
      setCurrentView('confirmation');
      setLoading(false);
    }, 2000);
  };

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

  // Rest of the component remains the same...
  // (Keep the existing views: landing, assessment, email_collection, loading, confirmation)
  // Only the questionFlow and renderQuestion functions were updated

  if (currentView === 'landing') {
    return (
      <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
        {/* App Bar */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full w-10 h-10 flex items-center justify-center shadow">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">Smartbreif</span>
            </div>
          </div>
        </header>
 
        <div className="relative container mx-auto px-4 pt-32 md:pt-40 pb-12 mt-15 md:mt-20">
          {/* Hero Section */}
          <section className="rounded-3xl mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left copy */}
              <div className="max-w-2xl">
                <h1 className="text-slate-900 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 md:mb-6">
                  Stay informed, not overwhelmed.
                </h1>
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  With Smartbreif, your week begins with clarity.
                </h2>
                <p className="text-lg md:text-xl text-slate-700 mb-8">
                  Get a Monday-morning brief of the top 10 stories tailored to your interests. No fluff. No noise. Just what matters to you.
                </p>
                <div className="text-sm text-slate-600 mb-3">
                  Where your week is understood — Get NewsIQ.
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={() => setCurrentView('assessment')}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-transform hover:scale-[1.02]"
                  >
                    <Target className="w-5 h-5" /> Build My News Profile
                  </button>
                  <button
                    onClick={() => setCurrentView('confirmation')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-800 bg-white hover:bg-slate-50"
                  >
                    <Eye className="w-5 h-5" /> See Sample Issue
                  </button>
                </div>
              </div>

              {/* Right media */}
              <div className="relative">
                <div className="mx-auto w-full max-w-md rounded-3xl p-[3px] bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                  <div className="rounded-3xl bg-white">
                    <img
                      src="/ai2.png"
                      alt="NewsIQ preview"
                      className="w-full h-auto object-contain rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-24 md:mb-32 mt-50 md:mt-60">
            <div className="group bg-white rounded-3xl p-8 text-center border border-slate-200 hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">AI-Powered Curation</h3>
              <p className="text-slate-700 leading-relaxed">Our advanced AI analyzes thousands of sources and selects only the stories that match your unique interests and preferences.</p>
              <div className="mt-6 text-sm text-blue-700 bg-blue-50 rounded-lg px-4 py-2">
                🔥 Saves 2-3 hours per week
              </div>
            </div>
            
            <div className="group bg-white rounded-3xl p-8 text-center border border-slate-200 hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Perfect Timing</h3>
              <p className="text-slate-700 leading-relaxed">Delivered every Monday at 7 AM, giving you the perfect start to your week with everything you need to know.</p>
              <div className="mt-6 text-sm text-purple-700 bg-purple-50 rounded-lg px-4 py-2">
                ⏰ 94% open rate on Mondays
              </div>
            </div>
            
            <div className="group bg-white rounded-3xl p-8 text-center border border-slate-200 hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Zero Fluff</h3>
              <p className="text-slate-700 leading-relaxed">Only the top 10 most relevant stories. No clickbait, no noise, no endless scrolling. Just what matters to you.</p>
              <div className="mt-6 text-sm text-emerald-700 bg-emerald-50 rounded-lg px-4 py-2">
                🎯 10 stories = 100% relevance
              </div>
            </div>
          </div>

          {/* How It Works - Enhanced */}
          <div className="bg-white rounded-3xl p-12 text-center mb-24 md:mb-32 border border-slate-200 shadow-sm">
            <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              How Smartbreif Works Its Magic
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-6 text-white shadow">1</div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Smart Profiling</h3>
                <p className="text-slate-700 text-sm leading-relaxed">Take our intelligent 5-minute quiz that understands your news DNA better than you do</p>
                <div className="absolute top-20 right-0 w-16 h-px bg-gradient-to-r from-purple-500 to-transparent hidden md:block"></div>
              </div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-6 text-white shadow">2</div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">AI Analysis</h3>
                <p className="text-slate-700 text-sm leading-relaxed">Our neural network creates your unique news fingerprint from 1000+ data points</p>
                <div className="absolute top-20 right-0 w-16 h-px bg-gradient-to-r from-pink-500 to-transparent hidden md:block"></div>
              </div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-6 text-white shadow">3</div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Weekly Curation</h3>
                <p className="text-slate-700 text-sm leading-relaxed">Scan 10,000+ articles from 500+ sources to find your perfect 10 stories</p>
                <div className="absolute top-20 right-0 w-16 h-px bg-gradient-to-r from-red-500 to-transparent hidden md:block"></div>
              </div>
              <div>
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-6 text-white shadow">4</div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Perfect Delivery</h3>
                <p className="text-slate-700 text-sm leading-relaxed">Monday 7 AM: Your personalized digest lands in your inbox, ready to fuel your week</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-white rounded-3xl p-16 border border-slate-200 shadow-sm mb-12">
            <div className="text-6xl mb-6">🧠</div>
            <h3 className="text-5xl font-bold mb-6 text-slate-900">
              Your Smarter News Journey Starts Now
            </h3>
            <p className="text-2xl text-slate-700 mb-10 max-w-3xl mx-auto">
              Join 12,847 professionals who start their week with perfectly curated news. 
              <span className="text-green-700 font-semibold"> It takes 5 minutes to set up, saves hours every week.</span>
            </p>
            <button
              onClick={() => setCurrentView('assessment')}
              className="group relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 px-16 py-8 rounded-2xl font-bold text-2xl hover:shadow-2xl transition-all transform hover:scale-105 mb-6 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-4 text-white">
                <Rocket className="w-8 h-8" />
                Build My NewsIQ Profile
                <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            <div className="flex justify-center items-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>No spam guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>5-minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-600" />
                <span>Free forever</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'assessment') {
    return (
      <div className="min-h-screen bg-white p-4">
        <div className="max-w-4xl mx-auto">
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
      </div>
    );
  }

  if (currentView === 'email_collection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Almost Done! 🎉</h2>
              <p className="text-gray-600 text-lg">
                We've analyzed your preferences. Now let's set up your weekly news delivery.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-blue-800 mb-3">📧 What You'll Receive:</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Top 10 personalized news stories every Monday at 7 AM</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Stories curated from the past week based on your interests</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Brief summaries with links to full articles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Easy unsubscribe anytime</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What should we call you? *
                </label>
                <input
                  type="text"
                  value={emailData.name}
                  onChange={(e) => setEmailData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email address *
                </label>
                <input
                  type="email"
                  value={emailData.email}
                  onChange={(e) => setEmailData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  We'll only use this to send your weekly news digest. No spam, ever.
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country *
                </label>
                <select
                  value={emailData.country}
                  onChange={(e) => setEmailData(prev => ({ ...prev, country: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="" disabled>
                    Select your country
                  </option>
                  {countryOptions.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold">Delivery Schedule</span>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center gap-2 mb-1">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Every Monday at 7:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Top 10 stories from the past week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Personalized to your interests</span>
                  </div>
                </div>
              </div>

              <button
                onClick={completeProfileCreation}
                disabled={!emailData.name || !emailData.email || !emailData.country}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
              >
                Start My Weekly News 🚀
              </button>

              <p className="text-xs text-gray-500 text-center">
                By clicking "Start My Weekly News", you agree to receive weekly email updates. 
                You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-24 h-24 border-4 border-blue-200 rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-24 h-24 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
            <div className="absolute top-6 left-6 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Setting Up Your News Profile...</h3>
          <p className="text-gray-600 mb-6 max-w-md">
            We're analyzing your preferences and preparing your personalized news experience
          </p>
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-500" />
                <span>Processing your interest profile</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-500" />
                <span>Setting up personalization engine</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-blue-300 rounded-full animate-pulse"></div>
                <span>Saving to Google Sheets database</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-blue-300 rounded-full animate-pulse"></div>
                <span>Scheduling your first Monday email</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (currentView === 'confirmation' && !userProfile) {
    return (
      <div className="min-h-screen bg-white p-4">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setCurrentView('landing')}
            className="flex items-center gap-2 mb-8 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </button>
          <div className="text-center mb-10">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Mail className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Sample Monday Morning NewsIQ Issue
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Here’s what your personalized Monday morning email could look like.<br />
              <span className="text-blue-600 font-semibold">15 stories. 5 minutes. 100% relevance.</span>
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="text-sm text-gray-500 mb-1">From: news@mondaymorningnews.com</div>
              <div className="text-sm text-gray-500 mb-1">To: you@email.com</div>
              <div className="text-lg font-bold">📰 Your Top 15 News Stories - Week of August 12, 2025</div>
            </div>
            <div className="bg-white rounded p-4 border-l-4 border-blue-500 mb-6">
              <div className="font-bold text-blue-800 mb-2">Good morning, Reader! ☀️</div>
              <div className="text-gray-700 text-sm">
                Here are your top stories this week, curated just for you by NewsIQ’s AI.<br />
                <span className="text-purple-700 font-semibold">Categories: Technology, Business, Science, World, Lifestyle</span>
              </div>
            </div>
            <div className="space-y-4">
              {/* Sample stories would go here */}
            </div>
            <div className="text-center text-gray-500 text-sm py-6">
              <span className="font-semibold text-blue-700">NewsIQ</span> — Your week, perfectly curated.<br />
              <span className="italic">Want this in your inbox? <span className="underline cursor-pointer text-blue-600" onClick={() => setCurrentView('assessment')}>Build your profile now</span>.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'confirmation' && userProfile) {
    const topInterests = userProfile.interests.slice(0, 3);
    
    return (
      <div className="min-h-screen bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setCurrentView('landing')}
            className="flex items-center gap-2 mb-8 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </button>
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Welcome to Monday Morning News! 🎉
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hi {userProfile.userData.name}! Your personalized news profile is ready. 
              Your first email will arrive this Monday at 7 AM.
            </p>
          </div>

          {/* Profile Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6 text-blue-500" />
              Email Delivery Details
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-800">Delivery Time:</span>
                  <span className="text-gray-700">Every Monday at 7:00 AM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-800">To:</span>
                  <span className="text-gray-700">{userProfile.userData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-gray-800">Country:</span>
                  <span className="text-gray-700">{userProfile.userData.country}</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold text-gray-800">What You'll Get:</span>
                  <span className="text-gray-700">Top 10 stories, personalized for you</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-blue-500 to-green-400 rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
                  <Mail className="w-10 h-10 text-white mb-2" />
                  <span className="text-white font-bold text-lg text-center"></span>
                </div>
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-500 text-center">
              Your personalized news will arrive in your inbox every Monday morning.<br />
              You can update your preferences or unsubscribe anytime.
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">What Happens Next?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-3xl mb-2">📅</div>
                <div className="font-bold mb-2">This Weekend</div>
                <div className="text-sm">Our AI will scan hundreds of news sources from the past week</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-bold mb-2">Monday Morning</div>
                <div className="text-sm">Your personalized top 10 stories will be selected and sent at 7 AM</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-3xl mb-2">📈</div>
                <div className="font-bold mb-2">Every Week</div>
                <div className="text-sm">Content gets more personalized as we learn your reading preferences</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <Eye className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Preview Sample Email</h4>
                <p className="text-gray-600 text-sm mb-4">See what your Monday email will look like</p>
                <button className="text-blue-500 hover:text-blue-600 font-medium">
                  View Sample
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <Settings className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Update Preferences</h4>
                <p className="text-gray-600 text-sm mb-4">Change your interests anytime</p>
                <button 
                  onClick={() => {
                    setCurrentView('assessment');
                    setCurrentStep(0);
                    setAnswers({});
                  }}
                  className="text-green-500 hover:text-green-600 font-medium"
                >
                  Retake Quiz
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Share with Friends</h4>
                <p className="text-gray-600 text-sm mb-4">Help others get personalized news too</p>
                <button className="text-purple-500 hover:text-purple-600 font-medium">
                  Invite Friends
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3">🚀 Ready to get even better news?</h4>
              <p className="text-gray-600 mb-4">
                Your personalized news experience starts this Monday. We'll continuously improve 
                your recommendations based on what you read and engage with.
              </p>
              <div className="text-sm text-gray-500">
                Questions? Email us at support@mondaymorningnews.com
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default WeeklyNewsProfiler;