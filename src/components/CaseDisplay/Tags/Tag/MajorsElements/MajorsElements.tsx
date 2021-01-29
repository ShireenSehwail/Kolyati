import { IonCard, IonCol, IonGrid,  IonRow } from "@ionic/react";
import React   from "react";
import major from "../../../../../Models/major";
import Advices from "../Advices/Advices";
import MajorElement from "./MajorElement/MajorElement";
import classes from "./MajorsElements.module.css"
interface Props{
    majors?:major[];
}
const MajorsElements :React.FC<Props>=({majors})=>
{   let element=null;
    

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
        <IonCol>
            النقاط
        </IonCol>
    </IonRow>
    {majors.map(major=>{
        return(
            <div key={major._id}>
        <IonRow  className={classes.FullWidth} key={major._id}>
            <MajorElement major={major} />
        </IonRow>
         {<Advices major={major}/>}
         </div>
        )

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