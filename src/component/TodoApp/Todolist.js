import React, { Component } from 'react'
import './Todolist.css'

export default class Todolist extends Component {
state = {
    inputVal:"",items:[]
}
handleChange = (event) => {
    this.setState({
        inputVal : event.target.value
    });
}
storeItems = (event) =>{
    event.preventDefault();
    const {inputVal} = this.state

    this.setState({
        items:[...this.state.items,inputVal],//spread operator
        inputVal:""
    });
}
deleteItem = (keyValue) => {                //or use filter()
    const allItems = this.state.items
    allItems.splice(keyValue,1)
    this.setState({
        items:allItems
    })
}   
    render() {
        const {inputVal,items} = this.state
        return (
            <div className = "todo-container">

                <form className = "input-section" onSubmit={this.storeItems}>
                    <h1>Todo List</h1>
                    <input value={inputVal}  placeholder="Enter..." onChange={this.handleChange} type="text"/>
                </form>

                <ul>
                    {items.map((data,index) =>{
                        return(
                            <li key={index}>
                                {data} <i onClick={() => this.deleteItem(index)} className="fas fa-trash"></i>
                            </li>
                        );
                    })}
                </ul>
            </div>  
        );
    }
}
