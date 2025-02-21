import React, {Component} from "react";

export  class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0,
        }
    }

    Sumar =(e) => {
        console.log("hola")
        this.setState({
            contador:this.state.contador+1,
        })
    }
    Restar =(e) => {
        console.log("hola")
        this.setState({
            contador:this.state.contador-1,
        })
    }

    render(){
        return(
            <div>
                <h2>MANIPULACION DE EVENTOS ES6</h2>
                <nav>
                    <button onClick={this.Sumar}>+</button>
                    <button onClick={this.Restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

//Properties Initializer
export  class EventosES7 extends Component{
    
        state={
            contador:0,
        }


    Sumar =(e) => {
        console.log(this.state)
        this.setState({
            contador:this.state.contador+1,
        })
    }
    Restar =(e) => {
        this.setState({
            contador:this.state.contador-1,
        })
    }

    render(){
        return(
            <div>
                <h2>MANIPULACION DE EVENTOS ES7</h2>
                <nav>
                    <button onClick={this.Sumar}>+</button>
                    <button onClick={this.Restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}



// function Boton(props){
//     return <button onClick={props.MyOnClick}>boton hecho componente</button>
// }

// const Boton =(props)=>(<button onClick={props.MyOnClick}>boton hecho componente</button>
// )

const Boton=({MyOnClick})=>(
    <button onClick={MyOnClick}>boton hecho componente</button>
)




export class MasSobreEventos extends Component{
    handleClick =(e, message)=>{
        console.log(e);
        console.log(e.target);
        console.log(message);
    }

    render(){
        return(
        <div> 
            <h2> Mas sobre eventos</h2>
            <button onClick={(e)=>this.handleClick(e,"hola soy el mensaje que esta enviando en el click")}>Saludar</button>

        {/* evento personalizado */}
        <Boton 
        MyOnClick={(e)=>this.handleClick(e,"hola soy el mensaje que esta enviando en el myonclick")} />
            
        </div>
    )

    }
}

