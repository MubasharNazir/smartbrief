import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, Calendar, User, Clock, ArrowRight, 
  ChevronLeft, TrendingUp, Globe, Brain
} from 'lucide-react';

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Powered News Curation",
      excerpt: "How artificial intelligence is revolutionizing the way we consume and process news content in our daily lives.",
      author: "Sarah Johnson",
      date: "August 12, 2025",
      readTime: "5 min read",
      category: "Technology",
      image: "/ai.webp"
    },
    {
      id: 2,
      title: "Beating Information Overload: 5 Proven Strategies",
      excerpt: "Discover practical methods to filter through the noise and focus on news that truly matters to your professional growth.",
      author: "Mike Rodriguez",
      date: "August 10, 2025",
      readTime: "7 min read",
      category: "Productivity",
      image: "/ai2.png"
    },
    {
      id: 3,
      title: "Why Monday Morning News Digests Are Game-Changing",
      excerpt: "Research shows that starting your week with curated information improves decision-making and productivity by 40%.",
      author: "Dr. Emily Chen",
      date: "August 8, 2025",
      readTime: "6 min read",
      category: "Research",
      image: "/ai.webp"
    },
    {
      id: 4,
      title: "Building Better News Habits for Busy Professionals",
      excerpt: "A practical guide to consuming news efficiently without getting overwhelmed or missing important updates.",
      author: "Alex Thompson",
      date: "August 5, 2025",
      readTime: "4 min read",
      category: "Lifestyle",
      image: "/ai2.png"
    },
    {
      id: 5,
      title: "The Psychology Behind Personalized Content",
      excerpt: "Understanding how personalization algorithms work and why they're more effective than traditional news consumption methods.",
      author: "Dr. Lisa Park",
      date: "August 3, 2025",
      readTime: "8 min read",
      category: "Psychology",
      image: "/ai.webp"
    },
    {
      id: 6,
      title: "From Chaos to Clarity: Our Journey Building Smartbrief",
      excerpt: "The story behind creating an AI news platform that serves thousands of professionals worldwide.",
      author: "Smartbrief Team",
      date: "August 1, 2025",
      readTime: "10 min read",
      category: "Company",
      image: "/ai2.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full w-10 h-10 flex items-center justify-center shadow">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">Smartbrief</span>
          </div>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Smartbrief Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tips, and stories about news consumption, AI, and staying informed in the modern world.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-blue-200 text-sm font-medium mb-2">FEATURED POST</div>
                  <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                  <p className="text-blue-100 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-blue-200 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white/10 rounded-2xl p-8 flex items-center justify-center">
                    <Brain className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {['All', 'Technology', 'Productivity', 'Research', 'Lifestyle', 'Psychology', 'Company'].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                category === 'All'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-blue-400">
                  {post.category === 'Technology' && <Brain className="w-12 h-12" />}
                  {post.category === 'Productivity' && <TrendingUp className="w-12 h-12" />}
                  {post.category === 'Research' && <Globe className="w-12 h-12" />}
                  {post.category === 'Lifestyle' && <Clock className="w-12 h-12" />}
                  {post.category === 'Psychology' && <User className="w-12 h-12" />}
                  {post.category === 'Company' && <Mail className="w-12 h-12" />}
                </div>
              </div>
              <div className="p-6">
                <div className="text-blue-500 text-sm font-medium mb-2">{post.category}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <button className="text-blue-500 font-medium hover:text-blue-600 transition-colors flex items-center gap-2">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get notified when we publish new articles about AI, productivity, and smart news consumption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
