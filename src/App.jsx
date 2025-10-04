import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(6)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeCharactors, setIncludeCharactors] = useState(false)
  const passwordRef = useRef()

  const copyPassword = () =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
    alert("password copyed:")

  }

  useEffect(()=>{

    x()
  },[length,includeNumbers,includeCharactors,setPassword])
  const x = useCallback(()=>{
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(includeNumbers) string +="1234567890"
    if(includeCharactors) string +="!@#$%^&*_+?/"
    let char = ''
    for(let i = 1; i<=length ;i++){  
      
      char += string[Math.floor(Math.random(70) * (string.length))]
     
    }
    setPassword(char)

  },[length,includeNumbers,includeCharactors,setPassword])
  
  return (
   <div className="w-full h-screen bg-gray-200 flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="bg-gray-400 px-5 py-10 flex flex-col gap-10 rounded-xl">
          <div className="flex gap-3">
            <input type="text" value={password}  readOnly className="rounded-4xl outline-0 ring-0  border grow text-black text-xl pl-2 bg-yellow-300" placeholder="Password" ref={passwordRef} /> 
            <button className="rounded-3xl bg-blue-500 text-white py-2 px-5 font-semibold cursor-pointer" onClick={(e)=>copyPassword()} >Copy</button>
          </div>
          <div className="flex gap-4">
            <div>
              <input type="range" min={6} max={20} onChange={(e)=>setLength(e.target.value)} className="ml-1" /><label>Length {length} </label>
            </div>
            <div>
              <input type="checkbox" onClick={()=> setIncludeNumbers((pre)=> !pre) } /> <label>Include Numbers</label>
            </div>
            <div>
              <input type="checkbox" onClick={()=>setIncludeCharactors((pre)=>!pre)} /> <label>Include Charactors</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
