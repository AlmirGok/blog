import React from "react";
import { Section } from "./styles";
import AuthorBadge from "../author-bagde";

export default function FeaturedPost({ post }) {
  return (
    <Section>
      <div className="featured-post-container">
        <div>
          <img
            className="image-featured-post"
            src={post?.hero?.data?.attributes?.formats?.medium?.url}
          />
        </div>
        <div>
          <p>{post.date}</p>
          <h2>{post.tile}</h2>
          <p>{post.description}</p>
          <AuthorBadge />
        </div>
      </div>
    </Section>
  );
}
