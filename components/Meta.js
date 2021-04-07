import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />


      <meta property="og:title" content="Shop site " />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://miniecommerce.netlify.app/" />
    <meta
      property="og:image"
      content="https://i.pinimg.com/originals/7f/84/e6/7f84e6245c28a0e056b88c5c1b389cde.jpg"
    />
    <meta
      property="og:description"
      content="Mini e-shop that displays stock to order"
    />

    <meta property="twitter:card" content="Mini e-shop" />
    <meta
      property="twitter:url"
      content="https://miniecommerce.netlify.app/"
    />
    <meta property="twitter:title" content="Mini e-shop" />
    <meta
      property="twitter:description"
      content="Mini e-shop that displays stock to order."
    />
    <meta
      property="twitter:image"
      content="https://i.pinimg.com/originals/7f/84/e6/7f84e6245c28a0e056b88c5c1b389cde.jpg"
    />


      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossOrigin="anonymous"
      ></script>

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Mini e-shop",
  keywords: "e-commerce",
  description: "Mini e-shop that displays stock to order",
};

export default Meta;
