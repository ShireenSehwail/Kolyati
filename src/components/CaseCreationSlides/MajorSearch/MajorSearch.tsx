import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import React, { useState } from "react";
import Major from "./Major/Major";
import Search from "./Search/Search";
 const MajorSearch :React.FC<{majors:{id:any;name:string;tawjihiTypes:string[]}[]}>=(props)=>
{ const style={marginRight:"20px"}
const [search,setSearch]=useState<string>("");
const changeSearch=(data:string)=>{
        setSearch(data);
}
return (
<>
<h3 style={style}> إختر 3 تخصصات تميل لها</h3>
<Search onChange={changeSearch}/>
<IonGrid>
      {props.majors.map(major=>{
              if(search!==""&&major.name.toLowerCase().indexOf(search!.toLocaleLowerCase())==-1)
            return null;
            return (<Major name={major.name}  key={major.id}/>)
      })}
</IonGrid>
</>)
        }

export default MajorSearch;