import Head from "next/head";
import Header from "../components/Header";
import { getSession } from "next-auth/client";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      {/* Header */}
      <Header />
      <main className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        {/* widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {},
  };
}
