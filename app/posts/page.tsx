import { PostFeed } from '#/components/PostFeed';
import { allDocuments } from '#/.contentlayer/generated/index.mjs';
import { Post, Repost } from '#/.contentlayer/generated';

export default function Page() {
  const posts = allDocuments.filter((post) => post.published);

  return (
    <div className="mb-8 space-y-8">
      <div>
        <h3 className="mb-4 text-xl font-medium">Ramblings</h3>
        <div className="prose prose-zinc dark:prose-invert">
          <p>
            Here you will find my ramblings on building products, growing
            startups and more. I always appreciate feedback or suggestions for
            future blog posts. You can find me on{' '}
            <a
              href="https://twitter.com/petewht"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{' '}
            or if you want to improve the article to help future readers, please
            feel free to{' '}
            <a
              href="https://github.com/peterwhite"
              target="_blank"
              rel="noreferrer"
            >
              submit a PR.
            </a>
          </p>
        </div>
      </div>
      {/* TODO: Resolve lazy typing here */}
      <PostFeed posts={posts as (Post | Repost)[]} />
    </div>
  );
}
