import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-zinc-50">
      <Link href="/LoginPage"><p className="bg-neutral-800 py-2 px-4 text-white rounded-lg">เริ่มต้นเดโม</p></Link>
    </div>
  );
}
