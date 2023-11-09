import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { SliceComponentProps, JSXMapSerializer, PrismicRichText } from '@prismicio/react'

const components: JSXMapSerializer = {
  heading2: ({ children }) => <h1>{children}</h1>,
  paragraph: ({ children }) => <p>{children}</p>,
}

export type WorkingWithProps = SliceComponentProps<Content.WorkingWithSlice>

const WorkingWith = ({ slice }: WorkingWithProps): JSX.Element => {
  return (
    <section className='slice slice--no-background'>
      <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-7xl'>
        <div className='mb-7 text-center font-bold uppercase text-primary-700 dark:text-primary-300'>
          <PrismicRichText field={slice.primary.heading} components={components} />
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-4'>
          {slice.items.map((item, index) => (
            <div
              key={index}
              className='inline-flex w-full items-center justify-center rounded-xl p-2 dark:bg-white'
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 150,
                  height: 100,
                  background: 'none',
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: 'relative',
                }}
              >
                <PrismicNextImage
                  field={item.image}
                  decoding='async'
                  data-nimg='fixed'
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
                    objectFit: 'contain',
                  }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkingWith
