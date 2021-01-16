import classes from "./PrefrenceSelection.module.css";
import { IonCard,  IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from "@ionic/react";
import { briefcase, carSport, cashOutline, logoBitcoin, schoolOutline } from "ionicons/icons";
import React, { useState } from "react";

 const PrefrenceSelection :React.FC<{name:string}>=({name})=>
{ let icon=cashOutline;
let cardStyle;

        switch(name){
                case 'صعوبة المواصلات':
                        icon=carSport;
                        cardStyle=classes.First;
                        break;
                case 'فرص العمل':
                        icon=briefcase;
                        cardStyle=classes.Second;
                        break;

                case  'جودة التعليم':
                        icon=schoolOutline;
                        cardStyle=classes.Third;
                        break;
                default :icon=cashOutline; cardStyle=classes.Fourth;         
        }
        const [text,setText]=useState<string>("");
        function onHover(){
                setText(classes.StyledText);
        }
        function onLeave(){
                setText("");
        }
        return (
        <>
        <IonCard className={classes.Card+" "+ cardStyle} onMouseEnter={onHover} onMouseLeave={onLeave}>
                <IonCardHeader>
                <IonCardSubtitle><IonIcon icon={icon} className={classes.Icon+" "+text}/></IonCardSubtitle>
                <IonCardTitle className={text}>
                {name} </IonCardTitle>
                </IonCardHeader>
                </IonCard>
                </>
                );
        }

export default PrefrenceSelection;