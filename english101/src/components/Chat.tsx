import { useState, useEffect, useRef } from 'react';
import type { FormEvent, KeyboardEvent } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

// Obtén la URL base del backend desde las variables de entorno
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
const API_CHAT_URL = `${API_URL}/api/chat`

console.log("CLIENT_SIDE VITE_API_URL:", import.meta.env.VITE_API_URL);
console.log("CLIENT_SIDE API_URL (base):", API_URL);
console.log("CLIENT_SIDE API_CHAT_URL (completa):", API_CHAT_URL);

const Chat = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    const userMessageText = userInput;
    const newUserMessage: Message = {
      id: Date.now().toString() + '-user',
      text: userMessageText,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await fetch(API_CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessageText }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ reply: "Error de red o respuesta no JSON." }));
        throw new Error(errorData.reply || `Error del servidor: ${response.status}`);
      }

      const data: { reply: string } = await response.json();

      const newAiMessage: Message = {
        id: Date.now().toString() + '-ai',
        text: data.reply,
        sender: 'ai',
      };
      setMessages((prevMessages) => [...prevMessages, newAiMessage]);

    } catch (error) {
      console.error("Error al contactar al AI:", error);
      const errorMessageText = error instanceof Error ? error.message : "Ocurrió un error desconocido.";
      const errorMessage: Message = {
        id: Date.now().toString() + '-error',
        text: `Error: ${errorMessageText}`,
        sender: 'ai',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="flex flex-col w-full h-[85vh] bg-gradient-to-b from-purple-800 to-purple-900 rounded-lg overflow-hidden">
      <div className="flex-grow p-4 sm:p-6 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] sm:max-w-[65%] p-3 rounded-xl break-words
                ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-br-none'
                    : 'bg-gradient-to-r from-purple-800 to-purple-900 text-purple-400 rounded-bl-none'
                }
                ${msg.id.includes('-error') ? '!bg-gradient-to-r from-red-700 to-red-800 text-red-100' : ''}
              `}
            >
              {msg.text.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < msg.text.split('\n').length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[70%] sm:max-w-[65%] p-3 rounded-xl bg-gradient-to-r from-purple-800 to-purple-900 text-purple-400 rounded-bl-none animate-pulse">
              <p><i>Thinking...</i></p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center p-3 sm:p-4 border-t border-purple-500 bg-gradient-to-r from-purple-800 to-purple-900"
      >
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          disabled={isLoading}
          className="flex-grow p-1 border border-purple-500 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-purple-900 text-purple-400 placeholder-purple-400 disabled:opacity-50"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              handleSubmit(e);
            }
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="ml-1 p-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chat; 