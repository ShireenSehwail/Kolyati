import { advice } from "./Advice";

export default interface major{
    _id:string;
    tawjihiTypes:string[];
    name:string;
    acceptanceRate:string;
    numberOfHours:string;
    hourRate:string;
    university:string; 
    points:number;
    advices?:advice[];
}
