import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import FavoritesList from "./FavoritesList";
import Dropdown from "./DropDown";
import { useSportState } from "../../context/sports/context";


const Favorites = () => {
  let sportState: any = useSportState();
  const { sports, isLoading, isError, errorMessage } = sportState;
  console.log("Sports:", sports, isLoading, isError, errorMessage);
  console.log("Sport Length:", sports.length);

  if (sports.length === 0 && isLoading) {
    return <span>Sports News Loading...</span>;
  }

  if (sports.length === 0) {
    return <span>Wait Sports News Loading...</span>;
  }

  if (isError) {
    return <span>Sports News Item Page -{errorMessage}</span>;
  }

  console.log("Sport Items:", (sports));


  return (
    <>
      <div className="border-2">
        <div className="flex justify-start p-2">
          <h2 className="text-2xl font-medium tracking-tight text-slate-700">
            Favorites
          </h2>
        </div>
        <ErrorBoundary>
          <Suspense fallback={<div className="suspense-loading">Loading...</div>}>

            <div className="m-2">
            <Dropdown options={sports} placeHolder="Select Sport" labelName="My Favorite Sport"
            />
            </div>
            
            <FavoritesList />

          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};


export default Favorites;