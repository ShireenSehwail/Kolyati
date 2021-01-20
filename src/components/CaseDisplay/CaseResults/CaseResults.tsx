import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonInfiniteScroll, IonItem, IonList } from "@ionic/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import major from "../../../Models/major";
import { Context } from "../../../pages/CaseShow/CaseShow";
import classes from "./CaseResults.module.css"
import Result from "./Result/Result";

const api = axios.create({
      baseURL: `http://localhost:8080/`,
    });
 const CaseResults :React.FC=()=>
{ const  context = useContext(Context);
      const [topTwoMajors,setTopTwoMajors]=useState<major[]>();
      useEffect(()=>{
const fetchTopTwoMajors=async()=>{
      try{
            const result=await api.get(`/api/v1/topMajors/${context.caseId}`);
            if(result.status===200)
            {
                  setTopTwoMajors(result.data);
                  console.log(result.data)
            }
            }
            catch(err)
            {
                  console.log(err);
            }
}
if(context.caseId!=="")
fetchTopTwoMajors();
      },[])
      return(<IonList className={classes.marginButtom}>
           <IonItem>
           <h1 className={classes.margin}>
                  أفضل التخصصات
            </h1>

           </IonItem>
           {topTwoMajors?(<>
            <Result major={topTwoMajors[0]}/>
           <Result major={topTwoMajors[1]}/></>):null}
</IonList>)
          }

export default CaseResults;