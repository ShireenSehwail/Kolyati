import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel } from "@ionic/react";
import {  homeOutline } from "ionicons/icons";
import React from "react";
import LoggedIn from '../LoggedIn/LoggedIn'
import LogIn from '../LogIn/LogIn'

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
          {props.isAuth?<LoggedIn click={props.onSignOutClick}/>:<LogIn click={props.onSignInClick}/>}
        </IonList>
      </IonContent>
    </IonMenu>
)
export default Nav;