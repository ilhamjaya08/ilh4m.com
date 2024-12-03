import { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from 'styled-components';

export default class Document extends NextScript {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    styles: JSX.Element;
    html: string;
    head?: (JSX.Element | null)[] | undefined;
  }> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Muhammad Ilham Jaya's portfolio website. I am a passionate software developer with expertise in web development, creating innovative solutions and delivering high-quality applications." />
          <meta name="keywords" content="ilham, ilhamjaya08, portfolio, nextjs, seo, dev, developer, programmer, tailwind, muhammad ilham jaya" />
          <meta property="og:title" content="Ilham.live" />
          <meta property="og:description" content="Muhammad Ilham Jaya's portfolio website. I am a passionate software developer with expertise in web development, creating innovative solutions and delivering high-quality applications." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ilham.live" />
          <meta property="og:image" content="https://ilham.live/og.png" />
          <link rel="canonical" href="https://ilham.live" />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}