import { IonItem, IonIcon, IonLabel } from "@ionic/react";
import { addOutline, heart, logIn, logOut, trashOutline } from "ionicons/icons";
import React from "react";

 const LoggedIn :React.FC<{click:()=>void}>=(props)=>
(<>
<IonItem routerLink="/caseCreation">
            <IonIcon icon={addOutline}slot="start"></IonIcon>
            <IonLabel>Create Case</IonLabel>
          </IonItem>
          <IonItem routerLink="/Favorite">
            <IonIcon icon={heart} slot="start"></IonIcon>
            <IonLabel>Favorites</IonLabel>
          </IonItem>
          <IonItem routerLink="/Trash">
            <IonIcon icon={trashOutline} slot="start"></IonIcon>
            <IonLabel>Trash</IonLabel>
          </IonItem>
          <IonItem onClick={props.click}>
            <IonIcon icon={logOut} slot="start"></IonIcon>
            <IonLabel>Sign Out</IonLabel>
          </IonItem>
          </>
          )
export default LoggedIn;