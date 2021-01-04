import { IonButton, IonContent,  IonHeader,    IonInfiniteScroll,    IonItem,    IonList,    IonListHeader,    IonMenuButton,     IonTitle,  IonToolbar, IonVirtualScroll } from '@ionic/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Case from '../../components/Case/Case';
import { BASE_URL } from '../../containers/App';
import { format } from 'timeago.js';
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
  const cassesData=data.data;

  console.log(data.data);
  
  setCases(data.data);
}
catch(err){
  alert(err.message);
}

}
  fetchData();
},[]);
const fullHeight={height:"100%"};

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
<IonInfiniteScroll >
      <IonList dir="rtl" style={fullHeight}>
    {casses?.map(data=>(<IonItem key={data._id}><Case 
author={data.name}
createdTime={format(data.createdTime,'ar')}
major={data.major}
description={data.description}/></IonItem>
    ))}
       </IonList>
</IonInfiniteScroll>
      </IonContent>
      </>
  );
};

export default Home;