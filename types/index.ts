import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:String;
    btnType?:"button" | "submit";
    containerStyles?:String;
    handleClick? : MouseEventHandler<HTMLButtonElement>;
}
export interface CustomFilterProps{
    title:String;
    containerStyles?:String;
}
export interface SearchManuFacturerProps{
    title?:String;
    manuFacturer:String;
    setManufacturer?:(manuFacturer:String) => void ;
}