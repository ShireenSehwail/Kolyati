import {  IonButton, IonContent, IonHeader, IonList, IonListHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import Case from "../Case/Case";

 const Main :React.FC=()=>
(<>
    <IonHeader dir="rtl">
    <IonToolbar>
      <IonTitle>الصفحة الرئيسية</IonTitle>
      <IonButton slot="start" fill="clear">
        <IonMenuButton menu="main-menu"></IonMenuButton>
      </IonButton>
    </IonToolbar>
  </IonHeader>
      <IonContent fullscreen>
<IonListHeader dir="rtl">
 <h2> أحدث الحالات </h2>
</IonListHeader>
      <IonList dir="rtl" >
        
    {/* {casses?.map(data=>(<IonItem><Case 
author={data.author}
createdTime={data.createdTime}
title={data.title}
description={data.description}/></IonItem>
    ))} */}

       </IonList>
     
      </IonContent>
      </>
          )
export default Main;