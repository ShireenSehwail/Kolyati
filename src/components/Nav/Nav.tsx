import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel } from "@ionic/react";
import {  addOutline, briefcase, businessSharp, heart, homeOutline, personAddSharp } from "ionicons/icons";
import React from "react";

const Nav:
React.FC=(props)=>(
    <IonMenu side="end" menuId="main-menu" contentId="main"  dir="rtl" >
      <IonHeader dir="rtl">
        <IonToolbar >
          <IonTitle >
             القائمة
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonList dir="rtl" >
          
          <IonItem  routerLink="/Home">
            <IonIcon icon={homeOutline} slot="start"></IonIcon>
            <IonLabel>الصفحة الرئيسية</IonLabel>
          </IonItem>
          <IonItem   routerLink="/caseCreation">
            <IonIcon icon={addOutline}slot="start"></IonIcon>
            <IonLabel> أنشئ حالة </IonLabel>
          </IonItem>
          <IonItem   routerLink="/myCase">
            <IonIcon icon={briefcase}slot="start"></IonIcon>
            <IonLabel> حالتي </IonLabel>
          </IonItem>
          <IonItem  routerLink="/Favorite">
            <IonIcon icon={heart} slot="start"></IonIcon>
            <IonLabel>المفضلة</IonLabel>
          </IonItem>

          <IonItem  routerLink="/Invite">
            <IonIcon icon={personAddSharp} slot="start"></IonIcon>
            <IonLabel>دعوة الاصدقاء</IonLabel>
          </IonItem>

          <IonItem  routerLink="/University">
            <IonIcon icon={businessSharp} slot="start"></IonIcon>
            <IonLabel> معلومات عن الجامعات</IonLabel>
          </IonItem>
          
          
        </IonList>
      </IonContent>
    </IonMenu>
)
export default Nav;