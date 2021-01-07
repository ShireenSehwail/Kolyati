import {  IonGrid} from "@ionic/react";
import React, { useState } from "react";
import Major from "./Major/Major";

import Search from "./Search/Search";
import classes from "./Majors.module.css";

 const MajorSearch :React.FC<{majors:{id:any;name:string,acceptanceRate:string,numberOfHours:string,hourRate:string,university:string}[]}>=(props)=>
{ const style={marginRight:"20px" ,color:"#636363"}
const whiteBackGroundColor={"--ion-background-color":"#fff"};

const [search,setSearch]=useState<string>("");
const changeSearch=(data:string)=>{
        setSearch(data);
}
return (
<>
<h3 style={style}> إختر 3 تخصصات تميل لها</h3>
<Search onChange={changeSearch}/>
<IonGrid style={whiteBackGroundColor} className={classes.Container}>
      {props.majors.map(major=>{
              if(search!==""&&major.name.toLowerCase().indexOf(search!.toLocaleLowerCase())==-1)
            return null;
            return (<Major key={major.id}
                name={major.name}
                acceptanceRate={major.acceptanceRate}
                numberOfHours={major.numberOfHours}
                hourRate={major.hourRate}
                university={major.university}
                  />)
      })}
</IonGrid>
</>)
        }

export default MajorSearch;