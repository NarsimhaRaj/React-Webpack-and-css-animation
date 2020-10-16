import React, { useEffect } from "react";

export function useInterval({callback, delay}){

    useEffect(()=>{
        if (Number.isInteger(delay)) {
            const id = setInterval(callback, delay);
            return () => clearInterval(id);
        }
    },[callback, delay]);
}