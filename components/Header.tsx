import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Bounded from './Bounded'
import Icon from './Logo'

export default async function Header() {
  return (
    <header className='z-[9999] mb-8 lg:mb-12'>
      <div>
        <nav>
          <div className='mx-auto w-full z-50 py-6 px-6 sm:px-7 lg:px-8 max-w-7xl'>
            <div className='flex items-center justify-between rounded-md bg-primary-50 px-5 py-2 dark:bg-primary-800 lg:justify-start lg:space-x-6'>
              <div>
                <a href='/'>
                  <span className='sr-only'>The Resource Key</span>
                  <svg
                    width={170}
                    height={35}
                    viewBox='0 0 170 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-10 w-40 text-black duration-200 hover:text-primary-700 dark:text-white dark:hover:text-accent-500 sm:h-12'
                  >
                    <path
                      d='M5.43902 11.5105C5.43902 7.71582 5.31253 3.79466 5.5655 0C17.2025 0.126489 28.8394 0 40.6029 0C40.6029 11.637 40.6029 23.2739 40.6029 34.9109C28.9659 34.9109 17.2025 34.9109 5.5655 34.9109C5.5655 28.5865 5.5655 22.3885 5.5655 16.0641C6.32444 16.0641 6.95688 15.9376 7.71581 15.9376C7.71581 21.5031 7.71581 27.1951 7.71581 32.7606C17.9614 32.8871 28.3335 32.7606 38.5791 32.7606C38.5791 22.515 38.5791 12.2694 38.5791 1.89733C28.3335 1.89733 18.0879 1.89733 7.71581 1.89733C7.71581 5.05955 7.58932 8.22177 7.71581 11.384C11.0045 11.384 14.1667 11.384 17.4554 11.384C19.3528 11.384 21.2501 12.7754 21.7561 14.6727C22.3885 16.6965 21.3766 18.9733 19.4793 20.1117C20.6177 21.2501 21.6296 22.515 22.6415 23.6534C21.7561 23.6534 20.7442 23.7799 19.8587 23.5269C18.8468 22.515 17.9614 21.5031 17.076 20.3647C16.0641 20.3647 15.0522 20.3647 13.9138 20.3647C13.9138 21.3766 13.9138 22.515 13.9138 23.5269C13.1548 23.5269 12.5224 23.5269 11.7635 23.5269C11.7635 21.7561 11.7635 19.9852 11.7635 18.2144C13.7873 18.2144 15.6846 18.2144 17.7084 18.2144C18.9733 18.0879 19.8587 16.823 19.7322 15.5581C19.7322 14.2932 18.5938 13.2813 17.4554 13.4078C11.637 13.4078 5.81848 13.4078 0 13.4078C0 12.6489 0 12.0164 0 11.2575C1.77084 11.5105 3.66817 11.5105 5.43902 11.5105Z'
                      fill='currentColor'
                    />
                    <path
                      d='M23.2725 11.7632C23.9049 11.7632 24.6639 11.7632 25.2963 11.7632C25.2963 13.9136 25.2963 15.9374 25.2963 18.0877C27.5731 16.0639 29.7234 13.7871 32.0002 11.7632C33.0121 11.6368 34.024 11.7632 35.0359 11.7632C33.1386 13.7871 30.9883 15.5579 29.091 17.4552C31.1148 19.4791 33.1386 21.5029 35.0359 23.6532C34.024 23.5267 33.0121 23.9062 32.1267 23.5267C30.6088 22.0088 29.091 20.3645 27.5731 18.8466C26.8142 19.4791 26.0552 20.238 25.2963 20.8704C25.2963 21.7559 25.2963 22.6413 25.2963 23.5267C24.5374 23.6532 23.9049 23.6532 23.146 23.6532C23.2725 19.732 23.2725 15.8109 23.2725 11.7632Z'
                      fill='currentColor'
                    />
                    <path
                      d='M46.1695 12.6489C48.5727 12.6489 50.976 12.6489 53.3793 12.6489C53.3793 13.1549 53.3793 13.6608 53.3793 14.1668C52.4939 14.1668 51.6085 14.1668 50.7231 14.1668C50.5966 16.8231 50.7231 19.6058 50.7231 22.2621C50.0906 22.2621 49.4582 22.2621 48.6992 22.2621C48.6992 19.6058 48.6992 16.8231 48.6992 14.1668C47.8138 14.1668 46.9284 14.1668 46.043 14.1668C46.1695 13.6608 46.1695 13.1549 46.1695 12.6489Z'
                      fill='currentColor'
                    />
                    <path
                      d='M54.3911 12.6489C55.0236 12.6489 55.656 12.6489 56.2884 12.6489C56.2884 13.9138 56.2884 15.1787 56.2884 16.4436C57.6798 16.4436 58.9447 16.4436 60.3361 16.4436C60.3361 15.1787 60.3361 13.9138 60.3361 12.6489C60.9685 12.6489 61.7275 12.6489 62.3599 12.6489C62.3599 15.8111 62.3599 19.0998 62.3599 22.2621C61.7275 22.2621 60.9685 22.2621 60.3361 22.2621C60.3361 20.8707 60.3361 19.4793 60.3361 18.0879C58.9447 18.0879 57.6798 18.0879 56.2884 18.0879C56.2884 19.4793 56.2884 20.8707 56.2884 22.2621C55.656 22.2621 55.0236 22.2621 54.3911 22.2621C54.3911 19.0998 54.3911 15.9376 54.3911 12.6489Z'
                      fill='currentColor'
                    />
                    <path
                      d='M64.0039 12.6489C65.9012 12.6489 67.7986 12.6489 69.8224 12.6489C69.8224 13.1549 69.8224 13.6608 69.8224 14.1668C68.5575 14.2933 67.2926 14.1668 66.0277 14.2933C66.0277 15.0522 66.0277 15.8111 66.0277 16.6966C67.1661 16.6966 68.3045 16.6966 69.4429 16.6966C69.4429 17.2025 69.4429 17.7085 69.4429 18.2144C68.3045 18.2144 67.1661 18.2144 66.0277 18.2144C66.0277 18.9734 66.0277 19.8588 66.0277 20.6177C67.2926 20.6177 68.5575 20.6177 69.8224 20.6177C69.8224 21.1237 69.8224 21.6296 69.8224 22.2621C67.9251 22.2621 66.0277 22.2621 64.0039 22.2621C64.0039 19.0998 64.0039 15.9376 64.0039 12.6489Z'
                      fill='currentColor'
                    />
                    <path
                      d='M74.1221 12.7752C75.8929 12.7752 77.6638 12.5223 79.4346 12.9017C81.3319 13.4077 81.9644 16.1904 80.573 17.5818C80.1935 18.0878 79.5611 18.2142 79.0551 18.4672C79.8141 19.7321 80.573 20.997 81.3319 22.2619C80.573 22.2619 79.9405 22.2619 79.1816 22.2619C78.4227 21.1235 77.7902 19.8586 76.9048 18.5937C76.6518 18.5937 76.2724 18.4672 76.0194 18.4672C76.0194 19.7321 76.0194 20.997 76.0194 22.2619C75.387 22.2619 74.7545 22.2619 74.1221 22.2619C74.1221 19.0997 74.1221 15.9375 74.1221 12.7752ZM76.0194 14.2931C76.0194 15.305 76.0194 16.1904 76.0194 17.2023C77.0313 17.0758 78.1697 17.4553 78.9286 16.6964C79.3081 16.0639 79.3081 15.052 78.5492 14.5461C77.7902 14.2931 76.9048 14.4196 76.0194 14.2931Z'
                      fill='currentColor'
                    />
                    <path
                      d='M82.4707 12.6489C84.368 12.6489 86.2654 12.6489 88.2892 12.6489C88.2892 13.1549 88.2892 13.6608 88.2892 14.1668C87.0243 14.2933 85.7594 14.1668 84.368 14.2933C84.368 15.0522 84.368 15.8111 84.368 16.6966C85.5064 16.6966 86.6448 16.6966 87.7832 16.6966C87.7832 17.2025 87.7832 17.7085 87.7832 18.2144C86.6448 18.2144 85.5064 18.2144 84.368 18.2144C84.368 18.9734 84.368 19.8588 84.368 20.6177C85.6329 20.6177 86.8978 20.6177 88.1627 20.6177C88.1627 21.1237 88.1627 21.6296 88.1627 22.2621C86.2654 22.2621 84.368 22.2621 82.4707 22.2621C82.4707 19.0998 82.4707 15.9376 82.4707 12.6489Z'
                      fill='currentColor'
                    />
                    <path
                      d='M90.1879 13.2813C92.0853 11.7634 95.7534 12.5223 96.1329 15.3051C95.5005 15.3051 94.7415 15.3051 94.1091 15.3051C93.8561 14.9256 93.4766 14.4197 93.2237 14.1667C92.7177 14.2932 92.2118 14.0402 91.8323 14.4197C91.3263 14.7991 91.4528 15.6846 91.9588 16.064C93.0972 16.6965 94.3621 16.823 95.5005 17.7084C96.7654 18.7203 96.6389 21.1236 95.121 21.8825C93.0972 23.1474 89.5555 22.262 89.3025 19.4792C89.935 19.4792 90.6939 19.4792 91.3263 19.4792C91.5793 20.2382 92.2118 20.9971 93.0972 20.7441C93.9826 20.7441 94.615 19.4792 93.8561 18.8468C92.5912 17.8349 90.5674 17.9613 89.682 16.57C89.0495 15.5581 89.176 14.0402 90.1879 13.2813Z'
                      fill='currentColor'
                    />
                    <path
                      d='M100.304 12.7751C101.949 12.1427 103.846 12.5222 105.238 13.6605C107.388 15.5579 107.388 19.3525 105.238 21.2499C103.214 23.0207 99.7985 22.7677 98.1542 20.6174C96.2568 18.0877 97.2687 13.787 100.304 12.7751ZM100.81 14.6725C98.5336 15.9373 98.9131 20.238 101.696 20.4909C103.973 20.9969 105.491 18.4671 104.858 16.4433C104.479 14.6725 102.328 13.9135 100.81 14.6725Z'
                      fill='currentColor'
                    />
                    <path
                      d='M108.146 12.7756C108.779 12.7756 109.411 12.7756 110.17 12.7756C110.17 14.9259 110.17 16.9498 110.17 19.1001C110.297 20.2385 111.435 20.8709 112.447 20.6179C113.333 20.4914 113.838 19.606 113.838 18.7206C113.838 16.6968 113.838 14.7995 113.838 12.7756C114.471 12.7756 115.103 12.7756 115.862 12.7756C115.862 14.7995 115.989 16.9498 115.862 19.1001C115.736 20.4914 114.977 21.7563 113.712 22.2623C112.194 22.7682 110.297 22.6418 109.158 21.3769C108.273 20.4914 108.146 19.1001 108.146 17.9617C108.146 16.1908 108.273 14.42 108.146 12.7756Z'
                      fill='currentColor'
                    />
                    <path
                      d='M117.509 12.6488C119.153 12.6488 120.924 12.5223 122.568 12.7753C124.466 13.2813 125.225 15.811 124.086 17.3289C123.707 17.8348 122.948 18.0878 122.315 18.4673C123.074 19.7322 123.96 20.9971 124.592 22.2619C123.833 22.2619 123.201 22.2619 122.442 22.2619C121.683 20.9971 120.924 19.7322 120.165 18.4673C119.912 18.4673 119.533 18.4673 119.406 18.4673C119.406 19.7322 119.406 20.9971 119.406 22.2619C118.774 22.2619 118.141 22.2619 117.509 22.2619C117.509 19.0997 117.509 15.9375 117.509 12.6488ZM119.533 17.2024C120.292 17.2024 121.05 17.3289 121.809 17.0759C122.948 16.8229 122.948 15.0521 122.062 14.5461C121.303 14.2932 120.418 14.4197 119.533 14.2932C119.533 15.3051 119.533 16.1905 119.533 17.2024Z'
                      fill='currentColor'
                    />
                    <path
                      d='M127.88 13.1547C130.409 11.7633 134.204 13.0282 134.71 16.064C134.078 16.064 133.445 16.064 132.686 16.064C132.054 15.0521 131.042 14.1666 129.777 14.4196C126.868 14.6726 126.488 19.6056 129.271 20.3646C130.536 20.8705 132.054 20.1116 132.686 18.8467C133.319 18.8467 134.078 18.8467 134.71 18.8467C134.331 20.3646 133.192 21.6295 131.801 22.1354C130.409 22.5149 128.765 22.3884 127.5 21.6295C124.717 19.7321 124.844 14.7991 127.88 13.1547Z'
                      fill='currentColor'
                    />
                    <path
                      d='M136.228 12.6489C138.125 12.6489 140.022 12.6489 141.92 12.6489C141.92 13.1549 141.92 13.6608 141.92 14.1668C140.655 14.1668 139.39 14.1668 138.125 14.1668C138.125 14.9257 138.125 15.8111 138.125 16.5701C139.263 16.5701 140.402 16.5701 141.54 16.5701C141.54 17.076 141.54 17.582 141.54 18.0879C140.402 18.0879 139.263 18.0879 138.125 18.0879C138.125 18.8469 138.125 19.7323 138.125 20.6177C139.39 20.6177 140.655 20.6177 141.92 20.6177C141.92 21.1237 141.92 21.7561 141.92 22.2621C140.022 22.2621 138.125 22.2621 136.228 22.2621C136.101 19.0998 136.228 15.9376 136.228 12.6489Z'
                      fill='currentColor'
                    />
                    <path
                      d='M146.221 12.649C146.854 12.649 147.486 12.649 148.119 12.649C148.119 14.0404 148.119 15.4318 148.119 16.8231C149.257 15.5583 150.395 14.0404 151.534 12.7755C152.293 12.396 153.178 12.649 153.937 12.649C152.672 14.2934 151.281 15.8112 149.889 17.3291C151.281 18.9735 152.672 20.4913 153.937 22.2622C153.178 22.2622 152.419 22.2622 151.66 22.2622C150.395 20.8708 149.257 19.3529 148.119 17.835C148.119 19.2264 148.119 20.7443 148.119 22.1357C147.486 22.1357 146.854 22.1357 146.221 22.1357C146.221 19.0999 146.221 15.9377 146.221 12.649Z'
                      fill='currentColor'
                    />
                    <path
                      d='M155.077 12.6489C156.974 12.6489 158.872 12.6489 160.769 12.6489C160.769 13.1549 160.769 13.6608 160.769 14.1668C159.504 14.1668 158.239 14.1668 156.974 14.1668C156.974 14.9257 156.974 15.8111 156.974 16.5701C158.113 16.5701 159.251 16.5701 160.39 16.5701C160.39 17.076 160.39 17.582 160.39 18.0879C159.251 18.0879 158.113 18.0879 156.974 18.0879C156.974 18.8469 156.974 19.7323 156.974 20.4912C158.239 20.6177 159.504 20.4912 160.769 20.4912C160.769 20.9972 160.769 21.6296 160.769 22.1356C158.872 22.1356 156.974 22.1356 155.077 22.1356C155.077 19.0999 155.077 15.9376 155.077 12.6489Z'
                      fill='currentColor'
                    />
                    <path
                      d='M161.525 12.6489C162.284 12.6489 163.043 12.6489 163.802 12.6489C164.435 14.0403 165.067 15.4317 165.826 16.6966C166.585 15.3052 167.091 13.9138 167.85 12.6489C168.609 12.6489 169.368 12.6489 170 12.6489C168.988 14.6727 167.723 16.6966 166.838 18.8469C166.711 19.9853 166.838 21.1237 166.838 22.2621C166.205 22.2621 165.573 22.2621 164.814 22.2621C164.814 21.1237 164.941 19.9853 164.814 18.8469C163.676 16.8231 162.537 14.7992 161.525 12.6489Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
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
                    <a aria-current='false' href='/services/'>
                      <span className='lg:font-medium'>Services</span>
                    </a>
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
                        <a
                          className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-primary-900 bg-accent-500 hover:bg-accent-700 disabled:hover:bg-accent-100 focus:ring-blue-500 dark:bg-white dark:hover:bg-primary-200 dark:text-black'
                          href='/blog/'
                        >
                          <span className='flex items-center text-sm px-4 py-2 rounded-md'>
                            Blog
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-white bg-primary-900 hover:bg-primary-700 disabled:hover:bg-primary-500 focus:ring-blue-500 dark:bg-accent-500 dark:text-black dark:hover:bg-accent-700'
                          href='/contact/'
                        >
                          <span className='flex items-center text-sm px-4 py-2 rounded-md'>
                            Contact us
                          </span>
                        </a>
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
