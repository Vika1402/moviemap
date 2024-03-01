import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import useFetch from "../../hooks/useFetch";
import Cast from "./cast/Cast";
import VideosSection from "./videoFetch/VideoFetch";
import Similar from "../../components/caousels/Similar";
import Recommendation from "../../components/caousels/Recommendation";
const Details = () => {
  const { mediaType, id } = useParams(); // Correct usage of useParams
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    
    
      
    </div>
  );
};

export default Details;
