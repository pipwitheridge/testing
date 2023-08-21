'use client'

import '../app/globals.css'
import Link from 'next/link';

export default function AllPostsLink(props) {
    return(
      <div><Link href={props.postType} className="smallAnchor">All {"\u2192"}</Link></div>
    )
  }
