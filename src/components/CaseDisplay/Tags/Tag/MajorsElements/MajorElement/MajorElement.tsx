import {  IonCol, IonRow } from "@ionic/react";
import React from "react";
import major from "../../../../../../Models/major";
import classes from "./MajorElement.module.css"

interface Props{
    major?:major;
}
const MajorElement :React.FC<Props>=({major})=>
{let element=null;
    
if(major)
{
   element=(
       <>
    <IonCol>
    {major.name}
</IonCol>
<IonCol>
{
major.university
}</IonCol>
<IonCol>
{

    major.acceptanceRate
}</IonCol>
<IonCol>

{major.numberOfHours}
</IonCol>
<IonCol>
{major.hourRate}
</IonCol>

<IonCol >
{major.tawjihiTypes.map(type=>{
return (    <IonRow className={classes.centerText} key={type}><IonCol>{type}</IonCol></IonRow>
    )
})}

</IonCol>
<IonCol>
    {major.points}
    </IonCol> 
</>
   ) 
}
return (
    <>
    {element}
    </>
          )}

export default MajorElement;