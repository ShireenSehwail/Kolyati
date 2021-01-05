import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";

 const Case :React.FC<{id:string,author:string;createdTime:string;major:string;description:string}>=(props)=>
{const style={width:"100%",cursor:"pointer"};
const history=useHistory();

const navigateToCase=()=>{
    history.push(`/Case/${props.id}`);
}

return (<IonCard onClick={navigateToCase}
style={style}
>
    <IonCardHeader color="light">
      <IonCardSubtitle>{props.author}</IonCardSubtitle>
      <IonCardSubtitle >{props.createdTime}</IonCardSubtitle>
      <IonCardTitle>{props.major}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      {props.description}
    </IonCardContent>
  </IonCard>
          )}

export default Case;