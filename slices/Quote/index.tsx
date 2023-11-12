import { Content } from '@prismicio/client'
import { JSXMapSerializer, SliceComponentProps, PrismicRichText } from '@prismicio/react'

const components: JSXMapSerializer = {
  paragraph: ({ children }) => <p>{children}</p>,
}

export type QuoteProps = SliceComponentProps<Content.QuoteSlice>

/**
 * Component for "Quote" Slices.
 */
const Quote = ({ slice }: QuoteProps): JSX.Element => {
  return (
    <section className='slice slice--no-background'>
      <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-4xl'>
        <div className='relative rounded-2xl bg-accent-500 py-8 px-12 lg:py-16 lg:px-24'>
          <div className='mx-auto text-lg font-bold dark:text-black'>
            <PrismicRichText field={slice.primary.quote} components={components} />
            <PrismicRichText field={slice.primary.people} components={components} />
          </div>
          <div className='mt-4 font-bold underline duration-300 text-primary-700 hover:text-black'>
            <a href='/case-studies/'>View The Resource Key Case Studies</a>
          </div>
          <svg
            className='absolute top-4 left-4 md:top-6 md:left-20'
            width={92}
            height={67}
            viewBox='0 0 92 67'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              opacity='0.05'
              d='M22.3938 66.6C17.4604 66.6 13.3938 65.4667 10.1938 63.2C6.99375 60.9333 4.59375 58 2.99375 54.4C1.52708 50.6667 0.79375 46.5333 0.79375 42C0.79375 36 2.06042 30.2667 4.59375 24.8C7.26042 19.2 10.6604 14.3333 14.7938 10.2C19.0604 5.93332 23.6604 2.73332 28.5938 0.599994L42.3938 10.8C38.6604 12.2667 35.1938 14.1333 31.9938 16.4C28.9271 18.6667 26.1938 21.1333 23.7938 23.8C21.5271 26.4667 19.7938 29.2 18.5938 32L19.5938 32.6C20.2604 32.0667 21.1271 31.6667 22.1938 31.4C23.2604 31.1333 24.6604 31 26.3938 31C28.7938 31 31.1938 31.6 33.5938 32.8C36.1271 34 38.1938 35.8 39.7938 38.2C41.5271 40.6 42.3938 43.6667 42.3938 47.4C42.3938 51.6667 41.4604 55.2 39.5938 58C37.7271 60.8 35.2604 62.9333 32.1938 64.4C29.1271 65.8667 25.8604 66.6 22.3938 66.6ZM71.3938 66.6C66.4604 66.6 62.3938 65.4667 59.1938 63.2C55.9938 60.9333 53.5938 58 51.9938 54.4C50.5271 50.6667 49.7938 46.5333 49.7938 42C49.7938 36 51.0604 30.2667 53.5938 24.8C56.2604 19.2 59.6604 14.3333 63.7938 10.2C68.0604 5.93332 72.6604 2.73332 77.5938 0.599994L91.3938 10.8C87.6604 12.2667 84.1938 14.1333 80.9938 16.4C77.9271 18.6667 75.1938 21.1333 72.7938 23.8C70.5271 26.4667 68.7938 29.2 67.5938 32L68.5938 32.6C69.2604 32.0667 70.1271 31.6667 71.1938 31.4C72.2604 31.1333 73.6604 31 75.3938 31C77.7938 31 80.1938 31.6 82.5938 32.8C85.1271 34 87.1938 35.8 88.7938 38.2C90.5271 40.6 91.3938 43.6667 91.3938 47.4C91.3938 51.6667 90.4604 55.2 88.5938 58C86.7271 60.8 84.2604 62.9333 81.1938 64.4C78.1271 65.8667 74.8604 66.6 71.3938 66.6Z'
              fill='currentColor'
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Quote
