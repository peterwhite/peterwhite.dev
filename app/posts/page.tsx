import { PostFeed } from '#/components/PostFeed';
import { posts, reposts } from '#/.velite';

export default function Page() {
  const allDocs = [...posts, ...reposts]
    .filter((post) => post.published)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return (
    <div className="mb-8 space-y-8">
      <div>
        <h3 className="mb-4 text-xl font-medium">Blog Posts</h3>
        <div className="prose prose-zinc dark:prose-invert">
          <p>
            Here you will find my posts on building products, growing startups
            and more. I always appreciate feedback or suggestions for future
            blog posts. You can find me on{' '}
            <a
              href="https://www.linkedin.com/in/petewht/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{' '}
            or if you want to improve the article to help future readers, please
            feel free to{' '}
            <a
              href="https://github.com/peterwhite/peterwhite.dev"
              target="_blank"
              rel="noreferrer"
            >
              submit a PR.
            </a>
          </p>
        </div>
      </div>
      <PostFeed posts={allDocs} />
    </div>
  );
}
