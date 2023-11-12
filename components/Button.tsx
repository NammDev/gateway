import clsx from 'clsx'
import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next'

type ButtonProps = PrismicNextLinkProps & { type?: 'type1' | 'type2' | 'type3' }

export default function Button({ className, children, type = 'type1', ...restProps }: ButtonProps) {
  const linkClassName = clsx(
    'group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm',
    type === 'type1'
      ? 'text-white bg-primary-900 hover:bg-primary-700 disabled:hover:bg-primary-500 focus:ring-blue-500 dark:bg-accent-500 dark:text-black dark:hover:bg-accent-700'
      : type === 'type2'
      ? 'text-primary-900 bg-accent-500 hover:bg-accent-700 disabled:hover:bg-accent-100 focus:ring-blue-500 dark:bg-white dark:hover:bg-primary-200 dark:text-black'
      : 'group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-primary-900 bg-accent-500 hover:bg-accent-700 disabled:hover:bg-accent-100 focus:ring-blue-500 dark:bg-white dark:hover:bg-primary-200 dark:text-black',
    className
  )

  const spanClassName = clsx(
    'flex items-center',
    type === 'type1'
      ? 'text-base px-5 py-2.5 rounded-md'
      : type === 'type2'
      ? 'text-sm px-4 py-2 rounded-md'
      : 'text-base px-5 py-2.5 rounded-md'
  )

  return (
    <PrismicNextLink
      className={linkClassName}
      tabIndex={type === 'type2' ? -1 : undefined}
      {...restProps}
    >
      <span className={spanClassName}>{children}</span>
    </PrismicNextLink>
  )
}
