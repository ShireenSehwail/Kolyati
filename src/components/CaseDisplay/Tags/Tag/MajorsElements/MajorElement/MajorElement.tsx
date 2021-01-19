import { IonCard, IonCol, IonItem, IonRow } from "@ionic/react";
import React, { useContext } from "react";
import major from "../../../../../../Models/major";
import { MajorChoices } from "../../../../../../pages/CaseShow/CaseShow";
import classes from "./MajorElement.module.css"

interface Props{
    major?:major;
}
const MajorElement :React.FC<Props>=({major})=>
{let element=null;
    const majorsChoice=useContext(MajorChoices);
 let pointsData=0;
    if(majorsChoice.majorChoices[0]!=="")
{   for(var i=0;i<majorsChoice.majorChoices.length;i++)
    if(major?._id===majorsChoice.majorChoices[i])
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