'use client';
import React from 'react';
import { UserRound } from 'lucide-react';
import NavBar from '@/components/NavBar';

export default function AIPage() {
    return (
        <div className="flex flex-col h-screen bg-gray-50 pb-28">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 text-white" style={{ backgroundColor: '#8E05EC' }}>
                <h1 className="text-lg font-semibold">สอบถาม</h1>
                <button className="rounded-full bg-white/20 p-2 hover:bg-white/30">
                    <UserRound className="h-5 w-5" />
                </button>
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
                    <p>สวัสดีครับ ! ผมคือ NontAl เพื่อนที่จะคอยช่วยคุณเตรียมตัวในการสอบ และให้คำแนะนำเกี่ยวโรงเรียนต่างๆ</p>
                    <p className="mt-2">คุณสามารถสอบถามคำถามเกี่ยวกับระบบ ของโรงเรียนที่คุณต้องการ หรือ ขอคำแนะนำในเรื่องต่างๆได้เลยนะครับ ผมจะทำการช่วยเหลือคุณอย่างเต็มที่</p>
                </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-300 p-4">
                <div className="flex items-center gap-3">
                    <label htmlFor="chat-input" className="sr-only">Message</label>
                    <input
                        id="chat-input"
                        type="text"
                        placeholder="พิมพ์ข้อความ"
                        className="flex-1 bg-gray-100 rounded-full px-4 py-2 outline-none text-gray-700 placeholder-gray-500"
                    />
                    <button type="button" aria-label="Send message" className="ml-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <NavBar />
        </div>
    );
}
