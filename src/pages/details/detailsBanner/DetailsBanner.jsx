import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./DetailsBanner.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/Img"; // Changed import
import PosterFallback from "../../../assets/no-poster.png";

const DetailsBanner = ({ video, crew }) => {
  const { mediaType,id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { url } = useSelector((state) => state.home);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {data && (
            <React.Fragment>
            <div className="backdrop-img">
              <Img src={url.backdrop + data?.backdrop_path} />
            </div>
            <div className="opacity-layer">
             
            </div>
            <ContentWrapper>
                <div className="content">
                  <div className="left">
                  {data.poster_path ? (
                    <Img className="posterImg"
                      src={url.backdrop+data.poster_path}
                    />
                  ) :(<Img className="posterImg"
                      src={url.backdrop+data.PosterFallback}
                    />)}

                  </div>
                  <div className="right">
                  <div className="title">
                    {`${data.name || data.title} (${dayjs(data?.release_date).format("YYYY")})`}
                  </div>

                  </div>
                </div>
                </ContentWrapper>
            </React.Fragment>
           
            
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
