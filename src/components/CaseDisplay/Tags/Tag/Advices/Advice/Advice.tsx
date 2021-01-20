import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonCol, IonRow, IonIcon } from "@ionic/react";
import {  caretDownSharp, caretUpSharp, cogSharp } from "ionicons/icons";
import React, { useContext } from "react";
import { advice } from "../../../../../../Models/Advice";
import { Context } from "../../../../../../pages/CaseShow/CaseShow";
import classes from "./Advice.module.css";


 const Advice :React.FC<{advice:advice,majorId:string}>=({advice,majorId})=>{
   const  context = useContext(Context);
   let votes=0;
   let upSelected="";
   let downSelected="";

   if(advice.voting.length)
   advice.voting.forEach(vote=>{
     if(vote.userId===context.userId)
     {
       if(vote.result===1)
       {
         upSelected=classes.Selected;
       }
       else if(vote.result===-1)
       {
        downSelected=classes.Selected;
      }
     }
    votes+=vote.result;
   })
  return (  <IonCard>
    <IonCardHeader>
      <IonCardTitle className={classes.rightAlign}>
        <span className={classes.Color}>{advice.author}</span>
        </IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
    <IonGrid>
      <IonRow className={classes.rightAlign}>
        <IonCol className={classes.Col+ " "+classes.Color}>
          {advice.description}
        </IonCol>
        <IonCol className={classes.Col+ " "+classes.Color}>
       <IonRow>
         <IonCol>
        صعوبة التخصص
         </IonCol>
         <IonCol>
         {advice.rating[0]}
         </IonCol>
       </IonRow>
       <IonRow>
         <IonCol>
        كفائة الطاقم التدريسي

         </IonCol>
         <IonCol>
         {advice.rating[1]}
         </IonCol>
       </IonRow>
       <IonRow>
         <IonCol>
         فرص العمل  

         </IonCol>
         <IonCol>
         {advice.rating[2]}
         </IonCol>
       </IonRow>
       <IonRow>
         <IonCol>
          المواصلات 

         </IonCol>
         <IonCol>
         {advice.rating[3]}
         </IonCol>
       </IonRow>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className={classes.Col}>
          <IonIcon icon={caretUpSharp} className={classes.Icon+" "+upSelected} onClick={e=>context.handleUpVote(advice.userId,majorId)}/>
            <span className={classes.Voting}>{votes}</span>
            <IonIcon icon={caretDownSharp} className={classes.Icon+" "+downSelected} onClick={e=>context.handleDownVote(advice.userId,majorId)}/>
        </IonCol>
      </IonRow>
    </IonGrid>
</IonCardContent>
  </IonCard>)}
export default Advice;