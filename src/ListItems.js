import React from 'react'
import FlipMove from 'react-flip-move'

function ListItems(props) {
    const items = props.items
    const listItems = items.map(item=> {
        return <div className="" key={item.key}>
    <p className="mx-auto d-flex justify-content-between">
        <input className="col-md-10 col-sm-10 col-lg-10 bg-light text-success border-0 mt-2" type="text" 
        id={item.key} 
        value={item.text}
        onChange={
            (e)=>{
                props.setUpdate(e.target.value, item.key)
            }
        }/>
     
    <span>
        <i className="fas fa-trash text-danger mt-2" onClick={()=> props.deleteItem(item.key)}></i>
    </span>
    </p>
    </div>
    })
  return(
    <div>
    <FlipMove duration={500} easing="ease-in-out">
    {listItems}
    </FlipMove>
    </div>
  )
}

export default ListItems
