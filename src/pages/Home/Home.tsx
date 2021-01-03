import { IonButton, IonContent,  IonHeader,    IonItem,    IonList,    IonListHeader,    IonMenuButton,     IonTitle,  IonToolbar } from '@ionic/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Case from '../../components/Case/Case';
import { BASE_URL } from '../../containers/App';

const Home: React.FC = () => {
  const api=axios.create({
    baseURL:BASE_URL
  });
  const [casses,setCases]=useState<Array<CaseClass>>([]);
 useEffect( () => {
  console.log("Effect");

  const fetchData = async () => {
    console.log("fetch");
try{
  const data=  await api('/casses');
  console.log("fetched");

  console.log(data.data);
  setCases(data.data);
}
catch(err){
  alert(err.message);
}

}
  fetchData();
},[]);
  return (
    <>
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
        
    {casses?.map(data=>(<IonItem><Case 
author={data.name}
createdTime={data.createdTime}
title={"hi"}
description={data.description}/></IonItem>
    ))}

       </IonList>
     
      </IonContent>
      </>
  );
};

export default Home;