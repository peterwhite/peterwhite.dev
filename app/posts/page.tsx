import { PostFeed } from '#/components/PostFeed';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="mb-8 space-y-8">
      <div>
        <h3 className="mb-4 text-xl font-medium">Ramblings</h3>
        <div className="prose text-zinc-800">
          <p>
            Occassionally, I need more than 280 characters to share my thoughts.
            Here you will find my brain-dumps and ramblings.
          </p>
        </div>
      </div>
      <PostFeed />
    </div>
  );
}
