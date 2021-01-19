import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonToast,  } from '@ionic/react';
import React,{useState,useEffect} from 'react';
import {  LOCAL_STORAGE_KEY_USER_ID} from "../../containers/App";
import axios from "axios";
import CaseNotFound from '../../components/CaseNotFound/CaseNotFound';
import CaseDisplay from '../../components/CaseDisplay/CaseDisplay';
import Case from '../../Models/Case';
import classes from './CaseShow.module.css';
export const IsCaseOwnerContext=React.createContext({isCaseOwner:false});
export const MajorChoices=React.createContext({majorChoices:[""]});
export const AdviceHandle=React.createContext({handleClick:(name:string,majorId:string,selections:string[],description:string)=>{}});
const api=axios.create({
  baseURL:`http://localhost:8080/`
});
const CaseShow: React.FC = () => {
  
const [created,setCreated]=useState<string>();
const userIdData=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER_ID)!);
const[isCaseOwner,setIsCaseOwner]=useState<boolean>(false);
const[majorChoices,setMajorChoices]=useState<string[]>([]);
const [showToast, setShowToast] = useState(false);
const [toastMessage, setToastMessage] = useState<string>("");
const [caseState,setCaseState]=useState<Case>();
   useEffect(()=>{
 
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
  useEffect(()=>{
if(caseState?.userId)
{
  setIsCaseOwner(caseState.userId===userIdData);
  setMajorChoices(caseState.majorsChoice);
}
  },[caseState]);
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

    component=(<>
  <IonHeader dir="rtl">
  <IonToolbar>
    <IonTitle>حالتي</IonTitle>
    <IonButton slot="start" fill="clear">
      <IonMenuButton menu="main-menu"></IonMenuButton>
    </IonButton>
  </IonToolbar>
</IonHeader>
<AdviceHandle.Provider value={{handleClick:(name:string,majorId:string,selections:string[],description:string)=>{handleAdviceSend(name,majorId,selections,description);}}}>
<MajorChoices.Provider value={{majorChoices:majorChoices}}>
<IsCaseOwnerContext.Provider value={{isCaseOwner:isCaseOwner}}>
    <CaseDisplay caseInformation={caseState}/>
    </IsCaseOwnerContext.Provider>
    </MajorChoices.Provider>
    </AdviceHandle.Provider>
    </>);}
    function handleAdviceSend(name:string,majorId:string,selections:string[],description:string){
      if(selections[0]===undefined)
      {
        setToastMessage("ضع تقييم لجودة التعليم")
        setShowToast(true);
        return;
      }    
      if(selections[1]===undefined)
{
  setToastMessage("ضع تقييم لفرص العمل في السوق")
  setShowToast(true);
  return;
}    
if(selections[2]===undefined)
{
  setToastMessage("ضع تقييم لصعوبة المواصلات")
  setShowToast(true);

  return;
}     
if(name==="")
{
  setToastMessage("ضع إسمك ")
  setShowToast(true);
  return;
}           
if(description==="")
{
  setToastMessage("ضع وصفاً لتجربتك ")
  setShowToast(true);
  return;
}    
const major=caseState?.tags.find(tag=>{
for(var i=0;i<tag.majors.length;i++  )
{
  if(majorId===tag.majors[i]._id)
  return tag.majors[i];
}})
console.log({
  major:major,
  rating:selections,
  description:description,
  userId:userIdData,
  author:name
});
console.log(JSON.stringify({
  major:major?.tagName,
  
}))
console.log(JSON.stringify({
  tagName:major?.tagName,
    majorId:majorId,
    rating:selections,
    description:description,
    userId:userIdData,
    author:name 
}))
const updateCase=async()=>{
  try{
  
  const result =await  api.post(`/api/v1/advice/${caseState!._id}`,{
    tagName:major?.tagName,
    majorId:majorId,
    rating:selections,
    description:description,
    userId:userIdData,
    author:name
  });
  if(result.status===200)
  console.log(result.data)
  }

  catch(err)
  {
    console.log(err.message); 

  }
  };
  updateCase();
  

    }
   return( <>{component}
    <IonToast 
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            cssClass={classes.center}
            message={toastMessage}
            color="danger"
            duration={500}
          /></>);
}
export  default CaseShow;