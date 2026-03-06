"use client";
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PremiumPage() {
    const router = useRouter();

    const plans = [
        { period: 'รายสัปดาห์', price: 39, discount: null },
        { period: '1 เดือน', price: 148, discount: '5%' },
        { period: '3 เดือน', price: 374, discount: '20%' },
        { period: '12 เดือน', price: 1310, discount: '30%' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="flex items-center gap-4 px-4 py-4 border-b">
                <button onClick={() => router.back()} className="text-black">
                    <ChevronLeft size={24} />
                </button>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">P</span>
                    </div>
                    <h1 className="text-3xl font-bold">Premium</h1>
                </div>
            </div>

            {/* Content */}
            <div className="px-6 py-8">
                {/* Description */}
                <p className="text-gray-700 text-sm text-center mb-8 leading-relaxed">
                    เข้าถึงได้มากกว่า เรียนรู้ได้เยอะกว่า เข้าร่วมพรีเมี่ยม และสัมผัสประสบการณ์เต็มรูปแบบ
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                    <div className="flex gap-3 items-start">
                        <div className="text-blue-600 text-xl">◎</div>
                        <p className="text-sm text-gray-700">ปิดโฆษณาภายในแอพ</p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <div className="text-blue-600 text-xl">📁</div>
                        <p className="text-sm text-gray-700">
                            เข้าตึงคลังเนื้อหา และข้อสอบกว่า 50+ ไฟล์ PDF ทั้งโจทย์ และเฉลย
                        </p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <div className="text-blue-600 text-xl">🔊</div>
                        <p className="text-sm text-gray-700">
                            ใช้งานเสียงประกอบบรรยากาศหลากหลายแบบ
                        </p>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {plans.map((plan, index) => (
                        <button
                            key={index}
                            className="bg-gradient-to-b from-blue-400 to-blue-500 rounded-3xl px-4 py-6 text-center hover:shadow-lg transition"
                        >
                            <p className="text-gray-800 text-xs font-medium mb-2">
                                {plan.period}
                            </p>
                            <p className="text-3xl font-bold text-gray-900 mb-1">
                                {plan.price}
                            </p>
                            <p className="text-gray-700 text-xs font-medium">บาท</p>
                            {plan.discount && (
                                <p className="text-red-500 text-xs font-semibold mt-1">
                                    ลด {plan.discount}
                                </p>
                            )}
                        </button>
                    ))}
                </div>

                {/* Trial Button */}
                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 rounded-full transition">
                    ทดลองใช้งานฟรี 30 วัน
                </button>
            </div>
        </div>
    );
}