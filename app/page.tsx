import { allPosts } from '#/.contentlayer/generated';
import { PostFeed } from '#/components/PostFeed';

export default function Page() {
  const posts = allPosts.filter((post) => post.published && post.featured);

  return (
    <div className="space-y-12">
      <section id="about">
        <h3 className="mb-4 text-xl font-medium">Peter White</h3>
        <div className="prose prose-zinc dark:prose-invert">
          <p>Happily building things on the internet since 2008.</p>
          <p>
            Proud to be part of the engineering team at IndyRiot; building
            better online communities.
          </p>
          <p>
            Outside of technology, I spend my time learning Norwegian, walking
            in nature and listening to podcasts.
          </p>
        </div>
      </section>

      <section id="posts" className="pb-8">
        <h3 className="mb-4 text-xl font-medium">Featured Posts</h3>
        <PostFeed posts={posts} />
      </section>

      <section id="experience">
        <h3 className="mb-4 text-xl font-medium">Experience</h3>
        <ul className="grid grid-cols-1 divide-y first-of-type:border-t dark:divide-zinc-600 dark:border-zinc-600">
          {[1, 2, 3, 4].map((item) => {
            return (
              <li key={item} className="group flex gap-4 py-4  sm:pl-8">
                <div>
                  <div className="mb-1 font-medium text-zinc-800 dark:text-zinc-200">
                    <span>Slack</span>
                  </div>
                  <div>
                    <div className="prose prose-zinc dark:text-zinc-400 dark:prose-invert">
                      I am part of the design infrastructure team, building
                      tools to help designers and engineers collaborate more
                      efficiently.
                    </div>
                    <div className="mt-2 font-mono text-sm uppercase text-zinc-800 dark:text-zinc-200">
                      Senior software engineer :: 05/2021 - current
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
