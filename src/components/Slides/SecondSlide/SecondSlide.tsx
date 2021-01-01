import { IonCol, IonContent, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import React from 'react';
import classes from './SecondSlide.module.css';
const SecondSlide:
React.FC=()=>{ 
return(
<IonContent>
<IonGrid>
  <IonRow  >
    <IonCol >
    <IonImg className={classes.rowStyle} src={require("../../../res/SecondSlide.svg")}/>

    </IonCol>
  </IonRow>
  <IonRow>
    <IonCol>
      <IonText>
      <h1>محتار بالتخصص والجامعة؟</h1>
      </IonText>
      <IonText color="medium">
        <h6>خلصت توجيهي وبدك تدخل تخصص بس مش عارف ايش تختار؟</h6>
      </IonText>
    </IonCol>
  </IonRow>
</IonGrid>
</IonContent>
  )}
export default SecondSlide;