import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SliceZone } from '@prismicio/react'

import { createClient } from '@/prismicio'
import { components } from '@/slices'

type Params = { uid: string }

export const dynamicParams = false

export default async function Page({ params }: { params: Params }) {
  const client = createClient()
  const page = await client.getByUID('page', params.uid).catch(() => notFound())

  return <SliceZone slices={page.data.slices} components={components} />
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const client = createClient()
  const page = await client.getByUID('page', params.uid)

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

// Going to run at build time when your site is deployed
// When your site builds, NextJs will have an array of all the pages it need to build
export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType('page')

  return pages.map((page) => {
    return { uid: page.uid }
  })
}
