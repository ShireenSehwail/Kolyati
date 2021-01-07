import classes from "./Major.module.css";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import React from "react";
import { cashOutline, checkmarkCircleOutline, timeOutline } from "ionicons/icons";
 const Major :React.FC<{name:string,acceptanceRate:string,numberOfHours:string,hourRate:string,university:string}>=(props)=>
{const marginLeft={"margin-left":"5px"};
return (
        <IonCard dir="rtl"  className={classes.Card}>
          <IonCardHeader>
            <IonCardTitle>{props.name}</IonCardTitle>
            <IonCardSubtitle class={classes.SubTitle}>{props.university }</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow class={classes.Row}>
              
              <IonCol >
              <span className={classes.Span}>{props.acceptanceRate}</span>

              <IonIcon icon={checkmarkCircleOutline} className={classes.Icon}/>

              </IonCol>
           
              <IonCol >
              <span className={classes.Span}>{props.numberOfHours}</span>

              <IonIcon icon={timeOutline} className={classes.Icon}/>

              </IonCol>
             
              <IonCol >
              <span className={classes.Span}>{props.hourRate}</span>
              <IonIcon icon={cashOutline} className={classes.Icon}/>

              </IonCol>
  
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
)
        }

export default Major;