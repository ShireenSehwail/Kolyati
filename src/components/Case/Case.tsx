import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import TimeAgo from 'timeago-react'; 
import ar from 'timeago.js/lib/lang/ar';
import * as timeago from 'timeago.js';
import classes from './Case.module.css'
 const Case :React.FC<{id:string,author:string;createdTime:string;major:string;description:string}>=(props)=>
{const style={width:"100%",cursor:"pointer"};
const history=useHistory();
timeago.register('ar', ar);

const navigateToCase=()=>{
    history.push(`/Case/${props.id}`);
}

return (
<IonCard onClick={navigateToCase} 
className={classes.Card}
>
    <IonCardHeader color="light">
      <IonCardSubtitle>{props.author}</IonCardSubtitle>
      <IonCardSubtitle >  <TimeAgo datetime={props.createdTime} locale='ar'
/></IonCardSubtitle>
      <IonCardTitle>{props.major}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      {props.description}
    </IonCardContent>
  </IonCard>
          )}

export default Case;