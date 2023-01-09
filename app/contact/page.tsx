/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-xl font-medium">Contact Me</h3>
        <div className="prose prose-zinc dark:prose-invert">
          <p>The best way to contact me is through one of the options below:</p>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/petewht">@petewht</a>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/petewht/">
                https://www.linkedin.com/in/petewht/
              </a>
            </li>
            <li>Email: hello at this domain</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
