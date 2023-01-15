import { allPosts } from '#/.contentlayer/generated';
import Script from 'next/script';
import { BlogPostProps } from './page';

export async function generateStaticParams(): Promise<
  BlogPostProps['params'][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default function Head({ params }: BlogPostProps) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  return (
    <>
      <title>{`${post?.title} | Peter White`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={post?.description} />
      <Script src="/theme.js" />
    </>
  );
}
