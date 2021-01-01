import { IonCol, IonContent, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import React from 'react';
import classes from './FirsSlide.module.css';
const FirstSlide:
React.FC=()=>{ 
return(
<IonContent>
<IonGrid>
  <IonRow  >
    <IonCol >
    <IonImg className={classes.rowStyle} src={require("../../../res/FirstSlide.svg")}/>

    </IonCol>
  </IonRow>
  <IonRow>
    <IonCol>
      <IonText>
      <h1>مرحباً بك في كُليتي</h1>
      </IonText>
      <IonText color="medium">
        <h6>هل شارفت على التخرج ولم تحدد طريقك الجامعي؟</h6>
      </IonText>
    </IonCol>
  </IonRow>
</IonGrid>
</IonContent>
  )}
export default FirstSlide;