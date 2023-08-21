import 'bootstrap/dist/css/bootstrap.css'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import './globals.css'
import Link from 'next/link';
import PreviewSection from '@/components/PreviewSection';
import GoogleAnalyticsTag from '@/components/GoogleAnalyticsTag';
import Image from 'next/image';
import profilePic from '../../public/images/profilePic.jpeg'

export default function Home() {  

  return (
    <main>
    <GoogleAnalyticsTag />
    <div className="d-flex justify-content-center mt-5 mb-4"><Image alt="Cover Image" src={profilePic} className="profilePic"></Image></div> 
    <div className="d-flex justify-content-center mb-3" style={{fontSize: 30, fontWeight: 600}}>Pip Witheridge</div>
    <div className="d-flex justify-content-center mb-3">
    <span style={{textAlign: "center"}}>theology student from Sydney, co-host The Bible Boyz <Link className="smallAnchor" href="https://anchor.fm/the-bible-boyz">podcast</Link>, sometimes <Link className="smallAnchor" href="https://pipwitheridge.github.io/#/blog/my-coding">code</Link></span>
    </div>
    <br></br>
    <PreviewSection postType="books" sectionHeader={"Book Reviews"}/>    
    
    <br></br>   
    <PreviewSection postType="blog" sectionHeader={"Blog Posts"}/> 
    <br></br>
    <hr></hr>
    <div style={{marginBottom: "300px"}}>
    <div className="my-3" id="contact"><h4>Contact</h4></div>
    <p>Feel free to email me about anything.
    </p>
   <div className="align-items-center"><span>phillipwitheridge@gmail.com</span></div>  
    </div>
    </main>
  )
}
