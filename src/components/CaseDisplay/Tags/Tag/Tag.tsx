import { IonCard, IonCardContent, IonCardHeader,  IonIcon,  IonRow, IonTitle } from "@ionic/react";
import { addCircle, removeCircle } from "ionicons/icons";
import React, { useState } from "react";
import tag from "../../../../Models/tag";

import MajorsElements from "./MajorsElements/MajorsElements";
import classes from './Tag.module.css';
interface Props{
    tag?:tag;
}
const Tag :React.FC<Props>=({tag})=>
{let element=null;
    const [showContent,setShowContent]=useState(false);
    let style=classes.green;
    let icon=addCircle;
    if(showContent)
    {style=classes.red;
    icon=removeCircle;
    }
if(tag)
{
element=(<IonCard className={classes.Card}>
<IonCardHeader>
    <IonTitle className={classes.Title}>
   <IonRow >
   <IonIcon 
    icon={icon} className={classes.Icon+" "+style}
    onClick={e=>setShowContent(prev=>!prev)}
    />
        {tag.tagName}
   </IonRow>
    </IonTitle>
</IonCardHeader>
<IonCardContent>
{showContent?<MajorsElements majors={tag.majors}/>
:null}
</IonCardContent>
   </IonCard>) 
}
return (
    <>
    {element}
    </>
          )}

export default Tag;