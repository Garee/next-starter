// https://nextjs.org/docs/api-reference/next/head
import Head from "next/head";
// https://nextjs.org/docs/basic-features/image-optimization#image-component
import Image from "next/image";
// https://nextjs.org/docs/api-reference/next/link
import Link from "next/link";
// https://github.com/JedWatson/classnames
import cn from "classnames";
import { appAuthor, appDescription, appName, appSite } from "../lib/config";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
  home?: boolean;
}

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div
      className={cn({
        [styles.container]: true,
        [styles.homeContainer]: home,
      })}
    >
      <Head>
        <title>{appName}</title>
        <meta name="description" content={appDescription} />
        <meta property="og:image" content="/icon.png" />
        <meta name="og:title" content={appName} />
        <meta property="og:description" content="" />
        <meta name="twitter:card" content="app" />
        <meta name="twitter:site" content={appSite} />
        <meta name="twitter:creator" content={appAuthor} />
        <meta name="twitter:title" content={appName} />
        <meta name="twitter:description" content={appDescription} />
        <meta name="twitter:image" content="/icon.png" />
        <meta name="theme-color" content="#fafafa" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/avatar.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={appAuthor}
            />
            <h1 className={utilStyles.heading2Xl}>{appAuthor}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/avatar.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={appAuthor}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{appAuthor}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
