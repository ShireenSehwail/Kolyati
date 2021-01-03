import { IonButton,  IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton,  IonSelect, IonSelectOption, IonTextarea, IonTitle,  IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import {BASE_URL, LOCAL_STORAGE_KEY_CASE,LOCAL_STORAGE_KEY_CASE_CREATED, LOCAL_STORAGE_KEY_CASE_ID} from '../../containers/App'
import { useHistory } from "react-router-dom";
import PageNotFound from '../PageNotFound/PageNotFound';
import axios from 'axios';

const CaseCreation: React.FC = () => {
  const { v4: uuidv4 } = require('uuid');
  const api=axios.create({
    baseURL:BASE_URL
  });
  const [created,setCreated]=useState<string>("");
  // const [name, setName] = useState<string>("");
  // const [location, setLocation] = useState<string>();
  // const [major, setMajor] = useState<string>();
  // const [checked, setChecked] = useState(true);
  // const [tawjehiType, setTawjehiType] = useState<string>();
  // const [gpa, setGpa] = useState<string>();
  // const [description, setDescription] = useState<string>();


  const [name, setName] = useState<string>("مجد خصيب");
  const [location, setLocation] = useState<string>("رام الله");
  const [major, setMajor] = useState<string>("طب بشري");
  const [checked, setChecked] = useState(true);
  const [tawjehiType, setTawjehiType] = useState<string>("علمي");
  const [gpa, setGpa] = useState<string>("99.3");
  const [description, setDescription] = useState<string>("أريد دراسة الطب");



  const history =useHistory();
  useEffect(()=>{
    const caseJSON=localStorage.getItem(LOCAL_STORAGE_KEY_CASE);
    const created=localStorage.getItem(LOCAL_STORAGE_KEY_CASE_CREATED);
 
    if(created===null)
    {if(caseJSON!=null)
    { 
      const parsedData=JSON.parse(caseJSON);
      const name=parsedData.name?parsedData.name:"";
      const location=parsedData.location?parsedData.location:"";
      const major=parsedData.major?parsedData.major:"";
      const checked=parsedData.checked?parsedData.checked:true;
      const tawjehiType=parsedData.tawjehiType?parsedData.tawjehiType:"";
      const gpa=parsedData.gpa?parsedData.gpa:"";
      const description=parsedData.description?parsedData.description:"";


      // setName(name);
      // setLocation(location);
      // setMajor(major);
      // setChecked(checked);
      // setTawjehiType(tawjehiType);
      // setGpa(gpa);
      // setDescription(description);


    }}
    else
    {   
      setCreated(created!);
    }
  },[]);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY_CASE,JSON.stringify({name:name,
      location:location,
      major:major,
      checked:checked,
      tawjehiType:tawjehiType,
      gpa:gpa,
      description:description
    }));
   
  },[name,location,major,checked,tawjehiType,gpa,description,created]);
  function handleCaseCreation(){
    if(!name||!location||!major||!checked||!tawjehiType||!gpa||!description)
    {
      return;
    } 
   const createCase=async()=>{
     const id=uuidv4();
     try{
      const res=await api.post("api/v1/case" , {
        id:id,
        name:name,
        location:location,
        major:major,
        checked:checked,
        tawjehiType:tawjehiType,
        gpa:gpa,
        description:description
      });
    
      if(res.status!==200)
      {
        alert("Something Went wrong..");
        console.log(res);

      }
      else{
  //  localStorage.setItem(LOCAL_STORAGE_KEY_CASE_CREATED,id);
  //  localStorage.setItem(LOCAL_STORAGE_KEY_CASE_ID,);

  //     history.push("/myCase");
  console.log(res);
      }}
      catch(err){
        console.log(err); 
      }
      

    }
    createCase();


  }
  let component=null;
  if(created)
  {
    component=(<PageNotFound title="لقد قمت بإنشاء حالة بالفعل!"/>);
  }
  else
  {
component=(
    <><IonHeader dir="rtl">
    <IonToolbar>
      <IonTitle>أنشئ حالة جديدة</IonTitle>
      <IonButton slot="start" fill="clear">
        <IonMenuButton menu="main-menu"></IonMenuButton>
      </IonButton>
    </IonToolbar>
    </IonHeader >
      <IonContent >
       
    
        <IonList>
        <IonItem dir="rtl">
            <IonLabel position="floating">الاسم</IonLabel>
        
            <IonInput  type="text" 
    
          value={name} 
          placeholder="مجد خصيب"  
          onIonChange={e => setName(e.detail.value!)}>  
          </IonInput>          
          </IonItem>
       <IonItem dir="rtl">
       <IonLabel   position="floating"> مكان الإقامة </IonLabel>
       <IonSelect value={location} placeholder="رام الله" onIonChange={e => setLocation(e.detail.value)}>
              <IonSelectOption value=" رام الله ">رام الله</IonSelectOption>
              <IonSelectOption value="الخليل">الخليل</IonSelectOption>
              <IonSelectOption value="نابلس"> نابلس</IonSelectOption>
              <IonSelectOption value="القدس">القدس</IonSelectOption>
              <IonSelectOption value="بيت لحم"> بيت لحم</IonSelectOption>
              <IonSelectOption value="جنين">جنين</IonSelectOption>
              <IonSelectOption value="فلفيلية">قلقيلية</IonSelectOption>
              <IonSelectOption value="أريحا">أريحا</IonSelectOption>
              <IonSelectOption value="طوباس">طوباس</IonSelectOption>
              <IonSelectOption value="سلفيت">سلفيت</IonSelectOption>
              <IonSelectOption value="طولكرم">طولكرم</IonSelectOption>
            </IonSelect>
       </IonItem>
       <IonItem dir="rtl">
       <IonLabel  position="floating">التخصص المرغوب فيه </IonLabel>
       <IonSelect value={major} placeholder="طب بشري" onIonChange={e => setMajor((e.detail.value))}>
            <IonSelectOption value=" العلوم">العلوم</IonSelectOption>
            <IonSelectOption value=" الطب البشري">الطب البشري</IonSelectOption>
              <IonSelectOption value=" الهندسة والتكنولوجيا">الهندسة والتكنولوجيا</IonSelectOption>
              <IonSelectOption value=" الأعمال والاقتصاد">الأعمال والاقتصاد</IonSelectOption>
              <IonSelectOption value=" الأداب">الأداب</IonSelectOption>
              <IonSelectOption value=" التربية">النربية</IonSelectOption>
              <IonSelectOption value=" الصيدلة و التمريض">الصيدلة والتمريض</IonSelectOption>
              <IonSelectOption value=" الحقوق والادارة">الحقوق و الادارة</IonSelectOption>
              <IonSelectOption value=" العلوم">العلوم</IonSelectOption>
            </IonSelect>
       </IonItem>
       <IonItem dir="rtl">
       <IonLabel className="type" position="floating">فرع  الثانوية</IonLabel> 
    
            <IonSelect value={tawjehiType} placeholder="علمي" onIonChange={e => setTawjehiType(e.detail.value)}>
              <IonSelectOption value=" علمي">علمي</IonSelectOption>
              <IonSelectOption value="أدبي">أدبي</IonSelectOption>
              <IonSelectOption value="تجاري"> تجاري</IonSelectOption>
              <IonSelectOption value="صناعي">صناعي</IonSelectOption>
              <IonSelectOption value="شرعي"> شرعي</IonSelectOption>
              <IonSelectOption value="تكنولوجي">تكنولوجي</IonSelectOption>
              <IonSelectOption value="فنادق">فنادق</IonSelectOption>
              <IonSelectOption value="زراعي">زراعي</IonSelectOption>
            </IonSelect>
         </IonItem>
         <IonItem dir="rtl">
         <IonLabel  position="floating"> معدل الثانوية العامة  </IonLabel>
         <IonInput  type="number" min="50" max="99.8"
           value={gpa}
            placeholder="99.3" 
            onIonChange={e => setGpa(e.detail.value!)}>  </IonInput>
         </IonItem >
         <IonItem dir="rtl">
         <IonLabel  className="desc" position="floating">الوصف</IonLabel> 
         <IonTextarea value={description} placeholder="منذ طفولتي كنت أحلم بأن أكون طبيباً لأساعد الناس وأن أكون متمي...." onIonChange={e => setDescription(e.detail.value!)}></IonTextarea>
    
         </IonItem>
    
         <IonButton onClick={()=>{handleCaseCreation()}}
             color="primary"
             expand="block"
              size="small">  أنشئ حالة 
              </IonButton>
        </IonList>
      </IonContent>
      </>
    
  );
  }
  return component;
};

export default CaseCreation;
