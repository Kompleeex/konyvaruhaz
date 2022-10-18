import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/konyvekPublicView.js";

class KonyvController {
    
    constructor() {
        console.log("KonyvController");
        
        const konyvmodel = new KonyvModel();
        $("#admin").on("click", ()=>{
            konyvmodel.adatBe("./adat.json", this.konyvAdatok);
        })

        $("#pub").on("click",()=>{
            konyvmodel.adatBe("./adat.json", this.konyvPublicAdatok)
        })

        

        $(window).on("modosit", (event)=>{
            console.log("controllerben modosit", event.detail)
            konyvmodel.adatModosit(event.detail)
        })

        $(window).on("torol", (event)=>{
            console.log("controll-ból Töröl"), event.detail
            konyvmodel.adatTorol(event.detail)
        })

    }

    konyvAdatok(tomb) {
        let szuloelem = $("main")
        new KonyvekView(tomb, szuloelem);
    }

    konyvPublicAdatok(tomb){
        let szuloelem = $("main")
        new KonyvekPublicView(tomb,szuloelem)
        
    }
}

export default KonyvController;