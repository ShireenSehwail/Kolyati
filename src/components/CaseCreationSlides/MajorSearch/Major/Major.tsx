import classes from "./Major.module.css";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import React from "react";
import { cashOutline, checkmarkCircleOutline, timeOutline } from "ionicons/icons";
 const Major :React.FC<{name:string,acceptanceRate:string,numberOfHours:string,hourRate:string,university:string}>=(props)=>
{
return (
        <IonCard dir="rtl"  className={classes.Card}>
          <IonCardHeader>
            <IonCardTitle>{props.name}</IonCardTitle>
            <IonCardSubtitle class={classes.SubTitle}>{props.university }</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow class={classes.Row}>
              <IonCol size="1">
             <IonIcon icon={checkmarkCircleOutline}/>
              </IonCol>
              <IonCol size="2">
              {props.acceptanceRate}
              </IonCol>
              <IonCol size="1">
              <IonIcon icon={timeOutline}/>
              </IonCol>
              <IonCol size="2">
              {props.numberOfHours}

              </IonCol>
              <IonCol size="1">
              <IonIcon icon={cashOutline}/>
              </IonCol>
              <IonCol size="2">
              {props.hourRate}

              </IonCol>
  
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
)
        }

export default Major;