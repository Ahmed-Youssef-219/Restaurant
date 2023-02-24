import React from 'react'

const DishCard = ({image, name, description, price}) => {
  return (
    <div className='dark:bg-white bg-slate-800 dark:text-slate-800 text-white w-80 h-fit rounded-lg mb-10 mx-auto shadow-xl'>
      <img className='w-full h-60 rounded-lg' src={image} alt={name} />
      <h1 className='text-2xl px-3 py-2'>{name}</h1>
      <p className='text-md text-gray-400 dark:text-gray-600 px-3'>{description}</p>
      <div className='px-3 flex items-center justify-between py-3'>
        <button className='dark:bg-slate-800 bg-white text-slate-800 dark:text-white py-2 px-5 rounded-lg hover:scale-90'>Ordre Now</button>
        <p className='mr-6 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white p-2 shadow-2xl'>{price}$</p>
      </div>
    </div>
  )
}

export default DishCard
