import React, { useEffect, useState, useRef } from 'react';

function Hero() {
  // Simple state management
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const chatContainerRef = useRef(null);
  
  // Static chat conversation
  const chatSequence = [
    { sender: 'user', message: 'Hey Jack, I have a project idea I\'d like to discuss.' },
    { sender: 'jack', message: 'Hi there! I\'d love to hear about it. What kind of project are you thinking about?' },
    { sender: 'user', message: 'I need a new website for my business with some custom features.' },
    { sender: 'jack', message: 'Sounds great! Could you tell me a bit more about your business and what features you need?' },
    { sender: 'user', message: 'Sure! We\'re a tech startup looking for...' }
  ];

  // Scroll chat to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [displayedMessages, typedText]);

  // Chat animation sequence
  useEffect(() => {
    // All messages have been displayed
    if (currentTypingIndex >= chatSequence.length) return;
    
    // Start typing animation
    const startTypingAnimation = () => {
      const currentMessage = chatSequence[currentTypingIndex];
      setIsTyping(true);
      
      let typedChars = '';
      let charIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (charIndex <= currentMessage.message.length) {
          typedChars = currentMessage.message.substring(0, charIndex);
          setTypedText(typedChars);
          charIndex++;
        } else {
          // Typing finished
          clearInterval(typingInterval);
          
          // Wait a moment with completed message
          setTimeout(() => {
            // Add message to displayed messages
            setDisplayedMessages(prev => [...prev, currentMessage]);
            setIsTyping(false);
            setTypedText('');
            
            // Wait before starting next message
            setTimeout(() => {
              setCurrentTypingIndex(prev => prev + 1);
            }, 1000);
          }, 500);
        }
      }, 40);
      
      return () => clearInterval(typingInterval);
    };
    
    // Delay before starting to type
    const timer = setTimeout(startTypingAnimation, 800);
    return () => clearTimeout(timer);
  }, [currentTypingIndex]);

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-4">
          {/* Left Column */}
          <div className="flex flex-col items-start space-y-6">
            {/* Pill label */}
            <div className="inline-block px-6 py-2 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-full"></div>
              <div className="absolute inset-[2px] rounded-full bg-gray-900/95"></div>
              <div className="absolute inset-px rounded-full bg-gradient-to-tr from-blue-500/60 via-transparent to-blue-400/60 opacity-50"></div>
              <span className="relative z-10 text-blue-400 font-medium text-sm tracking-wider">CONTACT</span>
            </div>
            
            {/* Main heading with gradient */}
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-white">Let's start a</span><br/>
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                conversation
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-xl max-w-xl">
              Have a project in mind or questions about working together? 
              I'm here to help turn your ideas into reality. Get in touch and 
              let's create something exceptional.
            </p>
            
            {/* Response indicator */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Responses within 24-48 hours</span>
            </div>
          </div>
          
          {/* Right Column - Chat Visualization */}
          <div className="relative flex items-center justify-end py-16">
            {/* Chat mockup animation */}
            <div className="relative w-full max-w-md mx-auto rounded-xl overflow-hidden border border-gray-700 bg-gray-900/90 backdrop-blur-md shadow-xl">
              {/* Chat header */}
              <div className="bg-gray-800 p-4 flex items-center border-b border-gray-700">
                <div className="w-9 h-9 rounded-full bg-blue-800/60 backdrop-blur-md flex items-center justify-center border border-blue-500/50 overflow-hidden">
                  <img src="/logo.svg" alt="Jack Oliver" className="w-6 h-6" />
                </div>
                <div className="ml-3">
                  <div className="text-white font-medium">jackoliverdev</div>
                  <div className="text-xs text-green-500">Online</div>
                </div>
              </div>
              
              {/* Chat messages container */}
              <div 
                ref={chatContainerRef}
                className="p-4 h-80 overflow-y-auto flex flex-col space-y-4"
              >
                {/* Previously completed messages */}
                {displayedMessages.map((chat, index) => (
                  <div 
                    key={index}
                    className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {chat.sender === 'jack' && (
                      <div className="w-8 h-8 rounded-full bg-blue-800/60 border border-blue-500/50 flex items-center justify-center mr-2 mt-auto">
                        <img src="/logo.svg" alt="Jack Oliver" className="w-5 h-5" />
                      </div>
                    )}
                    <div 
                      className={`max-w-[70%] px-4 py-2 rounded-xl ${
                        chat.sender === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-gray-800 text-gray-200 rounded-tl-none'
                      }`}
                    >
                      {chat.message}
                    </div>
                  </div>
                ))}
                
                {/* Currently typing message */}
                {isTyping && currentTypingIndex < chatSequence.length && (
                  <div 
                    className={`flex ${chatSequence[currentTypingIndex].sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {chatSequence[currentTypingIndex].sender === 'jack' && (
                      <div className="w-8 h-8 rounded-full bg-blue-800/60 border border-blue-500/50 flex items-center justify-center mr-2 mt-auto">
                        <img src="/logo.svg" alt="Jack Oliver" className="w-5 h-5" />
                      </div>
                    )}
                    <div 
                      className={`max-w-[70%] px-4 py-2 rounded-xl ${
                        chatSequence[currentTypingIndex].sender === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-gray-800 text-gray-200 rounded-tl-none'
                      }`}
                    >
                      {typedText}
                      <span className="inline-flex ml-1">
                        <span className="w-1 h-1 bg-current rounded-full inline-block mr-px animate-pulse"></span>
                        <span className="w-1 h-1 bg-current rounded-full inline-block mr-px animate-pulse delay-100"></span>
                        <span className="w-1 h-1 bg-current rounded-full inline-block animate-pulse delay-200"></span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Chat input */}
              <div className="border-t border-gray-700 p-3 bg-gray-800/70">
                <div className="flex bg-gray-900 rounded-full overflow-hidden border border-gray-700">
                  <input 
                    type="text" 
                    className="w-full bg-transparent px-4 py-2 text-white focus:outline-none text-sm"
                    placeholder="Type your message..."
                    disabled
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 right-0 w-20 h-20 bg-blue-500/20 rounded-full blur-3xl z-0"></div>
              <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero; 