import * as prismic from '@prismicio/client'
import { createClient } from '@/prismicio'

import BlogCard from '@/components/BlogCard'
import { CategoryDocument } from '@/prismicio-types'

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

  const blogsByCategory = blogs.filter((blog) => {
    return blog.data.categories.some((category) => {
      if (prismic.isFilled.contentRelationship(category.category) && category.category.uid) {
        return category.category.uid === params.uid
      }
      return false
    })
  })

  const category = (await client.getByUID('category', params.uid)) as CategoryDocument

  return (
    <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-7xl'>
      <div className='relative px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28'>
        <div className='text-center'>
          <h1 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl'>
            {category.data.name}
          </h1>
        </div>
        <ul className='mx-auto mt-8 grid gap-5 md:grid-cols-2 lg:mt-12 lg:max-w-none lg:grid-cols-3'>
          {blogsByCategory.map((blog) => (
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
