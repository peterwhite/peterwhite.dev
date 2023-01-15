import { allPosts } from '#/.contentlayer/generated';
import { PostFeed } from '#/components/PostFeed';

export default function Page() {
  const posts = allPosts
    .filter((post) => post.published && post.featured)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

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
            Originally from Yorkshire in the UK, I have been living in Norway
            since 2021. Outside of technology, I spend my time learning
            Norwegian, walking in nature and listening to podcasts.
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
          <li className="gap-4 py-4  sm:pl-8">
            <div>
              <div className="mb-1 font-medium text-zinc-800 dark:text-zinc-200">
                <span>indyRiot</span>
              </div>
              <div>
                <div className="prose prose-zinc dark:text-zinc-400 dark:prose-invert">
                  Mid-stage startup, making better online communities. Tech lead
                  on various projects, including migrating legacy application to
                  Next.js, TypeScript, tRPC &amp; Prisma.
                </div>
                <div className="mt-2 font-mono text-sm uppercase text-zinc-800 dark:text-zinc-200">
                  Senior Software Engineer :: 04/2022 - Present
                </div>
              </div>
            </div>
          </li>
          <li className="gap-4 py-4  sm:pl-8">
            <div>
              <div className="mb-1 font-medium text-zinc-800 dark:text-zinc-200">
                <span>Coast</span>
              </div>
              <div>
                <div className="prose prose-zinc dark:text-zinc-400 dark:prose-invert">
                  Mid-stage startup, helping small businesses organize in a
                  Slack-like app. Responsible for product, marketing and
                  activation projects.
                </div>
                <div className="mt-2 font-mono text-sm uppercase text-zinc-800 dark:text-zinc-200">
                  Software Engineer :: 04/2020 - 03/2022
                </div>
              </div>
            </div>
          </li>
          <li className="gap-4 py-4  sm:pl-8">
            <div>
              <div className="mb-1 font-medium text-zinc-800 dark:text-zinc-200">
                <span>TABLE</span>
              </div>
              <div>
                <div className="prose prose-zinc dark:text-zinc-400 dark:prose-invert">
                  TABLE was an early-stage startup, offering a conversational
                  eCommerce platform. Responsible for product and marketing
                  projects, including our integration strategy.
                </div>
                <div className="mt-2 font-mono text-sm uppercase text-zinc-800 dark:text-zinc-200">
                  Software Engineer :: 2019 - 2020
                </div>
              </div>
            </div>
          </li>
          <li className="gap-4 py-4  sm:pl-8">
            <div>
              <div className="mb-1 font-medium text-zinc-800 dark:text-zinc-200">
                <span>Bytemark</span>
              </div>
              <div>
                <div className="prose prose-zinc dark:text-zinc-400 dark:prose-invert">
                  Acquired by iomart. Mature IaaS company, with an in-house
                  virtualisation platform. Embedded in engneering team,
                  responsible for product strategy and engineering team
                  enablement.
                </div>
                <div className="mt-2 font-mono text-sm uppercase text-zinc-800 dark:text-zinc-200">
                  Product Owner :: 2018 - 2019
                </div>
              </div>
            </div>
          </li>
          <li className="gap-4 py-4  sm:pl-8">
            <div>
              <div className="mb-1 font-medium text-zinc-800 dark:text-zinc-200">
                <span>JobBoard.io</span>
              </div>
              <div>
                <div className="prose prose-zinc dark:text-zinc-400 dark:prose-invert">
                  Acquired by ZipRecruiter. Founding team role with diverse
                  responsibilities, including ops, engineering, marketing and
                  sales
                </div>
                <div className="mt-2 font-mono text-sm uppercase text-zinc-800 dark:text-zinc-200">
                  Founding Team :: 2014 - 2018
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
