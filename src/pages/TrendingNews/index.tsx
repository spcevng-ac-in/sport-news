import { Suspense, useEffect } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import TrendingNewsList from "./TrendingNewsList";
import { useSportDispatch, useSportState } from "../../context/sports/context";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Sport } from "../../context/sports/type";
import { fetchSports } from "../../context/sports/action";


const TrendingNews = () => {
  // let currentSport = 'ALL';
  // const sportsDispatch = useSportDispatch();
  // // console.log("Sport Dispatch:", sportsDispatch);
  // // fetchSports(sportsDispatch);
 
  // useEffect(() => {
  //   fetchSports(sportsDispatch);
  // }, []);
  // let sportState: any = useSportState();
  // const { sports, isLoading, isError, errorMessage } = sportState;
  // console.log("Sports:", sports, isLoading, isError, errorMessage);
  // for(let i=0; i<sports.length;i++){
  //   console.log("Element:", sports[i]);
  // };
  // if (sports.length === 0 && isLoading) {
  //   return <span>Sports News Loading...</span>;
  // }

  // if (isError) {
  //   return <span>Sports News Item Page -{errorMessage}</span>;
  // }

  return (
    <>
      <div className="flex justify-start p-2">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Trending News
        </h2>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          {/* <TrendingNewsList /> */}

          <TrendingNews/>
       
    </Suspense >
      </ErrorBoundary >
    </>
  );
};


export default TrendingNews;