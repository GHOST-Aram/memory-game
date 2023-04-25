import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray py-8 text-center'>
        <h4 className="font-light text-sky-blue">Copyright &copy; {new Date().getFullYear()}</h4>
    </footer>
  )
}

export default Footer