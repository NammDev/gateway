import type { Metadata, ResolvingMetadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import { createClient } from '@/prismicio'
import Header from '@/components/Header'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
})

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()

  const settings = await client.getSingle('settings')

  return {
    title: settings.data.site_title || 'Gateway fallback',
    description: settings.data.meta_description || 'Flowrise is the relaxing app for you.',
    openGraph: {
      images: [settings.data.og_image.url || ''],
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
        <div className='fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50' />
        {/* <PrismicPreview repositoryName={repositoryName} /> */}
      </body>
    </html>
  )
}
