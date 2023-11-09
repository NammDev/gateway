import Button from '@/components/Button'
import { Content } from '@prismicio/client'
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from '@prismicio/react'

const components: JSXMapSerializer = {
  heading2: ({ children }) => <h1>{children}</h1>,
  paragraph: ({ children }) => (
    <p className='mb-4 text-primary-700 dark:text-primary-100'>{children}</p>
  ),
  heading3: ({ children }) => <h3 className='mb-2 text-xl font-bold lg:text-2xl'>{children}</h3>,
}

export type KeyServicesProps = SliceComponentProps<Content.KeyServicesSlice>

const KeyServices = ({ slice }: KeyServicesProps): JSX.Element => {
  return (
    <section className='slice slice--no-background'>
      <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-7xl'>
        <div className='mb-8 text-center lg:mb-14'>
          <div className='text-4xl font-bold tracking-tight sm:text-5xl'>
            <PrismicRichText field={slice.primary.heading} components={components} />
          </div>
        </div>
        <div className='grid gap-8 lg:grid-cols-3 lg:gap-20'>
          {slice.items.map((item, index) => (
            <div key={index} className='flex flex-col justify-between gap-4'>
              <div>
                <div className='mb-3 inline-block dark:rounded-lg dark:bg-white dark:p-2'>
                  <div className='relative h-8 w-8'>
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
                      <img
                        alt='conversation bubbles connected icon'
                        src='https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=3840'
                        decoding='async'
                        data-nimg='fill'
                        className='h-full w-full'
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
                          objectFit: 'contain',
                        }}
                        sizes='100vw'
                        srcSet='https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=82 82w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=110 110w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=140 140w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=640 640w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=750 750w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=828 828w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=1080 1080w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=1200 1200w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=1920 1920w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=2048 2048w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=3840 3840w'
                      />
                      <noscript>
                        &lt;img alt="conversation bubbles connected icon" sizes="100vw"
                        srcSet="https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=82
                        82w,
                        https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=110
                        110w,
                        https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=140
                        140w,
                        https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=640
                        640w,
                        https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=750
                        750w,
                        https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=828
                        828w,
                        https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=1080
                        1080w,
                        https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=1200
                        1200w,
                        https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=1920
                        1920w,
                        https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=2048
                        2048w,
                        https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=3840
                        3840w"
                        src="https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=3840"
                        decoding="async" data-nimg="fill"
                        style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain"
                        class="h-full w-full" loading="lazy"/&gt;
                      </noscript>
                    </span>
                  </div>
                </div>
                <PrismicRichText field={item.small_heading} components={components} />
                <PrismicRichText field={item.body} components={components} />
              </div>
              <a
                className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-primary-900 bg-accent-500 hover:bg-accent-700 disabled:hover:bg-accent-100 focus:ring-blue-500 dark:bg-white dark:hover:bg-primary-200 dark:text-black'
                tabIndex={-1}
                href='/services/speaking/'
              >
                <span className='flex items-center text-sm px-4 py-2 rounded-md'>Learn more</span>
              </a>
              {/* <Button field={item.button_link}>{item.button_text}</Button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyServices
