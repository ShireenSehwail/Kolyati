import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import TimeAgo from "timeago-react";
import ar from "timeago.js/lib/lang/ar";
import * as timeago from "timeago.js";
import classes from "./Case.module.css";
import { accessibilityOutline, bulbOutline, cashOutline, chatboxEllipsesOutline, chatbubbleOutline, chatbubbleSharp, chatbubblesOutline, checkmarkCircleOutline, eyedropOutline, eyeOutline, flameOutline, helpBuoyOutline, timeOutline } from "ionicons/icons";
const Case: React.FC<{
  id: string;
  author: string;
  createdTime: string;
  description: string;
  tags:string[];
  advicesNumber:Number;
  votesNumber:Number;

}> = (props) => {
  const style = { width: "100%", cursor: "pointer" };
  const history = useHistory();
  timeago.register("ar", ar);

  const navigateToCase = () => {
    history.push(`/Case/${props.id}`);
  };

  return (
    <IonCard onClick={navigateToCase} className={classes.Card}>
      <IonCardHeader color="light">
        <IonCardSubtitle>{props.author}</IonCardSubtitle>
        <IonCardSubtitle>
          {" "}
          <TimeAgo datetime={props.createdTime} locale="ar" />
        </IonCardSubtitle>
        <IonCardTitle>

<IonGrid>
              <IonRow class={classes.Row}>
              <IonCol >
              <IonIcon icon={chatbubblesOutline} className={classes.Icon+" "+classes.chat}/>

              <span className={classes.Span}>
              <span className={classes.divide}>
              عدد النصائح
              </span>
              <span>
              {props.advicesNumber}

              </span>
                
                </span>


              </IonCol>
              <IonCol >
              <IonIcon icon={flameOutline} className={classes.Icon}/>

              <span className={classes.Span}>
              <span className={classes.divide}>
              عدد التصويتات
              </span>
              <span>
              {props.votesNumber}

              </span>
                
                </span>


              </IonCol>
              </IonRow>
            </IonGrid>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{props.description}</IonCardContent>
    </IonCard>
  );
};

export default Case;
