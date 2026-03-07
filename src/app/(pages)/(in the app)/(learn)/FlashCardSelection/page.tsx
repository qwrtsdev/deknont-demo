'use client';
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
                        className={`${deck.color} rounded-2xl p-4 text-left flex flex-col gap-2 hover:opacity-90 transition active:scale-95`}
                    >
                        <p className="text-white font-bold text-sm leading-tight">{deck.title}</p>
                        <p className="text-white/80 text-xs">{deck.count} การ์ด</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
