// components/Meta.js

import Head from 'next/head';

const Meta = ({ title, description, image }) => {
  const siteName = 'WickedChatBuddy.com'; // Change this to your website name

  return (
    <Head>
      {/* Common meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph meta tags (used by Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />

      {/* Twitter Card meta tags (used by Twitter) */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Meta;
