import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import matchedData from '../context/matchedData.json';
import { Search } from 'lucide-react';
import { SearchImageDataContext } from '../context/SearchImageDataContext';

const ImageSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const [hasSearched, setHasSearched] = useState(false);
  const { setSearchResultUrls } = useContext(SearchImageDataContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const results = {};
    
    Object.keys(matchedData).forEach(category => {
      Object.keys(matchedData[category]).forEach(name => {
        if (name.toLowerCase().includes(query)) {
          if (!results[category]) {
            results[category] = [];
          }
          results[category].push({
            name: name,
            images: matchedData[category][name]
          });
        }
      });
    });

    setSearchResults(results);
    setHasSearched(true);
    console.log('Found in categories:', results);
  };

  const handleCategoryClick = (images) => {
    setSearchResultUrls(images);
    navigate('/gallery/search');
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-2xl px-4">
          <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent">
            Search Your Photos
          </h1>
          
          <div className="relative mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter your name..."
              className="w-full px-6 py-4 text-lg bg-[#1e1e1e] text-white rounded-lg border border-gray-700 focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5] focus:outline-none transition duration-200"
            />
            
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] text-white p-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Search size={20} />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>

          <p className="text-gray-400 text-center mt-4">
            Enter your full name to find photos from college events
          </p>

          {hasSearched && (
            <div className="mt-8">
              {Object.keys(searchResults).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.keys(searchResults).map((category) => (
                    <div
                      key={category}
                      onClick={() => handleCategoryClick(searchResults[category][0].images)}
                      className="p-4 bg-[#1e1e1e] rounded-lg border border-gray-700 hover:border-[#4f46e5] transition-colors duration-200 cursor-pointer"
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {category}
                      </h3>
                      <p className="text-gray-400">
                        Found {searchResults[category][0].images.length} match(es)
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-400">
                  No matches found. Try a different name.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSearchPage;
