'use client'

import React, { Suspense, useEffect } from 'react';
import { useParams } from 'next/navigation';
import postData from '../../../data/postData.json'
import HomeButton from '@/components/HomeButton';
import CommentsSection from '@/components/CommentsSection';
import Image from 'next/image';
// import ReactGA from 'react-ga4';


function Post() {
const params = useParams();
const thisPostURL = params.post
const thisPost = postData.filter(thing => (thing.URLTitle===thisPostURL))[0];

/* useEffect(() => {
  ReactGA.send({ hitType: "pageview", page: thisPost.URLTitle, title: thisPost.URLTitle});
}, []) */

function loadReviewText(fileName) {
  const postText = React.lazy(() =>
    import(`./(posts)/${fileName}`)
  );
  return postText;
}
const PostText = loadReviewText(thisPost.mainTextFile);

  return(
    <>
    <HomeButton />
   {thisPost.postType==="books" ?
   <>
    <div className="mb-3">
    <div className='d-flex justify-content-center mb-5'>
    <Image alt="Cover Image" className="img-fluid postMasterImage" src={require(('../../../../public/images/')+thisPost.coverImage)}></Image>
    </div>
    <div className='d-flex justify-content-center mb-3 postPageHeadline'>{thisPost.bookTitle}</div>
    <div className='d-flex justify-content-center mb-5 postPageAuthorLine'>{thisPost.authorLine}</div>
    </div>
   </>
    : 
   <>
   <div className="mb-3">
    <div className='d-flex justify-content-center mb-5'>
    <Image alt="Cover Image" className="img-fluid postMasterImage" src={require(('../../../../public/images/')+thisPost.coverImage)}></Image>
    </div>
    <div className='d-flex justify-content-center mb-3 postPageHeadline'>{thisPost.previewHeadline}</div>
    <div className='d-flex justify-content-center mb-5 postPageAuthorLine'>{thisPost.previewBody}</div>
    </div>
   </>
    }
    <Suspense>
    <div><PostText /></div>
    </Suspense>
    <hr></hr>
    <CommentsSection section={thisPost.previewHeadline}/>
    </>
  )}
  
   
  export default Post;