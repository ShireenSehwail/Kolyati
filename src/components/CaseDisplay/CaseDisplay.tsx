import { IonCard, IonCardContent, IonContent, IonInfiniteScroll, IonItem } from "@ionic/react";
import React from "react";
import Case from "../../Models/Case";
import tag from "../../Models/tag";
import CaseInformation from "./CaseInformation/CaseInformation";
import Tags from "./Tags/Tags";
interface Props{
      caseInformation?:Case;
}
 const CaseDisplay :React.FC<Props>=({caseInformation})=>
{ let tags:tag[]=[];
if(caseInformation!==undefined)
{
      tags=caseInformation.tags;
      console.log(tags);
}
      return (
<IonContent fullscreen  dir="rtl">
<IonInfiniteScroll>

      <CaseInformation  id={""+caseInformation?._id}
      author={caseInformation?.name||""}
      createdTime={caseInformation?.createdTime||""}
      description={caseInformation?.description||""}/>
      <IonItem>
      <h1>التخصصات المختارة</h1>
      </IonItem>
      <Tags tags={caseInformation?.tags}/>
      </IonInfiniteScroll>

    </IonContent> 
          )}

export default CaseDisplay;