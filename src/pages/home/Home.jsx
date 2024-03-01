
import HeroBanner from "./heroBanner/HeroBanner"
import Popular from "./popular/Popular"
import Toprated from "./topRated/Toprated"
import Trending from "./trending/Trending"

const home = () => {
  return (
    <div className='homePage'>
   
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <Toprated/>
    
      <div style={{height:100}}></div>
    </div>
  )
}

export default home;