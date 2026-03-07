import { writeFileSync } from "fs";

const content = `'use client';
import { useState } from 'react';
import { Search, UserRound } from 'lucide-react';
import NavBar from '@/components/NavBar';

const tutors = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
];

function SkeletonBanner() {
    return (
        <div className="mx-4 mt-4 h-44 rounded-2xl bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse overflow-hidden flex items-center justify-center">
            <div className="w-24 h-10 bg-gray-300 rounded-lg" />
        </div>
    );
}

function SkeletonTutorCard() {
    return (
        <div className="flex flex-col items-center gap-2 animate-pulse">
            <div className="w-full aspect-[3/4] rounded-2xl bg-gradient-to-b from-gray-200 to-gray-300" />
            <div className="h-3 w-16 bg-gray-200 rounded-full" />
        </div>
    );
}

export default function TutorPage() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="min-h-screen bg-white pb-28">
            {/* Header */}
            <div
                className="flex items-center justify-between px-4 py-3 text-white"
                style={{ backgroundColor: '#8E05EC' }}
            >
                <h1 className="text-lg font-semibold">ติวเตอร์</h1>
                <button className="rounded-full bg-white/20 p-2 hover:bg-white/30">
                    <UserRound className="h-5 w-5" />
                </button>
            </div>

            {/* Search Bar */}
            <div className="relative mx-4 mt-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="ค้นหาติวเตอร์"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-full bg-gray-100 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
            </div>

            {/* Banner Skeleton */}
            <SkeletonBanner />

            {/* Tutor Grid Skeleton */}
            <div className="px-4 mt-5 grid grid-cols-2 gap-4">
                {tutors.map((t) => (
                    <SkeletonTutorCard key={t.id} />
                ))}
            </div>
            <NavBar />
        </div>
    );
}
`;

writeFileSync(
    "src/app/(pages)/(in the app)/TutorPage/page.tsx",
    content,
    "utf8",
);
console.log("Done");
