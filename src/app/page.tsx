import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <main>
      <header className='flex mx-2 my-5 justify-between items-center'>
        <h1 className='text-xl font-bold'>Snippets</h1>
        <Link className='border p-2 rounded' href='/snippets/new'>
          NEW
        </Link>
      </header>
      <div className='space-y-2'>
        {snippets.map((snippet) => (
          <Link
            className='flex justify-between items-center p-2 border rounded'
            href={`/snippets/${snippet.id}`}
            key={snippet.id}
          >
            <div>{snippet.title}</div>
            <div>View</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
