const baseUrl="https://latest.currency-api.pages.dev/v1/currencies";
const dropdowns=document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button")
const json = {};

for (let select of dropdowns){

    for ( currCode in countryList){
        let newOpt= document.createElement("option");
        newOpt.innerText=currCode;
        newOpt.value=currCode;
        select.append(newOpt);
        if (select.name==="to" && currCode==="BDT" ) {
            newOpt.selected= "selected"
            
        }
        else  if (select.name==="from" && currCode==="USD" ) {
            newOpt.selected= "selected"
            
        }
    }
    select.addEventListener('change',(evt)=>{
        updateFlag(evt.target);
    })
}

let updateFlag = (element)=> {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src=newSrc;

}
async function getData() {
    const url = `${baseUrl}/`
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amount= document.querySelector(".amount input")
    let amtVal=amount.value;
    if(amtVal==="" || amtVal<1){
        amtVal=1;
        amount.value="1"
    }
    

})