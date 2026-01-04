"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X } from "lucide-react";
import { useChat } from "./ChatContext";

interface Message {
  role: "user" | "bot";
  content: string;
}

const initialMessage: Message = {
  role: "bot",
  content:
    "Bună! 👋 Sunt Chato, asistent AI pentru clinici stomatologice. Pot să răspund la orice întrebare despre cum funcționez.\n\nApropo, voi cum gestionați acum întrebările pacienților de pe site?",
};

export function ChatWidget() {
  const { isOpen, openChat, closeChat } = useChat();
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Show floating bubble after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowBubble(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Hide bubble when chat opens
  useEffect(() => {
    if (isOpen) {
      setShowBubble(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    // Simulate bot response (in production, this would call /api/chat)
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: getBotResponse(userMessage),
        },
      ]);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating bubble message */}
      {showBubble && !isOpen && (
        <div className="fixed bottom-24 right-6 z-50 max-w-[280px] bg-white rounded-2xl rounded-br-md p-4 shadow-lg border border-border animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted/80"
            aria-label="Închide"
          >
            <X className="w-3 h-3" />
          </button>
          <button onClick={openChat} className="text-left">
            <p className="text-sm text-foreground">
              Bună! 👋 Sunt Chato. Ai întrebări despre cum te pot ajuta cu clinica ta?
            </p>
          </button>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={openChat}
        className={`chat-widget-btn chat-widget-pulse z-50 ${
          isOpen ? "hidden" : "flex"
        }`}
        aria-label="Deschide chat"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <>
          {/* Mobile overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-50 sm:hidden"
            onClick={closeChat}
          />

          {/* Chat panel */}
          <div
            className="fixed z-50 bg-background border border-border shadow-2xl flex flex-col
              inset-0 sm:inset-auto
              sm:bottom-6 sm:right-6
              sm:w-[400px] sm:h-[600px] sm:max-h-[calc(100vh-100px)]
              sm:rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-white text-lg font-semibold">Chato</h2>
                    <p className="text-white/80 text-sm">Online acum</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeChat}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 shrink-0">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] ${
                        message.role === "user" ? "message-user" : "message-bot"
                      }`}
                    >
                      <p className="whitespace-pre-wrap text-sm">
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="message-bot">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                        <span
                          className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <span
                          className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border shrink-0">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Scrie un mesaj..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

// Simple demo responses
function getBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("pret") || lowerMessage.includes("cost")) {
    return "Planul Start e 150 RON/lună pentru 500 conversații. Ajunge pentru majoritatea clinicilor mici-medii. Câți pacienți vă contactează pe site aproximativ?";
  }

  if (lowerMessage.includes("cum functioneaza") || lowerMessage.includes("cum funcționează")) {
    return "Simplu: copiați un cod pe site (2 minute, ca un script de Google Analytics). În dashboard completați informațiile clinicii - prețuri, servicii, program. Chato învață și începe să răspundă. Când e ceva ce nu știe, vă trimite notificare pe WhatsApp.\n\nVreți să vă rezervați locul pe waitlist?";
  }

  if (lowerMessage.includes("waitlist") || lowerMessage.includes("inscri")) {
    return "Super! Ca să vă rezerv locul pe waitlist, am nevoie de:\n- Numele clinicii\n- Email\n- Telefon\n\nVă contactăm când deschidem accesul. Clinicile de pe waitlist primesc 2 luni gratuite în loc de 14 zile! 🎉";
  }

  if (lowerMessage.includes("formular") || lowerMessage.includes("contact")) {
    return "Formularul e ok, dar pacienții trebuie să aștepte răspunsul, nu? Chato răspunde instant, 24/7 - și noaptea, și în weekend. Câți pacienți vă contactează aproximativ pe lună?";
  }

  return "Înțeleg! Chato e un asistent AI care răspunde automat la întrebările pacienților pe site-ul clinicii, 24/7. Preia întrebările repetitive despre prețuri, program, servicii - exact ce consumă mult timp.\n\nCe vă interesează să aflați despre Chato?";
}
