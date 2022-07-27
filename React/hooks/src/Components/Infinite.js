import React ,{useState,useEffect}from 'react'

function Infinite() {
  const[count,setCount] = useState(0);
  //componentDidMount
  //It will be used when we need to perform some side effect wala kaam

  useEffect( () => {
    console.log("useEffect is called");
    document.title = `Button clicked ${count} times`;
    setCount(10);
    //let rnum=Math.random() * 100;
    //setCount(rnum);
  });
  console.log("render");
  return (
    // <div>Infinite</div>
    <div>
      <button onClick={ () => setCount(count+1)}>+</button>
      <h1>{count}</h1>
      <button onClick={ () => setCount(count-1)}>-</button>
    </div>
  )
}

export default Infinite