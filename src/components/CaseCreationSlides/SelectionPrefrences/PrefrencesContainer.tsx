import classes from "./PrefrencesContainer.module.css";
import { IonList } from "@ionic/react";
import React from "react";
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';
import PrefrenceSelection from "./SelectionContainer/PrefrenceSelection";
 const PrefrencesContainer:React.FC<{prefrences:string[];setPrefrences:(result:any)=>void}>=({prefrences,setPrefrences})=>
{ 
        return (
        <DragDropContext onDragEnd={setPrefrences}>
        <Droppable droppableId="prefrences">
                {(provided)=>
                        (<IonList 
                                
                        className={classes.Container}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        
                        >
                                {prefrences.map((element,index)=>{
                                        console.log(index,element)
                                        return(
                                        <Draggable 
                                        key={element}
                                        draggableId={element}
                                        index={index}
                                        >
                                                {(provided)=>(
                                        <div   
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        className={classes.drag}
                                        >
                                        <PrefrenceSelection  
                                        name={element} 
                                        />
                                        </div> )}
                                        </Draggable>
                                        );
                                })}                                 
                                {provided.placeholder}
                                </IonList>)
                                
                                }
                </Droppable>
                </DragDropContext>)
        }

export default PrefrencesContainer;