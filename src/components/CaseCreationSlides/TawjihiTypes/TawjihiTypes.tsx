import { IonList } from "@ionic/react"
import React from "react"
import TawjihiType from "./TawjihiType/TawjihiType"
import classes from './TawjihiTypes.module.css'

 const TawjihiTypes :React.FC<{list:{id:string;type:string;icon:string}[];clicked:(data:string)=>void}> =(props)=>{
const style={marginRight:"20px"}
     return(<> <h3 style={style}> إختر فرع التوجيهي الخاص بك</h3>
        <IonList className={classes.Container}>{props.list.map(item=>{return <TawjihiType click={props.clicked}
        key={item.id}
        type={item.type}
        icon={item.icon}
        />})}
        </IonList>
        </>)}
        export default TawjihiTypes;