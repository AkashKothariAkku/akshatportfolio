import Link from 'next/link'
import React from 'react'

export const AllBlogs = () => {
  return (
    <div className="row">
    <div className="col-lg-4 col-md-6">
        <div className="blog-item wow fadeInUp" data-wow-delay=".5s">
            <div className="blog-thumb">
                <Link href="blog-details.html">
                    <img src="/img/blog/1.jpg" alt=""/>
                </Link>
                <Link href="#" className="category">Tutorial</Link>
            </div>

            <div className="blog-content">
                <div className="blog-meta">
                    <ul className="ul-reset">
                        <li><i className="fa-light fa-calendar-days"></i> Oct 01, 2022</li>
                        <li><i className="fa-light fa-comments"></i> <Link href="#">Comment (0)</Link></li>
                    </ul>
                </div>
                <h3 className="blog-title"><Link href="blog-details.html">top 10 ui ux designers</Link></h3>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6">
        <div className="blog-item wow fadeInUp" data-wow-delay=".6s">
            <div className="blog-thumb">
                <Link href="blog-details.html">
                    <img src="/img/blog/2.jpg" alt=""/>
                </Link>
                <Link href="#" className="category">TIPS</Link>
            </div>
            <div className="blog-content">
                <div className="blog-meta">
                    <ul className="ul-reset">
                        <li><i className="fa-light fa-calendar-days"></i> Nov 01, 2022</li>
                        <li><i className="fa-light fa-comments"></i> <Link href="#">Comment (0)</Link></li>
                    </ul>
                </div>
                <h3 className="blog-title"><Link href="blog-details.html">App Development Guides</Link></h3>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6">
        <div className="blog-item wow fadeInUp" data-wow-delay=".7s">
            <div className="blog-thumb">
                <Link href="blog-details.html">
                    <img src="/img/blog/3.jpg" alt=""/>
                </Link>
                <Link href="#" className="category">FREEBIES</Link>
            </div>
            <div className="blog-content">
                <div className="blog-meta">
                    <ul className="ul-reset">
                        <li><i className="fa-light fa-calendar-days"></i> Dec 01, 2022</li>
                        <li><i className="fa-light fa-comments"></i> <Link href="#">Comment (0)</Link></li>
                    </ul>
                </div>
                <h3 className="blog-title"><Link href="blog-details.html">learn graphic design free</Link></h3>
            </div>
        </div>
    </div>
</div>
  )
}
