import { writeFileSync } from "fs";

// ── 1. LearningPage ──────────────────────────────────────────────────────────
const learningPage = `'use client';
import { useRouter } from 'next/navigation';
import { Play, UserRound } from 'lucide-react';
import NavBar from '@/components/NavBar';

const examBooks = [
    { title: 'Real English A-Level', color: 'bg-red-500', emoji: '📗' },
    { title: 'A-Level คณิต', color: 'bg-blue-500', emoji: '📘' },
    { title: 'MOCK EXAM A-Level', color: 'bg-orange-400', emoji: '📙' },
    { title: 'เตรียม A-Level ฟิสิกส์', color: 'bg-green-500', emoji: '📕' },
    { title: 'TGAT เตรียมสอบ', color: 'bg-yellow-500', emoji: '📒' },
    { title: 'Mock Test ภาษาไทย', color: 'bg-purple-500', emoji: '📓' },
    { title: 'เตรียม A-Level เคมี', color: 'bg-pink-500', emoji: '📔' },
    { title: 'A-Level สังคม', color: 'bg-teal-500', emoji: '📗' },
];

const books = [
    { title: 'ประวัติศาสตร์ ป.3', color: 'bg-red-400', emoji: '📕' },
    { title: 'วิทยาศาสตร์ ม.2', color: 'bg-blue-400', emoji: '📘' },
    { title: 'ภาษาไทย ป.5', color: 'bg-yellow-400', emoji: '📒' },
    { title: 'คณิตศาสตร์ ม.1', color: 'bg-green-400', emoji: '📗' },
    { title: 'สังคมศึกษา ป.4', color: 'bg-purple-400', emoji: '📓' },
    { title: 'ภาษาอังกฤษ ม.3', color: 'bg-orange-400', emoji: '📙' },
    { title: 'พลศึกษา ป.6', color: 'bg-pink-400', emoji: '📔' },
    { title: 'ดนตรี ม.2', color: 'bg-teal-400', emoji: '📗' },
];

export default function LearningPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white pb-28">
            {/* Header */}
            <div className="bg-purple-600 px-5 pt-12 pb-6">
                <div className="flex items-center justify-between mb-5">
                    <h1 className="text-2xl font-bold text-white">เรียนรู้</h1>
                    <button className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                        <UserRound className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* Focus Mode Button */}
                <button
                    onClick={() => router.push('/FocusPage')}
                    className="w-full bg-white/15 border border-white/30 rounded-2xl px-5 py-3 flex items-center justify-between mb-2 hover:bg-white/25 transition"
                >
                    <span className="text-white font-semibold text-sm">เริ่มต้นโหมดโฟกัส</span>
                    <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                </button>
                <p className="text-white/60 text-xs px-1">เข้าสู่โหมดโฟกัส เพื่อเพิ่มสมรรถภาพในการเรียนรู้</p>
            </div>

            {/* Flashcard Button */}
            <div className="px-5 mt-4">
                <button
                    onClick={() => router.push('/FlashCardSelection')}
                    className="w-full bg-purple-600 rounded-2xl px-5 py-3 flex items-center justify-between hover:bg-purple-700 transition"
                >
                    <span className="text-white font-semibold">แฟลชการ์ด</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                </button>
                <p className="text-gray-400 text-xs mt-1 px-1">ทดสอบความรู้ด้วยแฟลชการ์ด เพื่อเพิ่มความจำในการเรียน</p>
            </div>

            {/* คลังข้อสอบ */}
            <div className="px-5 mt-6">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-base font-bold text-gray-900">คลังข้อสอบ</h2>
                    <button className="text-purple-600 text-xs font-medium">ดูเพิ่มเติม</button>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {examBooks.map((book, i) => (
                        <div key={i} className="flex-shrink-0 w-20 cursor-pointer">
                            <div className={\`w-20 h-28 \${book.color} rounded-xl flex items-end justify-center pb-2 shadow-md\`}>
                                <span className="text-3xl">{book.emoji}</span>
                            </div>
                            <p className="text-xs text-gray-700 mt-1 text-center leading-tight line-clamp-2">{book.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* คลังหนังสือ */}
            <div className="px-5 mt-6">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-base font-bold text-gray-900">คลังหนังสือ</h2>
                    <button className="text-purple-600 text-xs font-medium">ดูเพิ่มเติม</button>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {books.map((book, i) => (
                        <div key={i} className="flex-shrink-0 w-20 cursor-pointer">
                            <div className={\`w-20 h-28 \${book.color} rounded-xl flex items-end justify-center pb-2 shadow-md\`}>
                                <span className="text-3xl">{book.emoji}</span>
                            </div>
                            <p className="text-xs text-gray-700 mt-1 text-center leading-tight line-clamp-2">{book.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <NavBar />
        </div>
    );
}
`;

// ── 2. FocusPage ─────────────────────────────────────────────────────────────
const focusPage = `'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, UserRound, Pause, Play } from 'lucide-react';

const TOTAL = 60 * 60; // 60 minutes in seconds

const noises = [
    { label: '🌧️', name: 'ฝน' },
    { label: '🌿', name: 'ป่า' },
    { label: '🌊', name: 'คลื่น' },
    { label: '🚫', name: 'ปิด' },
];

export default function FocusPage() {
    const router = useRouter();
    const [seconds, setSeconds] = useState(TOTAL);
    const [running, setRunning] = useState(false);
    const [activeNoise, setActiveNoise] = useState(3);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setSeconds((s) => (s > 0 ? s - 1 : 0));
            }, 1000);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [running]);

    const fmt = (s: number) => {
        const m = Math.floor(s / 60).toString().padStart(2, '0');
        const sec = (s % 60).toString().padStart(2, '0');
        return \`\${m}:\${sec}\`;
    };

    const progress = 1 - seconds / TOTAL;
    const r = 110;
    const circ = 2 * Math.PI * r;

    return (
        <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(180deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%)' }}>
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-12 pb-4">
                <button onClick={() => router.back()} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <h1 className="text-white font-semibold text-lg">โหมดโฟกัส</h1>
                <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <UserRound className="w-5 h-5 text-white" />
                </button>
            </div>

            {/* Timer Ring */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
                <div className="relative w-64 h-64 flex items-center justify-center">
                    <svg className="absolute inset-0 -rotate-90" width="256" height="256" viewBox="0 0 256 256">
                        <circle cx="128" cy="128" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
                        <circle
                            cx="128" cy="128" r={r} fill="none"
                            stroke="#6c63ff" strokeWidth="12"
                            strokeLinecap="round"
                            strokeDasharray={circ}
                            strokeDashoffset={circ * (1 - progress)}
                            style={{ transition: 'stroke-dashoffset 1s linear' }}
                        />
                    </svg>
                    <span className="text-white text-5xl font-bold tracking-widest">{fmt(seconds)}</span>
                </div>

                {/* Play / Pause */}
                <button
                    onClick={() => setRunning((r) => !r)}
                    className="w-14 h-14 rounded-full bg-white/15 border border-white/20 flex items-center justify-center hover:bg-white/25 transition"
                >
                    {running
                        ? <Pause className="w-6 h-6 text-white fill-white" />
                        : <Play className="w-6 h-6 text-white fill-white" />}
                </button>
            </div>

            {/* Ambient Noise Selector */}
            <div className="px-6 pb-12">
                <p className="text-white/40 text-xs text-center mb-3">เสียงประกอบบรรยากาศ</p>
                <div className="flex justify-center gap-4">
                    {noises.map((n, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveNoise(i)}
                            className={\`w-14 h-14 rounded-full flex flex-col items-center justify-center text-xl transition \${
                                activeNoise === i
                                    ? 'bg-purple-600 shadow-lg shadow-purple-900'
                                    : 'bg-white/10 border border-white/10'
                            }\`}
                        >
                            {n.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
`;

// ── 3. FlashCardSelection ─────────────────────────────────────────────────────
const flashCardSelection = `'use client';
import { useRouter } from 'next/navigation';
import { ChevronLeft, UserRound } from 'lucide-react';

const decks = [
    { id: 1, title: 'English slangs',              count: 15,  color: 'bg-cyan-400' },
    { id: 2, title: 'English A-Level Vocabulary',  count: 59,  color: 'bg-pink-500' },
    { id: 3, title: 'Math Mid-term Formula',        count: 59,  color: 'bg-green-500' },
    { id: 4, title: 'Chinese Vocabulary HSK 1 - 3', count: 120, color: 'bg-red-500' },
    { id: 5, title: 'Math Mid-term Formula',        count: 1,   color: 'bg-yellow-400' },
];

export default function FlashCardSelection() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-950 pb-10">
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-12 pb-6">
                <button onClick={() => router.back()} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <h1 className="text-white font-semibold text-lg">แฟลชการ์ด</h1>
                <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <UserRound className="w-5 h-5 text-white" />
                </button>
            </div>

            {/* Deck Grid */}
            <div className="px-5 grid grid-cols-2 gap-4">
                {decks.map((deck) => (
                    <button
                        key={deck.id}
                        onClick={() => router.push('/FlashCardPage')}
                        className={\`\${deck.color} rounded-2xl p-4 text-left flex flex-col gap-2 hover:opacity-90 transition active:scale-95\`}
                    >
                        <p className="text-white font-bold text-sm leading-tight">{deck.title}</p>
                        <p className="text-white/80 text-xs">{deck.count} การ์ด</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
`;

// ── 4. FlashCardPage ──────────────────────────────────────────────────────────
const flashCardPage = `'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Plus } from 'lucide-react';

const cards = [
    { front: '找', back: 'หา' },
    { front: '买', back: 'ซื้อ' },
    { front: '卖', back: 'ขาย' },
    { front: '去', back: 'ไป' },
    { front: '来', back: 'มา' },
    { front: '吃', back: 'กิน' },
    { front: '喝', back: 'ดื่ม' },
    { front: '睡', back: 'นอน' },
    { front: '走', back: 'เดิน' },
    { front: '跑', back: 'วิ่ง' },
    { front: '看', back: 'ดู' },
    { front: '听', back: 'ฟัง' },
    { front: '说', back: 'พูด' },
    { front: '读', back: 'อ่าน' },
    { front: '写', back: 'เขียน' },
    { front: '想', back: 'คิด' },
    { front: '做', back: 'ทำ' },
    { front: '用', back: 'ใช้' },
    { front: '给', back: 'ให้' },
    { front: '拿', back: 'จับ' },
];

const options = ['หา', 'จับ', 'ฉัน', 'กำแพง'];

export default function FlashCardPage() {
    const router = useRouter();
    const [current, setCurrent] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    const card = cards[current];
    const total = cards.length;

    const handleAnswer = (opt: string) => {
        setSelected(opt);
        setTimeout(() => {
            setSelected(null);
            setFlipped(false);
            setCurrent((c) => (c + 1) % total);
        }, 600);
    };

    return (
        <div className="min-h-screen bg-gray-950 flex flex-col pb-6">
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-12 pb-4">
                <button onClick={() => router.back()} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <h1 className="text-white font-semibold text-lg">แฟลชการ์ด</h1>
                <div className="w-9" />
            </div>

            {/* Card */}
            <div className="flex-1 flex items-center justify-center px-8">
                <button
                    onClick={() => setFlipped((f) => !f)}
                    className="w-full aspect-square max-w-xs bg-white rounded-3xl shadow-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200 active:scale-95"
                >
                    <span className="text-8xl font-bold text-gray-900">{flipped ? card.back : card.front}</span>
                </button>
            </div>

            {/* Answer Choices */}
            <div className="px-5 space-y-3">
                {options.map((opt) => {
                    const isCorrect = opt === card.back;
                    let bg = 'bg-purple-600 hover:bg-purple-700';
                    if (selected === opt) bg = isCorrect ? 'bg-green-500' : 'bg-red-500';
                    else if (selected && isCorrect) bg = 'bg-green-500';
                    return (
                        <button
                            key={opt}
                            onClick={() => handleAnswer(opt)}
                            disabled={selected !== null}
                            className={\`w-full py-3.5 rounded-2xl text-white font-semibold text-base transition \${bg}\`}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>

            {/* Progress */}
            <div className="px-5 mt-5 flex items-center gap-3">
                <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <Plus className="w-5 h-5 text-white" />
                </button>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-green-400 rounded-full transition-all duration-300"
                        style={{ width: \`\${((current + 1) / total) * 100}%\` }}
                    />
                </div>
                <span className="text-white/60 text-xs">{current + 1} / {total}</span>
            </div>
        </div>
    );
}
`;

writeFileSync(
    "src/app/(pages)/(in the app)/(learn)/LearningPage/page.tsx",
    learningPage,
    "utf8",
);
writeFileSync(
    "src/app/(pages)/(in the app)/(learn)/FocusPage/page.tsx",
    focusPage,
    "utf8",
);
writeFileSync(
    "src/app/(pages)/(in the app)/(learn)/FlashCardSelection/page.tsx",
    flashCardSelection,
    "utf8",
);
writeFileSync(
    "src/app/(pages)/(in the app)/(learn)/FlashCardPage/page.tsx",
    flashCardPage,
    "utf8",
);

console.log("All 4 pages written.");
