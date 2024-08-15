/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  return (
    <div className="space-y-12">
      <section id="manifesto">
        <h1 className="mb-4 text-2xl font-bold">
          The Product Engineering Manifesto
        </h1>
        <div className="prose prose-zinc dark:prose-invert">
          <p>We’re builders first, coders second.</p>
          <p>
            Our mission: Build products users love, not just code we’re proud
            of.
          </p>
          <p>
            We take full accountability for the impact of our work. We don’t
            just write code—we build products that work, drive value, and make a
            difference.
          </p>
          <p>
            We understand the business, the users, and the market. Every
            decision is made with the customer and product success in mind.
          </p>
          <p>
            We don’t just execute—we innovate, challenge assumptions, and bring
            bold product ideas to the table.
          </p>
          <p>
            We balance technical tradeoffs with product impact. Complexity burns
            runway and kills agility, tying you to the past when you need to
            pivot fast.
          </p>
        </div>
        <div className="prose prose-zinc mt-8 dark:prose-invert">
          <h2>Our Principles:</h2>
          <ul>
            <li>
              <strong>Ship working software</strong> that users love.
            </li>
            <li>
              <strong>Ask why</strong> and deeply understand the customer’s
              problem before coding.
            </li>
            <li>
              <strong>Collaborate with customers directly</strong>—tickets and
              second-hand info won’t cut it.
            </li>
            <li>
              <strong>Prioritize teamwork</strong> over solo efforts.
              Engineering isn’t the star of the show—every role, from marketing
              to sales to product, is crucial in building something great.
            </li>
            <li>
              <strong>Champion simplicity</strong>—simple is scalable, simple is
              lovable.
            </li>
          </ul>
          <p>
            We’re not just engineers; we are product-minded builders who see
            beyond code to the product, the business, and the user experience.
          </p>
          <p>This is how we build products that users love.</p>
        </div>
        <div className="prose prose-zinc mt-8 dark:prose-invert">
          <p>
            <strong>P.S.</strong> This manifesto was inspired by the principles
            laid out by{' '}
            <a
              href="https://productengineer.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              productengineer.org
            </a>
            . Their vision of product-minded engineering inspired this post and
            how I believe we should approach our work.
          </p>
        </div>
      </section>
    </div>
  );
}
