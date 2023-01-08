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

  return (
    <article className="my-6">
      <div className="space-y-6">
        <div>
          <dl className="mb-3 text-sm leading-6">
            <dt className="sr-only">Date</dt>
            <dd className="text-slate-700 dark:text-slate-400">
              <time dateTime={post.date}>
                {format(new Date(post.date), 'EEEE, MMMM d, yyyy')}
              </time>
            </dd>
          </dl>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl ">
            {post.title}
          </h1>
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
              className="font-medium text-sky-500 hover:text-sky-600"
              href="https://twitter.com/petewht"
              target="_blank"
              rel="noreferrer"
            >
              @petewht
            </a>
          </div>
        </div>

        <Image
          src={post.image}
          className="aspect-video w-full rounded-lg object-cover lg:aspect-[2/1]"
          width={200}
          height={200}
          alt="Profile Picture"
        />
      </div>

      <div className="prose prose-zinc mt-8 dark:prose-invert prose-headings:dark:text-zinc-200 ">
        <Mdx code={post.body.code} />
        <hr />
        <h3>Thanks for Reading!</h3>
        <p>
          I always appreciate feedback or suggestions for future blog posts. You
          can find me on{' '}
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
    </article>
  );
}
