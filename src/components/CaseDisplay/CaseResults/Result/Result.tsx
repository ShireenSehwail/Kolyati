import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import React from "react";
import major from "../../../../Models/major";

 const Result :React.FC<{major:major}>=({major})=>
{ return(
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>{major.university}</IonCardSubtitle>
            <IonCardTitle>{major.name}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>{major.points}</IonCardContent>
          </IonCard>
)
          }

export default Result;