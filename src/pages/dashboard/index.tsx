import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import LiveGames from "../LiveGames";

const Dashboard = () => {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
            <LiveGames />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};


export default Dashboard;