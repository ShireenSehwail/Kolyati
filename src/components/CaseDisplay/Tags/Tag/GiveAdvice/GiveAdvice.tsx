import { IonButton, IonIcon, IonList } from "@ionic/react";
import { addOutline, removeCircle } from "ionicons/icons";
import React, { useState } from "react";
import AdviceElement from "./AdviceElement/AdviceElemnet";
import classes from "./GiveAdvice.module.css";

const GiveAdvice: React.FC<{ majorId: string }> = ({ majorId }) => {
  const [adviceShow, setAdviceShow] = useState<boolean>(false);
  let btn = (
    <IonButton onClick={(e) => setAdviceShow(true)} className={classes.btn}>
      <IonIcon icon={addOutline}></IonIcon>
      إعطاء نصيحة
    </IonButton>
  );
  if (adviceShow) {
    btn = (
      <IonButton
        color="light"
        onClick={(e) => setAdviceShow(false)}
        className={classes.btn}
      >
        <IonIcon icon={removeCircle} color="warning"></IonIcon>
        إغلاق النصيحة
      </IonButton>
    );
  }
  return (
    <IonList>
      <div className={classes.center}>{btn}</div>
      {adviceShow ? (
        <div>
          <AdviceElement majorId={majorId} />
        </div>
      ) : null}
    </IonList>
  );
};
export default GiveAdvice;
