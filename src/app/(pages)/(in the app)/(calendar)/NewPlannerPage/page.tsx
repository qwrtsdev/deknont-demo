'use client';
import { useState } from 'react';
import { ChevronLeft, Calendar } from 'lucide-react';


export default function NewPlannerPage() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [reminder, setReminder] = useState('3 วัน');

    const handleSubmit = () => {
        // Handle form submission
        console.log({ startDate, endDate, title, description, reminder });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200">
                <div className="flex items-center justify-between px-4 py-4">
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                    <h1 className="text-lg font-semibold text-gray-800">สร้างกิจกรรมใหม่</h1>
                    <div className="w-6" />
                </div>
            </div>

            {/* Content */}
            <div className="px-4 py-6 space-y-4">
                {/* Title/Category */}
                <input
                    type="text"
                    placeholder="ชื่อกิจกรรม"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-gray-100 text-gray-400 px-4 py-3 rounded-lg focus:outline-none"
                />

                {/* Date Range */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full bg-gray-100 text-gray-600 px-4 py-3 rounded-lg focus:outline-none"
                            placeholder="เวลาเริ่มต้น"
                        />
                        <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    <div className="relative">
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full bg-gray-100 text-gray-600 px-4 py-3 rounded-lg focus:outline-none"
                            placeholder="เวลาสิ้นสุด"
                        />
                        <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder="สถานที่"
                        className="w-full bg-gray-100 text-gray-600 px-4 py-3 rounded-lg focus:outline-none"
                    />
                </div>

                {/* Description */}
                <textarea
                    placeholder="รายละเอียดเพิ่มเติม"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-gray-100 text-gray-600 px-4 py-3 rounded-lg focus:outline-none resize-none h-32"
                />

                {/* Reminder */}
                <div className="bg-gray-100 px-4 py-3 rounded-lg flex items-center justify-between">
                    <span className="text-gray-600">แจ้งเตือนวันก่อน</span>
                    <span className="text-gray-800 font-medium">{reminder} ›</span>
                </div>
            </div>

            {/* Submit Button */}
            <div className="fixed bottom-0 left-0 right-0 px-4 py-4 bg-white border-t border-gray-200">
                <button
                    onClick={handleSubmit}
                    className="w-full bg-black text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition"
                >
                    <Calendar className="w-5 h-5" />
                    สร้างกิจกรรม
                </button>
            </div>
        </div>
    );
}