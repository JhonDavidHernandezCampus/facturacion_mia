
import styles from "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" assert { type: "css" };
export class myBody extends HTMLElement{
    constructor(){
        super();
        this.count = 1;
    }

    async components(){
        return await (await fetch("view/my-body.html")).text();
    }


    add(e){
        let contenedorPedidos = document.querySelector("#pedidos");
        let pedido = document.querySelector("#pedido_0");//esta es la caja donde voy a agregar el elemento
        
        let pedidoNew= pedido.cloneNode(true);//clono la caja del pedido
        pedidoNew.id= "product_"+this.count;
        pedidoNew.children[0].id = "product_"+this.count;
        let butons = pedidoNew.querySelectorAll("button");
        let divbtn = pedidoNew.children[2].children[1];
        pedidoNew.addEventListener("click", (e)=>{
            if(e.target.type == "button"){
                switch(e.target.innerHTML){ 
                    case "+":
                        let valor = Number(divbtn.value);
                        (!isNaN(parseFloat(valor)))? valor+=1 :valor = 1;
                        divbtn.value = valor;
                        break;
                    case "-":
                        let valor2 = Number(divbtn.value);
                        (!isNaN(parseFloat(valor2)))? valor2-=1 :valor2 = 1;
                        divbtn.value = valor2;
                        (valor2 < 1)?pedidoNew.remove():"";
                        break;
                }
            }
        })
        contenedorPedidos.insertAdjacentElement("beforeend", pedidoNew);
        this.count++;
    }

    send(e){
        let info=[],articulos =[],data = [], count=0 ;
        let inputs = document.querySelectorAll("input");
        inputs.forEach((element, id) => {
            console.log(id);
            if (id<=7) {
                info[element.name] = element.value
            }
        });
        console.log(info);

    }
    connectedCallback(){
        document.adoptedStyleSheets.push(styles);
        this.components().then(html =>{
            this.innerHTML = html;
            this.agregarPrmero();
            
            this.addbtn = document.querySelector("#btnadd");
            this.addbtn.addEventListener("click", this.add.bind(this));
            //se agrega el evento de mostrar los datos
            this.sendD = document.querySelector("#btnsend");
            this.sendD.addEventListener("click", this.send.bind(this));
        })
    }
    agregarPrmero(){
        let contenedorPedidos = document.querySelector("#pedidos");
        let pedido = document.querySelector("#pedido_0");//esta es la caja donde voy a agregar el elemento
        let pedidoNew= pedido.cloneNode(true);//clono la caja del pedido
        pedidoNew.id= "product_"+this.count;
        pedidoNew.children[0].id = "product_"+this.count;
        let butons = pedidoNew.querySelectorAll("button");
        let divbtn = pedidoNew.children[2].children[1];
        pedidoNew.addEventListener("click", (e)=>{
            if(e.target.type == "button"){
                switch(e.target.innerHTML){
                    case "+":
                        let valor = Number(divbtn.value);
                        (!isNaN(parseFloat(valor)))? valor+=1 :valor2 = 1;
                        divbtn.value = valor;
                        break;
                    case "-":
                        let valor2 = Number(divbtn.value);
                        (!isNaN(parseFloat(valor2)))? valor2-=1 :valor2 = 1;
                        divbtn.value = valor2;
                        (valor2 < 1)?pedidoNew.remove():"";

                        break;
                }
            }
        })
        contenedorPedidos.insertAdjacentElement("beforeend", pedidoNew);

    }
}

customElements.define("my-body" , myBody);