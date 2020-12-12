import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonContent, IonListHeader } from '@ionic/react';
import React,{useState,useEffect} from 'react';
import Case from '../../components/Case/Case';
import {LOCAL_STORAGE_KEY_CASE } from "../../containers/App";
const MyCase: React.FC = () => {
const [caseState,setCaseState]=useState<{author:string,createdTime:string,title:string,description:string}>();
   //{author:"مجد خصيب",createdTime:"قبل دقيقتين",title:" ساعدوني  !",description:"مرحبًا يا شباب ، أريد أن أسأل عن مساعدتي في العثور على الجامعة الصحيحة التي تتوافق مع احتياجاتي"}
    useEffect(()=>{
        const caseJSON=localStorage.getItem(LOCAL_STORAGE_KEY_CASE);
        if(caseJSON!=null)
        {
            setCaseState(JSON.parse(caseJSON))
    
        }
      },[]);
      useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY_CASE,JSON.stringify(caseState));
       
      },[caseState])
   return( <>
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
            author={caseState!.author}
            createdTime={caseState!.createdTime}
            title={caseState!.title}
            description={caseState!.description}/>
          </IonContent>
          </>);
}
export  default MyCase;