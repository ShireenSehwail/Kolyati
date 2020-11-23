
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem,  IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './signUp.css';

const SignUp : React.FC = props => {

  const [password, setPassword] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [Cpassword, setCpassword] = useState<string>();

  // const Registeration =()=> {
  //  if (password != Cpassword){
  //   return Toast('passwords do not match');
  //  }
  

  // }
    return(
    <IonPage>
   <IonHeader>
        <IonToolbar>
          <IonTitle> Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">create your account</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>

            <IonRow>
                <h3>  Username </h3>
                <IonItem>
                <IonInput  type="text"  
              value={username}
               placeholder="set username" 
                onIonChange={e => setUsername(e.detail.value!)}>  </IonInput>
                </IonItem>
            </IonRow>

            <IonRow>
                <h3> Password </h3>
                <IonItem>
                <IonInput type="password"  
              value={password}
               placeholder="set password" 
                onIonChange={e => setPassword(e.detail.value!)}>  </IonInput>
                </IonItem>        
            </IonRow>

            <IonRow>
                <h3>  confirm Password </h3>
                <IonItem>
                <IonInput type="password"  
              value={Cpassword}
               placeholder="confirm Password" 
                onIonChange={e => setCpassword(e.detail.value!)}>  </IonInput>
                </IonItem>        
            </IonRow>

            <div>
                <p>Already a member ?</p>
                <ul>
                    <li><Link to="/logIn"> Log In</Link></li>
                </ul>
            </div>

            <IonRow>
              <IonCol></IonCol>
              </IonRow><IonRow>
              <IonCol>  
              </IonCol>
              </IonRow>


            <IonRow> 
              <IonCol>
           <IonButton  shape="round" color="danger" expand="block"> SignUp </IonButton> 
             </IonCol>
            </IonRow>


        </IonGrid>
        </IonContent>
       </IonPage>
    );

};

export default SignUp  ;