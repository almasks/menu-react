import React, { useState } from 'react';
import './index.css';
import Categories from './Categories';
import Menu from './Menu';
import items from './data'

function App() {
  const allCategories = ['all',...new Set (items.map(item=>item.category))]

  const [menuItem,setMenuItem] =useState(items)
  const [categories,setCategories]=useState(allCategories)
  // console.log(allCategories)
  const filterItems=(category)=>{
    if(category==="all"){
      setMenuItem(items)
      return
    }
    const newItem = items.filter(item=>item.category===category)
    setMenuItem(newItem)
  }
  return (
    <main>
      <div className='title'>
        <h1>Our Menu</h1>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filter={filterItems}/>
      <Menu items ={menuItem}/>
    </main>
  );
}

export default App;
