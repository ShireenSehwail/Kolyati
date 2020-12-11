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

  return (
    <>
    <IonHeader>
    <IonToolbar>
      <IonTitle>Create a new case</IonTitle>
      <IonButton slot="start" fill="clear">
        <IonMenuButton menu="main-menu"></IonMenuButton>
      </IonButton>
    </IonToolbar>
  </IonHeader>
      <IonContent >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">CaseCreation</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>


        <IonRow>
            <IonCol>
              
              <IonLabel   position="fixed"> Name </IonLabel>
              
            </IonCol>
            <IonCol>
         
              <IonInput  type="text" 
               value={name} 
               placeholder="your_Name"  
               onIonChange={e => setName(e.detail.value!)}>  </IonInput>
          
            </IonCol>
          </IonRow>


          <IonRow>
            <IonCol>
              
              <IonLabel   position="fixed"> prefrence 1 </IonLabel>
              
            </IonCol>
            <IonCol> 
            <IonSelect value={location} placeholder="Select your Location" onIonChange={e => setLocation(e.detail.value)}>
              <IonSelectOption value=" Ramallah">Ramallah</IonSelectOption>
              <IonSelectOption value="Hebron">Hebron</IonSelectOption>
              <IonSelectOption value="Nablus"> Nablus</IonSelectOption>
              <IonSelectOption value="Jerusalem">Jerusalem</IonSelectOption>
              <IonSelectOption value="Betlahem"> Betlahem</IonSelectOption>
              <IonSelectOption value="jenin">jenin</IonSelectOption>
              <IonSelectOption value="Qalqilya">Qalqilya</IonSelectOption>
              <IonSelectOption value="Jericho">Jericho</IonSelectOption>
              <IonSelectOption value="Tobas">tobas</IonSelectOption>
              <IonSelectOption value="Salfit">salfit</IonSelectOption>
            </IonSelect>
          
          
            </IonCol>
          </IonRow>

           <IonRow>
            <IonCol>
             
              <IonLabel  position="fixed"> prefrence 2 </IonLabel>
             
            </IonCol>
            <IonCol>
              
              <IonInput  type="text"  
              value={major}
               placeholder="prefered_major" 
                onIonChange={e => setMajor(e.detail.value!)}>  </IonInput>
              
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              
              <IonLabel className="privacy" position="fixed" > Privacy
              <IonIcon  icon={star} color="danger">
                </IonIcon>
           
               </IonLabel>
              
            </IonCol>
            <IonCol>
            <IonSelect value={major} placeholder="Select your prefered major" onIonChange={e => setMajor((e.detail.value))}>
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

              <IonLabel  className="desc" position="fixed"> Description
              <IonIcon    slot={star}  icon={star} color="danger"/>
              </IonLabel> 
            </IonCol>
            <IonCol>
              <IonInput  type="text" >  </IonInput>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>

              <IonLabel className="type" position="fixed">TawjihiType 
              <IonIcon slot="end" icon={star} color="danger"/>
             
              </IonLabel>
              
            </IonCol>
            <IonCol>
          
              <IonSelect value={tawjihiType} placeholder="Select your Type" onIonChange={e => setTawjihiType(e.detail.value)}>
              <IonSelectOption value=" Scientific">Scientific</IonSelectOption>
              <IonSelectOption value="Literary">Literary</IonSelectOption>
              <IonSelectOption value="Commercial"> Commercial</IonSelectOption>
              <IonSelectOption value="Industrial">Industrial</IonSelectOption>
              <IonSelectOption value="Forensic"> Forensic</IonSelectOption>ش
              <IonSelectOption value="Technological">Technological</IonSelectOption>
              <IonSelectOption value="Hotelier">Hotelier</IonSelectOption>
              <IonSelectOption value="Agricultural">Agricultural</IonSelectOption>
            </IonSelect>
              
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              
              <IonLabel  position="fixed"> Gpa </IonLabel>
              
            </IonCol>
            <IonCol>
          
              <IonInput  type="text" 
               value={gpa}
                placeholder="gpa" 
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
              size="small"> create Case </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
      </>
  );
};

export default CaseCreation;
