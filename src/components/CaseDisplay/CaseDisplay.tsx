import { IonContent, IonInfiniteScroll, IonItem } from "@ionic/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../containers/App";
import Case from "../../Models/Case";
import { CaseShortData } from "../../Models/CaseShortData";
import CaseInformation from "./CaseInformation/CaseInformation";
import CaseResults from "./CaseResults/CaseResults";
import Tags from "./Tags/Tags";
interface Props {
  caseInformation?: Case;
}

const CaseDisplay: React.FC<Props> = ({ caseInformation }) => {
  const api = axios.create({
    baseURL: BASE_URL,
  });
  const [shortCaseData, setShortCaseData] = useState<CaseShortData>();
  useEffect(() => {
    const fetchShortCase = async () => {
      try {
        const result = await api.get(`/caseSearch/${caseInformation!._id}`);
        if (result.status === 200) {
          setShortCaseData(result.data[0]);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    if (caseInformation !== undefined) fetchShortCase();
  }, [caseInformation]);

  let caseData = null;
  if (shortCaseData) {
    caseData = (
      <CaseInformation
        id={shortCaseData!.id}
        author={shortCaseData!.author}
        createdTime={shortCaseData!.createdTime}
        tags={shortCaseData!.tags}
        advicesNumber={shortCaseData!.advicesNumber}
        votesNumber={shortCaseData!.votesNumber}
        description={shortCaseData!.description}
      />
    );
  }
  return (
    <IonContent fullscreen dir="rtl">
      <IonInfiniteScroll>
        {caseData}
        <IonItem>
          <h1>التخصصات المختارة</h1>
        </IonItem>
        <Tags tags={caseInformation?.tags} />
        <CaseResults />
      </IonInfiniteScroll>
    </IonContent>
  );
};

export default CaseDisplay;
