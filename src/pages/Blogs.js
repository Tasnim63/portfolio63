import React from 'react'
import allBlogs from '../components/allBlogs'
import Tittle from '../components/Tittle'
export default function Blogs() {
  return (
    <div className='BlogsPage'
    >
      <Tittle title={'My Blogs'} span={'My Blogs'}></Tittle>
      {
        allBlogs.map((blog)=>{
          return <div className="blog" key={blog.id}>
              <div className="blog-content">
            <img src={blog.image} alt="" />
                <a href={blog.link} className="blog-link">{blog.title}</a>
               
              </div>
          </div>
        })
      }
    </div>
  )
}
