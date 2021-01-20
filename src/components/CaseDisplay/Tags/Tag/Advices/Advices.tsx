import { IonButton, IonIcon, IonList } from "@ionic/react";
import { addOutline, removeCircle } from "ionicons/icons";
import React, { useContext, useState } from "react";
import major from "../../../../../Models/major";
import { Context } from "../../../../../pages/CaseShow/CaseShow";
import GiveAdvice from "../GiveAdvice/GiveAdvice";
import Advice from "./Advice/Advice";
import classes from "./Advices.module.css";


 const Advices :React.FC<{major:major}>=({major})=>{
  const [advicesShow,setAdvicesShow]=useState<boolean>(true);
  const idsContext=useContext(Context);
  let canGive=true;

  let btn=(<IonButton onClick={e=>setAdvicesShow(true)} className={classes.btn}>
  <IonIcon icon={addOutline}>
  </IonIcon>
عرض النصائح
  </IonButton>
);
if(advicesShow)
{
  btn=(<IonButton color="light"  onClick={e=>setAdvicesShow(false)}  className={classes.btn}>
         <IonIcon icon={removeCircle}color="warning">
                </IonIcon>
                إغلاق النصائح
                </IonButton>
         )
if(idsContext.caseOwnerId!==idsContext.userId)
for(var i=0;i<major.advices!.length;i++)
{
  if(major.advices![i].userId===idsContext.userId)
  {
    canGive=false;
  }
}
else
canGive=false;
}
  return( 
  <IonList>
         <div className={classes.center}>
         {btn}
         </div>
        {advicesShow?( <div>
              {major.advices!.length>0?
              major.advices?.map(advice=>{return (<Advice advice={advice}majorId={major._id}/>)})
              :(<div>لا يوجد نصائح</div>)}
              {canGive?<GiveAdvice majorId={major._id}></GiveAdvice>:null}
              </div>):null}
  </IonList>

  
         )}
export default Advices;