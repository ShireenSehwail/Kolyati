import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonContent } from '@ionic/react';
import React,{useState,useEffect} from 'react';
import Case from '../../components/Case/Case';
import { LOCAL_STORAGE_KEY_CASSES_ID, LOCAL_STORAGE_KEY_USER_ID} from "../../containers/App";
import axios from "axios";
import CaseNotFound from '../../components/CaseNotFound/CaseNotFound';
const api=axios.create({
  baseURL:`http://localhost:8080/`
});
const MyCase: React.FC = () => {
  
const [created,setCreated]=useState<string>("");

const [caseState,setCaseState]=useState<CaseClass>();
   useEffect(()=>{
     const userIdData=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER_ID)!);
 
    const fetchCase=async()=>{
      try{
        const url=window.location.href;
        const caseId=url.substring(url.lastIndexOf("/"));
        console.log(`/api/v1/case/${caseId}/${userIdData}`);
      const result =await  api.get(`/api/v1/case${caseId}/${userIdData}`);
    console.log(result.data);
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
  if(created==="")
  {
    component=(<>
      <IonHeader dir="rtl">
      <IonToolbar>
        <IonTitle>حالتي</IonTitle>
        <IonButton slot="start" fill="clear">
          <IonMenuButton menu="main-menu"></IonMenuButton>
        </IonButton>
      </IonToolbar>
    </IonHeader><CaseNotFound /></>);
  }
  else
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
    <IonContent fullscreen  dir="rtl">
      <Case  id={caseState?._id}
      author={caseState?.name||""}
      createdTime={caseState?.createdTime||""}
      major={caseState?.major||""}
      description={caseState?.description||""}/>
    </IonContent>
    </>);}
   return( component);
}
export  default MyCase;