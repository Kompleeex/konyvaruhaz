import KonyvPublicView from "./KonyvPublicView.js";

class KonyekPublicView{
    constructor(tomb,szuloelem){
        szuloelem.append(`<div class = "sokkonyv"></div>`);
        this.DivElem = szuloelem.children("div:last-child");
        // this.tbodyElem = this.tablaElem.children("tbody");
        
        tomb.forEach(konyv => {
            console.log(konyv)
            const konyvem = new KonyvPublicView(konyv,this.DivElem);
            
        });
    }
}
    export default KonyekPublicView