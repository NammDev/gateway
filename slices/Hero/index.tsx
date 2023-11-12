import Button from '@/components/Button'
import Heading from '@/components/Heading'
import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from '@prismicio/react'

const components: JSXMapSerializer = {
  heading1: ({ children }) => <h1>{children}</h1>,
  heading2: ({ children }) => <h2>{children}</h2>,
  paragraph: ({ children }) => <p>{children}</p>,
}

export type HeroProps = SliceComponentProps<Content.HeroSlice>

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === 'default' && (
        <section className='slice slice--no-background'>
          <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-7xl'>
            <div className='flex flex-col items-center gap-8 lg:flex-row lg:gap-16'>
              <div className='lg:w-1/2'>
                <div className='text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl'>
                  <PrismicRichText field={slice.primary.heading} components={components} />
                  {/* <h1>
                    We Partner with Brands to Build <mark>Inclusive Impact Solutions</mark>
                  </h1> */}
                </div>
                <div className='mt-3 text-primary-600 dark:text-primary-100 sm:mt-6 sm:text-xl md:w-4/5 lg:text-lg xl:text-xl'>
                  <PrismicRichText field={slice.primary.body} components={components} />
                </div>
                <div className='mt-7 flex max-w-md flex-col gap-3 sm:mx-auto sm:text-center lg:mx-0 lg:flex-row lg:items-center lg:gap-6 lg:text-left'>
                  <Button field={slice.primary.button_link}>{slice.primary.button_text}</Button>
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

      {slice.variation === 'noMark' && (
        <section className='slice slice--no-background'>
          <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-7xl'>
            <div>
              <div className='flex space-y-12 lg:items-center lg:space-y-0 lg:space-x-20 flex-col lg:flex-row'>
                <div className='lg:w-1/2'>
                  <div className='text-4xl font-bold tracking-tight sm:text-5xl'>
                    <PrismicRichText field={slice.primary.heading} components={components} />
                  </div>
                  <div className='prose mt-3 dark:prose-invert sm:mt-6 lg:prose-lg'>
                    {slice.items.map((item, index) => (
                      <PrismicRichText key={index} field={item.body} components={components} />
                    ))}
                  </div>
                  <div className='mt-8'>
                    <Button field={slice.primary.button_link}>{slice.primary.button_text}</Button>
                  </div>
                </div>
                <div className='lg:w-1/2'>
                  <div className='aspect-w-16 aspect-h-9 relative block w-full overflow-hidden lg:aspect-1'>
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
                        decoding='async'
                        data-nimg='fill'
                        className='h-full w-full rounded-lg shadow-md'
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
                      />
                    </span>
                  </div>
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
