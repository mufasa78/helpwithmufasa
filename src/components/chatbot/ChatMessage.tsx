import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: {
    text: string;
    isBot: boolean;
    timestamp: Date;
  };
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`flex max-w-[80%] gap-2 p-3 rounded-2xl ${
          message.isBot
            ? 'bg-white/5 rounded-tl-none'
            : 'bg-purple-500/20 rounded-tr-none'
        }`}
      >
        {message.isBot && (
          <Bot className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
        )}
        <div>
          <p className="text-sm">{message.text}</p>
          <span className="text-xs text-gray-400 mt-1 block">
            {message.timestamp.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
        </div>
        {!message.isBot && (
          <User className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
        )}
      </div>
    </motion.div>
  );
};

export default ChatMessage;