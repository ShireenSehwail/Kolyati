import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonContent, IonImg } from "@ionic/react";
import React from "react";

const PageNotFound: React.FC<{title:string}> = (props) => {
  
   const title=props.title!==undefined?props.title:"الصفحة غير موجودة";
 
    return(
        <>
        <IonHeader dir="rtl">
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
          <IonButton slot="start" fill="clear">
            <IonMenuButton menu="main-menu"></IonMenuButton>
          </IonButton>
        </IonToolbar>
      </IonHeader>
          <IonContent fullscreen color="light">
         
      <IonImg src={require("../../res/NotFoundArabic.svg")}/>
         
      

          </IonContent>
          </>
        );

}
export default PageNotFound;
 