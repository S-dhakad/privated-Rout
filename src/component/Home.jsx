import React from 'react'
import { useLocation } from 'react-router-dom';
export default function Home() {
  const location = useLocation();
  const state = location.state;
    console.log('state : ' + state);
    console.log('state : ' + state.Name);
  return (
    <>
Home component
<h1>Name  {state.Name}</h1>
<h1>Surname  {state.Surname}</h1>



    </>
  )
}
