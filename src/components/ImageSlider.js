import { useSelector } from "react-redux";
import Slider from "react-slick/lib/slider";
import styled from "styled-components";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

function ImageSlider() {
  const {sliderImages} = useSelector(store => store.movie);

  return (
    <Caraousel {...settings}>
      {sliderImages.map((image, index) => (
        <Wrap key={`${index}_image`}>
          <img
            src={image ? 
                IMAGE_BASE_URL + BACKDROP_SIZE + image
                : "/images/no_image.jpg"}
            alt={`${index}_img`}
          />
        </Wrap>
      ))}
    </Caraousel>
  );
}

export default ImageSlider;

const Caraousel = styled(Slider)`
  width: 100%;
  height: 500px;

  ul li button {
    &::before {
      font-size: 10px;
      color: rgba(150, 158, 171);
    }
  }

  .slick-prev {
    left: -10px;
  }
  .slick-next {
    right: -10px;
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div {
    height: 100%;
  }

  button {
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    height: 400px;
  } ;
`;

const Wrap = styled.div`
  cursor: pointer;
  height: 100%;

  img {
    border-radius: 6px;
    border: 4px solid transparent;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: .3s ease-in-out;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.3);
    }
  }
`;
