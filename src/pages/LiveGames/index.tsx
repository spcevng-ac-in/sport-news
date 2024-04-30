import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import MatchList from "./MatchList";

const LiveGames = () => {
  return (
    <>
      <div className="flex justify-start p-2">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Live Games
        </h2>
        </div>
        <ErrorBoundary>
          <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
            
              <MatchList />
            
          </Suspense>
        </ErrorBoundary>
    </>
  );
};


export default LiveGames;