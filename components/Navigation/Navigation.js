import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <Link href="/">Spotlight </Link>
      <Link href="/art-pieces">Pieces</Link>
      <Link href="/favorites">Favorites</Link>
    </div>
  );
}
