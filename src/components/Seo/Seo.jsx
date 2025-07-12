// Seo.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ title, description, keywords }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && (
        <meta name="description" content={description} />
      )}
      {keywords && (
        <meta name="keywords" content={keywords} />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Helmet>
  );
};

export default Seo;
