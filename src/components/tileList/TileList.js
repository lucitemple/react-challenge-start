import React from "react";
import { Tile } from '../tile/Tile';


export const TileList = ({contactArray}) => {
  
  return (
    <div>
      {contactArray.map( (info, index) => <Tile info={info} key={index}/>)}
    </div>
  );
};