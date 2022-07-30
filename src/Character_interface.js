
import React from "react";
import setState from "react"
import character from "./js_classes/character";
import StatsFiller from "./statFiller";
export default function Character_interface(props){
    
   let  {name,age,luck,health,acuracy,sternth, farm_skills, inteligance} = props.character.data()
    return <>
    <table>
        <tr>
            <td>name</td>
            <td>{name}</td>
        </tr>
        <tr>
            <td>age</td>
            <td>{age}</td>
        </tr>
        <tr>
            <td>health</td>
            <td>{health}</td>
        </tr>
        <tr>
            <td>luck</td>
            <StatsFiller stat = {luck}/>
        </tr>
        <tr>
            <td>acuracy</td>
            <StatsFiller stat = {acuracy}/>
        </tr>
        <tr>
            <td>strenth</td>
            <StatsFiller stat = {sternth}/>
        </tr>
        <tr>
            <td>farm_skills</td>
            <StatsFiller stat = {farm_skills}/>
        </tr>
        <tr>
            <td>inteligance</td>
            <StatsFiller stat = {inteligance}/>
        </tr>
    </table>
    
    </>
}

// function fillWithNewObjects(char_stat_val){
//     console.log(char_stat_val)
//     if(char_stat_val < 1)return null
//     // let temp_object = <><td>+</td></> 
//     // for(let i = 0;i<char_stat_val; i++){
//     //   temp_object += <><td>+</td></>
//     // }
    
//     // return (<>{temp_object}</>)
//     return <>{temp}</>
// }

