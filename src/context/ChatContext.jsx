import React, { createContext, useContext, useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [updates, setUpdates] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchLatestAIUpdates = async (prompt) => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are an expert in Data Science and Generative Artificial Intelligence. Provide the latest updates on AI tools based on this query: "${prompt}". Keep your response highly formatted and concise.`,
              });
      
      setUpdates(response.text);
    } catch (error) {
      console.error("Error fetching AI updates:", error);
      setUpdates("Failed to retrieve updates. Check your API key or network connection.");
    }
    setLoading(false);
  };

  return (
    <ChatContext.Provider value={{ updates, loading, fetchLatestAIUpdates }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within a ChatProvider");
  return context;
};
