import { IonCol, IonContent, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import React from 'react';
const FirstSlide:
React.FC=()=>{ 
const rowStyle={height:"400px"}
return(
<IonContent>
<IonGrid>
  <IonRow  >
    <IonCol >
    <IonImg style={rowStyle} src={require("../../../res/FirstSlide.svg")}/>

    </IonCol>
  </IonRow>
  <IonRow>
    <IonCol>
      <IonText>
      <h1>مرحباً بك في كُليتي</h1>
      </IonText>
      <IonText color="medium">
        <h6>هل شارفت على التخرج ولم تحدد طريقك الدراسي؟</h6>
      </IonText>
    </IonCol>
  </IonRow>
</IonGrid>
</IonContent>
  )}
export default FirstSlide;