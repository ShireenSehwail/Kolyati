import { IonButton, IonContent,  IonHeader,    IonItem,    IonList,    IonListHeader,    IonMenuButton,     IonTitle,  IonToolbar } from '@ionic/react';
import React from 'react';
import Case from '../../components/Case/Case';

const Home: React.FC = () => {

  const casses=[{author:"مجد خصيب",createdTime:"قبل دقيقتين",title:" ساعدوني  !",description:"مرحبًا يا شباب ، أريد أن أسأل عن مساعدتي في العثور على الجامعة الصحيحة التي تتوافق مع احتياجاتي"}
  ,{author:"وصفي ناصر",createdTime:"قبل 10 دقائق",title:"أحتاج المال",description:"مرحبًا يا شباب ، أريد أن أسأل عن مساعدتي في العثور على الجامعة الصحيحة التي تتوافق مع احتياجاتي"}
  ,{author:"شيرين سحويل",createdTime:"قبل ساعتين",title:"أريد السعادة ",description:"مرحبًا يا شباب ، أريد أن أسأل عن مساعدتي في العثور على الجامعة الصحيحة التي تتوافق مع احتياجاتي"}
 ];
  
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
author={data.author}
createdTime={data.createdTime}
title={data.title}
description={data.description}/></IonItem>
    ))}

       </IonList>
     
      </IonContent>
      </>
  );
};

export default Home;
