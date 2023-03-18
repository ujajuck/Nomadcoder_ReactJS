import Proptypes from "prop-types"
import { useEffect } from "react";
import styles from "./Button.module.css"

function Button({text}){
    function HiFn(){
        console.log("created!");
        return bvFn;
    }
    function bvFn(){
        console.log("distroyed !");
    }
    useEffect(HiFn,[])
    return <button className={styles.btn}>{text}</button>
}
Button.prototype = {
    text : Proptypes.string.isRequired,
};

export default Button;