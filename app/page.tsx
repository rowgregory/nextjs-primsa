import Link from 'next/link';
import getPosts from './actions/getPosts';

export default async function Home() {
  const posts = await getPosts();

  console.log('POSTS: ', JSON.stringify(posts, null, 2));
  return (
    <main className='py-4 px-48'>
      <Link className='font-medium' href='/signin'>
        Sign In
      </Link>
    </main>
  );
}
