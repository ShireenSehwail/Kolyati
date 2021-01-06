import { IonButton,  IonContent, IonHeader ,IonInfiniteScroll,IonMenuButton,  IonTitle,  IonToolbar } from '@ionic/react';
import React, {  useState } from 'react';
import {BASE_URL, LOCAL_STORAGE_KEY_CASE,LOCAL_STORAGE_KEY_USER_ID, LOCAL_STORAGE_KEY_CASE_ID} from '../../containers/App'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import CaseIsCreated from '../../components/CaseIsCreated/CaseIsCreated';
import { bedOutline, bookOutline, calculatorOutline, constructOutline, desktopOutline, earthOutline, flaskOutline,  nutritionOutline } from 'ionicons/icons';
import TawjihiTypes from '../../components/CaseCreationSlides/TawjihiTypes/TawjihiTypes';

const CaseCreation: React.FC = () => {
  const { v4: uuidv4 } = require('uuid');
  const api=axios.create({
    baseURL:BASE_URL
  });
  const [created,setCreated]=useState<string>("");
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>();
  const [major, setMajor] = useState<string>();
  const [checked, setChecked] = useState(true);
  const [tawjihiType, setTawjihiType] = useState<string>();
  const [gpa, setGpa] = useState<string>();
  const [description, setDescription] = useState<string>();

  const history =useHistory();
  function handleCaseCreation(){
    
   const createCase=async()=>{
     const id=uuidv4();
     try{
      const res=await api.post("/casses" , {
        userId:id,
        name:name,
        location:location,
        major:major,
        tawjihiType:tawjihiType,
        gpa:gpa,
        description:description
      });
    
      if(res.status!==200)
      {
        alert("Something Went wrong..");
        console.log(res);

      }
      else{
        console.log(res.data);
        localStorage.setItem(LOCAL_STORAGE_KEY_USER_ID,res.data[0]["userId"]);
        localStorage.setItem(LOCAL_STORAGE_KEY_CASE_ID,res.data[1]["caseId"]);
        localStorage.removeItem(LOCAL_STORAGE_KEY_CASE);
        history.push(`/Case/${res.data[1]["caseId"]}`);
 

      }
    }
      catch(err){
        console.log(err.message); 
      }
  

    }
    createCase();


  }
  const getTawjihiType=(data:string)=>{
    setTawjihiType(data);
  }
  const  list = [
    {
      id: uuidv4(),
      type: 'علمي',
      icon:flaskOutline

    },
    {
      id:  uuidv4(),
      type: 'تكنولوجي',
      icon:desktopOutline
    },
    {
      id:  uuidv4(),
      type: 'صناعي',
      icon:constructOutline
    },
    
    {
      id:  uuidv4(),
      type: 'أدبي',
      icon:earthOutline
    },
  
    {
      id:  uuidv4(),
      type: 'زراعي',
      icon:nutritionOutline
    },
    {
      id:  uuidv4(),
      type: 'فنادق',
      icon:bedOutline
    },
    {
      id:  uuidv4(),
      type: 'تجاري',
      icon:calculatorOutline
    },
    {
      id:  uuidv4(),
      type: 'شرعي',
      icon:bookOutline
    },
  ];
  let component=null;
  if(created)
  {
    component=(
      <><IonHeader dir="rtl">
    <IonToolbar>
      <IonTitle>أنشئ حالة جديدة</IonTitle>
      <IonButton slot="start" fill="clear" >
        <IonMenuButton menu="main-menu"></IonMenuButton>
      </IonButton>
    </IonToolbar>
    </IonHeader >
    <CaseIsCreated />
    </>);
  }
  else
  {let conetnt=null
    if(!tawjihiType)
    {
      conetnt=( <TawjihiTypes list={list} clicked={getTawjihiType}/>)
    }
component=(
    <><IonHeader dir="rtl">
    <IonToolbar>
      <IonTitle>أنشئ حالة جديدة</IonTitle>
      <IonButton slot="start" fill="clear">
        <IonMenuButton menu="main-menu"></IonMenuButton>
      </IonButton>
    </IonToolbar>
    </IonHeader >
    <IonContent dir="rtl">
    <IonInfiniteScroll >
  

     {conetnt}

     </IonInfiniteScroll >

     </IonContent >
      </>
    
  );
  }
  return component;
};

export default CaseCreation;
