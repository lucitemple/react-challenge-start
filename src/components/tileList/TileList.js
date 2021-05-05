import React from "react";
import { Tile } from '../tile/Tile';

// This components receive from appointments and contacts 
export const TileList = ({array}) => {
  
  return (
    <div>
      {array.map( (info, index) => <Tile info={info} key={index}/>)}
    </div>
  );
};