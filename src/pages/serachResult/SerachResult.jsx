import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movieCart/MovieCard";
import "./SerachResult.scss";
const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(true); // Initially set loading to true
  const { query } = useParams();

  const fetchInitialData = async () => {
    try {
      setLoading(true); // Set loading state to true while fetching data
      const res = await fetchDataFromApi(
        `/search/multi?query=${query}&page=${pageNum}`
      );
      setData(res);
      setPageNum((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching initial data:", error);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const fetchNextPageData = async () => {
    try {
      const res = await fetchDataFromApi(
        `/search/multi?query=${query}&page=${pageNum}`
      );
      if (data?.results) {
        setData((prevData) => ({
          ...prevData,
          results: [...prevData.results, ...res.results],
        }));
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching next page data:", error);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper >
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data.results.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data.total_pages}
                loader={<Spinner/>}
              >
                {data.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry, Results Not Found!</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
