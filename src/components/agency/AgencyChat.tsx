"use client";

import { useState, useRef, useEffect } from "react";

type ChatMsg = { role: "user" | "bot"; text: string };

const QUICK_PROMPTS = [
  "What does it cost?",
  "How does the voice receptionist work?",
  "How fast can I be live?",
];

export default function AgencyChat() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMsg[]>([
    {
      role: "bot",
      text: "Hey, I'm the Excelsus AI assistant. Ask me about the voice receptionist, ads, the booking system, reactivation, or prices. What does your business do?",
    },
  ]);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages, chatLoading]);

  async function sendChat(preset?: string) {
    const msg = (preset ?? chatInput).trim();
    if (!msg || chatLoading) return;
    setChatInput("");
    const updated: ChatMsg[] = [...chatMessages, { role: "user", text: msg }];
    setChatMessages(updated);
    setChatLoading(true);
    try {
      const res = await fetch("/api/agency-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      setChatMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply || "Sorry, could you try that again?" },
      ]);
    } catch {
      setChatMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Something went wrong. Email alejandriosity@gmail.com directly.",
        },
      ]);
    } finally {
      setChatLoading(false);
    }
  }

  return (
    <div className="chat" id="chatWidget">
      <div className={`chat-box${chatOpen ? " open" : ""}`} id="chatBubble">
        <div className="chat-top">
          <div className="ava">✦</div>
          <div>
            <strong>Excelsus AI Assistant</strong>
            <span>Systems · Pricing · What's included</span>
          </div>
        </div>
        <div className="chat-msgs" id="chatMessages" ref={chatMessagesRef}>
          {chatMessages.map((m, i) => (
            <div key={i} className={`msg ${m.role}`}>
              {m.text}
            </div>
          ))}
          {chatLoading && (
            <div className="typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
        {chatMessages.length === 1 && !chatLoading && (
          <div className="quick">
            {QUICK_PROMPTS.map((q) => (
              <button key={q} onClick={() => sendChat(q)}>
                {q}
              </button>
            ))}
          </div>
        )}
        <div className="chat-in">
          <input
            type="text"
            id="chatInput"
            placeholder="Ask about pricing, timeline..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendChat();
            }}
            disabled={chatLoading}
          />
          <button onClick={() => sendChat()} disabled={chatLoading}>
            {chatLoading ? "..." : "Send"}
          </button>
        </div>
      </div>
      <button
        className="chat-fab"
        onClick={() => setChatOpen((v) => !v)}
        title="Chat with the Excelsus AI assistant"
        aria-label="Open chat"
      >
        {chatOpen ? "✕" : "💬"}
      </button>
    </div>
  );
}
