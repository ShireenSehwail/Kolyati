import { IonButton, IonContent,  IonHeader,    IonItem,    IonList,    IonListHeader,    IonMenuButton,     IonTitle,  IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import Case from '../../components/Case/Case';

const Home: React.FC = () => {

  const casses=[{author:"Majd Khasib",createdTime:"2 minutes ago",title:"Help ME!",description:"Hello guys i need to ask about helping me out in finding the correct unversity that goes with my needs"}
  ,{author:"Wasfi Nasser",createdTime:"10 minutes ago",title:"I want MONEY",description:"Hello guys i need to ask about helping me out in finding the correct unversity that goes with my needs"}
  ,{author:"Shireen sehiwail",createdTime:"2 hours ago",title:"I want Happnies",description:"Hello guys i need to ask about helping me out in finding the correct unversity that goes with my needs"}
 ];
  
  return (
    <>
    <IonHeader>
    <IonToolbar>
      <IonTitle>Home</IonTitle>
      <IonButton slot="start" fill="clear">
        <IonMenuButton menu="main-menu"></IonMenuButton>
      </IonButton>
    </IonToolbar>
  </IonHeader>
      <IonContent fullscreen>
<IonListHeader>
Recent Cases
</IonListHeader>
      <IonList >
    {/* {casses?.map(data=>(<IonItem><Case 
author={data.author}
createdTime={data.createdTime}
title={data.title}
description={data.description}/></IonItem>
    ))} */}
    
        <IonItem><Case 
        author={casses![0].author}
        createdTime={casses![0].createdTime}
        title={casses![0].title}
        description={casses![0].description}/></IonItem>
          <IonItem><Case 
        author={casses![1].author}
        createdTime={casses![1].createdTime}
        title={casses![1].title}
        description={casses![1].description}/></IonItem>
          <IonItem><Case 
        author={casses![2].author}
        createdTime={casses![2].createdTime}
        title={casses![2].title}
        description={casses![2].description}/></IonItem>

       </IonList>
     
      </IonContent>
      </>
  );
};

export default Home;
