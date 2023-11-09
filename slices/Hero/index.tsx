import Bounded from '@/components/Bounded'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from '@prismicio/react'

const components: JSXMapSerializer = {
  heading1: ({ children }) => <h1>{children}</h1>,
  paragraph: ({ children }) => <p>{children}</p>,
}

export type HeroProps = SliceComponentProps<Content.HeroSlice>

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === 'horizontal' && (
        <section className='slice slice--no-background'>
          <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-7xl'>
            <div className='flex flex-col items-center gap-8 lg:flex-row lg:gap-16'>
              <div className='lg:w-1/2'>
                <div className='text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl'>
                  {/* <PrismicRichText field={slice.primary.heading} components={components} /> */}
                  <h1>
                    We Partner with Brands to Build <mark>Inclusive Impact Solutions</mark>
                  </h1>
                </div>
                <div className='mt-3 text-primary-600 dark:text-primary-100 sm:mt-6 sm:text-xl md:w-4/5 lg:text-lg xl:text-xl'>
                  <PrismicRichText field={slice.primary.body} components={components} />
                </div>
                <div className='mt-7 flex max-w-md flex-col gap-3 sm:mx-auto sm:text-center lg:mx-0 lg:flex-row lg:items-center lg:gap-6 lg:text-left'>
                  <a
                    className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-white bg-primary-900 hover:bg-primary-700 disabled:hover:bg-primary-500 focus:ring-blue-500 dark:bg-accent-500 dark:text-black dark:hover:bg-accent-700'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://motivated-producer-7393.ck.page/6fc3435050'
                  >
                    <span className='flex items-center text-base px-5 py-2.5 rounded-md'>
                      Subscribe for updates about our technology platform.
                    </span>
                  </a>
                </div>
              </div>
              <div className='relative w-full sm:mx-auto lg:mx-0 lg:flex lg:w-1/2 lg:items-center'>
                <div className='aspect-w-16 aspect-h-9 relative z-20 w-full rounded-2xl'>
                  <div className='z-20 h-full w-full overflow-hidden'>
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
                        field={slice.primary.image}
                        sizes='(min-width: 1023px) 60vw, 100vw'
                        decoding='async'
                        data-nimg='fill'
                        className='z-20 h-full w-full rounded-2xl'
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
                  <div className='absolute z-10 mt-4 ml-4 h-full w-full rounded-2xl bg-accent-500' />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Hero
