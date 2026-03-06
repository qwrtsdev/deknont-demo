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
            name: 'โรงเรียนปันนวัฒษ',
            icon: '🏫',
        },
        {
            id: 3,
            name: 'โรงเรียนสวนหลวงวิทยาลัย นนทบุรี',
            icon: '🏫',
        },
        {
            id: 4,
            name: 'โรงเรียนอนุสรณ์โครงการเสด',
            icon: '🏫',
        },
    ];

    const filterOptions = ['บริษัทกีฬา', 'ประณมศึกษา', 'อุมนศา', 'เบิร์สเอธร', 'อื่นๆ'];

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* Map Section */}
            <div className="flex-1 relative">
                <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps?q=โรงเรียนสตรีนนทบุรี&z=15&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map centered on โรงเรียนสตรีนนทบุรี"
                />
            </div>

            {/* Search and Filters Section */}
            <div className="bg-white px-4 pt-4 pb-2 space-y-4">
                {/* Search Bar */}
                <div className="relative">
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
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {['บริษัทกีฬา', 'ประณมศึกษา'].map((filter) => (
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
            </div>

            {/* Results Section */}
            <div className="flex-1 overflow-y-auto bg-white px-4 py-4">
                <div className="space-y-3">
                    {hospitals.map((hospital) => (
                        <div key={hospital.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">
                            <span className="text-2xl">{hospital.icon}</span>
                            <span className="text-gray-800 font-medium">{hospital.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}