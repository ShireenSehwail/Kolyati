import { vote } from "./Voting";

export interface advice{
    userId:string;
    rating:string[];
    description:string;
    author:string;
    voting:vote[];
}