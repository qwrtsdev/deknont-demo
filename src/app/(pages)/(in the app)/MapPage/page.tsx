'use client';
import { useRef, useState } from 'react';
import { Search, Users } from 'lucide-react';
import { motion, useMotionValue, animate, PanInfo } from 'framer-motion';
import NavBar from '@/components/NavBar';

// Pixel height of the collapsed peek strip (handle pill + labels)
const PEEK_H = 64;

const schools = [
    { id: 1, name: 'โรงเรียนสตรีนนทบุรี', icon: '🏫' },
    { id: 2, name: 'โรงเรียนปัณณวิชญ์', icon: '🏫' },
    { id: 3, name: 'โรงเรียนสวนกุหลาบวิทยาลัย นนทบุรี', icon: '🏫' },
    { id: 4, name: 'โรงเรียนนนทบุรีวิทยาลัย', icon: '🏫' },
];

const filterOptions = ['มัธยมศึกษา', 'ประถมศึกษา', 'อนุบาล', 'เนอสเซอรี่', 'อื่นๆ'];

export default function MapPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const constraintsRef = useRef<HTMLDivElement>(null);
    const sheetRef = useRef<HTMLDivElement>(null);
    const y = useMotionValue(0);

    // Returns how many px the sheet can travel downward before only the peek shows
    function maxDrag() {
        const h = sheetRef.current?.offsetHeight ?? 0;
        return Math.max(0, h - PEEK_H);
    }

    function snapOpen() {
        animate(y, 0, { type: 'spring', stiffness: 350, damping: 32, mass: 0.7 });
    }

    function snapClosed() {
        animate(y, maxDrag(), { type: 'spring', stiffness: 350, damping: 32, mass: 0.7 });
    }

    function onDragEnd(_: PointerEvent, info: PanInfo) {
        // Fast flick down OR dragged past 30 % of sheet height → close
        if (info.velocity.y > 300 || info.offset.y > (sheetRef.current?.offsetHeight ?? 300) * 0.3) {
            snapClosed();
        } else {
            snapOpen();
        }
    }

    return (
        <div className="relative h-screen w-screen overflow-hidden">

            {/* ── Header ── */}
            <header
                className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-4 py-3 text-white"
                style={{ backgroundColor: '#8E05EC' }}
            >
                <h1 className="text-lg font-semibold">แผนที่</h1>
                <button className="rounded-full bg-white/20 p-2 hover:bg-white/30">
                    <Users className="h-5 w-5" />
                </button>
            </header>

            {/* ── Full-screen map (z-0, behind everything) ── */}
            <iframe
                className="absolute inset-0 w-full h-full z-0"
                src="https://www.google.com/maps?q=นนทบุรี&z=13&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
            />

            {/* ── Invisible drag-constraint box that lives above the map ──
                The sheet is dragged within this box so framer knows the bounds. ── */}
            <div
                ref={constraintsRef}
                className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
                style={{ height: '80vh' }}
            />

            {/* ── Bottom sheet ── */}
            <motion.div
                ref={sheetRef}
                drag="y"
                dragConstraints={constraintsRef}
                dragElastic={{ top: 0.05, bottom: 0.05 }}
                dragMomentum={false}
                onDragEnd={onDragEnd}
                className="absolute inset-x-0 z-20 flex flex-col bg-white rounded-t-3xl shadow-2xl border-t border-gray-200"
                style={{ y, bottom: 64, height: '65vh' }}
            >
                {/* Handle strip — touchAction none so browser doesn't intercept the swipe */}
                <div
                    className="flex flex-col items-center gap-1.5 pt-3 pb-2 select-none cursor-grab active:cursor-grabbing"
                    style={{ touchAction: 'none' }}
                >
                    <div className="h-1.5 w-12 rounded-full bg-gray-300" />
                    <p className="text-sm font-semibold text-gray-700">ค้นหาโรงเรียนในพื้นที่</p>
                    <p className="text-xs text-gray-400">ปัดขึ้น / ลง เพื่อขยายหรือซ่อน</p>
                </div>

                {/* Scrollable content — overscroll-contain keeps scroll inside the sheet */}
                <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">

                    {/* Search */}
                    <div className="relative mb-3">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="ค้นหาโรงเรียน"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 rounded-full bg-gray-100 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    {/* Filter chips */}
                    <div className="flex gap-2 overflow-x-auto pb-3">
                        {['มัธยมศึกษา', 'ประถมศึกษา'].map((f) => (
                            <button
                                key={f}
                                className="flex items-center gap-1 px-4 py-1.5 text-white rounded-full text-sm font-medium whitespace-nowrap shrink-0"
                                style={{ backgroundColor: '#8E05EC' }}
                            >
                                {f} <span className="opacity-60 ml-0.5">×</span>
                            </button>
                        ))}
                        {filterOptions.slice(2).map((f) => (
                            <button
                                key={f}
                                className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap shrink-0"
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Results */}
                    <div className="space-y-1">
                        {schools
                            .filter((s) =>
                                searchQuery === '' ||
                                s.name.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                            .map((school) => (
                                <div
                                    key={school.id}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors"
                                >
                                    <span className="text-2xl">{school.icon}</span>
                                    <span className="text-gray-800 font-medium text-sm">{school.name}</span>
                                </div>
                            ))}
                    </div>
                </div>
            </motion.div>

            <NavBar />
        </div>
    );
}
