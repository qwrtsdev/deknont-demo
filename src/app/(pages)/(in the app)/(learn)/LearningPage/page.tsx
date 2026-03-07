'use client';
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
            <div className="px-5 pt-12 pb-6" style={{ backgroundColor: '#8E05EC' }}>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-white">เรียนรู้</h1>
                    <button className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                        <UserRound className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>

            {/* Focus Mode Button */}
            <div className="px-5 mt-4">
                <button
                    onClick={() => router.push('/FocusPage')}
                    className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-5 py-3 flex items-center justify-between mb-2 hover:bg-gray-200 transition"
                >
                    <span className="text-gray-800 font-semibold text-sm">เริ่มต้นโหมดโฟกัส</span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8E05EC' }}>
                        <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                </button>
                <p className="text-gray-400 text-xs px-1">เข้าสู่โหมดโฟกัส เพื่อเพิ่มสมรรถภาพในการเรียนรู้</p>
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
                            <div className={`w-20 h-28 ${book.color} rounded-xl flex items-end justify-center pb-2 shadow-md`}>
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
                            <div className={`w-20 h-28 ${book.color} rounded-xl flex items-end justify-center pb-2 shadow-md`}>
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
