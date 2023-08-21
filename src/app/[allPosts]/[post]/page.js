'use client'

import React, { Suspense, useEffect } from 'react';
import { useParams } from 'next/navigation';
import postData from '../../../data/postData.json'
import HomeButton from '@/components/HomeButton';
import CommentsSection from '@/components/CommentsSection';
import Image from 'next/image';
import dynamic from 'next/dynamic'

// import ReactGA from 'react-ga4';

export async function generateStaticParams() {
  return postData.map((thing) => ({
    allPosts: thing.postType,
    post: thing.URLTitle
  }))
}
 
export default function Post({params}) {

  console.log(generateStaticParams())

const { allPosts, post } = params;

const thisPost = postData.filter((thing) => thing.URLTitle===post)[0];

/* useEffect(() => {
  ReactGA.send({ hitType: "pageview", page: thisPost.URLTitle, title: thisPost.URLTitle});
}, []) */

const PostText = dynamic(() => import('../[post]/(posts)/'+thisPost.mainTextFile), {
  ssr: false,
})

  return(
    <>
    <HomeButton />
   {allPosts==="books" ?
    <>
    <div className="mb-3">
    <div className='d-flex justify-content-center mb-5'>
    <Image alt="Cover Image" className="img-fluid postMasterImage" src={thisPost && require('../../../../public/images/'+thisPost.coverImage)}></Image>
    </div>
    <div className='d-flex justify-content-center mb-3 postPageHeadline'>{thisPost.bookTitle}</div>
    <div className='d-flex justify-content-center mb-5 postPageAuthorLine'>{thisPost.authorLine}</div>
    </div>
   </>
    : 
   <>
   <div className="mb-3">
    <div className='d-flex justify-content-center mb-5'>
    <Image alt="Cover Image" className="img-fluid postMasterImage" src={thisPost && require('../../../../public/images/'+thisPost.coverImage)}></Image>
    </div>
    <div className='d-flex justify-content-center mb-3 postPageHeadline'>{thisPost && thisPost.previewHeadline}</div>
    <div className='d-flex justify-content-center mb-5 postPageAuthorLine'>{thisPost && thisPost.previewBody}</div>
    </div>
   </>
    }
    {thisPost &&
    <>
    <div><PostText /></div>
    <hr></hr>
    <CommentsSection section={thisPost && thisPost.previewHeadline}/>
    </>
    }
    
    </>
  )}