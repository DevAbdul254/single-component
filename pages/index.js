 import Head from 'next/head'

export default function Home() {
  return (
    <div className='px-8 mt-10'>
      <Head>
        <title>Article Preview Component</title >
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <div className='mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto'>
        <img className='rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-4/5 lg:rounded-bl-md lg:rounded-tr-none' src='/images/drawers.jpg'/>
        <div className='bg-white p-8 rounded-br-md rounded-bl-md lg:rounded-bl-none lg:rounded-tr-md'>
          <h2 className='text-gray-700 font-semibold'>Shift overall look and fell by adding these wonderful touches to furniture in your homes</h2>
          <p className='text-sm  text-gray-600 mt-4'>Ever been in a room and felt like something was missing? Perhaps it felt like slightly bare and uninviting.I've got some tips to help you make any room feel complete.</p>
          <div className='flex items-center  mt-8'>
            <div className='flex items-center'>
              <img className='h-10 w-10 rounded-full ' src='/images/avatar-michelle.jpg' alt=""/>
              <div className='ml-4'>
                <p className='text-gray-800 text-sm font-semibold'>Michelle Appleton</p>
                <p className='text-gray-600 text-sm'>28 Jun 2020</p>
              </div>
            </div>
            <div className='w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center'>
             <img src='/images/icon-share.svg' alt=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
