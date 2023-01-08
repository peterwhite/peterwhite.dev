import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>Peter White</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Script src="/theme.js" />
    </>
  );
}
