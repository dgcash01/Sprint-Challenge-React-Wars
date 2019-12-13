import React, { useState, useEffect } from "react";

const CharacterCard = (props) => {
    return (
        <div className = 'characterCard'>
        <div className = 'charName'>{props.myCharacter.name}</div>
        <div className = 'birthYear'>{props.myCharacter.birth_year}</div>
        <div className = 'ceyeColor'>{props.myCharacter.eye_color}</div>
        <div className = 'gender'>{props.myCharacter.gender}</div>
        <div className = 'hairColor'>{props.myCharacter.hair_color}</div>
        <div className = 'height'>{props.myCharacter.height}</div>
        {/* <div>{swData.homeworld}</div> */}
        <div className = 'mass'>{props.myCharacter.mass}</div>
        <div className = 'skinColor'>{props.myCharacter.skin_color}</div>
        {/* <div className = 'species'>{props.myCharacter.species}</div> */}
        {/* <div>{props.myCharacter.starships}</div> */}
        </div>
    );
};
export default CharacterCard; 