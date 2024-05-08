import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import TrendingNews from "../TrendingNews";
import LiveGames from "../LiveGames";

import Favorites from "../Favorites";


const Dashboard = () => {
  
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <div>
            <LiveGames />
            </div>
            <div className="flex">
            <div className="flex-left">
            <TrendingNews />
            </div>
            <div className="flex-right w-1/4">
            <Favorites />
            </div>
            </div>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};


export default Dashboard;