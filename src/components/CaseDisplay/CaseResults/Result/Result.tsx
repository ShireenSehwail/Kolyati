import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import React from "react";
import major from "../../../../Models/major";
import classes from "./Result.module.css";

const Result: React.FC<{ major: major; color: string; index: number }> = ({
  major,
  color,
  index,
}) => {
  const style = { width: "100%", backgroundColor: color };
  let colorStyle = { color: "white" };

  return (
    <IonCard style={style}>
      <IonCardHeader>
        {index == 0 ? (
          <div className={classes.first}>{major.points} </div>
        ) : (
          <div className={classes.second}>{major.points} </div>
        )}
        <IonCardTitle style={colorStyle}>{major.name}</IonCardTitle>

        <IonCardSubtitle style={colorStyle}>{major.university}</IonCardSubtitle>
      </IonCardHeader>


    </IonCard>
  );
};

export default Result;
