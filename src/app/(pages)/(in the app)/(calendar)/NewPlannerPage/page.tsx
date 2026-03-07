'use client';
import { useState } from 'react';
import { ChevronLeft, Calendar, CalendarPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function NewPlannerPage() {
    const router = useRouter();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [reminder] = useState('3 วัน');

    const handleSubmit = () => {
        console.log({ startDate, endDate, title, location, description, reminder });
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100">
                <div className="flex items-center justify-between px-4 py-4">
                    <button onClick={() => router.back()} className="p-1">
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <h1 className="text-lg font-semibold text-gray-800">สร้างกิจกรรมใหม่</h1>
                    <div className="w-8" />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-4 py-6 space-y-4 pb-28">
                {/* Title */}
                <input
                    type="text"
                    placeholder="ชื่อกิจกรรม"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-gray-100 text-gray-800 placeholder-gray-400 px-4 py-3 rounded-xl focus:outline-none"
                />

                {/* Date Range */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full bg-gray-100 text-gray-400 px-4 py-3 rounded-xl focus:outline-none appearance-none"
                        />
                        {!startDate && (
                            <span className="absolute left-4 top-3 text-gray-400 pointer-events-none text-sm">เวลาเริ่มต้น</span>
                        )}
                        <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    <div className="relative">
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full bg-gray-100 text-gray-400 px-4 py-3 rounded-xl focus:outline-none appearance-none"
                        />
                        {!endDate && (
                            <span className="absolute left-4 top-3 text-gray-400 pointer-events-none text-sm">เวลาสิ้นสุด</span>
                        )}
                        <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                {/* Location */}
                <input
                    type="text"
                    placeholder="สถานที่"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-gray-100 text-gray-800 placeholder-gray-400 px-4 py-3 rounded-xl focus:outline-none"
                />

                {/* Description */}
                <textarea
                    placeholder="รายละเอียดเพิ่มเติม"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-gray-100 text-gray-800 placeholder-gray-400 px-4 py-3 rounded-xl focus:outline-none resize-none h-36"
                />

                {/* Reminder */}
                <button className="w-full bg-gray-100 px-4 py-3 rounded-xl flex items-center justify-between">
                    <span className="text-gray-500">แจ้งเตือนอีกในอีก</span>
                    <span className="text-gray-800 font-medium">{reminder} ›</span>
                </button>
            </div>

            {/* Submit Button */}
            <div className="fixed bottom-0 left-0 right-0 px-4 py-4 bg-white">
                <button
                    onClick={handleSubmit}
                    className="w-full bg-black text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-900 active:bg-gray-800 transition"
                >
                    <CalendarPlus className="w-5 h-5" />
                    สร้างกิจกรรม
                </button>
            </div>
        </div>
    );
}