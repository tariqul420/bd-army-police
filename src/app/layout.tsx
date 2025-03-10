import DataProvider from '@/provider/DataProvider';
import type { Metadata } from 'next';
import { Hind_Siliguri } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const hindSiliguri = Hind_Siliguri({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hind-siliguri',
});

export const metadata: Metadata = {
  title: 'বাংলাদেশে সেনাবাহিনী ক্যাম্প ও থানা',
  description: 'বাংলাদেশ সেনা ক্যাম্প ও থানার ওয়েবসাইট। এখানে আপনি সেনাবাহিনীর ক্যাম্পসমূহ ও থানার লোকেশন এবং যোগাযোগের নম্বর সম্পর্কিত সকল তথ্য পাবেন।',
  openGraph: {
    title: 'বাংলাদেশে সেনাবাহিনী ক্যাম্প ও থানা',
    description: 'বাংলাদেশ সেনা ক্যাম্প ও থানার ওয়েবসাইট। এখানে আপনি সেনাবাহিনীর ক্যাম্পসমূহ ও থানার লোকেশন এবং যোগাযোগের নম্বর সম্পর্কিত সকল তথ্য পাবেন।',
    url: 'https://bd-army-police.vercel.app',
    siteName: 'বাংলাদেশে সেনাবাহিনী ক্যাম্প ও থানা',
    images: [
      {
        url: '/images/bd_flag.jpg',
        width: 1200,
        height: 630,
        alt: 'বাংলাদেশে',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="bn" className={hindSiliguri.variable}>
      <body className="antialiased bg-[#f5f5f5] text-[#333] max-w-[1200px] mx-auto">
          <DataProvider>
            {children}
            <Toaster position="top-right" reverseOrder={false} />
          </DataProvider>
      </body>
    </html>
  );
}
