'use client';
import { useState } from 'react';
import { Search, MapPin, Users, Calendar, HelpCircle, Folder } from 'lucide-react';

export default function MapPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState(['โรงเรียน', 'ศูนย์การศึกษา']);

    const hospitals = [
        {
            id: 1,
            name: 'โรงเรียนสตรีนนทบุรี',
            icon: '🏫',
        },
        {
            id: 2,
            name: 'โรงเรียนปัณณวิชญ์',
            icon: '🏫',
        },
        {
            id: 3,
            name: 'โรงเรียนสวนกุหลาบวิทยาลัย นนทบุรี',
            icon: '🏫',
        },
        {
            id: 4,
            name: 'โรงเรียนนนทบุรีวิทยาลัย',
            icon: '🏫',
        },
    ];

    const filterOptions = ['มัธยมศึกษา', 'ประถมศึกษา', 'อนุบาล', 'เนอสเซอรี่', 'อื่นๆ'];

    const [panelOpen, setPanelOpen] = useState(true);

    return (
        <div className="relative h-screen w-screen bg-gray-50">
            {/* Fullscreen map */}
            <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps?q=โรงเรียนสตรีนนทบุรี&z=15&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map centered on โรงเรียนสตรีนนทบุรี"
            />

            {/* Bottom slidable sheet */}
            <div
                className={`absolute inset-x-0 bottom-0 h-[62%] max-h-[72%] bg-white/95 backdrop-blur border-t border-gray-200 shadow-xl transition-transform duration-300 rounded-4xl ease-in-out ${
                    panelOpen ? 'translate-y-0' : 'translate-y-[calc(100%-52px)]'
                }`}
            >
                <div className="flex flex-col h-full">
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
                                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Filter Chips */}
                        <div className="flex gap-2 overflow-x-auto pb-4">
                            {['มัธยมศึกษา', 'ประถมศึกษา'].map((filter) => (
                                <button
                                    key={filter}
                                    className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium whitespace-nowrap hover:bg-blue-700"
                                >
                                    {filter}
                                    <span>×</span>
                                </button>
                            ))}
                            {filterOptions.slice(2).map((filter) => (
                                <button
                                    key={filter}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-400"
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        {/* Results Section */}
                        <div className="space-y-3">
                            {hospitals.map((hospital) => (
                                <div
                                    key={hospital.id}
                                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition"
                                >
                                    <span className="text-2xl">{hospital.icon}</span>
                                    <span className="text-gray-800 font-medium">{hospital.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}