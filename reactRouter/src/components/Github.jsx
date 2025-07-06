import React from 'react'
import {useLoaderData} from 'react-router-dom';

function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState({})
    // // const [username, setUsername] = useState("Rohaz-bhalla")
    // useEffect(()=> {
    //   fetch('https://api.github.com/users/Rohaz-bhalla')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })

    // }, [])
    
  return (
<>
{/* <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
            <input 
                type="text" 
                placeholder="Enter GitHub Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="text-black p-2 rounded-md"
            />
            </div> */}
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
        Github Followers:-{data.followers}
         <img className='text-center' src={data.avatar_url} alt="git pic" width={300}/>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const token = 'Your Token here' ;
 const response =  await fetch('Your api here', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
  }
 });
 return response.json()
}