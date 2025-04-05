import React from "react";

const BlogDetailsSection = ({ blog }) => {
  if (!blog) return <p>Blog not found</p>;

  return (
    <section className="blogDetails-details-section">
      <div className="blogDetails-container">
        <h1
          className="blogDetails-title"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {blog.title}
        </h1>

        <div className="blogDetails-meta">
          <span
            className="blogDetails-author"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            By {blog.author}
          </span>
          <span
            className="blogDetails-date"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {blog.date}
          </span>
          <span
            className="blogDetails-tag"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {blog.tag}
          </span>
          <span
            className="blogDetails-reading-time"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {blog.readingTime}
          </span>
        </div>

        <div
          className="blogDetails-image-wrapper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="blogDetails-image"
          />
        </div>

        <p
          className="blogDetails-description"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {blog.description}
        </p>

        <div
          className="blogDetails-content"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{blog.content}</p>
        </div>
        <div
          className="blogDetails-content"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{blog.content}</p>
        </div>
        <div
          className="blogDetails-content"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{blog.content}</p>
        </div>
        <div
          className="blogDetails-content"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>{blog.content}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsSection;
