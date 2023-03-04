import Head from "next/head";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href='https://fonts.googleapis.com/css?family=Roboto Condensed' rel='stylesheet' />

        <title>Get Property</title>
      </Head>

      <div className="px-[5%]">{children}</div>
    </>
  );
};
