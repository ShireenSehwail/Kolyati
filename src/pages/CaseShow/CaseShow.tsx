import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonContent, IonInfiniteScroll } from '@ionic/react';
import React,{useState,useEffect} from 'react';
import {  LOCAL_STORAGE_KEY_USER_ID} from "../../containers/App";
import axios from "axios";
import CaseNotFound from '../../components/CaseNotFound/CaseNotFound';
import CaseDisplay from '../../components/CaseDisplay/CaseDisplay';
import Case from '../../Models/Case';
const api=axios.create({
  baseURL:`http://localhost:8080/`
});
const MyCase: React.FC = () => {
  
const [created,setCreated]=useState<string>();

const [caseState,setCaseState]=useState<Case>();
   useEffect(()=>{
     const userIdData=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER_ID)!);
 
    const fetchCase=async()=>{
      try{
      const url=window.location.href;
      const caseId=url.substring(url.lastIndexOf("/"));
      const result =await  api.get(`/api/v1/case${caseId}/${userIdData}`);
      setCreated(caseId);   
      setCaseState(result.data);
      }
    
      catch(err)
      {
        console.log(err.message); 

      }
      };
      fetchCase();
      
    
  
   
  },[]);
  let component=null;
  if(!created)
  {
    component=(<>
      <IonHeader dir="rtl">
      <IonToolbar>
        <IonTitle>حالتي</IonTitle>
        <IonButton slot="start" fill="clear">
          <IonMenuButton menu="main-menu"></IonMenuButton>
        </IonButton>
      </IonToolbar>
    </IonHeader>
    <CaseNotFound />
    </>);
  }
  else
  {
    console.log(caseState)
component=(<>
  <IonHeader dir="rtl">
  <IonToolbar>
    <IonTitle>حالتي</IonTitle>
    <IonButton slot="start" fill="clear">
      <IonMenuButton menu="main-menu"></IonMenuButton>
    </IonButton>
  </IonToolbar>
</IonHeader>

    <CaseDisplay caseInformation={caseState}/>

    </>);}
   return( component);
}
export  default MyCase;