import React from "react";
import Tag from "./Tag/Tag";
import tag from "../../../Models/tag";
interface Props{
    tags?:tag[]|null;
}
 const Tags :React.FC<Props>=({tags})=>
{
    let element=null;
    if(tags)
    {
element=(tags.map(tag=>(<Tag tag={tag} key={tag._id}/>)))
    }
return (
    <>
    {element}
    </>
          )}

export default Tags;