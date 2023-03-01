export  function isEmailValid(email: string){
    // eslint-disable-next-line 
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
   }

export function saveMessage(key:string,value:string){
    sessionStorage.setItem(key,value);
}

export function getMessage(key:string){
    const message=sessionStorage.getItem(key);
    return message
}