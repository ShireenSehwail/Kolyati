import { IonContent, IonGrid, IonRow, IonCol, IonImg, IonText, IonButton } from "@ionic/react";
import React from "react";
import classes from "./CaseNotFound.module.css";
import { useHistory } from "react-router-dom";

 const CaseNotFound :React.FC=()=>
{
const textCenter={ textAlign: "center"}
const history =useHistory();
const creaCase=()=>{
  history.push("/caseCreation");
}
return (
<IonContent>
  <IonGrid style={textCenter}>
    <IonRow  >
      <IonCol >
      <IonImg className={classes.rowStyle} src={require("../../res/CaseNotFound.svg")}/>
      </IonCol>
    </IonRow>
    <IonRow className="ion-align-items-center">
      <IonCol >
        <IonText>
        <h1>لم يتم العثور على حالاتك</h1>
        </IonText>
      </IonCol>
    </IonRow>
    {/* <IonRow className="ion-align-items-center">
      <IonCol>
        <IonButton className={classes.btnColor} onClick={creaCase}>
          <IonText color="light">
          يلا نعمل وحدة  
          </IonText>
        </IonButton>
      </IonCol>
    </IonRow> */}
  </IonGrid>
  </IonContent>
          )}

export default CaseNotFound;