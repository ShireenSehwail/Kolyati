import {  IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonList, IonListHeader, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from "@ionic/react";
import { school } from "ionicons/icons";
import React from "react";

 const Welcome :React.FC=()=>{const slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  return( <IonPage dir="rtl">
    <IonHeader>
      <IonToolbar>
        <IonTitle> 
        <IonGrid>
      <IonRow>
        <IonCol size=".5">
            <IonIcon icon={school   }color="success">
            </IonIcon>
        </IonCol>
        <IonCol size="11.5">           
         مرحباً بك في مسألتي
</IonCol>

      </IonRow>
      </IonGrid>
  
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <h1>Slide 1</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 2</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 3</h1>
      </IonSlide>
    </IonSlides>
    </IonContent>
  </IonPage>
          )}
export default Welcome;