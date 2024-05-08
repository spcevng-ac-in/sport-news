import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import FavoritesList from "./FavoritesList";
import Dropdown from "./DropDown";


const Favorites = () => {
  return (
    <>
      <div className="flex justify-start p-2">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Favorites
        </h2>
        </div>
        <ErrorBoundary>
          <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
            <Dropdown options={[
    {label: '1 High Street', labelValue: '1 High Street'},
    {label: '2 Church street', labelValue: '2 Church street'},
    {label: '40 London Road', labelValue: '40 London Road'}
    ]}/>
              <FavoritesList />
            
          </Suspense>
        </ErrorBoundary>
    </>
  );
};


export default Favorites;