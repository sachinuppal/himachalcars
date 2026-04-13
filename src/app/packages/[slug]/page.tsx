import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { packages } from '@/data';
import { PackageDetail } from '@/components/packages/PackageDetail';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packages
    .filter((pkg) => pkg.isActive)
    .map((pkg) => ({
      slug: pkg.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    return {
      title: 'Package Not Found',
    };
  }

  const description = `${pkg.title} - ${pkg.subtitle}. ${pkg.days} Days ${pkg.nights} Nights package${
    pkg.citiesCovered && pkg.citiesCovered.length > 0
      ? ` covering ${pkg.citiesCovered.join(', ')}`
      : ''
  }. Starting from ₹${pkg.startingPrice}.`;

  return {
    title: `${pkg.title} | Himachal Cars Tour Packages`,
    description,
    keywords: [
      pkg.category,
      ...pkg.citiesCovered,
      'tour package',
      'himachal pradesh',
      'travel',
    ],
    openGraph: {
      title: pkg.title,
      description: pkg.subtitle,
      url: `https://himachalcars.com/packages/${pkg.slug}`,
      siteName: 'Himachal Cars',
      images: [
        {
          url: pkg.heroImage,
          width: 1200,
          height: 630,
          alt: pkg.title,
        },
      ],
      type: 'website',
    },
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg || !pkg.isActive) {
    notFound();
  }

  return <PackageDetail package={pkg} />;
}
