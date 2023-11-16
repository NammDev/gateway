import * as prismic from '@prismicio/client'

import { createClient } from '@/prismicio'
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import BlogCard from '@/components/BlogCard'

export async function generateMetadata() {
  const client = createClient()
  const page = await client.getSingle('homepage')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function Index({ params }: { params: { uid: string } }) {
  const client = createClient()

  const blogs = await client.getAllByType('blog', {
    orderings: [
      { field: 'my.blog.date', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  })

  return (
    <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-7xl'>
      <div className='relative px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28'>
        <div className='flex flex-col justify-between gap-6 lg:flex-row'>
          <div className='lg:w-7/12'>
            <div className='text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl'>
              <h1>How We are Changing the Future</h1>
            </div>
            <div className='prose mt-4 dark:prose-invert lg:prose-xl'>
              <p>The Resource Key insights, resources, articles, press and more.</p>
            </div>
          </div>
          <div className='text-right lg:w-5/12'>
            <div>
              <button className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-white bg-primary-900 hover:bg-primary-700 disabled:hover:bg-primary-500 focus:ring-blue-500 dark:bg-accent-500 dark:text-black dark:hover:bg-accent-700'>
                <span className='flex items-center text-sm px-4 py-2 rounded-md !px-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='mr-2 h-5 w-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Search articles...
                </span>
              </button>
            </div>
          </div>
        </div>
        <h2 className='mt-10 text-3xl font-bold'>Our latest articles</h2>
        <ul className='mx-auto mt-8 grid gap-5 md:grid-cols-2 lg:mt-12 lg:max-w-none lg:grid-cols-3'>
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </ul>
        <div className='mt-8 text-center md:mt-10 lg:mt-16'>
          <button className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-white bg-primary-900 hover:bg-primary-700 disabled:hover:bg-primary-500 focus:ring-blue-500 dark:bg-accent-500 dark:text-black dark:hover:bg-accent-700'>
            <span className='flex items-center text-base px-6 py-3 rounded-md'>Load more</span>
          </button>
        </div>
      </div>
    </div>
  )
}
