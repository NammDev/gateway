import Button from '@/components/Button'
import { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from '@prismicio/react'

const components: JSXMapSerializer = {
  heading1: ({ children }) => <h1>{children}</h1>,
  paragraph: ({ children }) => <p>{children}</p>,
}

export type NoImageProps = SliceComponentProps<Content.NoImageSlice>

const NoImage = ({ slice }: NoImageProps): JSX.Element => {
  return (
    <section className='slice slice--has-background'>
      <div className='mx-auto w-full'>
        <div className='lg:px-8'>
          <div className='mx-auto w-full py-16 sm:py-20 px-6 sm:px-7 lg:px-8 max-w-7xl'>
            <div>
              <div className='text-4xl font-bold tracking-tight sm:text-5xl'>
                <PrismicRichText field={slice.primary.heading} components={components} />
              </div>
              <div className='mt-4 text-lg'>
                <PrismicRichText field={slice.primary.body} components={components} />
              </div>
            </div>
            <div className='mt-8'>
              <Button field={slice.primary.button_link}>{slice.primary.button_text}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoImage
