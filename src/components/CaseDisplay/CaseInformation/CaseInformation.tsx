import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from "@ionic/react";
import React from "react";
import TimeAgo from 'timeago-react'; 
import ar from 'timeago.js/lib/lang/ar';
import * as timeago from 'timeago.js';
import classes from './CaseInformation.module.css'
 const Case :React.FC<{id:string,author:string;createdTime:string;description:string}>=(props)=>
{const style={width:"100%",cursor:"pointer"};
timeago.register('ar', ar);
return (
<IonCard  
className={classes.Card}
>
    <IonCardHeader color="light">
      <IonCardSubtitle>{props.author}</IonCardSubtitle>
      <IonCardSubtitle >  <TimeAgo datetime={props.createdTime} locale='ar'
/></IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      {props.description}
    </IonCardContent>
  </IonCard>
          )}

export default Case;