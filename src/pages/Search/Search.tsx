import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonContent, IonImg, IonRow, IonCol, IonGrid, IonText, IonToast, IonSearchbar } from "@ionic/react";
import axios from "axios";
import React, { useState } from "react";
import Case from "../../components/Case/Case";
import classes from './Search.module.css';
import { format } from 'timeago.js';

const SharePage: React.FC = () => {
  const api=axios.create({
    baseURL:`http://localhost:8080/`
  });
  const textCenter={  "textAlign": "center"}
  const [showToast, setShowToast] = useState(false);
  const [searchCase,setSearchCase]=useState<CaseClass>();
  const searchForCase=async(text:string)=>{
    try{
      const result =await  api.get(`api/v1/case/${text}`);
      console.log("fecthed",result);
      if(result)
      {
        setSearchCase(result.data);
      }
      
        setShowToast(true);
      
    }
    catch(err)
    {
         console.log(err.message);
    }
  
  }
  let component=null;

  if(searchCase)
  {
component=(<Case 
  author={searchCase.name}
  createdTime={format(searchCase.createdTime)}
  major={searchCase.major}
  description={searchCase.description}/>)
  }
  else
  {
    component=(<IonImg className={classes.rowStyle} src={require("../../res/Search.svg")}/>);
  }
    return(
        <>
        <IonHeader dir="rtl">
        <IonToolbar>
          <IonTitle>ابحث عن حالة</IonTitle>
          <IonButton slot="start" fill="clear">
            <IonMenuButton menu="main-menu"></IonMenuButton>
          </IonButton>
        </IonToolbar>
      </IonHeader>
          <IonContent fullscreen color="light"  style={textCenter}>
         
         
          <IonGrid >
     
  <IonRow>
    <IonCol>
    <IonSearchbar 
          color="danger"
          placeholder="ضع كود الحالة هنا"
          onIonChange={e=>searchForCase(e.detail.value||"")}
          ></IonSearchbar>
    </IonCol>
  </IonRow>
    <IonRow  >
    <IonCol >
      {component}
    </IonCol>
  </IonRow>
</IonGrid>
<IonToast 
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="تم إيجاد الحالة"
        cssClass={classes.centerText}
        color="success"
        duration={200}
      />
          </IonContent>
          </>
        );

}
export default SharePage;
 