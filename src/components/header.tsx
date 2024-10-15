import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10 ">
      <nav className="container relative flex justify-between items-center flex-wrap">
        <div className="font-bold text-3xl">
          <Link href="/">Cloud Corp</Link>
        </div>
        <div className="space-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
}
