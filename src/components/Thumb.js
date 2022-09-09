import styled from "styled-components";
import { Link } from "react-router-dom";

const Thumb = ({ image, movieId, clickable }) => (
  <Wrap>
    {clickable ? (
      <Link to={`/detail/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </Wrap>
);

export default Thumb;

const Wrap = styled.article`
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.3);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.7);
  }
`;

const Image = styled.img`
  transition: all 0.3s;
  object-fit: cover;

  :hover {
    opacity: 0.8;
  }
`;
