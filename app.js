const BASE_URL="https://latest.currency-api.pages.dev/v1/currencies/eur.json";
const dropdowns=document.querySelectorAll(".dropdown select");

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
}