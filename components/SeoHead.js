import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
  title: "Buy My Time",
  siteName: "Buy My Time",
  description: "Need more time? We got you covered",
  url: "https://buymytime.com",
  type: "website",
  robots: "follow, index",
  image:
    "https://www.canva.com/design/DAFXI1tDqMw/yk6ney2U-9hfvJY8xYYeUg/view?utm_content=DAFXI1tDqMw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  author: "Redwan Ahmed",
};

const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta name="author" property="article:author" content={meta.author} />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}

      {/* Windows 8 app icon */}
      <meta name="msapplication-TileColor" content="#1c80d6" />
      <meta name="msapplication-TileImage" content="/favicon/BMT_favicon.png" />
      {/* Accent color on supported browser */}
      <meta name="theme-color" content="#1c80d6" />
    </Head>
  );
};

const favicons = [
  {
    rel: "mask-icon",
    href: "/favicon/BMT_favicon.png",
    color: "#F59A9A",
  },
  {
    rel: "icon",
    href: "/favicon/BMT_favicon.png",
  },

  {
    rel: "icon",
    type: "image/png",
    sizes: "500x500",
    href: "/favicon/BMT_favicon.png",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

export default SeoHead;
