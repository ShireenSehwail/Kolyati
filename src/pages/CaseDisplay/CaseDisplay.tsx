import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonContent } from '@ionic/react';
import React,{useState,useEffect} from 'react';
import Case from '../../components/Case/Case';
import { LOCAL_STORAGE_KEY_CASSES_ID} from "../../containers/App";
import axios from "axios";
import CaseNotFound from '../../components/CaseNotFound/CaseNotFound';
const api=axios.create({
  baseURL:`http://localhost:8080/`
});
const MyCase: React.FC = () => {
  
const [created,setCreated]=useState<string>("");

const [caseState,setCaseState]=useState<CaseClass>();
   useEffect(()=>{
     const cassesData=localStorage.getItem(LOCAL_STORAGE_KEY_CASSES_ID);
     let cassesId:string[]=[];
     if(cassesData)
     cassesId=JSON.parse(cassesData);

    if(cassesId!==null)
    {    
    const fetchCase=async()=>{
      try{
      const result =await  api.get(`/api/v1/case/${cassesId[cassesId.length-1]}`);
    
      setCreated(cassesId[0]);   
      setCaseState(result.data);
      }
    
      catch(err)
      {
        console.log(err.message); 

      }
        // setCaseState({author:name,createdTime:"قبل دقيقة واحدة",title:"ساعدوني",description:description})
      };
      fetchCase();
      
    
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