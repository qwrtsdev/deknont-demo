import Link from 'next/link';


export default function LoginPage() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-200 to-purple-500 px-6">
            <div className="w-full max-w-sm mb-50 mt-40">
                <h1 className="text-5xl text-black mb-2">
                    เพราะเด็กนนท์
                </h1>
                <p className="text-5xl text-black">
                    จะต้อง<b>เรียนดี</b>
                </p>
            </div>

            <div className="w-full max-w-sm space-y-4">
                <Link href="/CalendarPage" className="block w-full px-6 py-4 rounded-xl bg-white text-center text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-purple-400">เข้าสู่ระบบในฐานะนักเรียน</Link>
                <div className="text-center">
                    <button
                        type="button"
                        className="text-gray-600 text-sm hover:text-gray-800"
                    >
                        หรือ
                    </button>
                </div>
                <Link href="/CalendarPage" className="block w-full px-6 py-4 rounded-xl bg-black text-center text-white font-medium focus:outline-none focus:ring-2 focus:ring-purple-400">เข้าสู่ระบบในฐานะผู้ปกครอง</Link>
            </div>

            <div className="mt-8 text-center text-xs text-purple-800 max-w-sm">
                <p>
                    เมื่อคุณใช้งานแอปพลิเคชันนี้ ถือว่าคุณ
                    <Link href="#" className="underline hover:text-purple-900">
                        ยอมรับข้อกำหนด และเงื่อนไขการใช้งาน
                    </Link>
                </p>
                <p className="mt-2">
                    และ
                    <Link href="#" className="underline hover:text-purple-900">
                        นโยบายความเป็นส่วนตัว
                    </Link>
                </p>
            </div>
        </div>
    );
}