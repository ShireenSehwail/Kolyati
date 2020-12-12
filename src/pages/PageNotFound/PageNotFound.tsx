import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonContent, IonImg, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";

const PageNotFound: React.FC = () => {
   
    return(
        <>
        <IonHeader dir="rtl">
        <IonToolbar>
          <IonTitle>الصفحة غير موجودة</IonTitle>
          <IonButton slot="start" fill="clear">
            <IonMenuButton menu="main-menu"></IonMenuButton>
          </IonButton>
        </IonToolbar>
      </IonHeader>
          <IonContent fullscreen color="danger">
         
      <IonImg src={require("../../res/NotFoundArabic.jpg")}/>
         
      

          </IonContent>
          </>
        );

}
export default PageNotFound;
 