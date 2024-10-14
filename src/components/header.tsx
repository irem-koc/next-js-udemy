import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">Cloud Corp</Link>
      <Link href="/performance">Performance</Link>
      <Link href="/reliability">Reliability</Link>
      <Link href="/scale">Scale</Link>
    </div>
  );
}
