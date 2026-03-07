import { writeFileSync } from "fs";

const content = `'use client';
import { useState } from 'react';
import { Search, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';

export default function MapPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [panelOpen, setPanelOpen] = useState(true);

    const hospitals = [
        { id: 1, name: 'โรงเรียนสตรีนนทบุรี', icon: '🏫' },
        { id: 2, name: 'โรงเรียนปัณณวิชญ์', icon: '🏫' },
        { id: 3, name: 'โรงเรียนสวนกุหลาบวิทยาลัย นนทบุรี', icon: '🏫' },
        { id: 4, name: 'โรงเรียนนนทบุรีวิทยาลัย', icon: '🏫' },
    ];

    const filterOptions = ['มัธยมศึกษา', 'ประถมศึกษา', 'อนุบาล', 'เนอสเซอรี่', 'อื่นๆ'];

    return (
        <div className="relative h-screen w-screen bg-gray-50">
            {/* Top header */}
            <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-3 backdrop-blur text-white" style={{ backgroundColor: '#8E05EC' }}>
                <h1 className="text-lg font-semibold">แผนที่</h1>
                <button className="rounded-full bg-white/20 p-2 hover:bg-white/30">
                    <Users className="h-5 w-5" />
                </button>
            </header>

            {/* Fullscreen map */}
            <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps?q=โรงเรียนสตรีนนทบุรี&z=15&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map centered on โรงเรียนสตรีนนทบุรี"
            />

            {/* Bottom spring sheet */}
            <motion.div
                className="absolute inset-x-0 bottom-0 h-[62%] max-h-[72%] bg-white/95 backdrop-blur border-t border-gray-200 shadow-xl rounded-t-3xl overflow-hidden"
                initial={false}
                animate={{ y: panelOpen ? 0 : 'calc(100% - 52px)' }}
                transition={{ type: 'spring', stiffness: 320, damping: 30, mass: 0.8 }}
            >
                <div className="flex flex-col h-full">
                    {/* Drag handle + title */}
                    <div className="flex flex-col items-center gap-2 p-3">
                        <button
                            className="h-1.5 w-12 rounded-full bg-gray-300 mt-1 mb-2"
                            onClick={() => setPanelOpen((open) => !open)}
                            aria-label={panelOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
                        />
                        <div className="text-center">
                            <p className="text-sm font-semibold text-gray-700">ค้นหาโรงเรียนในพื้นที่</p>
                            <p className="text-xs text-gray-500">เลื่อนขึ้นเพื่อดูเพิ่มเติม</p>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-4 pb-4">
                        {/* Search Bar */}
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="ค้นหาโรงเรียน"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Filter Chips */}
                        <div className="flex gap-2 overflow-x-auto pb-4">
                            {['มัธยมศึกษา', 'ประถมศึกษา'].map((filter) => (
                                <button
                                    key={filter}
                                    className="flex items-center gap-1 px-4 py-2 text-white rounded-full text-sm font-medium whitespace-nowrap"
                                    style={{ backgroundColor: '#8E05EC' }}
                                >
                                    {filter}
                                    <span>×</span>
                                </button>
                            ))}
                            {filterOptions.slice(2).map((filter) => (
                                <button
                                    key={filter}
                                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-300"
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        {/* Results */}
                        <div className="space-y-3">
                            {hospitals.map((hospital) => (
                                <div
                                    key={hospital.id}
                                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition"
                                >
                                    <span className="text-2xl">{hospital.icon}</span>
                                    <span className="text-gray-800 font-medium">{hospital.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
            <NavBar />
        </div>
    );
}
`;

writeFileSync("src/app/(pages)/(in the app)/MapPage/page.tsx", content, "utf8");
console.log("Done");
