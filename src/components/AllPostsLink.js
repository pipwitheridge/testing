'use client'

import '../app/globals.css'
import Link from 'next/link';

export default function AllPostsLink(props) {
    return(
      <div><Link href={props.postType} className="smallAnchor">{window.innerWidth>768 ? props.postType==="books" ? "All Book Reviews" : "All Posts" : "All"} {"\u2192"}</Link></div>
    )
  }
