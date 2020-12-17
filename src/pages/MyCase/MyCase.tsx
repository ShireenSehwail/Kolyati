import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonContent, IonRouterLink } from '@ionic/react';
import React,{useState,useEffect} from 'react';
import Case from '../../components/Case/Case';
import {LOCAL_STORAGE_KEY_CASE ,LOCAL_STORAGE_KEY_CASE_CREATED} from "../../containers/App";
import PageNotFound from '../PageNotFound/PageNotFound';
const MyCase: React.FC = () => {
const [created,setCreated]=useState<string>("");

const [caseState,setCaseState]=useState<{author:string,createdTime:string,title:string,description:string}>();
   //{author:"مجد خصيب",createdTime:"قبل دقيقتين",title:" ساعدوني  !",description:"مرحبًا يا شباب ، أريد أن أسأل عن مساعدتي في العثور على الجامعة الصحيحة التي تتوافق مع احتياجاتي"}
   useEffect(()=>{
    const caseJSON=localStorage.getItem(LOCAL_STORAGE_KEY_CASE);
    const isCreated=localStorage.getItem(LOCAL_STORAGE_KEY_CASE_CREATED);

    if(isCreated!==null)
    {if(caseJSON!=null)
    { 
      const parsedData=JSON.parse(caseJSON);
      const name=parsedData.name?parsedData.name:"";
      const description=parsedData.description?parsedData.description:"";
      setCaseState({author:name,createdTime:"قبل دقيقة واحدة",title:"ساعدوني",description:description})
      setCreated(isCreated);
    }
  }
   
  },[]);
  let component=null;
  if(created==="")
  {
    component=( <PageNotFound  title="لا يوجد لديك حالة، قم بإنشاء واحدة الآن  " />  );
    
    
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
      author={caseState?.author||""}
      createdTime={caseState?.createdTime||""}
      title={caseState?.title||""}
      description={caseState?.description||""}/>
    </IonContent>
    </>);}
   return( component);
}
export  default MyCase;