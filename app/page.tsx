import { Metadata } from 'next'
import { SliceZone } from '@prismicio/react'

import { createClient } from '@/prismicio'
import { components } from '@/slices'
import Workingwith from '@/components/TheRK/Workingwith'
import Image from 'next/image'

export default async function Page() {
  const client = createClient()
  const page = await client.getSingle('homepage')

  return <SliceZone slices={page.data.slices} components={components} />
  // return (
  //   <main id='main'>
  //     <section className='slice slice--no-background'>
  //       <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-7xl'>
  //         <div className='mb-7 text-center font-bold uppercase text-primary-700 dark:text-primary-300'>
  //           <h2>Trusted by Organizations in the USA and Globally</h2>
  //         </div>
  //         <div className='grid grid-cols-1 gap-6 md:grid-cols-4'>
  //           <div className='inline-flex w-full items-center justify-center rounded-xl p-2 dark:bg-white'>
  //             <span
  //               style={{
  //                 boxSizing: 'border-box',
  //                 display: 'inline-block',
  //                 overflow: 'hidden',
  //                 width: 150,
  //                 height: 100,
  //                 background: 'none',
  //                 opacity: 1,
  //                 border: 0,
  //                 margin: 0,
  //                 padding: 0,
  //                 position: 'relative',
  //               }}
  //             >
  //               <img
  //                 alt='Brookfield Properties logo'
  //                 src='https://images.prismic.io/the-resource-key/53d4b422-12e7-4862-83f8-7ae102526f70_brookfield+properties.jpg?auto=compress%2Cformat&fit=max&w=384'
  //                 decoding='async'
  //                 data-nimg='fixed'
  //                 style={{
  //                   position: 'absolute',
  //                   top: 0,
  //                   left: 0,
  //                   bottom: 0,
  //                   right: 0,
  //                   boxSizing: 'border-box',
  //                   padding: 0,
  //                   border: 'none',
  //                   margin: 'auto',
  //                   display: 'block',
  //                   width: 0,
  //                   height: 0,
  //                   minWidth: '100%',
  //                   maxWidth: '100%',
  //                   minHeight: '100%',
  //                   maxHeight: '100%',
  //                   objectFit: 'contain',
  //                 }}
  //                 srcSet='https://images.prismic.io/the-resource-key/53d4b422-12e7-4862-83f8-7ae102526f70_brookfield+properties.jpg?auto=compress%2Cformat&fit=max&w=256 1x, https://images.prismic.io/the-resource-key/53d4b422-12e7-4862-83f8-7ae102526f70_brookfield+properties.jpg?auto=compress%2Cformat&fit=max&w=384 2x'
  //               />
  //               <noscript>
  //                 &lt;img alt="Brookfield Properties logo"
  //                 srcSet="https://images.prismic.io/the-resource-key/53d4b422-12e7-4862-83f8-7ae102526f70_brookfield+properties.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256
  //                 1x,
  //                 https://images.prismic.io/the-resource-key/53d4b422-12e7-4862-83f8-7ae102526f70_brookfield+properties.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384
  //                 2x"
  //                 src="https://images.prismic.io/the-resource-key/53d4b422-12e7-4862-83f8-7ae102526f70_brookfield+properties.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384"
  //                 decoding="async" data-nimg="fixed"
  //                 style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain"
  //                 loading="lazy"/&gt;
  //               </noscript>
  //             </span>
  //           </div>
  //           <div className='inline-flex w-full items-center justify-center rounded-xl p-2 dark:bg-white'>
  //             <span
  //               style={{
  //                 boxSizing: 'border-box',
  //                 display: 'inline-block',
  //                 overflow: 'hidden',
  //                 width: 150,
  //                 height: 100,
  //                 background: 'none',
  //                 opacity: 1,
  //                 border: 0,
  //                 margin: 0,
  //                 padding: 0,
  //                 position: 'relative',
  //               }}
  //             >
  //               <img
  //                 alt='Cornerstone OnDemand logo'
  //                 src='https://images.prismic.io/the-resource-key/c75f5e66-2ea4-4ceb-a8ec-ca0c42dc4261_cornerstone.png?auto=compress%2Cformat&fit=max&w=384'
  //                 decoding='async'
  //                 data-nimg='fixed'
  //                 style={{
  //                   position: 'absolute',
  //                   top: 0,
  //                   left: 0,
  //                   bottom: 0,
  //                   right: 0,
  //                   boxSizing: 'border-box',
  //                   padding: 0,
  //                   border: 'none',
  //                   margin: 'auto',
  //                   display: 'block',
  //                   width: 0,
  //                   height: 0,
  //                   minWidth: '100%',
  //                   maxWidth: '100%',
  //                   minHeight: '100%',
  //                   maxHeight: '100%',
  //                   objectFit: 'contain',
  //                 }}
  //                 srcSet='https://images.prismic.io/the-resource-key/c75f5e66-2ea4-4ceb-a8ec-ca0c42dc4261_cornerstone.png?auto=compress%2Cformat&fit=max&w=256 1x, https://images.prismic.io/the-resource-key/c75f5e66-2ea4-4ceb-a8ec-ca0c42dc4261_cornerstone.png?auto=compress%2Cformat&fit=max&w=384 2x'
  //               />
  //               <noscript>
  //                 &lt;img alt="Cornerstone OnDemand logo"
  //                 srcSet="https://images.prismic.io/the-resource-key/c75f5e66-2ea4-4ceb-a8ec-ca0c42dc4261_cornerstone.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256
  //                 1x,
  //                 https://images.prismic.io/the-resource-key/c75f5e66-2ea4-4ceb-a8ec-ca0c42dc4261_cornerstone.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384
  //                 2x"
  //                 src="https://images.prismic.io/the-resource-key/c75f5e66-2ea4-4ceb-a8ec-ca0c42dc4261_cornerstone.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384"
  //                 decoding="async" data-nimg="fixed"
  //                 style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain"
  //                 loading="lazy"/&gt;
  //               </noscript>
  //             </span>
  //           </div>
  //           <div className='inline-flex w-full items-center justify-center rounded-xl p-2 dark:bg-white'>
  //             <span
  //               style={{
  //                 boxSizing: 'border-box',
  //                 display: 'inline-block',
  //                 overflow: 'hidden',
  //                 width: 150,
  //                 height: 100,
  //                 background: 'none',
  //                 opacity: 1,
  //                 border: 0,
  //                 margin: 0,
  //                 padding: 0,
  //                 position: 'relative',
  //               }}
  //             >
  //               <img
  //                 alt='The University of Memphis logo'
  //                 src='https://images.prismic.io/the-resource-key/880ab6c4-3c55-4a67-bd53-d30ea0478cc2_university+of+memphis.png?auto=compress%2Cformat&fit=max&w=384'
  //                 decoding='async'
  //                 data-nimg='fixed'
  //                 style={{
  //                   position: 'absolute',
  //                   top: 0,
  //                   left: 0,
  //                   bottom: 0,
  //                   right: 0,
  //                   boxSizing: 'border-box',
  //                   padding: 0,
  //                   border: 'none',
  //                   margin: 'auto',
  //                   display: 'block',
  //                   width: 0,
  //                   height: 0,
  //                   minWidth: '100%',
  //                   maxWidth: '100%',
  //                   minHeight: '100%',
  //                   maxHeight: '100%',
  //                   objectFit: 'contain',
  //                 }}
  //                 srcSet='https://images.prismic.io/the-resource-key/880ab6c4-3c55-4a67-bd53-d30ea0478cc2_university+of+memphis.png?auto=compress%2Cformat&fit=max&w=256 1x, https://images.prismic.io/the-resource-key/880ab6c4-3c55-4a67-bd53-d30ea0478cc2_university+of+memphis.png?auto=compress%2Cformat&fit=max&w=384 2x'
  //               />
  //               <noscript>
  //                 &lt;img alt="The University of Memphis logo"
  //                 srcSet="https://images.prismic.io/the-resource-key/880ab6c4-3c55-4a67-bd53-d30ea0478cc2_university+of+memphis.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256
  //                 1x,
  //                 https://images.prismic.io/the-resource-key/880ab6c4-3c55-4a67-bd53-d30ea0478cc2_university+of+memphis.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384
  //                 2x"
  //                 src="https://images.prismic.io/the-resource-key/880ab6c4-3c55-4a67-bd53-d30ea0478cc2_university+of+memphis.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384"
  //                 decoding="async" data-nimg="fixed"
  //                 style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain"
  //                 loading="lazy"/&gt;
  //               </noscript>
  //             </span>
  //           </div>
  //           <div className='inline-flex w-full items-center justify-center rounded-xl p-2 dark:bg-white'>
  //             <span
  //               style={{
  //                 boxSizing: 'border-box',
  //                 display: 'inline-block',
  //                 overflow: 'hidden',
  //                 width: 150,
  //                 height: 100,
  //                 background: 'none',
  //                 opacity: 1,
  //                 border: 0,
  //                 margin: 0,
  //                 padding: 0,
  //                 position: 'relative',
  //               }}
  //             >
  //               <img
  //                 alt='IEEE logo'
  //                 src='https://images.prismic.io/the-resource-key/8aa75d18-2586-4a34-9578-e31a52d0cfa4_ieee.logo.png?auto=compress%2Cformat&fit=max&w=384'
  //                 decoding='async'
  //                 data-nimg='fixed'
  //                 style={{
  //                   position: 'absolute',
  //                   top: 0,
  //                   left: 0,
  //                   bottom: 0,
  //                   right: 0,
  //                   boxSizing: 'border-box',
  //                   padding: 0,
  //                   border: 'none',
  //                   margin: 'auto',
  //                   display: 'block',
  //                   width: 0,
  //                   height: 0,
  //                   minWidth: '100%',
  //                   maxWidth: '100%',
  //                   minHeight: '100%',
  //                   maxHeight: '100%',
  //                   objectFit: 'contain',
  //                 }}
  //                 srcSet='https://images.prismic.io/the-resource-key/8aa75d18-2586-4a34-9578-e31a52d0cfa4_ieee.logo.png?auto=compress%2Cformat&fit=max&w=256 1x, https://images.prismic.io/the-resource-key/8aa75d18-2586-4a34-9578-e31a52d0cfa4_ieee.logo.png?auto=compress%2Cformat&fit=max&w=384 2x'
  //               />
  //               <noscript>
  //                 &lt;img alt="IEEE logo"
  //                 srcSet="https://images.prismic.io/the-resource-key/8aa75d18-2586-4a34-9578-e31a52d0cfa4_ieee.logo.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256
  //                 1x,
  //                 https://images.prismic.io/the-resource-key/8aa75d18-2586-4a34-9578-e31a52d0cfa4_ieee.logo.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384
  //                 2x"
  //                 src="https://images.prismic.io/the-resource-key/8aa75d18-2586-4a34-9578-e31a52d0cfa4_ieee.logo.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384"
  //                 decoding="async" data-nimg="fixed"
  //                 style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain"
  //                 loading="lazy"/&gt;
  //               </noscript>
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     <section className='slice slice--no-background'>
  //       <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-4xl'>
  //         <div className='mb-10 text-center'>
  //           <div className='text-4xl font-bold tracking-tight sm:text-5xl'>
  //             <h2>The Resource Key Case Studies</h2>
  //           </div>
  //           <div className='prose mx-auto mt-3 text-center text-primary-600 dark:text-primary-200 md:w-3/5'>
  //             <p>
  //               Uncover the uncommon results The Resource Key has been able to accomplish together,
  //               with our clients to build a more inclusive and accessible future.{' '}
  //               <a
  //                 target='_blank'
  //                 rel='noopener noreferrer'
  //                 href='https://www.theresourcekey.com/case-studies/'
  //               >
  //                 Link to view all case studies.
  //               </a>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-4xl'>
  //         <dl className='mt-6 divide-y divide-primary-600'>
  //           <div className='py-6'>
  //             <dt className='px-4 text-lg'>
  //               <button
  //                 className='flex w-full items-start justify-between rounded text-left focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-4'
  //                 id='headlessui-disclosure-button-:R6eqjm:'
  //                 type='button'
  //                 aria-expanded='false'
  //               >
  //                 <span className='text-lg font-bold'>
  //                   <p>Award-Winning DEI Playbook Revolutionizes EdTech</p>
  //                 </span>
  //                 <span className='ml-6 flex h-7 items-center'>
  //                   <svg
  //                     xmlns='http://www.w3.org/2000/svg'
  //                     fill='none'
  //                     viewBox='0 0 24 24'
  //                     strokeWidth={2}
  //                     stroke='currentColor'
  //                     aria-hidden='true'
  //                     className='rotate-0 h-6 w-6 transform text-primary-600'
  //                   >
  //                     <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
  //                   </svg>
  //                 </span>
  //               </button>
  //             </dt>
  //           </div>
  //           <div className='py-6'>
  //             <dt className='px-4 text-lg'>
  //               <button
  //                 className='flex w-full items-start justify-between rounded text-left focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-4'
  //                 id='headlessui-disclosure-button-:Raeqjm:'
  //                 type='button'
  //                 aria-expanded='false'
  //               >
  //                 <span className='text-lg font-bold'>
  //                   <p>A Metaverse for All</p>
  //                 </span>
  //                 <span className='ml-6 flex h-7 items-center'>
  //                   <svg
  //                     xmlns='http://www.w3.org/2000/svg'
  //                     fill='none'
  //                     viewBox='0 0 24 24'
  //                     strokeWidth={2}
  //                     stroke='currentColor'
  //                     aria-hidden='true'
  //                     className='rotate-0 h-6 w-6 transform text-primary-600'
  //                   >
  //                     <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
  //                   </svg>
  //                 </span>
  //               </button>
  //             </dt>
  //           </div>
  //           <div className='py-6'>
  //             <dt className='px-4 text-lg'>
  //               <button
  //                 className='flex w-full items-start justify-between rounded text-left focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-4'
  //                 id='headlessui-disclosure-button-:Reeqjm:'
  //                 type='button'
  //                 aria-expanded='false'
  //               >
  //                 <span className='text-lg font-bold'>
  //                   <p>
  //                     Empowering the Modern Workforce: The Transformational Impact of Neurodiversity
  //                     Training
  //                   </p>
  //                 </span>
  //                 <span className='ml-6 flex h-7 items-center'>
  //                   <svg
  //                     xmlns='http://www.w3.org/2000/svg'
  //                     fill='none'
  //                     viewBox='0 0 24 24'
  //                     strokeWidth={2}
  //                     stroke='currentColor'
  //                     aria-hidden='true'
  //                     className='rotate-0 h-6 w-6 transform text-primary-600'
  //                   >
  //                     <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
  //                   </svg>
  //                 </span>
  //               </button>
  //             </dt>
  //           </div>
  //           <div className='py-6'>
  //             <dt className='px-4 text-lg'>
  //               <button
  //                 className='flex w-full items-start justify-between rounded text-left focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-4'
  //                 id='headlessui-disclosure-button-:Rieqjm:'
  //                 type='button'
  //                 aria-expanded='false'
  //               >
  //                 <span className='text-lg font-bold'>
  //                   <p>Amplify First-Person Stories</p>
  //                 </span>
  //                 <span className='ml-6 flex h-7 items-center'>
  //                   <svg
  //                     xmlns='http://www.w3.org/2000/svg'
  //                     fill='none'
  //                     viewBox='0 0 24 24'
  //                     strokeWidth={2}
  //                     stroke='currentColor'
  //                     aria-hidden='true'
  //                     className='rotate-0 h-6 w-6 transform text-primary-600'
  //                   >
  //                     <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
  //                   </svg>
  //                 </span>
  //               </button>
  //             </dt>
  //           </div>
  //           <div className='py-6'>
  //             <dt className='px-4 text-lg'>
  //               <button
  //                 className='flex w-full items-start justify-between rounded text-left focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-4'
  //                 id='headlessui-disclosure-button-:Rmeqjm:'
  //                 type='button'
  //                 aria-expanded='false'
  //               >
  //                 <span className='text-lg font-bold'>
  //                   <p>The Future of Speech and Language Therapy</p>
  //                 </span>
  //                 <span className='ml-6 flex h-7 items-center'>
  //                   <svg
  //                     xmlns='http://www.w3.org/2000/svg'
  //                     fill='none'
  //                     viewBox='0 0 24 24'
  //                     strokeWidth={2}
  //                     stroke='currentColor'
  //                     aria-hidden='true'
  //                     className='rotate-0 h-6 w-6 transform text-primary-600'
  //                   >
  //                     <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
  //                   </svg>
  //                 </span>
  //               </button>
  //             </dt>
  //           </div>
  //         </dl>
  //       </div>
  //     </section>
  //     <section className='slice slice--no-background'>
  //       <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-7xl'>
  //         <div className='mb-8 text-center lg:mb-14'>
  //           <div className='text-4xl font-bold tracking-tight sm:text-5xl'>
  //             <h2>The Resource Key Services</h2>
  //           </div>
  //         </div>
  //         <div className='grid gap-8 lg:grid-cols-3 lg:gap-20'>
  //           <div className='flex flex-col justify-between gap-4'>
  //             <div>
  //               <div className='mb-3 inline-block dark:rounded-lg dark:bg-white dark:p-2'>
  //                 <div className='relative h-8 w-8'>
  //                   <span
  //                     style={{
  //                       boxSizing: 'border-box',
  //                       display: 'block',
  //                       overflow: 'hidden',
  //                       width: 'initial',
  //                       height: 'initial',
  //                       background: 'none',
  //                       opacity: 1,
  //                       border: 0,
  //                       margin: 0,
  //                       padding: 0,
  //                       position: 'absolute',
  //                       top: 0,
  //                       left: 0,
  //                       bottom: 0,
  //                       right: 0,
  //                     }}
  //                   >
  //                     <img
  //                       alt='conversation bubbles connected icon'
  //                       src='https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=3840'
  //                       decoding='async'
  //                       data-nimg='fill'
  //                       className='h-full w-full'
  //                       style={{
  //                         position: 'absolute',
  //                         top: 0,
  //                         left: 0,
  //                         bottom: 0,
  //                         right: 0,
  //                         boxSizing: 'border-box',
  //                         padding: 0,
  //                         border: 'none',
  //                         margin: 'auto',
  //                         display: 'block',
  //                         width: 0,
  //                         height: 0,
  //                         minWidth: '100%',
  //                         maxWidth: '100%',
  //                         minHeight: '100%',
  //                         maxHeight: '100%',
  //                         objectFit: 'contain',
  //                       }}
  //                       sizes='100vw'
  //                       srcSet='https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=82 82w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=110 110w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=140 140w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=640 640w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=750 750w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=828 828w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=1080 1080w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=1200 1200w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=1920 1920w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=2048 2048w, https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&fit=max&w=3840 3840w'
  //                     />
  //                     <noscript>
  //                       &lt;img alt="conversation bubbles connected icon" sizes="100vw"
  //                       srcSet="https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=82
  //                       82w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=110
  //                       110w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=140
  //                       140w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=640
  //                       640w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=750
  //                       750w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=828
  //                       828w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=1080
  //                       1080w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=1200
  //                       1200w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=1920
  //                       1920w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=2048
  //                       2048w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=3840
  //                       3840w"
  //                       src="https://the-resource-key.cdn.prismic.io/the-resource-key/7f83eb5b-ed8d-4db3-88d0-4545c687b123_message-chat-circle.svg?auto=format&amp;amp;fit=max&amp;amp;w=3840"
  //                       decoding="async" data-nimg="fill"
  //                       style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain"
  //                       class="h-full w-full" loading="lazy"/&gt;
  //                     </noscript>
  //                   </span>
  //                 </div>
  //               </div>
  //               <h3 className='mb-2 text-xl font-bold lg:text-2xl'>
  //                 <a href='/services/speaking/'>Speaking Engagements and Custom Programs</a>
  //               </h3>
  //               <p className='mb-4 text-primary-700 dark:text-primary-100'>
  //                 Empowering industry leaders with the insights needed to champion intentional
  //                 inclusion and accessibility in their domains. Through tailored education, we aim
  //                 to drive actionable change, ensuring that technology is accessible to all.
  //               </p>
  //             </div>
  //             <a
  //               className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-primary-900 bg-accent-500 hover:bg-accent-700 disabled:hover:bg-accent-100 focus:ring-blue-500 dark:bg-white dark:hover:bg-primary-200 dark:text-black'
  //               tabIndex={-1}
  //               href='/services/speaking/'
  //             >
  //               <span className='flex items-center text-sm px-4 py-2 rounded-md'>Learn more</span>
  //             </a>
  //           </div>
  //           <div className='flex flex-col justify-between gap-4'>
  //             <div>
  //               <div className='mb-3 inline-block dark:rounded-lg dark:bg-white dark:p-2'>
  //                 <div className='relative h-8 w-8'>
  //                   <span
  //                     style={{
  //                       boxSizing: 'border-box',
  //                       display: 'block',
  //                       overflow: 'hidden',
  //                       width: 'initial',
  //                       height: 'initial',
  //                       background: 'none',
  //                       opacity: 1,
  //                       border: 0,
  //                       margin: 0,
  //                       padding: 0,
  //                       position: 'absolute',
  //                       top: 0,
  //                       left: 0,
  //                       bottom: 0,
  //                       right: 0,
  //                     }}
  //                   >
  //                     <img
  //                       alt='card connected to a heart icon'
  //                       src='https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&fit=max&w=3840'
  //                       decoding='async'
  //                       data-nimg='fill'
  //                       className='h-full w-full'
  //                       style={{
  //                         position: 'absolute',
  //                         top: 0,
  //                         left: 0,
  //                         bottom: 0,
  //                         right: 0,
  //                         boxSizing: 'border-box',
  //                         padding: 0,
  //                         border: 'none',
  //                         margin: 'auto',
  //                         display: 'block',
  //                         width: 0,
  //                         height: 0,
  //                         minWidth: '100%',
  //                         maxWidth: '100%',
  //                         minHeight: '100%',
  //                         maxHeight: '100%',
  //                         objectFit: 'contain',
  //                       }}
  //                       sizes='100vw'
  //                       srcSet='https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&fit=max&w=82 82w, https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&fit=max&w=110 110w, https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&fit=max&w=140 140w, https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&fit=max&w=640 640w, https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&fit=max&w=750 750w, https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&fit=max&w=828 828w, https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&fit=max&w=1080 1080w, https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&fit=max&w=1200 1200w, https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&fit=max&w=1920 1920w, https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&fit=max&w=2048 2048w, https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&fit=max&w=3840 3840w'
  //                     />
  //                     <noscript>
  //                       &lt;img alt="card connected to a heart icon" sizes="100vw"
  //                       srcSet="https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=82
  //                       82w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=110
  //                       110w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=140
  //                       140w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=640
  //                       640w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=750
  //                       750w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=828
  //                       828w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=1080
  //                       1080w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=1200
  //                       1200w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=1920
  //                       1920w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=2048
  //                       2048w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=3840
  //                       3840w"
  //                       src="https://the-resource-key.cdn.prismic.io/the-resource-key/b6ba72b3-c01b-4cdc-8206-7845d5ec714f_file-heart-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=3840"
  //                       decoding="async" data-nimg="fill"
  //                       style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain"
  //                       class="h-full w-full" loading="lazy"/&gt;
  //                     </noscript>
  //                   </span>
  //                 </div>
  //               </div>
  //               <h3 className='mb-2 text-xl font-bold lg:text-2xl'>
  //                 <a href='/services/office-hours/'>Office Hours</a>
  //               </h3>
  //               <p className='mb-4 text-primary-700 dark:text-primary-100'>
  //                 Facilitating real-time problem-solving, knowledge sharing, and fostering
  //                 actionable steps for a clearer, more inclusive direction in your organization's
  //                 strategies and operations. Elevate your brand, refine your products, and lead in
  //                 fostering digital inclusivity and accessibility.
  //               </p>
  //             </div>
  //             <a
  //               className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-primary-900 bg-accent-500 hover:bg-accent-700 disabled:hover:bg-accent-100 focus:ring-blue-500 dark:bg-white dark:hover:bg-primary-200 dark:text-black'
  //               tabIndex={-1}
  //               href='/services/office-hours/'
  //             >
  //               <span className='flex items-center text-sm px-4 py-2 rounded-md'>Learn more</span>
  //             </a>
  //           </div>
  //           <div className='flex flex-col justify-between gap-4'>
  //             <div>
  //               <div className='mb-3 inline-block dark:rounded-lg dark:bg-white dark:p-2'>
  //                 <div className='relative h-8 w-8'>
  //                   <span
  //                     style={{
  //                       boxSizing: 'border-box',
  //                       display: 'block',
  //                       overflow: 'hidden',
  //                       width: 'initial',
  //                       height: 'initial',
  //                       background: 'none',
  //                       opacity: 1,
  //                       border: 0,
  //                       margin: 0,
  //                       padding: 0,
  //                       position: 'absolute',
  //                       top: 0,
  //                       left: 0,
  //                       bottom: 0,
  //                       right: 0,
  //                     }}
  //                   >
  //                     <img
  //                       alt='chain link icon'
  //                       src='https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&fit=max&w=3840'
  //                       decoding='async'
  //                       data-nimg='fill'
  //                       className='h-full w-full'
  //                       style={{
  //                         position: 'absolute',
  //                         top: 0,
  //                         left: 0,
  //                         bottom: 0,
  //                         right: 0,
  //                         boxSizing: 'border-box',
  //                         padding: 0,
  //                         border: 'none',
  //                         margin: 'auto',
  //                         display: 'block',
  //                         width: 0,
  //                         height: 0,
  //                         minWidth: '100%',
  //                         maxWidth: '100%',
  //                         minHeight: '100%',
  //                         maxHeight: '100%',
  //                         objectFit: 'contain',
  //                       }}
  //                       sizes='100vw'
  //                       srcSet='https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&fit=max&w=82 82w, https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&fit=max&w=110 110w, https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&fit=max&w=140 140w, https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&fit=max&w=640 640w, https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&fit=max&w=750 750w, https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&fit=max&w=828 828w, https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&fit=max&w=1080 1080w, https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&fit=max&w=1200 1200w, https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&fit=max&w=1920 1920w, https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&fit=max&w=2048 2048w, https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&fit=max&w=3840 3840w'
  //                     />
  //                     <noscript>
  //                       &lt;img alt="chain link icon" sizes="100vw"
  //                       srcSet="https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=82
  //                       82w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=110
  //                       110w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=140
  //                       140w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=640
  //                       640w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=750
  //                       750w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=828
  //                       828w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=1080
  //                       1080w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=1200
  //                       1200w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=1920
  //                       1920w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=2048
  //                       2048w,
  //                       https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=3840
  //                       3840w"
  //                       src="https://the-resource-key.cdn.prismic.io/the-resource-key/2150187f-56b8-4ec2-af7c-7af458ae003f_link-01.svg?auto=format&amp;amp;fit=max&amp;amp;w=3840"
  //                       decoding="async" data-nimg="fill"
  //                       style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain"
  //                       class="h-full w-full" loading="lazy"/&gt;
  //                     </noscript>
  //                   </span>
  //                 </div>
  //               </div>
  //               <h3 className='mb-2 text-xl font-bold lg:text-2xl'>
  //                 <a href='/services/the-resource-key-inclusive-package/'>
  //                   The Resource Key Inclusive Package
  //                 </a>
  //               </h3>
  //               <p className='mb-4 text-primary-700 dark:text-primary-100'>
  //                 Seamlessly embed inclusion and accessibility into your brand's core, ensuring
  //                 every touchpoint reflects a commitment to diversity and inclusive excellence,
  //                 tailored for visionary leaders.
  //               </p>
  //             </div>
  //             <a
  //               className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-primary-900 bg-accent-500 hover:bg-accent-700 disabled:hover:bg-accent-100 focus:ring-blue-500 dark:bg-white dark:hover:bg-primary-200 dark:text-black'
  //               tabIndex={-1}
  //               href='/services/the-resource-key-inclusive-package/'
  //             >
  //               <span className='flex items-center text-sm px-4 py-2 rounded-md'>Learn more</span>
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     <section className='slice slice--no-background'>
  //       <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-7xl'>
  //         <div>
  //           <div className='flex space-y-12 lg:items-center lg:space-y-0 lg:space-x-20 flex-col lg:flex-row'>
  //             <div className='lg:w-1/2'>
  //               <div className='text-4xl font-bold tracking-tight sm:text-5xl'>
  //                 <h2>Community Experts</h2>
  //               </div>
  //               <div className='prose mt-3 dark:prose-invert sm:mt-6 lg:prose-lg'>
  //                 <p>
  //                   The Resource Key Community Experts provide valuable resources about ways to
  //                   build inclusion and accessibility in the community and across different
  //                   industries. <br />
  //                   <a
  //                     target='_blank'
  //                     rel='noopener noreferrer'
  //                     href='mailto: info@theresourcekey.com'
  //                   >
  //                     Email us
  //                   </a>{' '}
  //                   to hire them for company projects or for your next event.
  //                 </p>
  //               </div>
  //               <div className='mt-8'>
  //                 <a
  //                   className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-white bg-primary-900 hover:bg-primary-700 disabled:hover:bg-primary-500 focus:ring-blue-500 dark:bg-accent-500 dark:text-black dark:hover:bg-accent-700'
  //                   href='/community-experts/'
  //                 >
  //                   <span className='flex items-center text-base px-5 py-2.5 rounded-md'>
  //                     Learn About Our Community Experts
  //                   </span>
  //                 </a>
  //               </div>
  //             </div>
  //             <div className='lg:w-1/2'>
  //               <div className='aspect-w-16 aspect-h-9 relative block w-full overflow-hidden lg:aspect-1'>
  //                 <span
  //                   style={{
  //                     boxSizing: 'border-box',
  //                     display: 'block',
  //                     overflow: 'hidden',
  //                     width: 'initial',
  //                     height: 'initial',
  //                     background: 'none',
  //                     opacity: 1,
  //                     border: 0,
  //                     margin: 0,
  //                     padding: 0,
  //                     position: 'absolute',
  //                     top: 0,
  //                     left: 0,
  //                     bottom: 0,
  //                     right: 0,
  //                   }}
  //                 >
  //                   <img
  //                     alt="view of two people's hands working at table on their computers."
  //                     src='https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=3840'
  //                     decoding='async'
  //                     data-nimg='fill'
  //                     className='h-full w-full rounded-lg shadow-md'
  //                     style={{
  //                       position: 'absolute',
  //                       top: 0,
  //                       left: 0,
  //                       bottom: 0,
  //                       right: 0,
  //                       boxSizing: 'border-box',
  //                       padding: 0,
  //                       border: 'none',
  //                       margin: 'auto',
  //                       display: 'block',
  //                       width: 0,
  //                       height: 0,
  //                       minWidth: '100%',
  //                       maxWidth: '100%',
  //                       minHeight: '100%',
  //                       maxHeight: '100%',
  //                       objectFit: 'cover',
  //                     }}
  //                     sizes='(max-width: 1023px) 50vw, 100vw'
  //                     srcSet='https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=48 48w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=64 64w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=82 82w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=96 96w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=110 110w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=128 128w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=140 140w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=256 256w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=384 384w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=640 640w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=750 750w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=828 828w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=1080 1080w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=1200 1200w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=1920 1920w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=2048 2048w, https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&fit=max&w=3840 3840w'
  //                   />
  //                   <noscript>
  //                     &lt;img alt="view of two people&amp;#x27;s hands working at table on their
  //                     computers." sizes="(max-width: 1023px) 50vw, 100vw"
  //                     srcSet="https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=48
  //                     48w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=64
  //                     64w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=82
  //                     82w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=96
  //                     96w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=110
  //                     110w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=128
  //                     128w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=140
  //                     140w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256
  //                     256w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384
  //                     384w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=640
  //                     640w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=750
  //                     750w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=828
  //                     828w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=1080
  //                     1080w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=1200
  //                     1200w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=1920
  //                     1920w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=2048
  //                     2048w,
  //                     https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=3840
  //                     3840w"
  //                     src="https://images.prismic.io/the-resource-key/49433b98-eae8-46c9-a176-be04b5ad55d0_working+at+table.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=3840"
  //                     decoding="async" data-nimg="fill"
  //                     style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"
  //                     class="h-full w-full rounded-lg shadow-md" loading="lazy"/&gt;
  //                   </noscript>
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     <section className='slice slice--has-background'>
  //       <div className='mx-auto w-full'>
  //         <div className='lg:px-8'>
  //           <div className='mx-auto w-full py-16 sm:py-20 px-6 sm:px-7 lg:px-8 max-w-7xl'>
  //             <div>
  //               <div className='text-4xl font-bold tracking-tight sm:text-5xl'>
  //                 <h1>Is Your Company Changing the Future?</h1>
  //               </div>
  //               <div className='mt-4 text-lg'>
  //                 <p>
  //                   We work with companies that want to continue being leaders and accelerate their
  //                   impact through inclusive impact branding that is authentic and aligned with
  //                   action.
  //                 </p>
  //               </div>
  //             </div>
  //             <div className='mt-8'>
  //               <a
  //                 className='group inline-flex h-min w-full items-center justify-center p-0.5 text-center font-medium duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg lg:w-fit shadow-sm hover:shadow text-white bg-primary-900 hover:bg-primary-700 disabled:hover:bg-primary-500 focus:ring-blue-500 dark:bg-accent-500 dark:text-black dark:hover:bg-accent-700'
  //                 href='/contact/'
  //               >
  //                 <span className='flex items-center text-base px-5 py-2.5 rounded-md'>
  //                   Get Started Today
  //                 </span>
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     <section className='slice slice--no-background'>
  //       <div className='mx-auto w-full px-6 sm:px-7 lg:px-8 max-w-7xl'>
  //         <div className='mb-7 text-center font-bold uppercase text-primary-700 dark:text-primary-300'>
  //           <h2>Working with The Community</h2>
  //         </div>
  //         <div className='grid grid-cols-1 gap-6 md:grid-cols-4'>
  //           <div className='inline-flex w-full items-center justify-center rounded-xl p-2 dark:bg-white'>
  //             <span
  //               style={{
  //                 boxSizing: 'border-box',
  //                 display: 'inline-block',
  //                 overflow: 'hidden',
  //                 width: 150,
  //                 height: 100,
  //                 background: 'none',
  //                 opacity: 1,
  //                 border: 0,
  //                 margin: 0,
  //                 padding: 0,
  //                 position: 'relative',
  //               }}
  //             >
  //               <img
  //                 alt='A dark teal circle, with a bright teal logo of the Valuable 500 inside it is shown. Around the circle black text reads ‘Working with The Valuable 500."'
  //                 src='https://images.prismic.io/the-resource-key/184538dd-410d-4550-9ac3-a231da13fec7_V500_BrandAssociation_WorkingWithV500_Badge_RGB_SOLID.png?auto=compress%2Cformat&fit=max&w=384'
  //                 decoding='async'
  //                 data-nimg='fixed'
  //                 style={{
  //                   position: 'absolute',
  //                   top: 0,
  //                   left: 0,
  //                   bottom: 0,
  //                   right: 0,
  //                   boxSizing: 'border-box',
  //                   padding: 0,
  //                   border: 'none',
  //                   margin: 'auto',
  //                   display: 'block',
  //                   width: 0,
  //                   height: 0,
  //                   minWidth: '100%',
  //                   maxWidth: '100%',
  //                   minHeight: '100%',
  //                   maxHeight: '100%',
  //                   objectFit: 'contain',
  //                 }}
  //                 srcSet='https://images.prismic.io/the-resource-key/184538dd-410d-4550-9ac3-a231da13fec7_V500_BrandAssociation_WorkingWithV500_Badge_RGB_SOLID.png?auto=compress%2Cformat&fit=max&w=256 1x, https://images.prismic.io/the-resource-key/184538dd-410d-4550-9ac3-a231da13fec7_V500_BrandAssociation_WorkingWithV500_Badge_RGB_SOLID.png?auto=compress%2Cformat&fit=max&w=384 2x'
  //               />
  //               <noscript>
  //                 &lt;img alt="A dark teal circle, with a bright teal logo of the Valuable 500
  //                 inside it is shown. Around the circle black text reads ‘Working with The Valuable
  //                 500.&amp;quot;"
  //                 srcSet="https://images.prismic.io/the-resource-key/184538dd-410d-4550-9ac3-a231da13fec7_V500_BrandAssociation_WorkingWithV500_Badge_RGB_SOLID.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256
  //                 1x,
  //                 https://images.prismic.io/the-resource-key/184538dd-410d-4550-9ac3-a231da13fec7_V500_BrandAssociation_WorkingWithV500_Badge_RGB_SOLID.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384
  //                 2x"
  //                 src="https://images.prismic.io/the-resource-key/184538dd-410d-4550-9ac3-a231da13fec7_V500_BrandAssociation_WorkingWithV500_Badge_RGB_SOLID.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384"
  //                 decoding="async" data-nimg="fixed"
  //                 style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain"
  //                 loading="lazy"/&gt;
  //               </noscript>
  //             </span>
  //           </div>
  //           <div className='inline-flex w-full items-center justify-center rounded-xl p-2 dark:bg-white'>
  //             <span
  //               style={{
  //                 boxSizing: 'border-box',
  //                 display: 'inline-block',
  //                 overflow: 'hidden',
  //                 width: 150,
  //                 height: 100,
  //                 background: 'none',
  //                 opacity: 1,
  //                 border: 0,
  //                 margin: 0,
  //                 padding: 0,
  //                 position: 'relative',
  //               }}
  //             >
  //               <img
  //                 alt='Arlington Chamber of Commerce logo'
  //                 src='https://images.prismic.io/the-resource-key/823c1ecc-e143-4700-8270-859965311f07_arlington+chamber+of+commerce.png?auto=compress%2Cformat&fit=max&w=384'
  //                 decoding='async'
  //                 data-nimg='fixed'
  //                 style={{
  //                   position: 'absolute',
  //                   top: 0,
  //                   left: 0,
  //                   bottom: 0,
  //                   right: 0,
  //                   boxSizing: 'border-box',
  //                   padding: 0,
  //                   border: 'none',
  //                   margin: 'auto',
  //                   display: 'block',
  //                   width: 0,
  //                   height: 0,
  //                   minWidth: '100%',
  //                   maxWidth: '100%',
  //                   minHeight: '100%',
  //                   maxHeight: '100%',
  //                   objectFit: 'contain',
  //                 }}
  //                 srcSet='https://images.prismic.io/the-resource-key/823c1ecc-e143-4700-8270-859965311f07_arlington+chamber+of+commerce.png?auto=compress%2Cformat&fit=max&w=256 1x, https://images.prismic.io/the-resource-key/823c1ecc-e143-4700-8270-859965311f07_arlington+chamber+of+commerce.png?auto=compress%2Cformat&fit=max&w=384 2x'
  //               />
  //               <noscript>
  //                 &lt;img alt="Arlington Chamber of Commerce logo"
  //                 srcSet="https://images.prismic.io/the-resource-key/823c1ecc-e143-4700-8270-859965311f07_arlington+chamber+of+commerce.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256
  //                 1x,
  //                 https://images.prismic.io/the-resource-key/823c1ecc-e143-4700-8270-859965311f07_arlington+chamber+of+commerce.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384
  //                 2x"
  //                 src="https://images.prismic.io/the-resource-key/823c1ecc-e143-4700-8270-859965311f07_arlington+chamber+of+commerce.png?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384"
  //                 decoding="async" data-nimg="fixed"
  //                 style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain"
  //                 loading="lazy"/&gt;
  //               </noscript>
  //             </span>
  //           </div>
  //           <div className='inline-flex w-full items-center justify-center rounded-xl p-2 dark:bg-white'>
  //             <span
  //               style={{
  //                 boxSizing: 'border-box',
  //                 display: 'inline-block',
  //                 overflow: 'hidden',
  //                 width: 150,
  //                 height: 100,
  //                 background: 'none',
  //                 opacity: 1,
  //                 border: 0,
  //                 margin: 0,
  //                 padding: 0,
  //                 position: 'relative',
  //               }}
  //             >
  //               <img
  //                 alt='IEEE logo'
  //                 src='https://images.prismic.io/the-resource-key/f2d99105-f7d0-4e0c-98d0-046d7f1cc8d8_IEEE+logo.jpeg?auto=compress%2Cformat&fit=max&w=384'
  //                 decoding='async'
  //                 data-nimg='fixed'
  //                 style={{
  //                   position: 'absolute',
  //                   top: 0,
  //                   left: 0,
  //                   bottom: 0,
  //                   right: 0,
  //                   boxSizing: 'border-box',
  //                   padding: 0,
  //                   border: 'none',
  //                   margin: 'auto',
  //                   display: 'block',
  //                   width: 0,
  //                   height: 0,
  //                   minWidth: '100%',
  //                   maxWidth: '100%',
  //                   minHeight: '100%',
  //                   maxHeight: '100%',
  //                   objectFit: 'contain',
  //                 }}
  //                 srcSet='https://images.prismic.io/the-resource-key/f2d99105-f7d0-4e0c-98d0-046d7f1cc8d8_IEEE+logo.jpeg?auto=compress%2Cformat&fit=max&w=256 1x, https://images.prismic.io/the-resource-key/f2d99105-f7d0-4e0c-98d0-046d7f1cc8d8_IEEE+logo.jpeg?auto=compress%2Cformat&fit=max&w=384 2x'
  //               />
  //               <noscript>
  //                 &lt;img alt="IEEE logo"
  //                 srcSet="https://images.prismic.io/the-resource-key/f2d99105-f7d0-4e0c-98d0-046d7f1cc8d8_IEEE+logo.jpeg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256
  //                 1x,
  //                 https://images.prismic.io/the-resource-key/f2d99105-f7d0-4e0c-98d0-046d7f1cc8d8_IEEE+logo.jpeg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384
  //                 2x"
  //                 src="https://images.prismic.io/the-resource-key/f2d99105-f7d0-4e0c-98d0-046d7f1cc8d8_IEEE+logo.jpeg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384"
  //                 decoding="async" data-nimg="fixed"
  //                 style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain"
  //                 loading="lazy"/&gt;
  //               </noscript>
  //             </span>
  //           </div>
  //           <div className='inline-flex w-full items-center justify-center rounded-xl p-2 dark:bg-white'>
  //             <span
  //               style={{
  //                 boxSizing: 'border-box',
  //                 display: 'inline-block',
  //                 overflow: 'hidden',
  //                 width: 150,
  //                 height: 100,
  //                 background: 'none',
  //                 opacity: 1,
  //                 border: 0,
  //                 margin: 0,
  //                 padding: 0,
  //                 position: 'relative',
  //               }}
  //             >
  //               <img
  //                 alt='Equity Army logo'
  //                 src='https://images.prismic.io/the-resource-key/2c628d25-914d-45ed-9fb0-66f141295171_equity+army.jpg?auto=compress%2Cformat&fit=max&w=384'
  //                 decoding='async'
  //                 data-nimg='fixed'
  //                 style={{
  //                   position: 'absolute',
  //                   top: 0,
  //                   left: 0,
  //                   bottom: 0,
  //                   right: 0,
  //                   boxSizing: 'border-box',
  //                   padding: 0,
  //                   border: 'none',
  //                   margin: 'auto',
  //                   display: 'block',
  //                   width: 0,
  //                   height: 0,
  //                   minWidth: '100%',
  //                   maxWidth: '100%',
  //                   minHeight: '100%',
  //                   maxHeight: '100%',
  //                   objectFit: 'contain',
  //                 }}
  //                 srcSet='https://images.prismic.io/the-resource-key/2c628d25-914d-45ed-9fb0-66f141295171_equity+army.jpg?auto=compress%2Cformat&fit=max&w=256 1x, https://images.prismic.io/the-resource-key/2c628d25-914d-45ed-9fb0-66f141295171_equity+army.jpg?auto=compress%2Cformat&fit=max&w=384 2x'
  //               />
  //               <noscript>
  //                 &lt;img alt="Equity Army logo"
  //                 srcSet="https://images.prismic.io/the-resource-key/2c628d25-914d-45ed-9fb0-66f141295171_equity+army.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256
  //                 1x,
  //                 https://images.prismic.io/the-resource-key/2c628d25-914d-45ed-9fb0-66f141295171_equity+army.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384
  //                 2x"
  //                 src="https://images.prismic.io/the-resource-key/2c628d25-914d-45ed-9fb0-66f141295171_equity+army.jpg?auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=384"
  //                 decoding="async" data-nimg="fixed"
  //                 style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain"
  //                 loading="lazy"/&gt;
  //               </noscript>
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </main>
  // )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('homepage')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}
