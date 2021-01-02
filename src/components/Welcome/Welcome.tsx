import {   IonContent, IonPage, IonSlide, IonSlides } from "@ionic/react";
import React from "react";
import FirstSlide from "../Slides/FirstSlide/FirstSlide";
import SecondSlide from "../Slides/SecondSlide/SecondSlide";
import ThirdSlide from "../Slides/ThirdSlide/ThirdSlide";


 const Welcome :React.FC<{click:()=>void;}>=(props)=>{
   const slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  const style={
    height: "100%"
  }
  return( 
    <IonPage>
    <IonContent>
    <IonSlides pager={true} options={slideOpts} style={style} >
      <IonSlide >
        <FirstSlide/>
      </IonSlide>
      <IonSlide>
        <SecondSlide/>
      </IonSlide>
      <IonSlide>
        <ThirdSlide click={props.click}/>
      </IonSlide>
    </IonSlides>
  </IonContent>
    </IonPage> 
          )}
export default Welcome;