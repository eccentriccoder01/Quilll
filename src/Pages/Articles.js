import React, { useState, useMemo } from 'react'
import { Search, Filter, Grid, List } from 'lucide-react'
import ArticleContent from "./Article-content"
import ArticlesR from '../Components/ArticlesR'

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');

  // Get unique categories
  const categories = ['all', 'Technology', 'Development', 'Tutorial'];

  // Filter and sort articles
  const filteredAndSortedArticles = useMemo(() => {
    let filtered = ArticleContent.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.content.some(paragraph => paragraph.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || (article.category || 'Technology') === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort articles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.publishDate || '2024-01-01') - new Date(b.publishDate || '2024-01-01');
        case 'title':
          return a.title.localeCompare(b.title);
        default: // newest
          return new Date(b.publishDate || '2024-12-01') - new Date(a.publishDate || '2024-12-01');
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className='mb-20'>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
          All Articles
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our collection of articles covering technology, development, and innovation. 
          Find the perfect read for your interests.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 w-full lg:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="title">By Title</option>
          </select>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'grid' 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'list' 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Counter */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          {filteredAndSortedArticles.length === 0 
            ? 'No articles found' 
            : `${filteredAndSortedArticles.length} article${filteredAndSortedArticles.length !== 1 ? 's' : ''} found`
          }
        </p>
        
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors duration-200"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Articles Grid/List */}
      {filteredAndSortedArticles.length > 0 ? (
        <div className='container mx-auto'>
          <div className={`flex flex-wrap -m-4 ${viewMode === 'list' ? 'max-w-4xl mx-auto' : ''}`}>
            <ArticlesR articlesR={filteredAndSortedArticles} />
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm 
              ? `No articles match your search "${searchTerm}". Try different keywords.`
              : `No articles found in the selected category.`
            }
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Show All Articles
          </button>
        </div>
      )}
    </div>
  )
}

export default Articles