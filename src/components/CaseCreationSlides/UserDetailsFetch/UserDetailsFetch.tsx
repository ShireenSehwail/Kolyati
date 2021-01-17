import { IonButton, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption } from "@ionic/react";
import { locationOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import classes from './UserDetailsFetch.module.css';


 const UserDetailsFetch :React.FC<{name:string, location:string, description:string;setName: (name:string)=>void;setLocation: (location:string)=>void;setDescritpion: (description:string)=>void;}>=({name,setName, location,setLocation,description,setDescritpion})=>
{const style={marginRight:"20px",color:"#636363"};
const whiteBackGroundColor={"--ion-background-color":"#fff"};
const inputRef=useRef<HTMLIonInputElement>(null);


const handleName=()=>{
  if(inputRef.current?.value==="")
 { 
  return;
 }
  setName(""+inputRef.current?.value);
}

const handleLocation=()=>{
    if(inputRef.current?.value==="")
   { 
    return;
   }
    setLocation(""+inputRef.current?.value);
  }

  const handleDEscription=()=>{
    if(inputRef.current?.value==="")
   { 
    return;
   }
   setDescritpion(""+inputRef.current?.value);
  }

return (<>
<h3 style={style}> أدخل معلوماتك هنا  </h3>
<IonGrid >

<IonRow >
  <IonCol className={classes.Col}>
  <IonItem  className={classes.Large}>
<IonLabel color="black"  position="floating" >الاسم</IonLabel>
<IonInput color="black"  
type="text" 
value={name}
ref={inputRef}
></IonInput>
</IonItem>

<IonItem className={classes.Large}>

<IonLabel color="black"  position="floating" >مكان الاقامة 
<IonIcon icon={locationOutline} />
</IonLabel>

<IonSelect  color="black" value={location} placeholder="" >
              <IonSelectOption value=" رام الله ">رام الله</IonSelectOption>
              <IonSelectOption value="الخليل">الخليل</IonSelectOption>
              <IonSelectOption value="نابلس"> نابلس</IonSelectOption>
              <IonSelectOption value="القدس">القدس</IonSelectOption>
              <IonSelectOption value="بيت لحم"> بيت لحم</IonSelectOption>
              <IonSelectOption value="جنين">جنين</IonSelectOption>
              <IonSelectOption value="قلقيلية">قلقيلية</IonSelectOption>
              <IonSelectOption value="أريحا">أريحا</IonSelectOption>
              <IonSelectOption value="طوباس">طوباس</IonSelectOption>
              <IonSelectOption value="سلفيت">سلفيت</IonSelectOption>
              <IonSelectOption value="طولكرم">طولكرم</IonSelectOption>
            </IonSelect>
            </IonItem>

   <IonItem className={classes.Large}>
              
<IonLabel color="black"  position="floating" >الوصف </IonLabel>
<IonInput color="black"  
type="text" 
value={description}
ref={inputRef}

></IonInput>
</IonItem>
</IonCol>
</IonRow>
<IonRow>
  <IonCol/>
  <IonCol/>
 
<IonCol className={classes.Col}>
        <IonButton color="primary" onClick={handleName}>
          أضف معلوماتي 
          </IonButton>
        </IonCol>
        <IonCol/>
        <IonCol/>
        </IonRow>
      </IonGrid >

</>)
        }

export default UserDetailsFetch;