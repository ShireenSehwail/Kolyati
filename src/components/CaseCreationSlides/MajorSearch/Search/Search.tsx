import { IonSearchbar } from "@ionic/react";
import React from "react";
 const Search :React.FC<{onChange:(data:string)=>void}>=({onChange})=>
{  const textCenter={  "textAlign": "center",backGroundColor:"white"};
return (
        <IonSearchbar  style={textCenter} dir="ltr"
        placeholder="ابحث بكتابة إسم التخصص"
        onIonChange={e=>onChange(e.detail.value||"")}
        ></IonSearchbar>
)
        }

export default Search;