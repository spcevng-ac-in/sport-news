import React from "react";
import MatchListItems from "./MatchListItems";

const MatchList: React.FC = () => {
  return (
    <div className="justify-start mt-5 w-full">
       <div className="flex items-center overflow-auto" >
       <MatchListItems />
       </div>
      
    </div>
  );
};

export default MatchList;