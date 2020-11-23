import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from "@ionic/react";
import React from "react";

 const Case :React.FC<{author:string;createdTime:string;title:string;description:string}>=(props)=>
(<IonCard>
    <IonCardHeader color="light   ">
      <IonCardSubtitle>{props.author}</IonCardSubtitle>
      <IonCardSubtitle>{props.createdTime}</IonCardSubtitle>

      <IonCardTitle>{props.title}</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      {props.description}
</IonCardContent>
  </IonCard>
          )
export default Case;