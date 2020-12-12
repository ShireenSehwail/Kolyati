import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './CaseCreation.css';
import{ star, }  from 'ionicons/icons';

const CaseCreation: React.FC = () => {

  const [name, setName] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [major, setMajor] = useState<string>();
  const [checked, setChecked] = useState(true);
  const [tawjihiType, setTawjihiType] = useState<string>();
  const [gpa, setGpa] = useState<string>();
  const [desc, setDesc] = useState<string>();

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
        <IonGrid dir="rtl" >

        <IonRow >
        <IonCol>
              <IonLabel   position="fixed"> الاسم  </IonLabel>
            </IonCol>
        <IonCol>
         
         <IonInput  type="text" 
          value={name} 
          placeholder="اسمك"  
          onIonChange={e => setName(e.detail.value!)}>  </IonInput>

       </IonCol>
           
          </IonRow>
      
          <IonRow>
          <IonCol>
              
              <IonLabel   position="fixed"> الأولوية 1 </IonLabel>
              
            </IonCol>
          <IonCol> 
            <IonSelect value={location} placeholder="اختر-موقعك" onIonChange={e => setLocation(e.detail.value)}>
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
            </IonCol>
           
            
          </IonRow>

           <IonRow>
           <IonCol>
             <IonLabel  position="fixed"> الأولوية 2 </IonLabel>
           </IonCol>

            <IonCol>
              <IonSelect value={major} placeholder="اختر التخصص المفضل لديك" onIonChange={e => setMajor((e.detail.value))}>
              <IonSelectOption value=" الهندسة والتكنولوجيا">الهندسة والتكنولوجيا</IonSelectOption>
              <IonSelectOption value=" الأعمال والاقتصاد">الأعمال والاقتصاد</IonSelectOption>
              <IonSelectOption value=" الأداب">الأداب</IonSelectOption>
              <IonSelectOption value=" التربية">النربية</IonSelectOption>
              <IonSelectOption value=" الصيدلة و التمريض">الصيدلة والتمريض</IonSelectOption>
              <IonSelectOption value=" الحقوق والادارة">الحقوق و الادارة</IonSelectOption>
              <IonSelectOption value=" العلوم">العلوم</IonSelectOption>
            </IonSelect>
            </IonCol>

           
          </IonRow>

          <IonRow>
          <IonCol>
              <IonLabel className="privacy" position="fixed" > الخصوصية 
              <IonIcon    icon={star}  slot="end"color="danger">
                </IonIcon>
               </IonLabel>

            </IonCol>
          <IonCol>
              
              <IonToggle color="danger" 
              checked={checked} 
              onIonChange={e => setChecked(e.detail.checked)} /> 
            
            </IonCol>
           
          </IonRow>

          <IonRow>
          <IonCol>

          <IonLabel  className="desc" position="fixed"> الوصف
           <IonIcon    slot={star}  icon={star} color="danger"/>
           </IonLabel> 
           </IonCol>
          <IonCol>
              <IonInput  type="text" 
              value={desc}
              placeholder="أضف وصفاً" 
               onIonChange={e => setDesc(e.detail.value!)}>   </IonInput>
            </IonCol>

          </IonRow>

          <IonRow>
          <IonCol>

            <IonLabel className="type" position="fixed"> فرع  الثانوية  
            <IonIcon slot="start" icon={star} color="danger"/>
              </IonLabel>
             </IonCol>
            <IonCol>
          
              <IonSelect value={tawjihiType} placeholder="ما هو فرعك في الثانوية " onIonChange={e => setTawjihiType(e.detail.value)}>
              <IonSelectOption value=" Scientific">عملي</IonSelectOption>
              <IonSelectOption value="Literary">أدبي</IonSelectOption>
              <IonSelectOption value="Commercial"> تجاري</IonSelectOption>
              <IonSelectOption value="Industrial">صناعي</IonSelectOption>
              <IonSelectOption value="Forensic"> شرعي</IonSelectOption>ش
              <IonSelectOption value="Technological">تكنولوجي</IonSelectOption>
              <IonSelectOption value="Hotelier">فنادق</IonSelectOption>
              <IonSelectOption value="Agricultural">زراعي</IonSelectOption>
            </IonSelect>
              
            </IonCol>
           
          </IonRow>

          <IonRow>
          <IonCol>
              
              <IonLabel  position="fixed"> معدل الثانوية العامة  </IonLabel>
              
            </IonCol>
          <IonCol>
          
          <IonInput  type="text" 
           value={gpa}
            placeholder="أدخل معدلك في الثانوية " 
            onIonChange={e => setGpa(e.detail.value!)}>  </IonInput>
        
            </IonCol>
           
           
          </IonRow>
          <IonRow>
            <IonCol/>
            <IonCol/>
            <IonCol/>
            <IonCol>
            <IonButton 
             color="danger"
              size="small">  أنشئ حالة </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
      </>
  );
};

export default CaseCreation;
