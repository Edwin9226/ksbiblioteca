import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout'
import { useAppContext } from '../store/store';

const View = () => { 
  const [item, SetItem]= useState(null);
  const params= useParams();
  const store= useAppContext();
  console.log(params.bookId)
useEffect(() => {
  
  const book= store.getItem(params.bookId);
  SetItem(book);
}, [ ])

const itemStyles={
  container: {
    display: "flex",
    gap:"20px",
 color:"white",
 width:"800px",
    margin: "0 auto",
  },
}

if(!item){
 return <Layout>Item not found.</Layout>
}

  return (
    <Layout>
      <div style={itemStyles.container}>
        <div>
        <div>{item?.cover?<img src={item.cover} width='400'/> : ''}</div>
        </div>
        <div>
    <h2>{item?.title}</h2>
   
    <div>{item?.author}</div>
    <div>{item?.intro}</div>
    <div>{item?.completed ? 'Leido' : 'Por terminar'}</div>
    <div>{item?.review}</div>
    </div>
    </div>
    </Layout>
  )
}

export default View