import { IonCard, IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import React, { useContext } from "react";
import major from "../../../../../Models/major";
import { IsCaseOwnerContext } from "../../../../../pages/CaseShow/CaseShow";
import Advices from "../Advices/Advices";
import GiveAdvice from "../GiveAdvice/GiveAdvice";
import MajorElement from "./MajorElement/MajorElement";
import classes from "./MajorsElements.module.css"
interface Props{
    majors?:major[];
}
const MajorsElements :React.FC<Props>=({majors})=>
{let element=null;
    const isCaseOnwer=useContext(IsCaseOwnerContext);
    let advisingElemnet=(<GiveAdvice/>);
if(isCaseOnwer.isCaseOwner)
{
    advisingElemnet=(<Advices/>);
}
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
        <IonRow  className={classes.FullWidth} key={major._id}>
            <MajorElement major={major}/>
            
        </IonRow>
        

        )

    })}
<IonRow className={classes.FullWidth+" "+classes.centerText}>
    {advisingElemnet}
</IonRow>
</IonGrid>
   </IonCard>) 
}
return (
    <>
    {element}
    </>
          )}

export default MajorsElements;