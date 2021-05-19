import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator'
import {useState,useEffect} from 'react'


const initialState={
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/30b1gx.jpg",
    allMemeImgs:[]
}

function App() {

const [meme, setMeme] = useState(initialState)

useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
  .then(res=>res.json())
  .then(res=>{
    const{memes}=res.data
    
    setMeme({...meme,allMemeImgs:memes})
  })

},[])

const randomNum=()=>{
  return (Math.floor(Math.random()*100) )
 
}

const onSubmitHandler=(e)=>{
e.preventDefault();
setMeme({...meme,randomImage:meme.allMemeImgs[randomNum()].url})


}





const handleChange=(e)=>{

  const {name,value}=e.target;

  setMeme({...meme,[name]:value})

}

  return (
    <div >
    <Header/>
    <MemeGenerator/>

    <form onSubmit={onSubmitHandler} >
    <input 
    type="text" 
    name="topText" 
    value={meme.topText}
    onChange={handleChange}
     placeholder="top text"/>

    <input type="text"
     name="bottomText" 
     value={meme.bottomText}
    onChange={handleChange}
     placeholder="bottom text"/>



      <button className="px-4 py-2 m-2 bg-yellow-700 text-yellow-100">Gen</button>
    </form>

    <div className="flex  justify-center items-center text-4xl font-bold">
      <img 
      className="border-2 border-black"
      src={meme.randomImage}
        width="400px"
      />
      <div>
      <div className="mb-20">
      <h1 className="bg-yellow-500 text-yellow-100">{meme.topText}</h1>

      </div>
      <div className="mt-16">
      <h1 className=" bg-red-500 text-red-100">{meme.bottomText}</h1>


      </div>
      </div>
      
      
    </div>
    
    </div>
  );
}

export default App;
