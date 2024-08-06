import { Mdx } from '#/components/mdx';
import { allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export interface BlogPostProps {
  params: {
    slug: string[];
  };
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: [post._raw.flattenedPath] }));

export async function generateMetadata({
  params,
}: {
  params: BlogPostProps['params'];
}): Promise<Metadata> {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);
  if (!post) {
    return {};
  }
  return { title: post.title, description: post.description };
}

export default async function Page({ params }: BlogPostProps) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }

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
            src="/ProfilePicture.jpg"
            className="block h-10 w-10 rounded-full"
            width={200}
            height={200}
            alt="Profile Picture"
          />
          <div className="ml-3 flex flex-col text-sm font-semibold">
            <span>Peter White</span>
            <a
              className="font-medium text-blue-500 hover:text-blue-600"
              href="https://www.linkedin.com/in/petewht/"
              target="_blank"
              rel="noreferrer"
            >
              Follow me on LinkedIn
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
          {/* TODO: Extract to component for just mobile-only ToC */}

          {post.headings.length > 0 && (
            <details className="mt-8 block lg:hidden ">
              <summary className="flex cursor-pointer items-center font-semibold text-zinc-700 decoration-dotted hover:underline dark:text-zinc-200 lg:hidden">
                <span>Contents</span>
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="[@supports(backdrop-filter:blur(0px))]:bg-opacity-50] mx-auto mt-2 block rounded-md border bg-white bg-opacity-50 p-4  backdrop-blur dark:border-transparent dark:bg-zinc-700 dark:bg-opacity-25 dark:shadow-sm sm:rounded-lg sm:border">
                {post.headings.map((heading: Heading) => {
                  return (
                    <div
                      key={`#${heading.slug}`}
                      className="block text-zinc-700 dark:text-zinc-300 "
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
            </details>
          )}

          <div className="prose prose-zinc dark:prose-invert prose-headings:dark:text-zinc-200 lg:mt-8 ">
            <Mdx code={post.body.code} />
            <hr />
            <h3>Thanks for Reading!</h3>
            <p>
              I always appreciate feedback or suggestions for future blog posts.
              You can find me on{' '}
              <a
                href="https://www.linkedin.com/in/petewht/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{' '}
              or if you want to improve the article to help future readers,
              please feel free to{' '}
              <a
                href="https://github.com/peterwhite/peterwhite.dev"
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
                <a
                  href={'https://www.linkedin.com/in/petewht/'}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer underline"
                >
                  Follow me on LinkedIn
                </a>{' '}
                or share this post with a friend{' '}
              </p>
            </div>
            {post.headings.length > 0 && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
