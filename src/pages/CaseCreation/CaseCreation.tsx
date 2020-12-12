import { IonButton,  IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton,  IonSelect, IonSelectOption, IonTextarea, IonTitle,  IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './CaseCreation.css';
import {LOCAL_STORAGE_KEY_CASE} from '../../containers/App'
const CaseCreation: React.FC = () => {

  const [name, setName] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [major, setMajor] = useState<string>();
  const [checked, setChecked] = useState(true);
  const [tawjihiType, setTawjihiType] = useState<string>();
  const [gpa, setGpa] = useState<string>();
  const [description, setDescription] = useState<string>();
  function handleCaseCreation(){
    localStorage.setItem(
      LOCAL_STORAGE_KEY_CASE,JSON.stringify(
        {name:name,
          location:location,
          major:major,
          checked:checked,
          tawjihiType:tawjihiType,
          gpa:gpa,
          description:description
        }));

  }
  return (
    <>
    <IonHeader dir="rtl">
    <IonToolbar>
      <IonTitle>أنشئ حالة جديدة</IonTitle>
      <IonButton slot="start" fill="clear">
        <IonMenuButton menu="main-menu"></IonMenuButton>
      </IonButton>
    </IonToolbar>
  </IonHeader >
      <IonContent >
        <IonHeader collapse="condense" dir="rtl">
          <IonToolbar>
            <IonTitle size="large">CaseCreation</IonTitle>
          </IonToolbar>
        </IonHeader>

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
              <IonSelectOption value=" Ramallah">رام الله</IonSelectOption>
              <IonSelectOption value="Hebron">الخليل</IonSelectOption>
              <IonSelectOption value="Nablus"> نابلس</IonSelectOption>
              <IonSelectOption value="Jerusalem">القدس</IonSelectOption>
              <IonSelectOption value="Betlahem"> بيت لحم</IonSelectOption>
              <IonSelectOption value="jenin">جنين</IonSelectOption>
              <IonSelectOption value="Qalqilya">قلقيلية</IonSelectOption>
              <IonSelectOption value="Jericho">أريحا</IonSelectOption>
              <IonSelectOption value="Tobas">طوباس</IonSelectOption>
              <IonSelectOption value="Salfit">سلفيت</IonSelectOption>
            </IonSelect>
       </IonItem>
       <IonItem dir="rtl">
       <IonLabel  position="floating">التخصص المرغوب فيه </IonLabel>
       <IonSelect value={major} placeholder="طب بشري" onIonChange={e => setMajor((e.detail.value))}>
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

            <IonSelect value={tawjihiType} placeholder="علمي" onIonChange={e => setTawjihiType(e.detail.value)}>
              <IonSelectOption value=" Scientific">عملي</IonSelectOption>
              <IonSelectOption value="Literary">أدبي</IonSelectOption>
              <IonSelectOption value="Commercial"> تجاري</IonSelectOption>
              <IonSelectOption value="Industrial">صناعي</IonSelectOption>
              <IonSelectOption value="Forensic"> شرعي</IonSelectOption>
              <IonSelectOption value="Technological">تكنولوجي</IonSelectOption>
              <IonSelectOption value="Hotelier">فنادق</IonSelectOption>
              <IonSelectOption value="Agricultural">زراعي</IonSelectOption>
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
};

export default CaseCreation;
