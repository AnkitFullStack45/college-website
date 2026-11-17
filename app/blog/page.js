"use client";

import { useState } from "react";
import Link from "next/link";
import "./blog.css";

const blogPosts = [
    // Add blog posts here later.
];

export default function BlogPage() {

    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = blogPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const recentPosts = [...blogPosts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

    return (
        <main className="blog-page">

            {/* BLOG HEADER */}
            <section className="blog-header">

                <h1>TEMPL Insights & Blogs</h1>

                <p>
                    Stay updated with the latest campus news, academic
                    insights, and student activities.
                </p>

                <span className="blog-heading-line"></span>

            </section>


            {/* BLOG LAYOUT */}
            <section className="blog-container">

                {/* BLOG POSTS SECTION */}
                <div className="blog-main">

                    {filteredPosts.length > 0 ? (

                        <div className="blog-grid">

                            {filteredPosts.map((post) => (

                                <article className="blog-card" key={post.id}>

                                    <Link href={post.href}>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="blog-image"
                                        />
                                    </Link>

                                    <div className="blog-card-content">

                                        <span className="blog-category">
                                            {post.category}
                                        </span>

                                        <h2>
                                            <Link href={post.href}>
                                                {post.title}
                                            </Link>
                                        </h2>

                                        <p>{post.excerpt}</p>

                                        <div className="blog-card-footer">
                                            <span>{post.date}</span>

                                            <Link href={post.href}>
                                                Read More →
                                            </Link>
                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    ) : (

                        <div className="blog-empty">

                            <div className="empty-blog-icon">
                                ☷
                            </div>

                            <p>
                                {searchTerm
                                    ? "No matching blog posts found."
                                    : "No blog posts found."}
                            </p>

                        </div>

                    )}

                </div>


                {/* SIDEBAR */}
                <aside className="blog-sidebar">

                    {/* SEARCH BLOG */}
                    <div className="blog-sidebar-card">

                        <h3>
                            <span>⌕</span>
                            Search Blog
                        </h3>

                        <div className="blog-search">

                            <input
                                type="search"
                                placeholder="Type keywords..."
                                value={searchTerm}
                                onChange={(e) =>
                                    setSearchTerm(e.target.value)
                                }
                            />

                            <span>⌕</span>

                        </div>

                    </div>


                    {/* RECENT POSTS */}
                    <div className="blog-sidebar-card">

                        <h3>
                            <span>▤</span>
                            Recent Posts
                        </h3>

                        {recentPosts.length > 0 ? (

                            <ul className="recent-post-list">

                                {recentPosts.map((post) => (

                                    <li key={post.id}>

                                        <Link href={post.href}>
                                            {post.title}
                                        </Link>

                                        <span>{post.date}</span>

                                    </li>

                                ))}

                            </ul>

                        ) : (

                            <p className="no-recent-posts">
                                No recent posts.
                            </p>

                        )}

                    </div>

                </aside>

            </section>

        </main>
    );
}