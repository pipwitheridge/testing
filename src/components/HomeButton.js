import Link from "next/link";
import { AiFillHome } from "react-icons/ai";


export default function HomeButton() {
    return(
<div className="homeButton mb-5">
<Link href="/"><AiFillHome color="black" size={30}/></Link>
</div>    
)
  }
