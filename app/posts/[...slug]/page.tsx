import { Mdx } from '#/components/mdx';
import { allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface BlogPostProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams(): Promise<
  BlogPostProps['params'][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function Page({ params }: BlogPostProps) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  // TODO: Generate type ContentLayer instead
  interface Heading {
    slug: string;
    text: string;
  }

  return (
    <div>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-200 md:text-4xl ">
            {post.title}
          </h1>
          <dl className="mt-2 text-sm leading-6">
            <dt className="sr-only">Date</dt>
            <dd className="flex space-x-2 font-mono uppercase text-zinc-700 dark:text-zinc-400">
              {/* <span>45345 Views</span>
              <span>-</span> */}
              <span>Last Updated</span>
              <time dateTime={post.date}>
                {format(new Date(post.date), 'MMMM d yyyy')}
              </time>
            </dd>
          </dl>
        </div>

        <div className="flex items-center">
          <Image
            src="/ProfilePicture.png"
            className="block h-10 w-10 rounded-full"
            width={200}
            height={200}
            alt="Profile Picture"
          />
          <div className="ml-3 flex flex-col text-sm font-semibold">
            <span>Peter White</span>
            <a
              className="font-medium text-blue-500 hover:text-blue-600"
              href="https://twitter.com/petewht"
              target="_blank"
              rel="noreferrer"
            >
              @petewht
            </a>
          </div>
        </div>
        {post?.image && (
          <Image
            src={post.image}
            className="aspect-video w-full rounded-lg object-cover lg:aspect-[2/1]"
            width={1000}
            height={500}
            alt="Post Cover Photo"
          />
        )}
      </div>

      <div className="lg:flex lg:justify-between lg:space-x-14">
        <article className="mb-6">
          <div className="prose prose-zinc mt-8 dark:prose-invert prose-headings:dark:text-zinc-200 ">
            <Mdx code={post.body.code} />
            <hr />
            <h3>Thanks for Reading!</h3>
            <p>
              I always appreciate feedback or suggestions for future blog posts.
              You can find me on{' '}
              <a
                href="https://twitter.com/petewht"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>{' '}
              or if you want to improve the article to help future readers,
              please feel free to{' '}
              <a
                href="https://github.com/peterwhite"
                target="_blank"
                rel="noreferrer"
              >
                submit a PR.
              </a>
            </p>
          </div>
        </article>
        <div className="my-8 hidden lg:block">
          <div className="sticky top-28 space-y-8">
            <div className="block w-48 overflow-y-auto ">
              <h3 className="mb-2 font-semibold text-zinc-700 dark:text-zinc-400">
                Enjoying this post?
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-400">
                Join my newsletter or share this post with a friend{' '}
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-zinc-700 dark:text-zinc-400">
                Contents
              </h3>
              <div className="block w-48 overflow-y-auto ">
                {post.headings.map((heading: Heading) => {
                  return (
                    <div
                      key={`#${heading.slug}`}
                      className="block w-48 text-sm text-zinc-500 "
                    >
                      <a
                        className="mb-3 block hover:text-zinc-700 hover:underline hover:dark:text-zinc-400"
                        href={`#${heading.slug}`}
                      >
                        {heading.text}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
