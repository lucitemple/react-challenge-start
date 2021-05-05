import React from "react";
import { Tile } from '../tile/Tile';


export const TileList = ({contactArr}) => {
  
  return (
    <div>
      {contactArr.map( (info, index) => <Tile info={info} key={index}/>)}
    </div>
  );
};