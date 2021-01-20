import tag from './tag'
export default interface Case{
    _id:string;
    userId:string;
    tawjihiType:string;
    name:string;
    location:string;
    gpa:number;
    description:string;
    createdTime:string;
    majorsChoice:string[];
    prefrences:string[];
    tags:tag[];
}

