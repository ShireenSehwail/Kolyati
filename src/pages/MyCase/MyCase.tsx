import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonContent } from '@ionic/react';
import React,{useState,useEffect} from 'react';
import Case from '../../components/Case/Case';
import { LOCAL_STORAGE_KEY_CASE_CREATED} from "../../containers/App";
import PageNotFound from '../PageNotFound/PageNotFound';
import axios from "axios";
import CaseNotFound from '../../components/CaseNotFound/CaseNotFound';
const api=axios.create({
  baseURL:`http://localhost:8080/`
});
const MyCase: React.FC = () => {
  
const [created,setCreated]=useState<string>("");

const [caseState,setCaseState]=useState<CaseClass>();
   useEffect(()=>{
    const isCreated=localStorage.getItem(LOCAL_STORAGE_KEY_CASE_CREATED);
    
    if(isCreated!==null)
    {
      api.get('api/v1/case/{id}').then(res=>{
       const caseJSON=res.data[0];
       const name=caseJSON.name?caseJSON.name:"";
        const description=caseJSON.description?caseJSON.description:"";
        console.log(res.data);

        // setCaseState({author:name,createdTime:"قبل دقيقة واحدة",title:"ساعدوني",description:description})
        setCreated(isCreated);   
      })
      
    
  }
   
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
      <Case 
      author={caseState?.name||""}
      createdTime={caseState?.createdTime||""}
      major={caseState?.major||""}
      description={caseState?.description||""}/>
    </IonContent>
    </>);}
   return( component);
}
export  default MyCase;