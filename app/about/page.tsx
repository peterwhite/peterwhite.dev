export default function Page() {
  return (
    <div className="space-y-12">
      <section id="about">
        <h3 className="mb-4 text-xl font-medium">About</h3>
        <div className="prose prose-zinc prose-headings:text-zinc-200 dark:prose-invert ">
          <p>A self-indulgent about page.</p>
          <div className="mb-8">
            <h2>Links</h2>
            <ul>
              <li>
                Twitter: <a href="https://twitter.com/leeerob">@leeerob</a>
              </li>
              <li>
                GitHub: <a href="https://github.com/leerob">@leerob</a>
              </li>
              <li>
                Website: <a href="https://leerob.io/">https://leerob.io</a>
              </li>
              <li>
                LinkedIn:{' '}
                <a href="https://www.linkedin.com/in/leeerob/">
                  https://www.linkedin.com/in/leeerob
                </a>
              </li>
            </ul>
            <h2>Bio</h2>
            <h3>Job Title</h3>
            <p>Lee Robinson, VP of Developer Experience at Vercel</p>
            <h3>Long, 3rd Person</h3>
            <p>
              Lee Robinson is the VP of Developer Experience at{' '}
              <a href="http://vercel.com/">Vercel</a>, where he helps developers
              build a faster web and leads the Next.js community. He leads the
              community for the React framework Next.js and is an open-source
              contributor. An educator, writer, and speaker, Lee has created
              courses on React, Next.js, and web development.
            </p>
            <h3>Long, 1st Person</h3>
            <p>
              Hey, I'm Lee. I'm the VP of Developer Experience at{' '}
              <a href="https://vercel.com/">Vercel</a>, where my team helps
              developers build a faster web. I'm a Next.js contributor and help
              lead our open-source communities. I'm passionate about frontend
              development and have created courses on React, Next.js, and web
              development. I'm an advisor and investor in early stage startups.
            </p>
            <h3>Short, 3rd Person</h3>
            <p>
              Lee Robinson is the VP of Developer Experience at{' '}
              <a href="http://vercel.com/">Vercel</a>, where he helps developers
              build a faster web.
            </p>
            <h3>Short, 1st Person</h3>
            <p>
              Hey, I'm Lee. I'm the VP of Developer Experience at{' '}
              <a href="https://vercel.com/">Vercel</a>, where my team helps
              developers build a faster web.
            </p>
            <h3>Education</h3>
            <p>
              Lee Robinson graduated from Iowa State University with a B.S. in
              Computer Engineering.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
