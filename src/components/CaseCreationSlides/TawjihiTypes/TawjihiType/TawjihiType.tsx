import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from "@ionic/react";
import React from "react";
import classes from './TawjihiType.module.css'
 const TawjihiType :React.FC<{type:string;icon:string;click:(data:string)=>void}>=(props)=>
{const whiteBackGroundColor={"--ion-background-color":"#fff"};

return (
<IonCard dir="rtl" className={classes.Card} style={whiteBackGroundColor}onClick={()=>props.click(props.type)} >
          <IonCardHeader>
            <IonCardSubtitle><IonIcon  className={classes.Icon} icon={props.icon} color="dark"/></IonCardSubtitle>
            <IonCardTitle >{props.type}</IonCardTitle>
          </IonCardHeader>
        </IonCard>)
        }

export default TawjihiType;