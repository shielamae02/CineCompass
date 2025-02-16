import Head from "next/head";

const Header = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export { Header };
