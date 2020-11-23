import { IonItem, IonIcon, IonLabel } from "@ionic/react";
import { addOutline, heart, logIn, trashOutline } from "ionicons/icons";
import React from "react";

const LogIn :React.FC<{click:()=>void}>=(props)=>
(<>
<IonItem onClick={props.click}>
            <IonIcon icon={logIn}slot="start"></IonIcon>
            <IonLabel>Sign In</IonLabel>
          </IonItem>
          </>
          )
export default LogIn;