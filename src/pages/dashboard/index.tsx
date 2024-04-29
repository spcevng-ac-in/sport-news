import React, { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import LiveGames from "../LiveGames";
// const ProjectList = React.lazy(() => import("./ProjectList"));
// import NewProject from "./NewProject";

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