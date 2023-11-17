import Link from 'next/link'
import * as prismic from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { Content, isFilled } from '@prismicio/client'

import { createClient } from '@/prismicio'
import Image from 'next/image'
import BlogCard from '@/components/BlogCard'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

// export async function generateMetadata({ params }) {
//   const client = createClient()
//   const settings = await client.getSingle('settings')
//   const article = await client.getByUID('article', params.uid).catch(() => notFound())

//   return {
//     title: `${prismic.asText(article.data.title)} | ${prismic.asText(settings.data.name)}`,
//     description: article.data.meta_description,
//     openGraph: {
//       title: article.data.meta_title,
//       images: [
//         {
//           url: article.data.meta_image.url,
//         },
//       ],
//     },
//   }
// }

export default async function Page({ params }: { params: { uid: string } }) {
  const client = createClient()

  const blog = await client.getByUID('blog', params.uid)
  const latestblogs = await client.getAllByType('blog', {
    limit: 3,
    orderings: [
      { field: 'my.blog.publishDate', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  })

  const author =
    isFilled.contentRelationship(blog.data.author) &&
    blog.data.author.uid &&
    (await client.getByUID('author', blog.data.author?.uid))

  const categories = await Promise.all(
    blog.data.categories.map((category) => {
      if (isFilled.contentRelationship(category.category) && category.category.uid) {
        return client.getByUID('category', category.category.uid)
      }
    })
  )

  const date = prismic.asDate(blog.data.date || blog.first_publication_date)

  return (
    <>
      <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-4xl'>
        <article>
          <div className='mb-12 text-center'>
            <div className='order-1 lg:order-2'>
              <div className='mb-5 flex flex-wrap items-center justify-center gap-4'>
                {categories.map((category) => (
                  <PrismicNextLink
                    key={category?.uid}
                    document={category}
                    className='rounded bg-primary-100 px-5 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-700 duration-200 hover:bg-primary-300 focus:bg-primary-300 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-2 dark:bg-primary-700 dark:text-primary-100 dark:hover:bg-primary-800'
                  >
                    {category?.data?.name?.toUpperCase()}
                  </PrismicNextLink>
                ))}
              </div>
              <PrismicRichText
                field={blog.data.heading}
                components={{
                  heading1: ({ children }) => (
                    <h1 className='text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl'>
                      {children}
                    </h1>
                  ),
                }}
              />
              <PrismicRichText
                field={blog.data.quote}
                components={{
                  paragraph: ({ children }) => (
                    <p className='mx-auto mt-3 max-w-xl text-xl'>{children}</p>
                  ),
                }}
              />
              <div className='mt-7 flex justify-center'>
                {author && (
                  <PrismicNextLink
                    document={author}
                    className='group block flex-shrink-0 rounded border border-primary-300 p-2.5 duration-200 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-2 dark:border-primary-800'
                  >
                    <div className='flex items-center'>
                      <div className='relative inline-flex h-10 w-10 overflow-hidden rounded-full'>
                        <div>
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'inline-block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'relative',
                              maxWidth: '100%',
                            }}
                          >
                            <span
                              style={{
                                boxSizing: 'border-box',
                                display: 'block',
                                width: 'initial',
                                height: 'initial',
                                background: 'none',
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                maxWidth: '100%',
                              }}
                            >
                              <Image
                                width='40'
                                height='40'
                                alt='image author'
                                aria-hidden='true'
                                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2740%27%20height=%2740%27/%3e'
                                style={{
                                  display: 'block',
                                  background: 'none',
                                  opacity: 1,
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                }}
                              />
                            </span>
                            <PrismicNextImage
                              field={author.data.image}
                              decoding='async'
                              data-nimg='intrinsic'
                              style={{
                                position: 'absolute',
                                inset: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'cover',
                              }}
                            />
                          </span>
                        </div>
                      </div>
                      <div className='ml-3 text-left'>
                        <p className='text-sm font-bold'>{author.data.name}</p>
                        <p className='text-xs text-primary-600 dark:text-primary-100'>
                          {author.data.position}
                        </p>
                      </div>
                    </div>
                  </PrismicNextLink>
                )}
              </div>
              <div className='mt-7 mb-8 flex items-center justify-center gap-8'>
                <div className='flex items-center space-x-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    aria-hidden='true'
                    className='h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                  <time>{dateFormatter.format(date)}</time>
                </div>
                <div className='flex items-center space-x-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    aria-hidden='true'
                    className='h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <p>2 mins</p>
                </div>
              </div>
            </div>
            <div className='relative order-2 mt-5 lg:order-1 lg:mt-0'>
              <div className='rotate absolute -inset-1 opacity-30' />
              <div className='aspect-w-16 aspect-h-9 relative w-full overflow-hidden rounded-xl'>
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: 'absolute',
                    inset: 0,
                  }}
                >
                  <PrismicNextImage
                    field={blog.data.image}
                    sizes='100vw'
                    decoding='async'
                    data-nimg='fill'
                    className='h-full w-full'
                    style={{
                      position: 'absolute',
                      inset: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className='mb-20 grid grid-cols-1 gap-12'>
            <div className='mx-auto w-full flex-1 max-w-4xl'>
              <div className='mt-12'>
                <Link
                  className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-primary-900 bg-accent-500 hover:bg-accent-700 disabled:hover:bg-accent-100 focus:ring-blue-500 dark:bg-white dark:hover:bg-primary-200 dark:text-black'
                  href='/blog/'
                >
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
                        d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                    All blog posts
                  </span>
                </Link>
              </div>
              <div className='mt-8 max-w-4xl sm:mt-10'>
                <div className='relative overflow-hidden rounded-2xl border border-primary-300 bg-primary-100 px-6 py-10 dark:border-primary-800 dark:bg-primary-800 sm:px-8 md:py-12'>
                  <div className='relative'>
                    <div className=''>
                      <div className='flex flex-col gap-2 md:flex-row md:items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={2}
                          stroke='currentColor'
                          aria-hidden='true'
                          className='h-6 w-6 text-black dark:text-white'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        <h2 className='text-xl font-bold tracking-tight text-black dark:text-white sm:text-2xl'>
                          Join the The Resource Key Newsletter
                        </h2>
                      </div>
                      <p className='mt-3 max-w-2xl text-lg text-primary-600 dark:text-primary-100'>
                        Subscribe to get our latest content by email and for upcoming events.
                      </p>
                    </div>
                    <form
                      action='https://app.convertkit.com/forms/2579354/subscriptions'
                      method='post'
                      target='_self'
                      data-sv-form={2579354}
                      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""}},"uid":"","version":"5"}'
                      className='mt-6 items-center sm:flex sm:max-w-lg'
                    >
                      <div className='min-w-0 flex-1'>
                        <label htmlFor='ck-email' className='sr-only'>
                          Email address
                        </label>
                        <input
                          autoComplete='email'
                          id='ck-email'
                          name='email_address'
                          placeholder='Enter your email'
                          required
                          type='email'
                          className='block w-full rounded-md border border-primary-300 px-5 py-3 text-base text-primary-900 placeholder-primary-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600'
                        />
                      </div>
                      <div className='mt-4 sm:mt-0 sm:ml-3'>
                        <button
                          type='submit'
                          className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg shadow-sm hover:shadow text-white bg-primary-900 hover:bg-primary-700 disabled:hover:bg-primary-500 focus:ring-blue-500 dark:bg-accent-500 dark:text-black dark:hover:bg-accent-700'
                        >
                          <span className='flex items-center text-base px-5 py-2.5 rounded-md'>
                            Subscribe
                          </span>
                        </button>
                      </div>
                    </form>
                    <span className='text-xs text-primary-600 dark:text-primary-100'>
                      We won't send you spam. Unsubscribe at any time.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-7xl'>
        <section className='mb-12 lg:mb-20'>
          <div className='text-4xl font-bold tracking-tight sm:text-5xl'>
            <h2>Related Articles</h2>
          </div>
          <ul className='mx-auto mt-8 grid gap-5 md:grid-cols-2 lg:mt-12 lg:max-w-none lg:grid-cols-3'>
            {latestblogs.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const client = createClient()
  const blogs = await client.getAllByType('blog')

  return blogs.map((blog) => {
    return { uid: blog.uid }
  })
}
