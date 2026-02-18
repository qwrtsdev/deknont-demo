'use client';
import { useState } from 'react';
import Link from 'next/link';


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-200 to-purple-500 px-6">
            <div className="w-full max-w-sm text-center mb-12">
                <h1 className="text-4xl font-bold text-black mb-2">
                    เพราะเด็กนนนั่น
                </h1>
                <p className="text-2xl font-bold text-black">
                    จะต้องเรียนดี
                </p>
            </div>

            <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
                <input
                    type="email"
                    placeholder="เข้าสู่ระบบโดยใช้บัญชีมีกรรมการ"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 rounded-full bg-white text-center text-gray-700 font-medium placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />

                <div className="text-center">
                    <button
                        type="button"
                        className="text-gray-600 text-sm hover:text-gray-800"
                    >
                        หรือ
                    </button>
                </div>

                <input
                    type="password"
                    placeholder="เข้าสู่ระบบในฐานะผู้ปกครอง"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-6 py-4 rounded-full bg-black text-center text-white font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
            </form>

            <div className="mt-8 text-center text-xs text-purple-800 max-w-sm">
                <p>
                    เบื้องต้นใช้งานเนื้อหลักอื่นที่ มีอำนาจ
                    <Link href="#" className="underline hover:text-purple-900">
                        ส่วนการสอนเพิ่มเติม
                    </Link>
                </p>
                <p className="mt-2">
                    และเรื่องภาครัฐอื่น
                    <Link href="#" className="underline hover:text-purple-900">
                        และประเมินความเพียงค่อน
                    </Link>
                </p>
            </div>
        </div>
    );
}