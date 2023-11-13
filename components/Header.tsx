import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Icon from './Logo'

export default async function Header() {
  return (
    <header className='z-[9999] mb-8 lg:mb-12'>
      <div>
        <nav>
          <div className='mx-auto w-full z-50 py-6 px-6 sm:px-7 lg:px-8 max-w-7xl'>
            <div className='flex items-center justify-between rounded-md bg-primary-50 px-5 py-2 dark:bg-primary-800 lg:justify-start lg:space-x-6'>
              <div>
                <Link href='/'>
                  <span className='sr-only'>The Resource Key</span>
                  <Icon />
                </Link>
              </div>
              <div className='lg:flex lg:flex-1 lg:items-center lg:justify-between'>
                <ul className='hidden space-x-6 lg:flex'>
                  <li className=''>
                    <div className='block lg:hidden'>
                      <button
                        className='flex w-full justify-between py-4 focus:outline-none focus-visible:ring '
                        id='headlessui-disclosure-button-:R1b6ajm:'
                        type='button'
                        aria-expanded='false'
                      >
                        <span className='lg:font-medium'>Company</span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          className='ml-2 h-5 w-5 rotate-0 transform'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </div>
                    <div className='relative hidden py-4 lg:block lg:py-0'>
                      <button
                        className='group inline-flex items-center rounded-md font-medium dark:hover:text-accent-500'
                        id='headlessui-popover-button-:R2b6ajm:'
                        type='button'
                        aria-expanded='false'
                      >
                        <span>Company</span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          className='ml-1 h-5 w-5'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                  <li className='py-4 hover:underline dark:text-white dark:hover:text-accent-500 lg:py-0'>
                    <span className='sr-only'>Current Page: </span>
                    <Link aria-current='false' href='/services/'>
                      <span className='lg:font-medium'>Services</span>
                    </Link>
                  </li>
                  <li className=''>
                    <div className='block lg:hidden'>
                      <button
                        className='flex w-full justify-between py-4 focus:outline-none focus-visible:ring '
                        id='headlessui-disclosure-button-:R1r6ajm:'
                        type='button'
                        aria-expanded='false'
                      >
                        <span className='lg:font-medium'>Community</span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          className='ml-2 h-5 w-5 rotate-0 transform'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </div>
                    <div className='relative hidden py-4 lg:block lg:py-0'>
                      <button
                        className='group inline-flex items-center rounded-md font-medium dark:hover:text-accent-500'
                        id='headlessui-popover-button-:R2r6ajm:'
                        type='button'
                        aria-expanded='false'
                      >
                        <span>Community</span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          className='ml-1 h-5 w-5'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                </ul>
                <div className='flex items-center space-x-5 lg:ml-12'>
                  <div className='flex items-center space-x-3'>
                    <div className='hidden lg:block'>
                      <button
                        className='bg-accent-500 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                        id='headlessui-switch-:r0:'
                        role='switch'
                        type='button'
                        tabIndex={0}
                        aria-checked='true'
                      >
                        <span className='sr-only'>Toggle dark mode</span>
                        <span className='translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark:bg-gray-800'>
                          <span
                            className='opacity-0 duration-100 ease-out absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                            aria-hidden='true'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              aria-hidden='true'
                              className='h-3 w-3 text-primary-400'
                            >
                              <path
                                fillRule='evenodd'
                                d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </span>
                          <span
                            className='opacity-100 duration-200 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                            aria-hidden='true'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              aria-hidden='true'
                              className='h-3 w-3 text-accent-700'
                            >
                              <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                            </svg>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div className='-my-2 -mr-2 flex items-center gap-2 lg:hidden'>
                      <button className='inline-flex items-center justify-center rounded-md bg-transparent p-2 text-primary-400 hover:bg-primary-100 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:text-white'>
                        <span className='sr-only'>Open menu</span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={2}
                          stroke='currentColor'
                          aria-hidden='true'
                          className='h-6 w-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M4 6h16M4 12h16M4 18h16'
                          />
                        </svg>
                      </button>
                    </div>
                    <ul className='hidden items-center space-x-2 lg:flex'>
                      <li>
                        <Link
                          className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-primary-900 bg-accent-500 hover:bg-accent-700 disabled:hover:bg-accent-100 focus:ring-blue-500 dark:bg-white dark:hover:bg-primary-200 dark:text-black'
                          href='/blog/'
                        >
                          <span className='flex items-center text-sm px-4 py-2 rounded-md'>
                            Blog
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-white bg-primary-900 hover:bg-primary-700 disabled:hover:bg-primary-500 focus:ring-blue-500 dark:bg-accent-500 dark:text-black dark:hover:bg-accent-700'
                          href='/contact/'
                        >
                          <span className='flex items-center text-sm px-4 py-2 rounded-md'>
                            Contact us
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )

  // const client = createClient()
  // const settings = await client.getSingle('settings')
  // return (
  //   <Bounded as='header' className='py-4 md:py-6 lg:py-8'>
  //     <div className='flex gap-4 items-center justify-between sm:flex-row flex-col'>
  //       <Link href='/'>
  //         <Icon />
  //       </Link>
  //       <nav>
  //         <ul className='flex'>
  //           {settings.data.navigation.map(({ link, label }) => (
  //             <li key={label}>
  //               <PrismicNextLink field={link} className='p-3'>
  //                 {label}
  //               </PrismicNextLink>
  //             </li>
  //           ))}
  //         </ul>
  //       </nav>
  //     </div>
  //   </Bounded>
  // )
}
