/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import { Flex } from "../globalFunctions";
import { getSingleMovie} from "../features/movie/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {singleMovie} = useSelector(store => store.movie)

  useEffect(() => {
    dispatch(getSingleMovie(id))
  }, []);

  return (
    <Container>
      <Background>
        <img
          src={
            singleMovie?.backdrop_path
              ? IMAGE_BASE_URL + BACKDROP_SIZE + singleMovie.backdrop_path
              : IMAGE_BASE_URL + BACKDROP_SIZE + singleMovie.poster_path
          }
          alt="background-img"
        />
      </Background>
      <ImageTitle>
        <img src="/images/cta-logo-one.svg" alt="title" />
        <h1>{singleMovie?.title}</h1>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="control1" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="control2" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="control3" />
        </GroupWatchButton>
      </Controls>

      <Subtitle>{singleMovie?.tagline}</Subtitle>
      <Description>{singleMovie?.overview}</Description>
    </Container>
  );
};

export default Detail;

const Container = styled.section`
  padding: 30px 20px;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.6;
`;

const ImageTitle = styled.div`
  width: min(90%, 500px);
  height: min(90%, 500px);
  margin: 30px 0;

  img {
    object-fit: contain;
  }

  h1 {
    letter-spacing: 1.5px;
    font-size: clamp(1.2rem, 2.4vw, 2.4rem);
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    width: fit-content;
    padding: .5rem;
  }
`;

const Controls = styled.div`
  ${Flex()};
  flex-wrap: wrap;
  gap: 20px;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  ${Flex()};
  background-color: rgb(249, 249, 249);
  padding: 0.3rem min(1rem, 2vw);
  text-transform: uppercase;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    color: rgb(0, 0, 0);
  }
`;
const AddButton = styled.button`
  width: 40px;
  height: 40px;
  ${Flex("center")};
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid white;

  span {
    font-size: 2rem;
    color: white;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
const GroupWatchButton = styled(AddButton)``;

const Subtitle = styled.div`
  font-size: clamp(0.8rem, 1.1vw, 1rem);
  color: rgb(249, 249, 249);
  min-height: 20px;
  margin: 26px 0;
`;

const Description = styled.div`
  width: min(100%, 1000px);
  line-height: 1.4;
  font-size: clamp(1rem, 1.4vw, 1.3rem);
  color: rgb(249, 249, 249);
`;
