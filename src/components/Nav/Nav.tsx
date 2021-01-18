import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel } from "@ionic/react";
import {  addOutline, briefcase, homeOutline, search, shareSocial } from "ionicons/icons";
import React from "react";
import { LOCAL_STORAGE_KEY_CASSES_ID } from "../../containers/App";

const Nav:
React.FC=(props)=>{
  let key="/Case/";
  const getKey=()=>{
    const cassesId= localStorage.getItem(LOCAL_STORAGE_KEY_CASSES_ID);
    if(cassesId!==undefined&&cassesId!==null)
    key+=cassesId![cassesId!.length-1];
  }
  getKey();
  return (
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
          <IonItem  routerLink="/Search">
            <IonIcon icon={search} slot="start"></IonIcon>
            <IonLabel> ابحث عن حالة</IonLabel>
          </IonItem>
          <IonItem   routerLink="/caseCreation">
            <IonIcon icon={addOutline}slot="start"></IonIcon>
            <IonLabel> أنشئ حالة </IonLabel>
          </IonItem>
          <IonItem   routerLink={key}>
            <IonIcon icon={briefcase}slot="start"></IonIcon>
            <IonLabel> حالتي </IonLabel>
          </IonItem>
          <IonItem  routerLink="/Share">
      <IonIcon icon={shareSocial} slot="start"></IonIcon>
      <IonLabel> مشاركة حالتي</IonLabel>
    </IonItem>
          {/* <IonItem  routerLink="/Unversities">
            <IonIcon icon={schoolOutline} slot="start"></IonIcon>
            <IonLabel>الجامعات والتخصصات</IonLabel>
          </IonItem> */}
        </IonList>
      </IonContent>
    </IonMenu>
)}
export default Nav;