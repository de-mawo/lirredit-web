import { DarkModeSwitch } from "../components/DarkModeSwitch"
import { NavBar } from "../components/NavBar"
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from "../utils/createUrqlClient"
import { usePostsQuery } from "../generated/graphql";


const Index = () => { 
  const [{data}] = usePostsQuery()
  return (
    <>
    {/* <DarkModeSwitch/> */}
    <NavBar/>
    <div>Hello</div>
    <br/>
    { !data ? (<div>loading...</div>) : (  data.posts.map((p) => <div key={p._id}> {p.title}</div>))}
    </>
  )
 
}

export default withUrqlClient(createUrqlClient,{ssr: true} )  (Index)
