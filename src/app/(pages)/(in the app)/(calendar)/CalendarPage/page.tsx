'use client';
import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Plus, UserRound } from 'lucide-react';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/NavBar';


export default function CalendarPage() {
    const router = useRouter();
    const [currentDate] = useState<Date>(() => new Date(2026, 2, 1));

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    // Safe: entire component is 'use client', so this only runs in the browser
    const monthName = useMemo(
        () => currentDate.toLocaleDateString('th-TH', { month: 'long', year: 'numeric' }),
        [currentDate]
    );

    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyDays = Array.from({ length: firstDay }, () => null);

    return (
        <div className="min-h-screen bg-white pb-28">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 text-white" style={{ backgroundColor: '#8E05EC' }}>
                <h1 className="text-lg font-semibold">ปฏิทิน</h1>
                <button className="rounded-full bg-white/20 p-2 hover:bg-white/30">
                    <UserRound className="h-5 w-5" />
                </button>
            </div>

            {/* Calendar Card */}
            <div className="mx-4 mt-4 bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">
                        {monthName}
                        <span className="text-purple-600 text-lg ml-2">›</span>
                    </h2>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <ChevronLeft className="w-5 h-5 text-purple-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <ChevronRight className="w-5 h-5 text-purple-600" />
                        </button>
                    </div>
                </div>

                {/* Weekdays */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                        <div key={day} className="text-center text-gray-400 text-sm font-medium py-2">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-2">
                    {emptyDays.map((_, i) => (
                        <div key={`empty-${i}`}></div>
                    ))}
                    {days.map((day) => (
                        <div
                            key={day}
                            className={`aspect-square flex items-center justify-center rounded-lg font-semibold cursor-pointer ${
                                day === 1 ? 'bg-purple-200 text-purple-600' : 'text-gray-800 hover:bg-gray-100'
                            }`}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>

            {/* Upcoming Events */}
            <div className="px-4 mb-8">
                <h3 className="text-lg font-bold text-black mb-4">ปฎิทินกิจกรรม</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-400 rounded-2xl p-4 text-white">
                        <div className="text-3xl font-bold mb-2">2</div>
                        <p className="font-semibold">วันหยุด</p>
                        <p className="text-sm opacity-90">วันมาฆบูชา</p>
                        <p className="text-xs opacity-75">3 มีนาคม 2569</p>
                    </div>
                    <div className="bg-yellow-400 rounded-2xl p-4 text-gray-800">
                        <div className="text-3xl font-bold mb-2">19</div>
                        <p className="font-semibold">วันสำคัญ</p>
                        <p className="text-sm opacity-90">สอบปลายภาค</p>
                        <p className="text-xs opacity-75">20 มีนาคม 2569</p>
                    </div>
                </div>
            </div>

            {/* Classes Section */}
            <div className="px-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">แพลนเนอร์</h3>
                    <button className="p-2 hover:bg-gray-100 rounded-lg" onClick={() => router.push('/NewPlannerPage')}>
                        <Plus className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
                <div className="space-y-3">
                    {['ติว A-Level English', 'ติว A-Level คณิต 1'].map((course, idx) => (
                        <div key={idx} className="bg-gray-100 rounded-lg p-4 flex gap-3">
                            <div className="w-12 h-12 bg-gray-300 rounded-lg flex-shrink-0"></div>
                            <div>
                                <p className="font-semibold text-gray-800">{course}</p>
                                <p className="text-xs text-gray-500">20 มีนาคม 2569 • 12:00 น.</p>
                                <p className="text-xs text-gray-500">เตือนฉันอีกครั้งใน 19 วัน</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <NavBar />
        </div>
    );
}