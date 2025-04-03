/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  return (
    <div className="space-y-12">
      <section id="about">
        <h3 className="mb-4 text-xl font-medium">About Me</h3>
        <div className="prose prose-zinc dark:prose-invert">
          <p>Some helpful information about me.</p>
        </div>
        <div className="prose prose-zinc dark:prose-invert prose-headings:dark:text-zinc-200 ">
          <div className="mb-8">
            <h2>Links</h2>
            <ul>
              <li>
                LinkedIn:{' '}
                <a href="https://www.linkedin.com/in/petewht/">
                  https://www.linkedin.com/in/petewht/
                </a>
              </li>
              <li>
                GitHub: <a href="https://github.com/peterwhite">@peterwhite</a>
              </li>
              <li>
                Website:{' '}
                <a href="https://peterwhite.dev/">https://peterwhite.dev</a>
              </li>
            </ul>
            <h2>Bio</h2>
            <h3>Job Title</h3>
            <p>Peter White, Senior Software Engineer at Graphy</p>
            <h3>Long, 3rd Person</h3>
            <p>
              Peter White is a Senior Software Engineer at Graphy, where he
              builds software that gives everyone data superpowers. He is a
              product engineer and full-stack developer with over a decade of
              experience of building startups and internet-based products, in
              both founding and contributing roles. He is also a mentor, advisor
              and investor in early stage startups.
            </p>
            <h3>Long, 1st Person</h3>
            <p>
              Hey, I'm Peter! Originally from Yorkshire in the UK, I migrated to
              Norway in 2021. I am a Senior Software Engineer at Graphy, where I
              build software that gives everyone data superpowers. I am a
              product engineer and full-stack developer with over a decade of
              experience building startups and internet-based products, in both
              founding and contributing roles. I am also a mentor, advisor, and
              investor in early stage startups.
            </p>
            <h3>Short, 3rd Person</h3>
            <p>
              Peter White is a Senior Software Engineer at Graphy, where he
              builds software that gives everyone data superpowers.
            </p>
            <h3>Short, 1st Person</h3>
            <p>
              Hey, I'm Peter! I am a Senior Software Engineer at Graphy, where I
              build software that gives everyone data superpowers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
