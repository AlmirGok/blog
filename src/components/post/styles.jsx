import styled from "styled-components";
export const Section = styled.section`
  color: #fff;
  display: flex;
  width: 40vw;
  margin: 30px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div.featured-post-container {
    color: #fff;
    display: flex;
    width: 40vw;
    flex-direction: column;
    background: black;
    div {
      width: 100%;
    }
    img.image-featured-post {
      width: 100%;
      height: 33vh;
      object-fit: cover;
    }
  }
`;
