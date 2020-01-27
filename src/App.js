import React from 'react';
import ListItems from './ListItems';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault()
    const newItem = this.state.currentItem
    console.log(newItem)
    if(newItem !== ""){
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem:{
          text: '',
          key: ''
        }
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item=> item.key!==key)
    this.setState({
      items: filteredItems
    })
  }

  setUpdate(text, key){
  const items = this.state.items
  items.map(item=>{
    if(item.key===key){
      item.text = text
    }
  })
  this.setState({
    items: items
  })
  }
  render() {
    return (
      <div className=" col-md-6 col-lg-6 col-sm-6 mx-auto jumbotron py-4">
        <h3 className="display-3 text-success  text-center">Tasks</h3>
        <header className="bg-primary">
          <form className="form-inline" id="toDoForm" onSubmit={this.addItem}>
            <div className="form-group">
              <input type="text" className="form-control m-3" value={this.state.currentItem.text} onChange={this.handleInput} placeholder="Insert you task" required />
            </div>
            <button type="submit" className="btn btn-success mx-3"><i class="fas fa-plus"></i> Add</button>
          </form>
        </header>

        <ListItems className="mx-auto" items= {this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
  
      </div>
    )
  }
}


export default App;
