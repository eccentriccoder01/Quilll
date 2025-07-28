import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Zap, Star } from 'lucide-react'
import ArticleContent from "./Article-content"
import ArticlesR from '../Components/ArticlesR'

const Home = () => {
  const featuredArticles = ArticleContent.slice(0, 2);
  
  const stats = [
    { icon: BookOpen, label: 'Articles Published', value: '50+' },
    { icon: Users, label: 'Happy Readers', value: '10K+' },
    { icon: Star, label: 'Average Rating', value: '4.9' },
    { icon: Zap, label: 'Years Experience', value: '5+' }
  ];

  return (
    <div className=''>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Quilll</span>
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed'>
            Discover insightful articles, tutorials, and stories that inspire developers and tech enthusiasts. 
            Join our community of learners and explorers on their coding journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/articles" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Stats Section */}
      <div className="mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked articles that our readers love most. Dive into the world of technology, 
            development, and innovation with our curated content.
          </p>
        </div>
        
        <div className="flex flex-wrap -m-4">
          <ArticlesR articlesR={featuredArticles} />
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/articles" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-lg group transition-colors duration-200"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white mb-20">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
          Get the latest articles and insights delivered straight to your inbox. 
          Join our newsletter and never miss out on quality content.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home