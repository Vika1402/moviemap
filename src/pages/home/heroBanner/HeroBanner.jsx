import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Img from "../../../components/lazyLoadImage/Img";
import "./HeroBanner.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const HeroBanner = () => {
  const [query, setQuery] = useState("");
  const [background, setBackground] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)].backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (events) => {
    if (events.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opecityLayer"></div>
      <ContentWrapper>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              million of movies, Tv shows and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <input className="input"
                type="text"
                placeholder="Search for movie or tv show...."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
