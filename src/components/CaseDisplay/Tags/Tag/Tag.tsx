import { IonCard, IonCardContent, IonCardHeader, IonItem, IonTitle } from "@ionic/react";
import React from "react";
import tag from "../../../../Models/tag";
import Tags from "../Tags";
import MajorsElements from "./MajorsElements/MajorsElements";
import classes from './Tag.module.css';

interface Props{
    tag?:tag;
}
const Tag :React.FC<Props>=({tag})=>
{let element=null;
    console.log("tag",tag);
if(tag)
{
   element=(<IonCard className={classes.Card}>
<IonCardHeader>
    <IonTitle>
        {tag.tagName}
    </IonTitle>
</IonCardHeader>
<IonCardContent>
<MajorsElements majors={tag.majors}/>
</IonCardContent>
   </IonCard>) 
}
return (
    <>
    {element}
    </>
          )}

export default Tag;