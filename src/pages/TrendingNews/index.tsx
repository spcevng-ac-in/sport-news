import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import TrendingNewsList from "./TrendingNewsList";


const TrendingNews = () => {


  return (
    <>
      <div className="justify-start p-2">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Trending News
        </h2>
        <ErrorBoundary>
          <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
            <TrendingNewsList />

            {/* <TrendingNews/> */}

          </Suspense >
        </ErrorBoundary >
      </div>

    </>
  );
};


export default TrendingNews;