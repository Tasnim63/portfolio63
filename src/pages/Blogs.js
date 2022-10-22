import React from 'react'
import allBlogs from '../components/allBlogs'
export default function Blogs() {
  return (
    <div className='BlogsPage'
    >
      {
        allBlogs.map((blogs)=>{
          return <div className="blog">
            
          </div>
        })
      }
    </div>
  )
}
