import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Home | tzividev</title>
          <meta name="description" content="I'm Tzivi and this is my portfolio 😄 enter to know more about me" />
          <link rel="shortcut icon" href="icon.webp" type="image/webp" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
