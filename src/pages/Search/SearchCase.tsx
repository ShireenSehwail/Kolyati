import { IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonContent, IonImg, IonRow, IonCol, IonGrid,  IonToast, IonSearchbar } from "@ionic/react";
import axios from "axios";
import React, { useState } from "react";
import Case from "../../components/Case/Case";
import classes from './SearchCase.module.css';
import { format } from 'timeago.js';
import { CaseShortData } from "../../Models/CaseShortData";
import { BASE_URL } from "../../containers/App";

const SearchCase: React.FC = () => {
  const api=axios.create({
    baseURL:BASE_URL
  });
  const textCenter={  "textAlign": "center",backGroundColor:"white"}
  const [showToast, setShowToast] = useState(false);
  const [searchCase,setSearchCase]=useState<CaseShortData>();
  const searchForCase=async(text:string)=>{
    try{
      const result =await  api.get(`/caseSearch/${text}`);
      if(result)
      {
        console.log(result.data);

        setSearchCase(result.data[0]);
      }
      
        setShowToast(true);
      
    }
    catch(err)
    {
         console.log(err.message);
    }
  
  }
 
  let component=null;
  console.log(searchCase);

  if(searchCase)
  {
component=(<Case  id={searchCase.id}
  author={searchCase.author}
  createdTime={searchCase.createdTime}
  tags={searchCase.tags}
  advicesNumber={searchCase.advicesNumber}
  votesNumber={searchCase.votesNumber}
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
 