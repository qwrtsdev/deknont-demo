import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-zinc-50">
      <Link href="/CalendarPage"><p>เริ่มต้นเดโม</p></Link>
    </div>
  );
}
