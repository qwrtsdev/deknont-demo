'use client';
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
        return `${m}:${sec}`;
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
                            className={`w-14 h-14 rounded-full flex flex-col items-center justify-center text-xl transition ${
                                activeNoise === i
                                    ? 'bg-purple-600 shadow-lg shadow-purple-900'
                                    : 'bg-white/10 border border-white/10'
                            }`}
                        >
                            {n.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
