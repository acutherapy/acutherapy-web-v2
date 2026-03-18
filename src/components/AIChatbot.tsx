import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";

const GREETINGS = {
    EN: "Hello! I'm your AcuTherapy assistant. How can I help you today?",
    JA: "こんにちは！AcuTherapyのアシスタントです。どのようなご用件でしょうか？",
    ZH: "你好！我是您的AcuTherapy助手。今天我可以怎么帮您？",
    KO: "안녕하세요! AcuTherapy 어시스턴트입니다. 오늘 무엇을 도와드릴까요?",
    ES: "¡Hola! Soy tu asistente de AcuTherapy. ¿Cómo puedo ayudarte hoy?"
};

const LIMIT_MESSAGES = {
    EN: "You have reached the free AI consultation limit (5/5). To receive personalized medical care, please [**Book an Appointment**](/book-appointment) or call us directly at **(808) 528-7177**.",
    JA: "無料AI相談の制限（5/5）に達しました。個別のご相談については、[**ご予約**](/book-appointment)いただくか、**(808) 528-7177**までお電話ください。",
    ZH: "您已达到免费AI咨询次数上限 (5/5)。如需获得个性化的专业医疗建议，请[**在线预约**](/book-appointment) 或直接致电 **(808) 528-7177**。",
    KO: "무료 AI 상담 한도(5/5)에 도달했습니다. 개별적인 전문 상담을 원하시면 [**예약하기**](/book-appointment)를 이용하시거나 **(808) 528-7177**로 직접 전화해 주십시오.",
    ES: "Ha alcanzado el límite de consultas gratuitas de IA (5/5). Para recibir atención médica personalizada, por favor [**Reserve una Cita**](/book-appointment) o llámenos directamente al **(808) 528-7177**."
};

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [usageCount, setUsageCount] = useState(0);
    // Note: If you implement a language context in this Vite app, you can hook it in here. Default is EN.
    const lang: string = "EN";

    const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([
        { role: "assistant", text: GREETINGS[lang as keyof typeof GREETINGS] || GREETINGS.EN },
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Initialize usage count
    useEffect(() => {
        const count = parseInt(localStorage.getItem('acu_ai_usage_count') || '0');
        setUsageCount(count);

        if (count >= 5) {
            setMessages(prev => {
                const newList = [...prev];
                if (newList.length > 0 && newList[0].role === 'assistant') {
                    newList[0].text = GREETINGS[lang as keyof typeof GREETINGS] || GREETINGS.EN;
                }
                const limitMsgText = LIMIT_MESSAGES[lang as keyof typeof LIMIT_MESSAGES] || LIMIT_MESSAGES.EN;
                if (!newList.find(m => Object.values(LIMIT_MESSAGES).includes(m.text))) {
                    newList.push({ role: "assistant", text: limitMsgText });
                } else {
                    const idx = newList.findIndex(m => Object.values(LIMIT_MESSAGES).includes(m.text));
                    if (idx !== -1) newList[idx].text = limitMsgText;
                }
                return newList;
            });
        }
    }, [lang]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || usageCount >= 5) return;

        const userMessage = input;
        setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
        setInput("");

        const newCount = usageCount + 1;
        setUsageCount(newCount);
        localStorage.setItem('acu_ai_usage_count', newCount.toString());

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [
                        ...messages.map(m => ({ role: m.role, content: m.text })),
                        { role: "user", content: userMessage }
                    ],
                    language: lang === 'JA' ? 'Japanese' : lang === 'ZH' ? 'Chinese (Simplified)' : lang === 'KO' ? 'Korean' : lang === 'ES' ? 'Spanish' : 'English'
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                console.warn("API Error:", data.error);
                setMessages((prev) => [...prev, {
                    role: "assistant",
                    text: lang === 'JA'
                        ? "申し訳ありませんが、AIサービスに接続できません。直接(808) 528-7177までご連絡ください。"
                        : lang === 'ZH'
                            ? "抱歉，无法连接到AI服务。请直接致电 (808) 528-7177 联系我们。"
                            : lang === 'KO'
                                ? "죄송합니다. AI 서비스에 연결할 수 없습니다. (808) 528-7177로 직접 문의해 주십시오."
                                : lang === 'ES'
                                    ? "Lo siento, no puedo conectarme al servicio de IA. Por favor contáctenos directamente al (808) 528-7177."
                                    : "I'm currently unable to connect to the AI service. Please contact us directly at (808) 528-7177."
                }]);
                return;
            }

            setMessages((prev) => [...prev, { role: "assistant", text: data.content }]);

            if (newCount >= 5) {
                setTimeout(() => {
                    setMessages((prev) => [...prev, { role: "assistant", text: LIMIT_MESSAGES[lang as keyof typeof LIMIT_MESSAGES] || LIMIT_MESSAGES.EN }]);
                }, 1000);
            }

        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [...prev, {
                role: "assistant",
                text: lang === 'JA'
                    ? "エラーが発生しました。後でもう一度お試しください。"
                    : lang === 'ZH'
                        ? "抱歉，遇到错误。请稍后再试。"
                        : lang === 'KO'
                            ? "죄송합니다. 오류가 발생했습니다. 나중에 다시 시도해 주세요."
                            : lang === 'ES'
                                ? "Lo siento, encontré un error. Por favor, inténtelo de nuevo más tarde."
                                : "Sorry, I encountered an error. Please try again later."
            }]);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-80 md:w-96 rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 h-[500px]">
                    {/* Header */}
                    <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Bot className="h-6 w-6" />
                            <span className="font-bold text-lg">AcuTherapy Assistant</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:text-blue-200 transition-colors">
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50" ref={scrollRef}>
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${msg.role === "user"
                                        ? "bg-blue-600 text-white rounded-br-sm"
                                        : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm"
                                        }`}
                                >
                                    {msg.role === "assistant" ? (
                                        <div className="space-y-3">
                                            <div className="prose prose-sm max-w-none prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline">
                                                <ReactMarkdown>
                                                    {msg.text}
                                                </ReactMarkdown>
                                            </div>
                                            <div className="flex gap-2 pt-2 border-t border-slate-100">
                                                <a href="/book-appointment" className="flex-1 bg-emerald-500 text-white text-center py-1.5 rounded-lg text-xs font-bold hover:bg-emerald-600 transition-colors shadow-sm">
                                                    📅 Book Now
                                                </a>
                                                <a href="tel:8085287177" className="flex-1 bg-blue-100 text-blue-700 text-center py-1.5 rounded-lg text-xs font-bold hover:bg-blue-200 transition-colors shadow-sm">
                                                    📞 Call Clinic
                                                </a>
                                            </div>
                                        </div>
                                    ) : (
                                        msg.text
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex gap-2 items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={usageCount >= 5}
                            placeholder={
                                usageCount >= 5
                                    ? (lang === 'ZH' ? "已达到免费次数上限" : lang === 'JA' ? "利用制限に達しました" : lang === 'KO' ? "무료 횟수 초과" : lang === 'ES' ? "Límite alcanzado" : "Limit reached")
                                    : lang === 'JA' ? "メッセージを入力..." :
                                        lang === 'ZH' ? "输入消息..." :
                                            lang === 'KO' ? "메시지 입력..." :
                                                lang === 'ES' ? "Escribe un mensaje..." :
                                                    "Type a message..."
                            }
                            className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:bg-slate-100"
                        />
                        <button
                            type="submit"
                            className="rounded-full bg-blue-600 p-2.5 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
                            disabled={!input.trim() || usageCount >= 5}
                        >
                            <Send className="h-5 w-5" />
                        </button>
                    </form>
                </div>
            )}

            {/* FAB Toggle */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-transform hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-600/30"
                >
                    <MessageSquare className="h-8 w-8" />
                </button>
            )}
        </div>
    );
}
