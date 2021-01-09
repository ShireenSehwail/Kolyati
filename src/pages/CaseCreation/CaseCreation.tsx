import { IonButton,  IonContent, IonHeader ,IonInfiniteScroll,IonItem,IonList,IonMenuButton,  IonTitle,  IonToolbar } from '@ionic/react';
import React, {  useEffect, useState } from 'react';
import {BASE_URL, LOCAL_STORAGE_KEY_CASE,LOCAL_STORAGE_KEY_USER_ID, LOCAL_STORAGE_KEY_CASE_ID} from '../../containers/App'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import CaseIsCreated from '../../components/CaseIsCreated/CaseIsCreated';
import TawjihiTypes from '../../components/CaseCreationSlides/TawjihiTypes/TawjihiTypes';
import MajorSearch from '../../components/CaseCreationSlides/MajorSearch/MajorSearch';
import { majorList  } from '../../Data/majors';
import { tawjihiTypeList } from '../../Data/tawjihiTypes';
import FetchGpa from '../../components/CaseCreationSlides/FetchGpa/FetchGpa';
const LOCAL_STORAGE_KEY_TAWIJIHI_TYPE="koliyati.tawjihitype";
const LOCAL_STORAGE_KEY_GPA="koliyati.gpa";
const CaseCreation: React.FC = () => {
  const { v4: uuidv4 } = require('uuid');
  const api=axios.create({
    baseURL:BASE_URL
  });
  const greyBackGroundColor={"--ion-background-color":"#E7E7E7"};
  const [created,setCreated]=useState<string>("");
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>();
  const [majorChoice, setMajorChoice] = useState<String[]>([]);
  const[showMajors,setShowMajors]= useState(true);
  const [checked, setChecked] = useState(true);
  const [tawjihiType, setTawjihiType] = useState<string>();
  const [gpa, setGpa] = useState<string>();
  const [description, setDescription] = useState<string>();
  
  const history =useHistory();
  useEffect(() => {
    const tawjihiTypeData=localStorage.getItem(LOCAL_STORAGE_KEY_TAWIJIHI_TYPE);
    if(tawjihiTypeData)
    {    

      setTawjihiType(JSON.parse(tawjihiTypeData));
      let gpaData=localStorage.getItem(LOCAL_STORAGE_KEY_GPA);

      if(gpaData)
      { const gpaNumber=JSON.parse(gpaData);
        if(gpaNumber>=50)
        {   
          
          setGpa(""+gpaNumber);
        } 
        else
        {
          setGpa("0");
        } 
      }
    }
  }, []);
  useEffect(() => {
    if(tawjihiType)
    localStorage.setItem(LOCAL_STORAGE_KEY_TAWIJIHI_TYPE,JSON.stringify(tawjihiType));
    if(gpa)
    {const gpaNumber=parseFloat(gpa);
      if(gpaNumber==0)
      {
        localStorage.setItem(LOCAL_STORAGE_KEY_GPA,JSON.stringify("0"));
      }
      else if(gpaNumber<50)
      {
        localStorage.setItem(LOCAL_STORAGE_KEY_GPA,JSON.stringify("0"));

      }
      else if(gpaNumber>100)
      {
        localStorage.setItem(LOCAL_STORAGE_KEY_GPA,JSON.stringify("100"));

      }
      else
      {
        localStorage.setItem(LOCAL_STORAGE_KEY_GPA,JSON.stringify(gpaNumber));

      }
      
    }
  }, [tawjihiType,gpa]);
  function handleCaseCreation(){
    
   const createCase=async()=>{
     const id=uuidv4();
     try{
      const res=await api.post("/casses" , {
        userId:id,
        name:name,
        location:location,
        major:majorChoice,
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
  const setMajorState=(id:string)=>{
    if(majorChoice.indexOf(id)!==-1)
    {
      const choices=[...majorChoice];
      choices.splice(choices.indexOf(id),1);
      setMajorChoice(choices);
      return;
    }
    setMajorChoice([...majorChoice,id])
  }
  const handleSetShowMajors=()=>{
    setShowMajors(false);
  }
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
    {const  tawjihiTypes = tawjihiTypeList;
      conetnt=( <TawjihiTypes list={tawjihiTypes} clicked={getTawjihiType}/>)
    }
    else if(!gpa){
      conetnt=( <FetchGpa gpa={gpa||""} setGpa={setGpa}/>)

    }
    else if(showMajors)
    {
      const  majors = majorList.filter(major=>
      {
        if(major.tawjihiTypes.indexOf(tawjihiType)!==-1)
        {if(parseFloat(gpa)===0)
          return major;
          if(parseFloat(gpa)>=parseFloat(major.acceptanceRate))
          return major;
          return null;
        }
        return null;
      });
      conetnt=(<IonList dir="rtl"><MajorSearch 
      majors={majors}
      majorState={majorChoice}
      setMajorState={setMajorState}
      click={handleSetShowMajors}
      /> 
      </IonList>);
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
    <IonContent dir="rtl" style={greyBackGroundColor}>
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
