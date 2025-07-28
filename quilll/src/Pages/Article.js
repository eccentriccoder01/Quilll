import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, User, Calendar, Share2, BookmarkPlus, Heart, MessageCircle } from 'lucide-react'
import ArticleContent from './Article-content'
import ArticlesR from '../Components/ArticlesR'

const Article = () => {
  const {name} = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scrollY', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize likes with random number
  useEffect(() => {
    setLikes(Math.floor(Math.random() * 50) + 10);
  }, [name]);

  const article = ArticleContent.find((article) => article.name === name);
  if(!article) return (
    <div className="text-center py-20">
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>Article Not Found!</h1>
      <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
      <Link to="/articles" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
        Browse All Articles
      </Link>
    </div>
  );

  const otherArticles = ArticleContent.filter(art => art.name !== name);

  const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.join(' ').split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="mb-20">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-indigo-600 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Back Navigation */}
      <Link 
        to="/articles" 
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium mb-8 transition-colors duration-200 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
        Back to Articles
      </Link>

      {/* Article Header */}
      <div className="mb-12">
        <div className="mb-4">
          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
            {article.category || 'Technology'}
          </span>
        </div>
        
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
          {article.title}
        </h1>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
          <div className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            <span>{article.author || 'Quilll Team'}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{article.publishDate || 'December 2024'}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>{calculateReadingTime(article.content)} min read</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
              isLiked 
                ? 'bg-red-50 border-red-200 text-red-600' 
                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            <span>{likes}</span>
          </button>
          
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
              isBookmarked 
                ? 'bg-indigo-50 border-indigo-200 text-indigo-600' 
                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BookmarkPlus className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
            <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>
          
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all duration-200"
          >
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mb-12">
          <img 
            className="w-full h-64 md:h-96 object-cover" 
            src={article.thumbnail} 
            alt={article.title}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg prose-indigo max-w-none">
          {article.content.map((paragraph, index) => (
            <p className='text-gray-700 leading-relaxed mb-6 text-lg' key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Article Footer */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{article.author || 'Quilll Team'}</h4>
                <p className="text-gray-600 text-sm">Content Creator & Developer</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isLiked 
                    ? 'bg-red-50 text-red-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span>{likes} likes</span>
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-200">
                <MessageCircle className="w-5 h-5" />
                <span>Comment</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continue your reading journey with these handpicked articles that complement your current read.
          </p>
        </div>
        
        <div className='flex flex-wrap -m-4'>
          <ArticlesR articlesR={otherArticles.slice(0, 3)} />
        </div>
        
        {otherArticles.length > 3 && (
          <div className="text-center mt-8">
            <Link 
              to="/articles" 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold group transition-colors duration-200"
            >
              View All Articles
              <ArrowLeft className="ml-2 w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white mt-16">
        <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter and get the latest articles delivered straight to your inbox.
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
)}

export default Article