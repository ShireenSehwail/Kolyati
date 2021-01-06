import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonContent, IonImg, IonRow, IonCol, IonGrid,  IonToast, IonSearchbar } from "@ionic/react";
import axios from "axios";
import React, { useState } from "react";
import Case from "../../components/Case/Case";
import classes from './SearchCase.module.css';
import { format } from 'timeago.js';

const SearchCase: React.FC = () => {
  const api=axios.create({
    baseURL:`http://localhost:8080/`
  });
  const textCenter={  "textAlign": "center",backGroundColor:"white"}
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
component=(<Case  id={searchCase._id}
  author={searchCase.name}
  createdTime={format(searchCase.createdTime)}
  major={searchCase.major}
  description={searchCase.description}/>)
  }
  else
  {
    component=(<IonImg  style={textCenter} className={classes.rowStyle} src={require("../../res/Search.svg")}/>);
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
          <IonContent fullscreen >

          <IonGrid >
  <IonRow>
    <IonCol>
    <IonSearchbar  style={textCenter}
          placeholder="ضع كود الحالة هنا"
          onIonChange={e=>searchForCase(e.detail.value||"")}
          ></IonSearchbar>
    </IonCol>
  </IonRow>
    <IonRow  >
    <IonCol  dir="rtl">
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
export default SearchCase;
 