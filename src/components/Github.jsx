import { MdArrowForwardIos } from "react-icons/md";
import ngoImage from "../assets/volunteers.jpg"
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData()

// const[data,setData]=useState([])
// useEffect(()=>{
//  fetch('https://api.github.com/users/hiteshchoudhary')
//  .then(response=>response.json())
//  .then(data=>{console.log(data);
//     setData(data)
//  })
// },[])



  return (
    <div>
          <div className="about-container">
                  <h1 className='ngo_heading'>Github</h1>
                  <h5 style={{ color: "#868b8a" }}>Home <MdArrowForwardIos style={{ color: "#1c7a69ff" }} />Github</h5>
                </div>
                <img src={ngoImage} alt="" srcSet="" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
          
                <h5 style={{ color: "#07705C", marginTop: "30px" }}>My Github Profile</h5>
    <div className='github-div d-flex align-items-center justify-content-evenly'>
      <img src={data.avatar_url} alt="git picture" style={{width:"300px"}}/>

      <h1 className='ngo_heading'>Github Followers:{data.followers}</h1>

    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
 const response=await fetch('https://api.github.com/users/hiteshchoudhary')
return response.json();
}
