import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption } from "@ionic/react";
import React, { useRef } from "react";
import classes from './UserDetailsFetch.module.css';


 const UserDetailsFetch :
 React.FC<{name:string,
    location:string,
    description:string,
    setName: (name:string)=>void,
    setLocation: (location:string)=>void,
    setDescritpion: (description:string)=>void,
    handleClick:()=>void
}>=
    ({name,
      setName,
       location,
       setLocation,
       description,
       setDescritpion,
      handleClick})=>
{const style={marginRight:"20px",color:"#000"};
const nameInputRef=useRef<HTMLIonInputElement>(null);
const locationSelectRef=useRef<HTMLIonSelectElement>(null);
const descriptionInputRef=useRef<HTMLIonInputElement>(null);
function handleNameChange(){
setName(""+nameInputRef.current!.value);
}
function handleLocationChange(){
  setLocation(""+locationSelectRef.current!.value);
  }
function handleDescriptionChange(){
    setDescritpion(""+descriptionInputRef.current!.value);
   }

   

   
  
return (<>
<h3 style={style}> أدخل معلوماتك  </h3>
<IonGrid className={classes.CenterText} dir="rtl">
<IonRow >
  <IonCol className={classes.Col}>
  <IonItem  className={classes.Large}>
<IonLabel color="medium"  position="floating" >الاسم</IonLabel>
<IonInput color="dark"  
type="text" 
value={name}
ref={nameInputRef}
onIonChange={handleNameChange}
></IonInput>
</IonItem>
</IonCol>
</IonRow>
<IonRow>
<IonCol className={classes.Col}>
<IonItem className={classes.Large}>

<IonLabel color="medium"  position="floating" >
  مكان الاقامة 
</IonLabel>

<IonSelect  
color="dark" 
value={location} 
onIonChange={handleLocationChange}
placeholder="" dir="rtl" 
ref={locationSelectRef}>
              <IonSelectOption value="رام الله">رام الله</IonSelectOption>
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
    </IonCol>
</IonRow>
<IonRow>
<IonCol className={classes.Col}>
   <IonItem className={classes.Large}>
              
<IonLabel color="medium"  position="floating" >الوصف </IonLabel>
<IonInput color="dark"  
type="text" 
value={description}
ref={descriptionInputRef}
onIonChange={handleDescriptionChange}
></IonInput>
</IonItem>
</IonCol>
</IonRow>


 
<IonButton 
color="primary" 
onClick={handleClick}
className={classes.btn}
>
إنشاء
</IonButton>
      </IonGrid >

</>)
        }

export default UserDetailsFetch;