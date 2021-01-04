import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonContent, IonImg, IonRow, IonCol, IonGrid, IonText, IonToast } from "@ionic/react";
import React, { useState } from "react";
import classes from './Search.module.css';

const SharePage: React.FC = () => {
  const textCenter={  "text-align": "center"}
  const [showToast, setShowToast] = useState(false);

    return(
        <>
        <IonHeader dir="rtl">
        <IonToolbar>
          <IonTitle>شارك حالتي</IonTitle>
          <IonButton slot="start" fill="clear">
            <IonMenuButton menu="main-menu"></IonMenuButton>
          </IonButton>
        </IonToolbar>
      </IonHeader>
          <IonContent fullscreen color="light"  style={textCenter}>
         
          <IonGrid >
  <IonRow  >
    <IonCol >
    <IonImg className={classes.rowStyle} src={require("../../res/follow.svg")}/>
    </IonCol>
  </IonRow>
  <IonRow>
    <IonCol>
      <IonText>
      <h1>إحكي لأصحابك ومعارفك</h1>
      </IonText>
      <IonText color="medium">
        <h6>شارك حالتك ليساعدوك تختار تخصصك</h6>
      </IonText>
    </IonCol>
  </IonRow>
  <IonRow>
    <IonCol>
  
    </IonCol>
  </IonRow>
</IonGrid>
<IonToast 
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="تم نسخ مُحدد الحالة"
        cssClass={classes.centerText}
        
        color="success"
        duration={200}
      />
          </IonContent>
          </>
        );

}
export default SharePage;
 