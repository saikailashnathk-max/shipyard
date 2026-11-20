// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container not-found">
      <h1>404 — Product Not Found</h1>
      <p>The item you are looking for does not exist in the ShipYard catalog.</p>
      <Link href="/" className="back-link">
        ← Return to catalog
      </Link>
    </main>
  );
}