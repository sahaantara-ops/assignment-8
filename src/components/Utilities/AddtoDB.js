const getStoredApp =() => {
     const storedAppSTR=localStorage.getItem("downloadlist")
 
     if (storedAppSTR) {
        const storedAppdata=JSON.parse(storedAppSTR);
        return storedAppdata;
     }
     else{
        return[];
     }

}
const addToStoreDB = (id) => {
     const storedAppdata = getStoredApp();
     if (storedAppdata.includes(id)) {
        alert("app already exist");
     }
     else {
        storedAppdata.push(id);
        const data = JSON.stringify(storedAppdata);
        localStorage.setItem("downloadlist", data);
        console.log(storedAppdata);
     }
     
}
export {addToStoreDB};