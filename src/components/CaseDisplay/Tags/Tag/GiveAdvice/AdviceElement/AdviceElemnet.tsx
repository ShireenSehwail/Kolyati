
import classes from "./AdviceElement.module.css";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,  IonCol, IonGrid, IonInput, IonLabel, IonRow, IonSelect, IonSelectOption } from "@ionic/react";
import React, { useContext, useRef }   from "react";
import { AdviceHandle } from "../../../../../../pages/CaseShow/CaseShow";

 const AdviceElement :React.FC<{majorId:string}>=({majorId})=>{
    const qualityRef=useRef<HTMLIonSelectElement>(null);
    const transportationRef=useRef<HTMLIonSelectElement>(null);
    const jobRef=useRef<HTMLIonSelectElement>(null);
    const descriptionInputRef=useRef<HTMLIonInputElement>(null);
    const nameInputRef=useRef<HTMLIonInputElement>(null);
    const handleClick= useContext(AdviceHandle);
function handleSend(){
handleClick.handleClick(""+nameInputRef.current?.value,majorId,[qualityRef.current?.value,transportationRef.current?.value,jobRef.current?.value],""+descriptionInputRef.current?.value);
}
  return(
<IonCard>
          <IonCardHeader>
            <IonCardSubtitle className={classes.size+" "+ classes.black}>شارك خبرتك</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
       <IonGrid>
           
          <IonRow>
              <IonCol size="3" className={classes.black}>
                  جودة تعليم التخصص في الجامعة
              </IonCol>
              <IonCol>           
<IonLabel color="medium"  position="floating" >
  التقييم
</IonLabel>
<IonSelect  
color="dark" 
placeholder="ممتاز" dir="rtl" 
value="ممتاز"
ref={qualityRef}>
              <IonSelectOption value="ممتاز">ممتاز</IonSelectOption>
              <IonSelectOption value="جيد جداً">جيد جداً</IonSelectOption>
              <IonSelectOption value="جيد">جيد</IonSelectOption>
              <IonSelectOption value="محايد">محايد</IonSelectOption>
              <IonSelectOption value="ممتاز">مقبول</IonSelectOption>
              <IonSelectOption value="ممتاز">سيء</IonSelectOption>
              <IonSelectOption value="سيء">سيء جداً</IonSelectOption>
            </IonSelect>
              </IonCol>
            </IonRow> 
            <IonRow>
              <IonCol size="3" className={classes.black}>
    فرص العمل في السوق
                </IonCol>
              <IonCol>
                                
<IonLabel color="medium"  position="floating" >
  التقييم
</IonLabel>

<IonSelect  
color="dark" 
placeholder="ممتاز" dir="rtl" 
value="ممتاز"
ref={transportationRef}>
              <IonSelectOption value="ممتاز">ممتاز</IonSelectOption>
              <IonSelectOption value="جيد جداً">جيد جداً</IonSelectOption>
              <IonSelectOption value="جيد">جيد</IonSelectOption>
              <IonSelectOption value="محايد">محايد</IonSelectOption>
              <IonSelectOption value="ممتاز">مقبول</IonSelectOption>
              <IonSelectOption value="ممتاز">سيء</IonSelectOption>
              <IonSelectOption value="سيء">سيء جداً</IonSelectOption>
            </IonSelect>
              </IonCol>
            </IonRow>  
            <IonRow>
              <IonCol size="3" className={classes.black}>
                  صعوبة المواصلات
              </IonCol>
              <IonCol>
                                
<IonLabel color="medium"  position="floating" >
  التقييم
</IonLabel>

<IonSelect  
color="dark" 
placeholder="ممتاز" dir="rtl" 
value="محايد"
ref={jobRef}>
              <IonSelectOption value="ممتاز">ممتاز</IonSelectOption>
              <IonSelectOption value="جيد جداً">جيد جداً</IonSelectOption>
              <IonSelectOption value="جيد">جيد</IonSelectOption>
              <IonSelectOption value="محايد">محايد</IonSelectOption>
              <IonSelectOption value="ممتاز">مقبول</IonSelectOption>
              <IonSelectOption value="ممتاز">سيء</IonSelectOption>
              <IonSelectOption value="سيء">سيء جداً</IonSelectOption>
            </IonSelect>
              </IonCol>
            </IonRow>
            <IonRow>
           <IonCol size="3" className={classes.black}>
                  الإسم
              </IonCol> 
              <IonCol>
                  <IonInput 
                  placeholder="إسمي"
                  className={classes.inputShow}
                  value="مجد"
                  ref={nameInputRef}
                  />
              </IonCol>
           </IonRow>
            <IonRow>
              <IonCol size="3" className={classes.black}>
                  رأيك
              </IonCol>
              <IonCol>
                  <IonInput 
                  placeholder="أعتقد أن.."
                  className={classes.inputShow}
                  value="أنصحك بدخول هذا التخصص لأن فرص العمل فيه في كل مكان"
                  ref={descriptionInputRef}
                  />
              </IonCol>
            </IonRow> 
            <IonRow className={classes.center} dir="ltr">
                <IonButton className={classes.margin} onClick={handleSend}>
                    إرسال
                </IonButton>
            </IonRow>
       </IonGrid>
       </IonCardContent>
        </IonCard>
          )}
export default AdviceElement;