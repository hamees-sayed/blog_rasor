import React from 'react'
import Header from "../components/Header"
import banner from "../images/banner.jpg"
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import logo from "../images/Rasor_logo_blog.png"

const Blogs = () => {
    return (
        <div>
            <Header />
            <div class="complete--blog">
                <div class="blog--page">
                    <p class="blog-heading">RaSor blog</p>
                    <img alt="blog banner" src={banner} />
                    <div class="blog--page--details">
                        <p class="blog--page--title">Lorem Ipsum</p>
                        <p class="blog--page--desc">Lorem ipsum dolor sit amet consectetur. Lobortis arcu interdum consectetur magna nec volutpat mattis tellus suspendisse. Libero cum nec netus nec sit eget fames.</p>
                        <div class="author--profile">
                            <img class="auth--pfp" src={logo} alt="logo" />
                            <div CLASS="nav--header--text">
                                <h2 class="auth-name">Author Name</h2>
                                <p class="auth-desc">Lorem Ipsum</p>  
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="blog--content"><ReactMarkdown remarkPlugins={[gfm]}>~asdasd~</ReactMarkdown></div>
            </div>
        </div>
    )
}

export default Blogs