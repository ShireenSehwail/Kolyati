import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import React from 'react';
import classes from './ThirdSlide.module.css';
const ThirdSlide:
React.FC<{click:()=>void}>=(props)=>{ 
 
return(
<IonContent>
<IonGrid>
  <IonRow  >
    <IonCol >
    <IonImg className={classes.rowStyle} src={require("../../../res/ThirdSlide.svg")}/>
    </IonCol>
  </IonRow>
  <IonRow>
    <IonCol>
      <IonText>
      <h1>ما تستنى أكثر</h1>
      </IonText>
      <IonText color="medium">
        <h6>نوفرلك المعلومات الي بتحتاجها عن الجامعات والتخصصات المتاحة</h6>
        <h6>بالإضافة لآراء الناس بمسألتك لنساعدك توصل لجواب</h6>
      </IonText>
    </IonCol>
  </IonRow>
  <IonRow>
    <IonCol>
      <IonButton color="primary" onClick={props.click}>
        <IonText color="light">
        يلا إسأل  
        </IonText>
      </IonButton>
    </IonCol>
  </IonRow>
</IonGrid>
</IonContent>
  )}
export default ThirdSlide;