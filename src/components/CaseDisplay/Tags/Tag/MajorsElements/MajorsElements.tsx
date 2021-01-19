import { IonCard, IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import React from "react";
import major from "../../../../../Models/major";
import MajorElement from "./MajorElement/MajorElement";
import classes from "./MajorsElements.module.css"
interface Props{
    majors?:major[];
}
const MajorsElements :React.FC<Props>=({majors})=>
{let element=null;
    console.log("major",majors);
if(majors)
{
   element=(<IonCard className={classes.centerText}>
<IonGrid>
    <IonRow className={classes.color}>
        <IonCol>
            اسم التخصص
        </IonCol>
        <IonCol>
                الجامعة
        </IonCol>
        <IonCol>
            معدل القبول
        </IonCol>
        <IonCol>
                عدد الساعات
        </IonCol>
        <IonCol>
                سعر الساعة
        </IonCol>

        <IonCol>
                 نوع التوجيهي المسموح
        </IonCol>
    </IonRow>
    {majors.map(major=>{
        return(
        <>
        <IonRow className={classes.FullWidth}><MajorElement major={major}/></IonRow>
        <IonRow>
            <IonItem className={classes.FullWidth}></IonItem>
        </IonRow>
        </>)
    })}
</IonGrid>
   </IonCard>) 
}
return (
    <>
    {element}
    </>
          )}

export default MajorsElements;