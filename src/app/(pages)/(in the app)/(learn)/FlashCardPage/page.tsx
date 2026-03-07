'use client';
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
                            className={`w-full py-3.5 rounded-2xl text-white font-semibold text-base transition ${bg}`}
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
                        style={{ width: `${((current + 1) / total) * 100}%` }}
                    />
                </div>
                <span className="text-white/60 text-xs">{current + 1} / {total}</span>
            </div>
        </div>
    );
}
