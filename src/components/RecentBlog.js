import React from "react";
import data from '../test-data'
import RecentBlogCard from "./RecentBlogCard";

const RecentBlog = () => {
    const cards = data.map(item => {
        return (
            <RecentBlogCard
                key={item.id}
                {...item}
                
            />
          )
        })
    return (
        <div class="hero--section">
            <div class="hero-text-des">
                <div class="hor-line"></div>
                <h2 class="hero-text">Recent Blogs</h2>
                <div class="hor-line"></div>
            </div>
            <section class="cards-list">{cards}</section>
        </div>
    )
};
  
export default RecentBlog;