import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>Peter White</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Full Stack Developer in Norway, happily building things on the internet since 2008"
      />
      <Script src="/theme.js" />
    </>
  );
}
