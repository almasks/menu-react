import React from 'react'

function Categories({categories,filter}) {
  return (
    <div className='btn-container'>
        {categories.map((categorie,index)=>{
            return (
             <button type='button' className='filter-btn' key={index} onClick={()=>filter(categorie)}>{categorie}</button>
        
        ) })}
       
    </div>
  )
}

export default Categories