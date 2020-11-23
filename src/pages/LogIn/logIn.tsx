
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { bagAddOutline, personOutline } from 'ionicons/icons';
import './LogIn.css';
import React from 'react';
import {Link} from "react-router-dom";


const LogIn: React.FC = () => {
    return(

        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                Sign In
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonGrid>

                <IonRow>
                  <IonCol>
                   
                  <h1> Welcome Back  </h1> 
                  </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonInput placeholder="Username ">
                            <IonIcon icon={personOutline}/>
                        </IonInput>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonInput placeholder=" password">
                            <IonIcon icon={bagAddOutline}/>
                        </IonInput>
                        </IonCol>
                        </IonRow>


                        <IonRow> 
                            <IonCol>
                                <IonButton  shape="round" color="dark" expand="block" routerLink="/caseCreation">
                                    LogIn
                                </IonButton> 
                                </IonCol>
                        </IonRow>

                        <IonRow/>
                        <IonRow/>
                        <IonRow/>

                        <IonRow>
                       <div>
                        <p> If you dont have an acoount ? </p>
                        <ul>
                      <li><Link to="/signUp"> Go to Register </Link></li>
                      </ul>
                     </div>
                          </IonRow>  
                         </IonGrid>
           
        </IonContent>
        </IonPage>
    );
};

export default LogIn;

