import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div align="center">
      <h1>404 - Page Not Found</h1>
      <p>It seems we can't find what you're looking for. Perhaps searching can help.</p>
      <Link href="/">
      Go back home
      </Link>
    </div>
  );
}