import { writable } from "svelte/store"


function mercCount() {
    
    const {subscribe, set, update} = writable(0);
    
    return {
        subscribe, 
        increment: () => update(n=>n+1),
        decrement: () => update(n=>n-1)
    }

}

function ferrariCount() {
    
    const {subscribe, set, update} = writable(0);
    
    return {
        subscribe, 
        increment: () => update(n=>n+1),
        decrement: () => update(n=>n-1)
    }

}

function astonCount() {
    
    const {subscribe, set, update} = writable(0);
    
    return {
        subscribe, 
        increment: () => update(n=>n+1),
        decrement: () => update(n=>n-1)
    }

}

export const AMG_Count = mercCount()
export const FER_Count = ferrariCount()
export const AST_Count = astonCount()
