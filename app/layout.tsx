import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Phú Hưng - Đặc sản chả giò truyền thống',
  description: 'Chuyên sản xuất và cung cấp các loại chả giò, chả lụa, pate và đặc sản truyền thống Việt Nam chất lượng cao.',
  keywords: ['chả giò', 'chả lụa', 'pate', 'đặc sản Việt Nam', 'thực phẩm truyền thống'],
  authors: [{ name: 'Phú Hưng' }],
  creator: 'Phú Hưng',
  publisher: 'Phú Hưng',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Phú Hưng - Đặc sản chả giò truyền thống',
    description: 'Chuyên sản xuất và cung cấp các loại chả giò, chả lụa, pate và đặc sản truyền thống Việt Nam chất lượng cao.',
    url: 'https://phuhung.vn',
    siteName: 'Phú Hưng',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phú Hưng - Đặc sản chả giò truyền thống',
    description: 'Chuyên sản xuất và cung cấp các loại chả giò, chả lụa, pate và đặc sản truyền thống Việt Nam chất lượng cao.',
    creator: '@phuhung',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}