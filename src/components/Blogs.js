import React from 'react'
import BlogList from './BlogList'
import data from "../test-data"

const Blogs = () => {
    const blogList = data.map(item => {
        return (
            <BlogList
                key={item.id}
                {...item}
                
            />
          )
        })
    return (
        <div class="blog-section">
            <div class="blog-text-des">
                <div class="blog-hor-line-l"></div>
                <h2 class="blog-list-text">RaSoR Blogs</h2>
                <div class="blog-hor-line-r"></div>
            </div>
            <section class="blog-list">{blogList}</section>
        </div>
    )
}

export default Blogs