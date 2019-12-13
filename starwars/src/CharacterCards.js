import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';

const CharacterCards = (props) => {
    const [swData, setSwData] = useState();
    function getTheData (pageNumber){
      axios.get(`https://swapi.co/api/people/?page=${pageNumber}`)
        .then(resp => {
          setSwData(resp.data);
          // console.log(resp);
        })
        .catch(err => {
          console.log(err);
        });      
    }
    useEffect(() => {
        setSwData(getTheData(1));
    }, []);

    if (swData === undefined) {
        return <></>
    }
    // console.log('in here');
    console.log(swData);
    return (
        <div className = 'characterCards'>
            {
                swData.results.map(e => (<CharacterCard myCharacter = {e} />))
            }
        </div>
    );
};
export default CharacterCards; 
