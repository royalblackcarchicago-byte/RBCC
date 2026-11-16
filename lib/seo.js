const SITE = "https://www.royalblackcarchicago.com";

export function pageMeta({ title, description, path, image }) {
  const url = path === "/" ? "/" : path.replace(/\/+$/, "");

  const noindex = /^\/(service-areas|venues|airports)(\/|$)/.test(url);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      url,
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}

export const SITE_URL = SITE;
