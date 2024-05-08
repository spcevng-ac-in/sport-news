import React from "react";
import TrendingNewsItems from "./TrendingNewsItems";
import TrendingNews from "./TrendingNews";

const TrendingNewsList: React.FC = () => {
  return (
    <div className="justify-start mt-5 w-full">
       <div className="flex justify-between items-center " >
        {/* <TrendingNewsItems /> */}
        <TrendingNews />
       </div>
      
    </div>
  );
};

export default TrendingNewsList;