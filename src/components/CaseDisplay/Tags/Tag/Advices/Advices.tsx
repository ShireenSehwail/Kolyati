import { IonButton } from "@ionic/react";
import React from "react";
import Advice from "./Advice/Advice";


 const Advices :React.FC=()=>{
   
  return( <>
  <IonButton>
    Show Advices
  </IonButton>
  <Advice/> 
  </>
         )}
export default Advices;