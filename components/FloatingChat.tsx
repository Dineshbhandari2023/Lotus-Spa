'use client';

import React, { useState, useRef, useEffect } from 'react';
import { translations } from '@/lib/translations';
import { MessageSquare, X, Send, Bot, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingChatProps {
  currentLang: 'EN' | 'NP';
  theme: 'light' | 'dark';
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function FloatingChat({ currentLang, theme }: FloatingChatProps) {
  const t = translations[currentLang];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [errorText, setErrorText] = useState('');

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initialize with a serene welcome message based on language on mount
  useEffect(() => {
    setTimeout(() => {
      setMessages([
        {
          role: 'assistant',
          content: t.aiGreeting,
        }
      ]);
    }, 0);
  }, [currentLang, t.aiGreeting]);

  // Auto scroll
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;
    setErrorText('');

    const newMsgs: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(newMsgs);
    setInputVal('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMsgs }),
      });

      if (!res.ok) {
        throw new Error('Failed to retrieve tranquil answer.');
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err: any) {
      console.error(err);
      setErrorText(currentLang === 'EN' ? 'Tranquility disrupted. Please try asking again.' : 'सहायकसँग सम्पर्क हुन सकेन। कृपया फेरि प्रयास गर्नुहोला।');
    } finally {
      setIsTyping(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputVal);
  };

  const handleSuggestedPromptClick = (prompt: string) => {
    handleSendMessage(prompt);
  };

  return (
    <div id="ai-chat-root" className="fixed bottom-6 right-6 z-50">
      
      {/* Closed State Float Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 bg-[#7C8461] hover:bg-[#6b7352] text-white p-4 sm:px-5 sm:py-3.5 rounded-none shadow-none font-sans font-bold tracking-[0.2em] text-[10px] uppercase"
            title="Lotus Wellness Assistant"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline-block pr-1">{currentLang === 'EN' ? 'Zen AI' : 'एआई सहायक'}</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded Active Dialogue Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`w-[92vw] sm:w-[420px] h-[550px] rounded-none border shadow-none overflow-hidden flex flex-col justify-between ${
              theme === 'dark' ? 'bg-[#1A1F16] border-[#272F22] text-white' : 'bg-white border-[#E5DED4] text-[#2D2D2D]'
            }`}
          >
            
            {/* Chat header area */}
            <div className="p-4 flex items-center justify-between border-b border-[#E5DED4] dark:border-[#272F22] bg-[#7C8461] text-white">
              <div className="flex items-center gap-2.5 bg-[#7C8461]">
                <div className="p-1 rounded-none border border-white/20 text-white">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-sm tracking-wide flex items-center gap-1.5">
                    <span>{t.aiTitle}</span>
                    <Sparkles className="w-3 h-3 text-white fill-white" />
                  </h3>
                  <p className="text-[8px] opacity-90 font-sans tracking-[0.18em] uppercase">
                    Ayurvedic Consultation
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-none hover:bg-white/10 text-white transition-all"
                title="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Middle Message Flow Area */}
            <div className={`p-4 flex-grow overflow-y-auto space-y-4 custom-scrollbar text-xs sm:text-sm ${
              theme === 'dark' ? 'bg-[#121510]' : 'bg-[#FDFBF7]'
            }`}>
              
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-none p-3.5 leading-relaxed border ${
                    m.role === 'user'
                      ? 'bg-[#7C8461] border-[#7C8461] text-white font-sans font-medium'
                      : theme === 'dark'
                        ? 'bg-[#1A1F16] text-[#ECEAE2] border-[#272F22]'
                        : 'bg-white text-[#2D2D2D] border-[#E5DED4]'
                  }`}>
                    {/* Preserve linebreaks gracefully */}
                    <div className="whitespace-pre-wrap">{m.content}</div>
                  </div>
                </div>
              ))}

              {/* Server typing spinner */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className={`max-w-[40%] rounded-none p-3 flex items-center gap-2 border ${
                    theme === 'dark' ? 'bg-[#1A1F16] border-[#272F22]' : 'bg-white border-[#E5DED4]'
                  }`}>
                    <div className="flex gap-1.5 p-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C8461] animate-bounce delay-75" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C8461] animate-bounce delay-150" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C8461] animate-bounce delay-300" />
                    </div>
                  </div>
                </div>
              )}

              {/* Error Call */}
              {errorText && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-500 rounded-none flex items-center gap-2 text-xs font-sans">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <p className="font-semibold">{errorText}</p>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Suggested quick cues footer row */}
            {messages.length === 1 && (
              <div className={`px-4 py-3.5 border-t border-[#E5DED4] dark:border-[#272F22] flex flex-col gap-1.5 ${
                theme === 'dark' ? 'bg-[#1A1F16]' : 'bg-white'
              }`}>
                <p className="text-[9px] font-sans font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-1">
                  {currentLang === 'EN' ? 'Suggested Queries' : 'सुझावहरू'}
                </p>
                <button
                  onClick={() => handleSuggestedPromptClick(t.aiSuggestedPrompt1)}
                  className={`text-[10px] font-sans font-semibold text-left p-2.5 rounded-none border transition-all text-ellipsis overflow-hidden whitespace-nowrap ${
                    theme === 'dark' 
                      ? 'bg-[#121510] border-[#272F22] text-[#A2A994] hover:bg-[#1A1F16]' 
                      : 'bg-[#FDFBF7] border-[#E5DED4] text-[#444] hover:bg-[#F8F6F2]'
                  }`}
                >
                  ❓ {t.aiSuggestedPrompt1}
                </button>
                <button
                  onClick={() => handleSuggestedPromptClick(t.aiSuggestedPrompt2)}
                  className={`text-[10px] font-sans font-semibold text-left p-2.5 rounded-none border transition-all text-ellipsis overflow-hidden whitespace-nowrap ${
                    theme === 'dark' 
                      ? 'bg-[#121510] border-[#272F22] text-[#A2A994] hover:bg-[#1A1F16]' 
                      : 'bg-[#FDFBF7] border-[#E5DED4] text-[#444] hover:bg-[#F8F6F2]'
                  }`}
                >
                  🧠 {t.aiSuggestedPrompt2}
                </button>
                <button
                  onClick={() => handleSuggestedPromptClick(t.aiSuggestedPrompt3)}
                  className={`text-[10px] font-sans font-semibold text-left p-2.5 rounded-none border transition-all text-ellipsis overflow-hidden whitespace-nowrap ${
                    theme === 'dark' 
                      ? 'bg-[#121510] border-[#272F22] text-[#A2A994] hover:bg-[#1A1F16]' 
                      : 'bg-[#FDFBF7] border-[#E5DED4] text-[#444] hover:bg-[#F8F6F2]'
                  }`}
                >
                  🧘 {t.aiSuggestedPrompt3}
                </button>
              </div>
            )}

            {/* Form text submit area */}
            <form
              onSubmit={handleFormSubmit}
              className={`p-3 border-t flex items-center gap-2 ${
                theme === 'dark' ? 'bg-[#1A1F16] border-[#272F22]' : 'bg-white border-[#E5DED4]'
              }`}
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={t.aiPlaceholder}
                className={`flex-grow p-3 rounded-none text-xs sm:text-sm font-sans focus:outline-none focus:border-[#7C8461] ${
                  theme === 'dark' 
                    ? 'bg-[#121510] border border-[#272F22] text-white' 
                    : 'bg-[#F8F6F2] border border-[#E5DED4] text-[#2D2D2D]'
                }`}
              />

              <button
                type="submit"
                disabled={!inputVal.trim() || isTyping}
                className="p-3 rounded-none bg-[#7C8461] hover:bg-[#6b7352] disabled:opacity-50 text-white font-bold transition-all flex items-center justify-center"
                title="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className={`p-1.5 text-[8px] text-center opacity-60 font-sans tracking-wide uppercase ${
              theme === 'dark' ? 'bg-[#121510]' : 'bg-[#FDFBF7]'
            }`}>
              {t.aiDisclaimer}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
