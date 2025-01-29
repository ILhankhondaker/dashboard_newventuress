import React from 'react'
import CategoryList from './_components/CategoryList'
import CategoryFilter from './_components/category-filter'

const page = () => {
  return (
    <div className='space-y-5'>
        <CategoryFilter />

<CategoryList/>
    </div>
  )
}

export default page