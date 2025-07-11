"use client";
import React, { useState, useEffect } from 'react';
import { 
  Search, Star, X, ChevronDown, ChevronUp, Sliders, 
  Grid2X2, LayoutList, Check, Bell, Eye, Play
} from 'lucide-react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  
  const [searchInput, setSearchInput] = useState(query || '');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    priceRange: [0, 1000],
    rating: null,
    sortBy: 'popular'
  });

  // Update search input when query changes
  useEffect(() => {
    setSearchInput(query || '');
  }, [query]);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    } else {
      router.push('/search');
    }
  };

  // Mock categories
  const categories = [
    { id: 'fashion', name: 'Fashion', count: 1234 },
    { id: 'electronics', name: 'Electronics', count: 856 },
    { id: 'home', name: 'Home & Living', count: 643 },
    { id: 'beauty', name: 'Beauty', count: 432 },
    { id: 'sports', name: 'Sports', count: 321 },
    { id: 'toys', name: 'Toys', count: 234 },
  ];

  // Mock live streams
  const liveStreams = [
    {
      id: 1,
      title: "Summer Fashion Collection Showcase",
      host: {
        name: "Fashion Forward",
        image: "https://i.pravatar.cc/150?img=32"
      },
      thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
      viewers: 1245,
      isLive: true
    },
    {
      id: 2,
      title: "Tech Gadgets Review & Deals",
      host: {
        name: "Tech World",
        image: "https://i.pravatar.cc/150?img=45"
      },
      thumbnail: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=400&h=300&fit=crop",
      viewers: 856,
      isLive: true
    },
    {
      id: 3,
      title: "Cooking Masterclass: Summer Recipes",
      host: {
        name: "Chef Julia",
        image: "https://i.pravatar.cc/150?img=20"
      },
      thumbnail: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop",
      viewers: 734,
      isLive: true
    },
    {
      id: 4,
      title: "Home Decor Ideas for Small Spaces",
      host: {
        name: "Interior Dreams",
        image: "https://i.pravatar.cc/150?img=28"
      },
      thumbnail: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=300&fit=crop",
      viewers: 512,
      isLive: true
    }
  ];

  // Mock products with proper images and data
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      rating: 4.8,
      reviews: 1234,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80",
      seller: "Tech World",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      price: 399.99,
      rating: 4.9,
      reviews: 856,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop&q=80",
      seller: "Smart Gear",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Designer Leather Handbag",
      price: 199.99,
      rating: 4.7,
      reviews: 543,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&q=80",
      seller: "Fashion Hub",
      category: "Fashion"
    },
    {
      id: 4,
      name: "Running Shoes Pro",
      price: 129.99,
      rating: 4.6,
      reviews: 921,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&q=80",
      seller: "Sports Elite",
      category: "Sports"
    },
    {
      id: 5,
      name: "4K Ultra HD Camera",
      price: 899.99,
      rating: 4.9,
      reviews: 432,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop&q=80",
      seller: "Photo Pro",
      category: "Electronics"
    },
    {
      id: 6,
      name: "Minimalist Watch",
      price: 159.99,
      rating: 4.5,
      reviews: 678,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&q=80",
      seller: "Time Pieces",
      category: "Fashion"
    },
    {
      id: 7,
      name: "Wireless Gaming Mouse",
      price: 79.99,
      rating: 4.7,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&q=80",
      seller: "Gaming World",
      category: "Electronics"
    },
    {
      id: 8,
      name: "Mechanical Keyboard",
      price: 149.99,
      rating: 4.8,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop&q=80",
      seller: "Tech Plus",
      category: "Electronics"
    }
  ];

  const toggleFilter = (type, value) => {
    setSelectedFilters(prev => {
      if (type === 'categories') {
        const newCategories = prev.categories.includes(value)
          ? prev.categories.filter(cat => cat !== value)
          : [...prev.categories, value];
        return { ...prev, categories: newCategories };
      }
      if (type === 'rating') {
        return { ...prev, rating: prev.rating === value ? null : value };
      }
      if (type === 'sortBy') {
        return { ...prev, sortBy: value };
      }
      return prev;
    });
  };

  const FilterSection = ({ title, children, isOpen = true }) => {
    const [sectionOpen, setSectionOpen] = useState(isOpen);
    
    return (
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => setSectionOpen(!sectionOpen)}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          {sectionOpen ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>
        {sectionOpen && (
          <div className="mt-4 space-y-2">
            {children}
          </div>
        )}
      </div>
    );
  };

  // Live stream card component
  const LiveStreamCard = ({ stream }) => {
    return (
      <Link href={`/live/view/${stream.id}`} className="block">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
          <img
            src={stream.thumbnail}
            alt={stream.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
          
          {/* Live badge */}
          <div className="absolute top-2 left-2 flex items-center gap-1">
            <div className="flex items-center gap-1 bg-red-500/90 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-1" />
              LIVE
            </div>
            <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-0.5 rounded-full text-xs">
              <Eye className="w-3 h-3" />
              {stream.viewers}
            </div>
          </div>
          
          {/* Host avatar */}
          <div className="absolute bottom-2 left-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white">
              <img
                src={stream.host.image}
                alt={stream.host.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white text-sm font-medium">{stream.host.name}</span>
          </div>
        </div>
        <h3 className="mt-2 text-sm font-medium line-clamp-2">{stream.title}</h3>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <form onSubmit={handleSearch} className="flex items-center gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-purple-500"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <button 
              type="submit" 
              className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link href="/notifications" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors"
            >
              <Sliders className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Filters</span>
              {selectedFilters.categories.length > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs bg-purple-600 text-white rounded-full">
                  {selectedFilters.categories.length}
                </span>
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-8">
          {/* Live Streams Section - Show only if no query parameter */}
          {!query && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Live Now</h2>
                <Link href="/live" className="text-purple-600 text-sm font-medium hover:underline">
                  View All
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {liveStreams.map(stream => (
                  <LiveStreamCard key={stream.id} stream={stream} />
                ))}
              </div>
            </div>
          )}

          {/* Products Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Products</h2>
              {query && (
                <p className="text-gray-500">Showing results for "{query}"</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/search/${product.id%2+1}`}
                  className="block"
                >
                  <div
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow
                           flex flex-row md:flex-col h-full" // List view on mobile, grid view on desktop
                  >
                    {/* Image container */}
                    <div className="w-32 md:w-full flex-shrink-0"> {/* Fixed width on mobile, full width on desktop */}
                      <div className="aspect-square relative group">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
                      </div>
                    </div>

                    {/* Content container */}
                    <div className="flex-1 p-3 md:p-4 flex flex-col">
                      <h3 className="font-medium text-sm mb-1 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm ml-1">{product.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
                      </div>
                      {/* Price and Cart - Stack on mobile, side by side on desktop */}
                      <div className="mt-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <span className="text-purple-600 font-bold">${product.price}</span>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            // Add to cart logic
                          }} 
                          className="text-xs bg-purple-600 text-white px-3 py-1.5 rounded-full hover:bg-purple-700 transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Drawer - Now for both mobile and desktop */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
        isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-white transform transition-transform duration-300 ${
          isFilterOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {/* Active filters summary */}
              {selectedFilters.categories.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedFilters.categories.map(category => (
                    <button
                      key={category}
                      onClick={() => toggleFilter('categories', category)}
                      className="flex items-center gap-1 px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                    >
                      {categories.find(c => c.id === category)?.name}
                      <X className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              <FilterSection title="Categories">
                {categories.map(category => (
                  <label key={category.id} className="flex items-center gap-2 cursor-pointer py-2">
                    <input
                      type="checkbox"
                      checked={selectedFilters.categories.includes(category.id)}
                      onChange={() => toggleFilter('categories', category.id)}
                      className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-600">{category.name}</span>
                    <span className="text-xs text-gray-400 ml-auto">{category.count}</span>
                  </label>
                ))}
              </FilterSection>

              <FilterSection title="Price Range">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-3 py-1.5 rounded border border-gray-200 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-3 py-1.5 rounded border border-gray-200 text-sm"
                    />
                  </div>
                  <input
                    type="range"
                    className="w-full"
                    min="0"
                    max="1000"
                    step="10"
                  />
                </div>
              </FilterSection>

              <FilterSection title="Rating">
                {[5, 4, 3, 2, 1].map(rating => (
                  <button
                    key={rating}
                    onClick={() => toggleFilter('rating', rating)}
                    className={`flex items-center gap-2 w-full px-2 py-1.5 rounded ${
                      selectedFilters.rating === rating ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      {Array.from({ length: rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      {Array.from({ length: 5 - rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-gray-300"
                        />
                      ))}
                    </div>
                    <span className="text-sm">{rating}+ Stars</span>
                  </button>
                ))}
              </FilterSection>

              <FilterSection title="Sort By">
                {[
                  { id: 'popular', label: 'Most Popular' },
                  { id: 'newest', label: 'Newest First' },
                  { id: 'price_low', label: 'Price: Low to High' },
                  { id: 'price_high', label: 'Price: High to Low' },
                ].map(sort => (
                  <button
                    key={sort.id}
                    onClick={() => toggleFilter('sortBy', sort.id)}
                    className={`flex items-center justify-between w-full px-2 py-1.5 rounded text-sm ${
                      selectedFilters.sortBy === sort.id ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
                    }`}
                  >
                    {sort.label}
                    {selectedFilters.sortBy === sort.id && (
                      <Check className="w-4 h-4" />
                    )}
                  </button>
                ))}
              </FilterSection>
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectedFilters({
                      categories: [],
                      priceRange: [0, 1000],
                      rating: null,
                      sortBy: 'popular'
                    });
                  }}
                  className="flex-1 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage; 