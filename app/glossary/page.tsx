'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// create entries in pod, using vocabulary
// get them on page load or at build time
// console log to see structure

export default function Page() {
  const glossaryList = [{ name: 'firstentry', url: '' }];
  return (
    <div className="mt-10 ml-10 max-w-max">
      <div className="bg-primary-800 flex text-3xl text-primary-50 p-3">
        Glossary
      </div>
      {glossaryList.length &&
        glossaryList.map((entry) => (
          <div className="pl-3 font-bold mt-2" key={entry.name}>
            <Link
              className="bg-accent1-400 p-1 hover:text-white hover:bg-accent1-700"
              href={entry.url || ''}
            >
              {entry.name}
            </Link>
          </div>
        ))}
    </div>
  );
}
