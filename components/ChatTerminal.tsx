import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatTerminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'GREETINGS USER. I AM ARCADE-BOT. ASK ME ABOUT RAYYAN.', timestamp: Date.now() }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const history = messages.map(m => `${m.role}: ${m.text}`);
    const response = await sendMessageToGemini(userMsg.text, history);

    const botMsg: ChatMessage = { role: 'model', text: response, timestamp: Date.now() };
    setMessages(prev => [...prev, botMsg]);
    setLoading(false);
  };

  return (
    <div className="border-4 border-arcade-neonGreen bg-black p-1 rounded-lg shadow-[0_0_10px_#00ff00] font-vt323 h-[400px] flex flex-col w-full max-w-2xl mx-auto">
      <div className="bg-arcade-neonGreen text-black px-2 py-1 font-bold text-lg flex justify-between">
        <span><i className="fas fa-robot mr-2"></i>AI_ASSISTANT_V1.0</span>
        <span className="animate-pulse">ONLINE</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-lg">
        {messages.map((msg, idx) => (
          <div key={idx} className={`${msg.role === 'user' ? 'text-arcade-neonPink text-right' : 'text-arcade-neonGreen text-left'}`}>
            <span className="opacity-50 text-xs block mb-1">
              {msg.role === 'user' ? '> PLAYER 1' : '> SYSTEM'}
            </span>
            <span className="typing-effect">{msg.text}</span>
          </div>
        ))}
        {loading && (
          <div className="text-arcade-neonGreen text-left animate-pulse">
            `{'>'}` PROCESSING...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="border-t-2 border-arcade-neonGreen p-2 flex gap-2">
        <span className="text-arcade-neonGreen text-xl">{'>'}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Rayyan..."
          className="bg-transparent border-none outline-none text-arcade-neonGreen w-full font-vt323 text-xl placeholder-green-900"
        />
        <button type="submit" className="text-arcade-neonGreen hover:text-white">
          [SEND]
        </button>
      </form>
    </div>
  );
};

export default ChatTerminal;
