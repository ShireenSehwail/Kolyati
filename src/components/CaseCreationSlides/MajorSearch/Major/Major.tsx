import classes from "./Major.module.css";
import { IonCard, IonCardHeader, IonCardSubtitle, IonIcon, IonCardTitle } from "@ionic/react";
import React from "react";
 const Major :React.FC<{name:string}>=({name})=>
{
return (
        <IonCard dir="rtl"  className={classes.Card}>
          <IonCardHeader>
            <IonCardSubtitle>{name}</IonCardSubtitle>
            <IonCardTitle ></IonCardTitle>
          </IonCardHeader>
        </IonCard>
)
        }

export default Major;