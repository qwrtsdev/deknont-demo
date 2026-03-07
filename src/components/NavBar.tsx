'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Map, Folder, CalendarDays, UserRound, MessageCircleQuestion } from 'lucide-react';

const navItems = [
    { label: 'แผนที่',   icon: Map,                    href: '/MapPage' },
    { label: 'เรียนรู้', icon: Folder,                  href: '/LearningPage' },
    { label: 'ปฏิทิน',  icon: CalendarDays,             href: '/CalendarPage' },
    { label: 'ติวเตอร์', icon: UserRound,               href: '/TutorPage' },
    { label: 'สอบถาม',  icon: MessageCircleQuestion,    href: '/AIPage' },
];

export default function NavBar() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-2 w-full max-w-sm">
            <nav
                className="flex items-center justify-around rounded-full px-3 py-2"
                style={{
                    background: 'rgba(255, 255, 255, 0.35)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255,255,255,0.8)',
                }}
            >
                {navItems.map(({ label, icon: Icon, href }) => {
                    const active = pathname === href || pathname.startsWith(href + '/');
                    return (
                        <Link
                            key={href}
                            href={href}
                            className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-200"
                            style={
                                active
                                    ? {
                                          background: 'rgba(255, 255, 255, 0.7)',
                                          boxShadow: '0 2px 8px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)',
                                      }
                                    : {}
                            }
                        >
                            <Icon
                                className={`w-6 h-6 transition-colors duration-200 ${active ? '' : 'text-gray-500'}`}
                                style={active ? { color: '#8E05EC' } : {}}
                                strokeWidth={active ? 2.2 : 1.8}
                            />
                            <span
                                className={`text-[10px] font-medium transition-colors duration-200 ${active ? '' : 'text-gray-500'}`}
                                style={active ? { color: '#8E05EC' } : {}}
                            >
                                {label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}