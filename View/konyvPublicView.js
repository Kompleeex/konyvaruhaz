class KonyvPublicView {
  #elem;

  constructor(elem, szuloelem) {
    this.#elem = elem;
    // console.log("KonyvView");
    // console.log(elem);
    szuloelem.append(
      `<h1>${elem.cim}</h1>
    <p>${elem.szerzo}</p>
    <p>${elem.ar}</p>
    <button id = megtek${elem.id}>kosárba</button>`
    );
    // this.DivElem = szuloElem.children("div:last-child");
    this.megtekintGomb = $(`#megtk${elem.id}`);

    this.megtekintGomb.on("click", () => {
        this.KosarKattintasTrigger("kosarba-tesz");
    });


    // kattintasTrigger(esemenyNev){
    // console.log("megvan modosítva a triggerben")
    // const esemeny = new CustomEvent(esemenyNev, {detail:this.#elem.id});
    // window.dispatchEvent(esemeny)

  }
  KosarKattintasTrigger(esemenyNev){
    const kosaresemeny = new CustomEvent(esemenyNev, {detail:this.#elem.id});
    window.dispatchEvent(kosaresemeny);
    }
}
export default KonyvPublicView;
