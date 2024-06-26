import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { notFound } from 'next/navigation';

const locales = ['en', 'es'];

// const inter = DM_Sans({ subsets: ['latin'] })
const inter = Roboto({ weight: '500', subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'portfolio - landing',
  description: 'Generated by create next app',
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <head>
      <link
        rel="icon"
        href="favicon.png"
        type="image/png"
        sizes="34x34"
      />
      </head>
      <body className={`${inter.className} text-merli-gray-light bg-gradient-radial`}>{children}</body>
    </html>
  )
}
