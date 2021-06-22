import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { appAuthor, appName } from "../lib/config";
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
        <meta name="description" content="The default description of a page." />
        <meta property="og:image" content="/icon.png" />
        <meta name="og:title" content={appName} />
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
