import React from 'react';

export default function AIPage() {
    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4">
                <h1 className="text-2xl font-bold">NontAI</h1>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {/* Spacer */}
                <div className="h-32"></div>
            </div>

            {/* Message with timestamp */}
            <div className="px-6 py-4 text-center text-sm text-gray-500">
                วันจันทร์ 6:07 AM
            </div>

            {/* Chat Message Bubble */}
            <div className="px-6 pb-4 flex justify-start">
                <div className="bg-gray-200 rounded-lg p-4 max-w-xs text-sm text-gray-800">
                    <p>สวัสดีครับ ! เพิ่มเติม NontAI 🔥 เพื่อพูดคุยอธิบายเนื้อหาการเรียนและให้การแนะนำการใช้โรงเรียนดีๆ ต่างๆ</p>
                    <p className="mt-2">ศูนย์สนามรสเสนสนามรสสนามข้อมูลเพื่อถึงการศูนย์ของโรงเรียนศิลปนตรวจสอบข้อมูลเพื่อถึงการศูนย์ของในอื่น</p>
                </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-300 p-4">
                <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                    <input
                        type="text"
                        placeholder="พิมพ์ข้อความ"
                        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
                    />
                    <button className="text-purple-600 hover:text-purple-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}