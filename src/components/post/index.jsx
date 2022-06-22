import React from "react";
import { Section } from "./styles";

export default function Post({ post }) {
  return (
    <Section>
      <div className="featured-post-container">
        <div>
          <img
            alt=""
            className="image-featured-post"
            src={post?.hero?.data?.attributes?.formats?.medium?.url}
          />
        </div>
        <div>
          <p>{post.date}</p>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      </div>
    </Section>
  );
}
