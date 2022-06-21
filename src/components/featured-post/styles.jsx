import styled from "styled-components";
export const Section = styled.section`
  color: #fff;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div.featured-post-container {
    color: #fff;
    display: flex;
    width: 80%;
    margin: 30px 0px;
    flex-direction: row;
    background: black;
    img.image-featured-post {
      width: 50vw;
      height: 60vh;
      object-fit: cover;
    }
  }
`;
