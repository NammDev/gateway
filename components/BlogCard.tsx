import { BlogDocument } from '@/prismicio-types'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import React from 'react'

interface BlogCardProps {
  blog: BlogDocument<string>
}

const components: JSXMapSerializer = {
  heading1: ({ children }) => <a className='main-link'>{children}</a>,
  paragraph: ({ children }) => <p className='flex flex-col gap-2'>{children}</p>,
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <li className='article-card-wrapper rounded-box group relative mx-auto flex w-full max-w-lg flex-col overflow-hidden shadow-lg duration-150 hover:-translate-y-1 hover:shadow-xl dark:bg-primary-800 hover:dark:bg-primary-700'>
      <PrismicNextLink document={blog}>
        <div className='aspect-h-9 relative aspect-2 w-full overflow-hidden'>
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
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          >
            <PrismicNextImage
              field={blog.data.image}
              decoding='async'
              data-nimg='fill'
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
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
              sizes='(min-width: 767px) 350px, (min-width: 1023px) 400px, 100vw'
            />
          </span>
        </div>
        <div className='flex flex-col gap-2 p-8'>
          <h3 className='flex items-center gap-2 text-xl font-semibold'>
            <PrismicRichText field={blog.data.heading} components={components} />
          </h3>
          <PrismicRichText field={blog.data.quote} components={components} />
          <span
            className='mt-2 text-sm font-bold text-blue-600 duration-300 group-hover:text-blue-500 group-hover:underline dark:text-blue-200 dark:group-hover:text-blue-300'
            aria-hidden='true'
          >
            Read more ›
          </span>
        </div>
      </PrismicNextLink>
    </li>
  )
}

export default BlogCard
