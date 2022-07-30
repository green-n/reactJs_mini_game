import React from "react";

export default function StatsFiller(props){
    let temp_arr = new Array(props.stat)
    let result = ""
    let addiable = "+"
    for(let i =0; i<props.stat; i++)result += addiable
    return<><td><h3>{result}</h3></td><td><h2>{props.stat}</h2></td></>
}