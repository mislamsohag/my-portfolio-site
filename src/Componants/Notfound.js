import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='text-center mx-20'>
      <div className='row vh-50 my-5'>
        <div className='col-sm-12 col-md6 col-lg-4 g-3'>
          <h1 className='text-red-600 text-5xl font-bold'>
            Error 404
          </h1>
          <h1 className=''>
            Ooops! You weren't supposed to de this looking for isn't here.
          </h1>
          <p className=''>
            the page you're looking for no longer exists. Return to the home page and remember: you haven't see any things
          </p>
          <div className='flex justify-evenly m-3'>
            <Link
              to='/'
              className='btn btn-info text-black '
            >
              Back to homepage
            </Link>
            <Link
              to='/contact'
              className=' btn btn-secondary text-white px-5'
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className='col-sm-12 col-md6 col-lg-8'>

          <img className='img-fluid rounded mx-auto'
            src='https://i.ibb.co/c6ww58q/404-image.jpg'
            alt=''
          />

        </div>
      </div>
    </section>
  )
}

export default NotFound
