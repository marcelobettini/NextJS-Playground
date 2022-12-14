import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={(() => console.log(`script loaded correctly, window.FB has been populated`))}
      />


      <main>
        <h1>This is the first post</h1>
        <p>yada, yada, yadda, blah, blah, and son on...</p>
        <h5>About the author</h5>
        <Image
          src="/images/avatar.jpg"
          alt="Marcelo"
          height={100}
          width={100}
        />

        <nav>
          <Link href="/">&larr; Baby come back</Link>
        </nav>

      </main>
    </>
  );
}