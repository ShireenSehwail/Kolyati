import {  IonGrid, IonRow, IonCol, IonImg } from "@ionic/react";
import React from "react";
import classes from "./MajorNotFound.module.css";

 const MajorNotFound :React.FC=()=>
{
const textCenter={ textAlign: "center"}

return (

  <IonGrid style={textCenter}>
    <IonRow  >
      <IonCol >
      <IonImg className={classes.rowStyle} src={require("../../../../res/MajorNotFound.svg")}/>
      </IonCol>
    </IonRow>
    <IonRow>
        <IonCol>
            <h3 className={classes.title}>التخصص غير موجود حاول مرة أخرى</h3>
        </IonCol>
    </IonRow>
  </IonGrid>
          )}

export default MajorNotFound;