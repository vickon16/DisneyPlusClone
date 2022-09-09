/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect} from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { useDispatch, useSelector} from "react-redux";
import {getMovies} from "../features/movie/movieSlice";
import Loader from "./Loader";
import Error from "./Error";
import { setUserState } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const Home = () => {
  const {page, sliderImages, searchText, isLoading, errMsg} = useSelector(store => store.movie);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMovies([page, searchText]));
  }, [page, searchText]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.displayName) {
        const { displayName, email, photoURL } = user;
        dispatch(setUserState({ displayName, email, photoURL }));
      } else {
        navigate("/login");
      }
    });
  }, []);

  return (
    <Container>
      {sliderImages.length !== 0 && <ImageSlider />}
      <Viewers />

      {isLoading ? (
        <Loader />
      ) : errMsg ? (
        <Error message={errMsg} />
      ) : (
        <Movies />
      )}
    </Container>
  );
};

export default Home;

const Container = styled.section`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url("/images/home-background.png") center / cover no-repeat fixed;
    z-index: -2;
    opacity: 0.5;
  }
`;


