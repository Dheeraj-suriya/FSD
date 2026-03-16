import React, { useState } from 'react';
import { useChat } from './context/ChatContext';

export default function App() {
  const [query, setQuery] = useState("");
  const { updates, loading, fetchLatestAIUpdates } = useChat();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchLatestAIUpdates(query);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full z-10">
        <h1 className="text-4xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          AI Tools Tracker
        </h1>
        <p className="text-slate-400 text-center mb-8">Discover the latest releases in Generative AI</p>
        
        <form onSubmit={handleSearch} className="flex gap-4 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., What are the newest video generation tools?"
            className="flex-1 px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {updates && (
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">Latest Updates</h2>
            <div className="text-slate-300 leading-relaxed whitespace-pre-wrap">
              {updates}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
