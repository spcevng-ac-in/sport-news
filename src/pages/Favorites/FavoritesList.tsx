import React, { useState } from "react";
import FavoritesItems from "./FavoritesItems";


const FavoritesList: React.FC = () => {
    const [sport, setSport] = useState();
    const [team, setTeam] = useState();

  return (
    <div className="justify-start mt-5 w-full">
       <div className="flex justify-between items-center overflow-auto" >
       {/* <FavoritesItems /> */}
       </div>
      
    </div>
  );
};

export default FavoritesList;