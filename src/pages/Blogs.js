import React from 'react'
import allBlogs from '../components/allBlogs'
export default function Blogs() {
  return (
    <div className='BlogsPage'
    >
      {
        allBlogs.map((blog)=>{
          return <div className="blog" key={blog.id}>
              <div className="blog-content">
               <div className="blog-image">
               <img src={blog.image} alt="" />
               </div>
                <a href={blog.link} className="blog-link">{blog.title}</a>
               
              </div>
          </div>
        })
      }
    </div>
  )
}
