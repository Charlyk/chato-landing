"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X } from "lucide-react";
import { useChat } from "./ChatContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface LeadData {
  clinic_name?: string;
  city?: string;
  email?: string;
  phone?: string;
  has_website?: boolean;
  patient_volume?: string;
  pain_point?: string;
}

const initialMessage: Message = {
  role: "assistant",
  content:
    "Bună! 👋 Sunt Chato, asistent AI pentru clinici stomatologice. Pot să răspund la orice întrebare despre cum funcționez.\n\nApropo, voi cum gestionați acum întrebările pacienților de pe site?",
};

export function ChatWidget() {
  const { isOpen, openChat, closeChat } = useChat();
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Show floating bubble after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowBubble(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Hide bubble when chat opens
  useEffect(() => {
    if (isOpen) {
      setShowBubble(false);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Handle mobile keyboard - scroll input into view
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const handleFocus = () => {
      // On mobile, scroll the messages to bottom when keyboard opens
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    };

    textarea.addEventListener("focus", handleFocus);
    return () => textarea.removeEventListener("focus", handleFocus);
  }, []);

  // Auto-resize textarea
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const lineHeight = 20; // approximate line height in pixels
      const maxHeight = lineHeight * 4; // 4 lines max
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [input]);

  // Submit lead to database
  const submitLead = async (leadData: LeadData, conversation: Message[]) => {
    if (leadSubmitted) return; // Don't submit twice

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...leadData,
          conversation: conversation,
        }),
      });

      if (response.ok) {
        setLeadSubmitted(true);
        console.log("Lead saved successfully");
      } else {
        console.error("Failed to save lead");
      }
    } catch (error) {
      console.error("Error saving lead:", error);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput("");

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Eroare la comunicare");
      }

      const updatedMessages: Message[] = [
        ...newMessages,
        { role: "assistant", content: data.response },
      ];
      setMessages(updatedMessages);

      // If lead data was extracted with email, submit it
      if (data.leadData && data.leadData.email) {
        await submitLead(data.leadData, updatedMessages);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Scuze, am întâmpinat o problemă tehnică. Te rog încearcă din nou sau completează formularul de mai jos pentru a te înscrie pe waitlist.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
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
              Bună! 👋 Sunt Chato. Ai întrebări despre cum te pot ajuta cu
              clinica ta?
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
              top-0 left-0 right-0 h-[100dvh]
              sm:inset-auto sm:top-auto sm:left-auto
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
            <ScrollArea className="flex-1 min-h-0">
              <div className="space-y-4 p-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "assistant" && (
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
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border shrink-0">
              <div className="flex gap-2 items-end">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Scrie un mesaj..."
                  className="flex-1 resize-none rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 overflow-y-auto"
                  disabled={isTyping}
                  rows={1}
                  style={{ maxHeight: "80px" }}
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  size="icon"
                  className="bg-primary hover:bg-primary/90 shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Prin utilizarea chat-ului accepți <a href="/politica-confidentialitate" target="_blank" className="text-primary hover:underline">Politica de Confidențialitate</a>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
