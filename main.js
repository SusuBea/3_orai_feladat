window.addEventListener("load", init)

function init(){
    const OK = document.querySelector("#ok")

    OK.addEventListener("click", adatgyujt)
    
    const obj = adatgyujt();
    OK.addEventListener("click", osszeallit(obj))

    
}

function adatgyujt(){
    const adatok = {};

    const NevInputElem = document.querySelector("#nev")
    adatok.nev = NevInputElem.value

    const CimInputElem = document.querySelector("#cim")
    adatok.cim = CimInputElem.value

    const TelInputElem = document.querySelector("#tel")
    adatok.tel = TelInputElem.value

    const EmailInputElem = document.querySelector("#email")
    adatok.email = EmailInputElem.value



    return adatok;


}

function osszeallit(obj){
    
    let SECTION = document.querySelector("section")
    let txt ="<div>";


    for (const key in obj) {
        txt += `<p>${obj[key]}</p>`

    }

    txt += "</div>"
    console.log(txt)
    
    SECTION.innerHTML += txt;

}