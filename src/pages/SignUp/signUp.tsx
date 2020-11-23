
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem,  IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { bag, bagHandleOutline, mail, mailOutline, person, personAddOutline, personOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import {Link} from "react-router-dom";

const SignUp : React.FC = props => {

  const [password, setPassword] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [Cpassword, setCpassword] = useState<string>();
  const [email, setEmail] = useState<string>();
    //const style={margin:"0 16px"};//use this style={style} i will see it later
  const style={margin:"0 16px"};
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
                <h3>  Want to see our premium features? Hurry and Sign Up! </h3>
               
            </IonRow>


            <IonRow>
           
                

                <IonItem style={style}>
              
              <IonIcon icon={person} style={style} />
             
                <IonInput  type="text"  
              value={username}
               placeholder="User Name" 
                onIonChange={e => setUsername(e.detail.value!)}>  </IonInput>
                </IonItem>
            </IonRow>
          


            <IonRow>
                <IonItem style={style}>
                <IonIcon icon={mail} style={style}  />
                <IonInput  type="text"  
              value={email}
               placeholder="Email" 
                onIonChange={e => setEmail(e.detail.value!)}>  </IonInput>
                </IonItem>
            </IonRow>

            <IonRow>
                   
                <IonItem style={style}>
                <IonIcon icon= {bag} style={style} />

                <IonInput type="password"  
              value={password}
               placeholder="Password" 
                onIonChange={e => setPassword(e.detail.value!)}>  </IonInput>
                </IonItem>        
            </IonRow>

            <IonRow>
                <IonItem style={style}>
                <IonIcon icon= {bag}style={style}  />
                <IonInput type="password"  
              value={Cpassword}
               placeholder="Confirm Password" 
                onIonChange={e => setCpassword(e.detail.value!)}>  </IonInput>
                </IonItem>        
            </IonRow>

            <div>
                <p>Already a member ?</p>
                <ul>
                    <li><Link to="/SignIn"> Log In</Link></li>
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
           <IonButton  shape="round" color="dark" expand="block"> SignUp </IonButton> 
             </IonCol>
            </IonRow>


        </IonGrid>
        </IonContent>
       </IonPage>
    );

};

export default SignUp  ;