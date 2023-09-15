import React from 'react'
import banner from "../images/banner.jpg"

const RecentBlogCard = (props) => {
    return (
        <div class="blog-card">
            <img class="blog-banner" alt="blog-banner" src={banner} />
            <div class="blog-details">
                <p class="title blog-text">{props.title}</p>
                <p class="content blog-text">{props.content}</p>
                <p class="date blog-text">{props.day}, {props.month}, {props.year}</p>
            </div>
        </div>
    )
}

export default RecentBlogCard