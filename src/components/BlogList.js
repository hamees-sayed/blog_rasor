import React from "react";
import banner from "../images/banner.jpg"

const BlogList = (props) => {
    return (
        <div class="blog--list">
            <img alt="blog banner" src={banner} />
            <div class="blog--details">
                <p class="blog--title">Lorem Ipsum</p>
                <p class="blog--desc">Lorem ipsum dolor sit amet consectetur. Lobortis arcu interdum consectetur magna nec volutpat mattis tellus suspendisse. Libero cum nec netus nec sit eget fames.</p>
            </div>
        </div>
    )
}

export default BlogList