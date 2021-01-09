import {  IonButton, IonCol, IonGrid, IonItem, IonRow} from "@ionic/react";
import React, { useState } from "react";
import Major from "./Major/Major";

import Search from "./Search/Search";
import classes from "./Majors.module.css";
import MajorNotFound from "./MajorNotFound/MajorNotFound";

 const MajorSearch :React.FC<{majors:{_id:any;name:string,acceptanceRate:string,numberOfHours:string,hourRate:string,university:string}[],majorState:String[],setMajorState:(data:string)=>void;click:()=>void}>=(props)=>
{ const style={marginRight:"20px" ,color:"#636363"}
const whiteBackGroundColor={"--ion-background-color":"#fff"};

const [search,setSearch]=useState<string>("");
const changeSearch=(data:string)=>{
        setSearch(data);
}
let displayElement=null;

const list= props.majors.map(major=>{
        if(search!==""&&major.name.toLowerCase().indexOf(search!.toLocaleLowerCase())===-1)
      return null;
      let styled=false;
      if(props.majorState.indexOf(major._id)!==-1)
      {
              styled=true;
      }
      return (<Major id={major._id}
          key={major._id}
          name={major.name}
          styled={styled}
          acceptanceRate={major.acceptanceRate}
          numberOfHours={major.numberOfHours}
          hourRate={major.hourRate}
          university={major.university}
          setMajor={props.setMajorState}
            />)
})
if(list.filter(e=>e!==null).length===0)
{
displayElement=(<MajorNotFound/>);
}
else
{
        displayElement=(
                <IonGrid style={whiteBackGroundColor} className={classes.Container}>
                     {list}
                     
                </IonGrid>);   
}
return (
<>
<h3 style={style}> إختر  التخصصات التي  تميل لها</h3>
<Search onChange={changeSearch}/>
{props.majorState.length>0?(<IonItem>
      <IonButton onClick={props.click}>
              إخترت تخصصاتي
              </IonButton>  
</IonItem>):null}
{displayElement}

</>)
        }

export default MajorSearch;