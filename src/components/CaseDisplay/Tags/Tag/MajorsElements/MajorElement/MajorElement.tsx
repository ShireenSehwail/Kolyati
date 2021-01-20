import {  IonCol, IonRow } from "@ionic/react";
import React, { useContext } from "react";
import major from "../../../../../../Models/major";
import { Context } from "../../../../../../pages/CaseShow/CaseShow";
import classes from "./MajorElement.module.css"

interface Props{
    major?:major;
}
const MajorElement :React.FC<Props>=({major})=>
{let element=null;
    const context=useContext(Context);
 let pointsData=0;
    if(context.majorChoices[0]!=="")
{   for(var i=0;i<context.majorChoices.length;i++)
    if(major?._id===context.majorChoices[i])
    {pointsData+=5;
    break;
    }

}
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
    {pointsData}
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