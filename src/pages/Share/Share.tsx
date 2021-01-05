import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonContent, IonImg, IonRow, IonCol, IonGrid, IonText, IonToast } from "@ionic/react";
import React, { useState } from "react";
import classes from './Share.module.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { LOCAL_STORAGE_KEY_CASE_ID } from "../../containers/App";

const SharePage: React.FC = () => {
  const textCenter={  "textAlign": "center"}
  const caseId= localStorage.getItem(LOCAL_STORAGE_KEY_CASE_ID);
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
    <CopyToClipboard text={""+caseId}>
    <IonButton color="danger" onClick={() => setShowToast(true)}>
        <IonText color="light">
        مشاركة
        </IonText>
      </IonButton>
</CopyToClipboard>
     
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
 