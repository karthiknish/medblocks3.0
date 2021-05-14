import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../util/gtag";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
          <meta name="title" content="Medblocks" />
          <meta
            name="description"
            content="The stack for modern healthcare applications"
          />
          <meta name="keywords" content="OpenEhr,FHIR,SNOMED,OAuth" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.medblocks.org/" />
          <meta property="og:title" content="Medblocks" />
          <meta
            property="og:description"
            content="The stack for modern healthcare applications"
          />
          <meta property="og:image" content="https://i.imgur.com/aU4XXbL.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.medblocks.org/" />
          <meta property="twitter:title" content="Medblocks" />
          <meta
            property="twitter:description"
            content="The stack for modern healthcare applications"
          />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/aU4XXbL.png"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
