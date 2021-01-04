import { IonContent, IonGrid, IonRow, IonCol, IonImg, IonText, IonButton } from "@ionic/react";
import React from "react";
import classes from "./CaseIsCreated.module.css";
import { useHistory } from "react-router-dom";

 const CaseIsCreated :React.FC=()=>
{
const textCenter={  textAlign: "center"}
const history =useHistory();
const creaCase=()=>{
  history.push("/myCase");
}
return (
<IonContent>
  <IonGrid style={textCenter}>
    <IonRow  >
      <IonCol >
      <IonImg className={classes.rowStyle} src={require("../../res/CaseIsCreated.svg")}/>
      </IonCol>
    </IonRow>
    <IonRow className="ion-align-items-center">
      <IonCol >
        <IonText>
        <h1>نسيت حالتك؟</h1>
        </IonText>
      </IonCol>
    </IonRow>
    <IonRow className="ion-align-items-center">
      <IonCol>
        <IonButton className={classes.btnColor} onClick={creaCase}>
          <IonText color="light">
          يلا نتذكرها مع بعض
          </IonText>
        </IonButton>
      </IonCol>
    </IonRow>
  </IonGrid>
  </IonContent>
          )}

export default CaseIsCreated;