class KonyvPublicView{
    #elem
    constructor(elem, szuloelem){
        this.#elem = elem;
// console.log("KonyvView");
// console.log(elem);
szuloelem.append(
    `<h1>${elem.cim}</h1>
    <p>${elem.szerzo}</p>
    <p>${elem.ar}</p>
    <button id = megtek>kosárba</button>`
);
// this.DivElem = szuloElem.children("div:last-child");
this.megtekintGomb = $(`#megtk${elem.id}`);

this.megtekintGomb.on("click",()=>{
    console.log("kosárban van")
})


// kattintasTrigger(esemenyNev){
// console.log("megvan modosítva a triggerben")
// const esemeny = new CustomEvent(esemenyNev, {detail:this.#elem.id});
// window.dispatchEvent(esemeny)
// }
    }
}
    export default KonyvPublicView