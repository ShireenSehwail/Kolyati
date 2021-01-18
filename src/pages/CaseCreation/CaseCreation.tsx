import { IonButton,  IonCard,  IonCardContent,  IonCardHeader,  IonCardTitle,  IonContent, IonHeader ,IonInfiniteScroll,IonItem,IonList,IonMenuButton,  IonTitle,  IonToast,  IonToolbar } from '@ionic/react';
import React, {  useEffect, useState } from 'react';
import {BASE_URL,LOCAL_STORAGE_KEY_USER_ID, LOCAL_STORAGE_KEY_GPA, LOCAL_STORAGE_KEY_MAJORS, LOCAL_STORAGE_KEY_MAJORS_SHOW, LOCAL_STORAGE_KEY_TAWIJIHI_TYPE, LOCAL_STORAGE_KEY_PREFRENCES, LOCAL_STORAGE_KEY_PREFRENCES_SELECTED, LOCAL_STORAGE_KEY_DESCRIPTION, LOCAL_STORAGE_KEY_LOCATION, LOCAL_STORAGE_KEY_NAME, LOCAL_STORAGE_KEY_CREATED, LOCAL_STORAGE_KEY_CASSES_ID} from '../../containers/App'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import CaseIsCreated from '../../components/CaseIsCreated/CaseIsCreated';
import TawjihiTypes from '../../components/CaseCreationSlides/TawjihiTypes/TawjihiTypes';
import MajorSearch from '../../components/CaseCreationSlides/MajorSearch/MajorSearch';
import { majorList  } from '../../Data/majors';
import { tawjihiTypeList } from '../../Data/tawjihiTypes';
import FetchGpa from '../../components/CaseCreationSlides/FetchGpa/FetchGpa';
import classes from './CaseCreation.module.css'
import PrefrencesContainer from '../../components/CaseCreationSlides/SelectionPrefrences/PrefrencesContainer';
import UserDetailsFetch from '../../components/CaseCreationSlides/UserDetailsFetch/UserDetailsFetch';
import { locationSharp } from 'ionicons/icons';
const CaseCreation: React.FC = () => {

  const api=axios.create({
    baseURL:BASE_URL
  });
  const greyBackGroundColor={"--ion-background-color":"#E7E7E7"};
  let style={};
  const [created,setCreated]=useState<string>("");
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [majorChoice, setMajorChoice] = useState<String[]>([]);
  const[showMajors,setShowMajors]= useState(true);
  const [prefenceSelected, setPrefenceSelected] = useState(false);
  const [prefrences,setPrefrences]=useState<string[]>(['جودة التعليم','فرص العمل','صعوبة المواصلات','التكاليف الدراسية'])
  const [tawjihiType, setTawjihiType] = useState<string>();
  const [gpa, setGpa] = useState<string>();
  const [description, setDescription] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage,setToastMessage]=useState<string>("لا يمكنك إضافة هذا التخصص، يجب إختيار 3 تخصصات مختلفة فقط");
  
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
      
        const showMajorsData=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_MAJORS_SHOW)!);
        const majorsData=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_MAJORS)!);
          if(majorsData&&majorsData.length>0)
        setMajorChoice(majorsData);
        if(!showMajorsData)
        {setShowMajors(false);
         
        }
      }
    }
   
    const prefrencesData=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_PREFRENCES)!);
    if(prefrencesData)
    setPrefrences(prefrencesData);
    const prefrencesSelectedData=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_PREFRENCES_SELECTED)!);
    if(prefrencesSelectedData)
    setPrefenceSelected(prefrencesSelectedData);
    const nameData=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME)!);
    if(nameData)
    setName(nameData);
    const locationData=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LOCATION)!);
    if(locationData)
    setLocation(locationData);
    const descriptionData=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION)!);
    if(descriptionData)
    setDescription(descriptionData);
    const createdData=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CREATED)!);
    if(createdData)
    setCreated(createdData);
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
    if(majorChoice)
    {
      localStorage.setItem(LOCAL_STORAGE_KEY_MAJORS,JSON.stringify(majorChoice));
    }
      localStorage.setItem(LOCAL_STORAGE_KEY_MAJORS_SHOW,JSON.stringify(showMajors));
      
      localStorage.setItem(LOCAL_STORAGE_KEY_PREFRENCES,JSON.stringify(prefrences));
      localStorage.setItem(LOCAL_STORAGE_KEY_PREFRENCES_SELECTED,JSON.stringify(prefenceSelected));
      if(name)
      localStorage.setItem(LOCAL_STORAGE_KEY_NAME,JSON.stringify(name));
      if(location)
      localStorage.setItem(LOCAL_STORAGE_KEY_LOCATION,JSON.stringify(location));
      if(description)
      localStorage.setItem(LOCAL_STORAGE_KEY_DESCRIPTION,JSON.stringify(description));
      localStorage.setItem(LOCAL_STORAGE_KEY_CREATED,JSON.stringify(created));

  }, [tawjihiType,gpa,majorChoice,showMajors,prefrences,prefenceSelected,name,location,description,created]);
  function handleCaseCreation(){
    
   const createCase=async()=>{
    const idData=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER_ID)!);
    if(!idData)
    {
      setShowToast(true);
      setToastMessage("الاي دي محذوف من وحدة التخزين،يرجى إعادة المحاولة");
      return;
    }

  
     try{
      const res=await api.post("/casses" , {
        userId:idData,
        name:name,
        location:location,
        majors:majorChoice,
        tawjihiType:tawjihiType,
        gpa:gpa,
        description:description
      });
      if(res.status!==200)
      {
        alert("Something Went wrong..");

      }
      else if(res.status===200){
        let cassesData= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CASSES_ID)!);
        if(cassesData)
        {
          cassesData.push(res.data[1]["caseId"]);
        }
        else
        cassesData=[res.data[1]["caseId"]];
        console.log(cassesData);
        localStorage.setItem(LOCAL_STORAGE_KEY_CASSES_ID,JSON.stringify(cassesData));
        localStorage.removeItem(LOCAL_STORAGE_KEY_MAJORS_SHOW);
        localStorage.removeItem(LOCAL_STORAGE_KEY_NAME);
        localStorage.removeItem(LOCAL_STORAGE_KEY_LOCATION);
        localStorage.removeItem(LOCAL_STORAGE_KEY_TAWIJIHI_TYPE);
        localStorage.removeItem(LOCAL_STORAGE_KEY_DESCRIPTION);
        localStorage.removeItem(LOCAL_STORAGE_KEY_GPA);
        localStorage.removeItem(LOCAL_STORAGE_KEY_PREFRENCES_SELECTED);
        
        history.push(`/Case/${res.data[1]["caseId"]}`);
      }
    }
      catch(err){
        setToastMessage("الشبكة غير متاحة");
        setShowToast(true);
        console.log("error",err.message); 
      }
  

    }
    createCase();


  }
  const getTawjihiType=(data:string)=>{
    setTawjihiType(data);
  }
  const setMajorState=(id:string)=>{
    //If it's found then remove it
    if(majorChoice.indexOf(id)!==-1)
    {
      const choices=[...majorChoice];
      choices.splice(choices.indexOf(id),1);
      setMajorChoice(choices);
      return;
    }
    //Check the tags to allow only 3 different majors   
    if(majorChoice.length>2)
    {  let currentSelectedMajors:MajorClass[]=[];
      majorChoice.forEach(majorId => {
      const found=majorList.find(e=>e._id===majorId);
      if(found)
      {
        currentSelectedMajors.push(found);
      }
    });
    const found=majorList.find(e=>e._id===id);
    let canAdd=false;
      for(var i=0;i<found!.tags.length;i++)
      {
        currentSelectedMajors.forEach(major=>{
          
          major.tags.forEach((tag:string)=>{
            if(tag===found?.tags[i])
          canAdd=true;
        })
        });
        if(canAdd)
        break;
      }
    if(canAdd)
    setMajorChoice([...majorChoice,id])
else
setShowToast(true);
    return;

      }
     
      
    
   

    //Case when majors are not 3 yet
    setMajorChoice([...majorChoice,id])
  
   

  }
  const handleSetShowMajors=()=>{
    setShowMajors(false);
  }
  function handlePrefrencesChanged(result:any){
    if(!result.destination)return;
    const items=[...prefrences];
    const [recordedItem]=items.splice(result.source.index,1);
    items.splice(result.destination.index,0,recordedItem);
    setPrefrences(items);
  }
  function handlePrefrencesClicked(){
    setPrefenceSelected(true);
  }
  function handleSetName(name:string){
    setName(name);
  }
  function handleSetLocation(location:string){
    setLocation(location);
  }
  function handleSetDescription(description:string){
    setDescription(description);
  }
  function handleClick(){
    if(name==="")
    {
      setToastMessage("يجب عليك إدخال الإسم");
      setShowToast(true);
    
return;
    }
    if(location==="")
    {
      setToastMessage("يجب عليك إدخال مكان الإقامة");
      setShowToast(true);
  
return;
    }
    if(description==="")
    {
      setToastMessage("يجب عليك إدخال الوصف");
      setShowToast(true);
      return;
    }
    handleCaseCreation();
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
      style=greyBackGroundColor;
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
      conetnt=(<IonList dir="rtl" style={greyBackGroundColor}><MajorSearch 
      majors={majors}
      majorState={majorChoice}
      setMajorState={setMajorState}
      click={handleSetShowMajors}
      /> 
      </IonList>);
    }
    else if(!prefenceSelected)
    {
      conetnt=(
        <IonCard className={classes.Container}>

<IonCardHeader>
            <IonCardTitle>إسحب لترتيب الأهمية</IonCardTitle>


          </IonCardHeader>

          <IonCardContent>
          <IonItem>
          <span className={classes.FullHeight}>
          <span className={classes.BiggerText}>أعلى</span>
          <div className={classes.ArrowUp}/>
          <div className={classes.Line}/>
          <span className={classes.BiggerText}> أقل   </span>
            </span>

          <PrefrencesContainer 
        
        prefrences={prefrences}
        setPrefrences={handlePrefrencesChanged}
      
      />
          </IonItem>
        <div className={classes.ButtonContainer}>
        <IonButton className={classes.Button} onClick={handlePrefrencesClicked}>
        إستمر
      </IonButton>
          </div>
      
      </IonCardContent>
     
       </IonCard>)
    }
    else{
      conetnt=(<UserDetailsFetch 
        name={name}
        location={location}
        description={description}
        setName={handleSetName}
        setLocation={handleSetLocation}
        setDescritpion={handleSetDescription}
        handleClick={handleClick}
      />);
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
    <IonContent dir="rtl" style={style}>
    <IonInfiniteScroll >
  

     {conetnt}

     </IonInfiniteScroll >

     </IonContent >
     <IonToast 
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            cssClass={classes.CenterText}
            message={toastMessage}
            color="danger"
            duration={500}
          />
          );
      </>
    
  );
  }
  return component;
};

export default CaseCreation;
