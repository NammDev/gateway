import type { Metadata, ResolvingMetadata } from 'next'
import './globals.css'
import clsx from 'clsx'
import { createClient, repositoryName } from '@/prismicio'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PrismicPreview } from '@prismicio/next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()

  const settings = await client.getSingle('settings')

  return {
    metadataBase: new URL('http://localhost:3000'),
    title: settings.data.site_title || 'Gateway fallback',
    description: settings.data.meta_description || 'Flowrise is the relaxing app for you.',
    openGraph: {
      images: [settings.data.og_image.url || ''],
    },
    twitter: {
      images: [settings.data.og_image.url || ''],
      card: 'summary_large_image',
      site: '@nammdev',
      title: settings.data.site_title || 'Gateway fallback',
      description: settings.data.meta_description || 'Flowrise is the relaxing app for you.',
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='dark'>
        <div className='min-h-screen font-sans dark:bg-primary-900 dark:text-white'>
          <Header />
          {children}
          <Footer />
        </div>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
