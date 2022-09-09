import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "../globalFunctions";
import {setSignOut, setUserState} from "../features/user/userSlice";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase-config";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { displayName, photoURL } = useSelector((store) => store.user);

  const signUserIn = () => {
    signInWithPopup(auth, provider).then((result) => {
    const {displayName, email, photoURL} = result.user;
    dispatch(setUserState({displayName,email,photoURL}));
    navigate("/");
  });
  }

  const signUserOut = () => {
    signOut(auth).then(() => {
      dispatch(setSignOut());
    });
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src="/images/logo.svg" alt="disney Logo" />
      </Link>

      {displayName ? (
        <>
          <NavMenu>
            <Link to="/">
              <img src="/images/home-icon.svg" alt="home-icon" />
              <span>Home</span>
            </Link>
            <Link to="/">
              <img src="/images/search-icon.svg" alt="home-icon" />
              <span>Search</span>
            </Link>
            <Link to="/">
              <img src="/images/watchlist-icon.svg" alt="home-icon" />
              <span>Watchlist</span>
            </Link>
            <Link to="/">
              <img src="/images/original-icon.svg" alt="home-icon" />
              <span>Originals</span>
            </Link>
            <Link to="/">
              <img src="/images/movie-icon.svg" alt="home-icon" />
              <span>Movies</span>
            </Link>
            <Link to="/">
              <img src="/images/series-icon.svg" alt="home-icon" />
              <span>Series</span>
            </Link>
          </NavMenu>

          <User>
            <img src={photoURL || "/images/john-doe.png"} alt="user-img" />
            <button onClick={signUserOut}>Logout</button>
          </User>
        </>
      ) : (
        <LoginBtn to="/login" onClick={signUserIn}>
          Login
        </LoginBtn>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  min-height: 70px;
  background-color: #090b13;
  ${Flex("space-between")};
  gap: 1rem;
  padding: 8px 35px;
  position: fixed;
  width: min(100%, 1750px);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;

  @media screen and (max-width: 425px) {
    padding: 10px;
  } ;
`;

const Logo = styled.img`
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 120px;
  } ;
`;

const NavMenu = styled.nav`
  ${Flex("center")};
  flex: 1;
  gap: 1.5rem;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease-in-out;

  a {
    ${Flex()};
    color: inherit;
    text-transform: uppercase;
    position: relative;
    padding: 0.3rem;

    img {
      max-width: 25px;
    }
    span {
      font-size: clamp(0.85rem, 1vw, 1.1rem);
    }

    &::after {
      content: "";
      height: 2px;
      background-color: var(--white);
      width: 0%;
      position: absolute;
      bottom: 0;
      opacity: 0;
    }

    &:hover::after {
      width: 100%;
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

const User = styled.div`
  width: fit-content;
  position: relative;
  transition: 0.3s ease-in-out;

  button {
    position: absolute;
    bottom: -120%;
    left: 50%;
    transform: translate(-50%);
    padding: 0.3rem 0.6rem;
    font-size: clamp(0.95rem, 1.2vw, 1.2rem);
    border-radius: 5px;
    visibility: hidden;
    opacity: 0;

    &:hover {
      background-color: transparent;
      border: 3px solid rgba(249, 249, 249, 0.3);
      color: white;
    }
  }

  img {
    width: 48px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
  }

  &:hover button {
    visibility: visible;
    opacity: 1;
  }
`;

const LoginBtn = styled.button`
  background-color: transparent;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 3px solid rgba(249, 249, 249, 0.35);
  text-transform: uppercase;
  font-size: .9rem;

  &:hover {
    border-color: rgba(249, 249, 249, 0.5);
  }

  @media screen and (max-width : 768px) {
    padding: .4rem .6rem;
    font-size: .8rem;
  };
`;
