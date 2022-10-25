class KonyvView {
    #elem 
    constructor(elem, szuloElem) {
        this.#elem = elem;
        // console.log("KonyvView");
        // console.log(elem);
        szuloElem.append(`<tr>
        <td>${elem.id}</td>
        <td>${elem.cim}</td>
        <td>${elem.szerzo}</td>
        <td>${elem.ar}</td>
        <td><button id = "mod${elem.id}">Módosít</button></td>
        <td><button id = "del${elem.id}">Töröl</button></td>
        </tr>`)
        this.sorElem = szuloElem.children("tr:last-child");
        // console.log(this.sorElem)
        this.modositGomb = $(`#mod${elem.id}`);
        this.torolGomb = $(`#del${elem.id}`);
        this.modositGomb.on("click",()=>{
            console.log("Modosítok a view-ban")
            this.kattintasTrigger("modosit");
        })
        this.torolGomb.on("click", ()=>{
            console.log("Modosítok a view-ban ujra")
            this.kattintasTrigger("torol")
        })
    }

    kattintasTrigger(esemenyNev){
        console.log("megvan modosítva a triggerben")
        const esemeny = new CustomEvent(esemenyNev, {detail:this.#elem.id});
        window.dispatchEvent(esemeny)
    }
}

export default KonyvView;