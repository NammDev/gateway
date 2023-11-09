import clsx from 'clsx'
import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next'

export default function Button({ className, children, ...restProps }: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        'group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-white bg-primary-900 hover:bg-primary-700 disabled:hover:bg-primary-500 focus:ring-blue-500 dark:bg-accent-500 dark:text-black dark:hover:bg-accent-700',
        className
      )}
      {...restProps}
    >
      <span className='flex items-center text-base px-5 py-2.5 rounded-md'>{children}</span>
    </PrismicNextLink>
  )
}
