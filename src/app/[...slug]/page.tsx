import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialPage } from "../../components/EditorialPage";
import { pageKeys, pages } from "../../content/pages";
import { media } from "../../content/media";

export const dynamicParams = false;
export function generateStaticParams() { return pageKeys.map(key => ({ slug: key.split("/") })); }

type Props = { params: Promise<{ slug: string[] }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug.join("/")];
  if (!page) return { title: "Page not found", robots: { index: false } };
  const image = page.image ? media[page.image] : "/assets/logo.svg";
  const url = `https://dwpwyomingllc.com${page.path}/`;
  return { title: page.title, description: page.summary, alternates: { canonical: url }, openGraph: { title: `${page.title} | DWP Wyoming LLC`, description: page.summary, url, images: [{ url: image, alt: page.imageAlt || page.title }] }, twitter: { card: "summary_large_image", title: page.title, description: page.summary, images: [image] } };
}

export default async function InfoPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug.join("/")];
  if (!page) notFound();
  return <EditorialPage page={page}/>;
}
