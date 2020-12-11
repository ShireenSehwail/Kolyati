import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel } from "@ionic/react";
import {  addOutline, heart, homeOutline } from "ionicons/icons";
import React from "react";

const Nav:
React.FC<{isAuth:boolean;
  onSignInClick:()=>void;
  onSignOutClick:()=>void}
  >=(props)=>(
    <IonMenu menuId="main-menu" contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Menu
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          
          <IonItem routerLink="/Home">
            <IonIcon icon={homeOutline} slot="start"></IonIcon>
            <IonLabel>Home</IonLabel>
          </IonItem>
          <IonItem routerLink="/caseCreation">
            <IonIcon icon={addOutline}slot="start"></IonIcon>
            <IonLabel>Create Case</IonLabel>
          </IonItem>
          <IonItem routerLink="/Favorite">
            <IonIcon icon={heart} slot="start"></IonIcon>
            <IonLabel>Favorites</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
)
export default Nav;