'use client' 

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import postData from '../../data/postData.json'
import HomeButton from '@/components/HomeButton';
import Image from 'next/image';

function AllPosts() {
  
  const params = useParams();
  const posttype = params.allPosts

  return(
    <>
    <HomeButton />
    <div className="mb-4"><h3>{posttype==="books" ? "Book Reviews" : "All Posts"}</h3></div>
        <div className="d-flex flex-wrap inline justify-content-between">
        {postData.filter(bit => bit.postType === posttype).map(bit => {
          return(
          <>
          <div className="d-flex mb-2 blogPreviewItem">
          <Link href={posttype+"/"+bit.URLTitle} className="bookPreview">
          <div className="d-flex flex-lg-column flex-sm-row">
          <div className="mb-2"><Image alt="Cover Image" className="img img-fluid" style={{borderRadius: 5}} src={require(('../../../public/images/')+bit.coverImage)}></Image></div>
          <div className="d-flex flex-column blogPreviewText">
          <div><h5>{bit.previewHeadline}</h5></div>
          <div className="mb-2 previewBody"><span className="previewBody">{bit.previewBody}</span></div>
          </div>
          </div>
          </Link>
          </div>
          </>
          )
        })}
        <div className="blogPreviewItem"></div>
        </div>

    </>
  )}

  export default AllPosts;