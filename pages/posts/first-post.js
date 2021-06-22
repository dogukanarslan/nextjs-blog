import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Link href="/"><a>Go back to home!</a></Link>
      <p>Hello</p>
      <Image src="/images/profile.jpg" width={144} height={144} alt="Profile picture"/>
    </Layout>
  );
}
