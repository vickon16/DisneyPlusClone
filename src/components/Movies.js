import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Thumb from "./Thumb";
import { FcPrevious, FcNext } from "react-icons/fc";
import { Flex } from "../globalFunctions";
import { getSearchText, nextPage, prevPage, resetPage } from "../features/movie/movieSlice";
import { useState } from "react";

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { movies, searchText, page } = useSelector((store) => store.movie);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <MoviesHeader>
        <h4>
          {searchText ? `Search for '${searchText}'` : "Recommended for you"}
        </h4>
        <InputGroup>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Movie..."
          />
          <button
            onClick={() => {
              dispatch(getSearchText(searchTerm));
              setSearchTerm("");
            }}>
            Go
          </button>
        </InputGroup>
      </MoviesHeader>

      {movies.length === 0 ? (
        <>
          <h2>No results.</h2>
          <Refresh onClick={() => dispatch(resetPage())}>Refresh</Refresh>
        </>
      ) : (
        <>
          <Content>
            {movies?.map((movie) => (
              <Thumb
                key={movie.id}
                clickable={movie.poster_path ? true : false}
                image={
                  movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : "/images/no_image.jpg"
                }
                alt={`${movie.title}`}
                movieId={movie.id}
              />
            ))}
          </Content>
          <Buttons onClick={handleScroll}>
            {page > 1 && (
              <PreviousBtn onClick={() => dispatch(prevPage())}>
                <FcPrevious />
                <span>Prev</span>
              </PreviousBtn>
            )}
            <NextBtn onClick={() => dispatch(nextPage())}>
              <span>Next</span>
              <FcNext />
            </NextBtn>
          </Buttons>
        </>
      )}
    </Container>
  );
};

export default Movies;

const Container = styled.section`
  padding: 0 min(1.2rem, 3%);

  h2 {
    text-align: center;
    margin: 2rem auto;
  }

  h4 {
    font-size: clamp(0.95rem, 1.2vw, 1.2rem);
  }
`;

const MoviesHeader = styled.article`
  width: 100%;
  ${Flex("space-between")};
  padding: 1.5rem;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    ${Flex("", "column-reverse")};
    gap: 2rem;
  } ;
`;

const InputGroup = styled.div`
  display: flex;
  width: min(100%, 400px);

  input {
    width: 100%;
    background: transparent;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 5px;
    padding: 0.6rem;
    font-size: 1rem;
    color: inherit;
    outline: none;

    &:focus {
      border-color: rgba(249, 249, 249, 0.35);
    }
  }

  button {
    font-size: 1rem;
    padding: 0 0.4rem;
    border-radius: 4px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  place-items: center;
  padding: 30px;
`;

const Buttons = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: fit-content;
  margin: 2rem auto;
  ${Flex("space-between")};
  gap: 0.5rem;
  padding: 0.5rem 1rem;

  @media screen and (max-width: 425px) {
    padding: 0.3rem;
    gap: 0;
  } ;
`;

const Refresh = styled(Buttons)`
  border: 3px solid rgba(249, 249, 249, 0.2);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border-color: rgba(249, 249, 249, 0.4);
  }
`;

const PreviousBtn = styled.button`
  ${Flex()}
  gap: .3rem;
  background-color: transparent;
  padding: 0.6rem 1rem;
  font-size: clamp(1rem, 1.3vw, 1.3rem);
  color: inherit;
  border-radius: 5px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const NextBtn = styled(PreviousBtn)``;
