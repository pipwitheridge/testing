import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image';
import '../app/globals.css'
import Link from 'next/link';
import postData from '../data/postData.json'
import AllPostsLink from './AllPostsLink';

export default function PreviewSection(props) {
    return(
      <>
      <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
      <div><h4 style={{display: "inline"}}>Latest {props.sectionHeader}</h4></div>
      <AllPostsLink postType={props.postType} />
      </div>
      <div className="d-flex flex-wrap inline justify-content-between">
      {postData.filter(bit => bit.postType === props.postType & bit.number < 4).map(bit => {
        return(
        <>
        <div className="d-flex mb-2 blogPreviewItem">
        <Link href={bit.postType+"/"+bit.URLTitle} className="bookPreview">
        <div className="d-flex flex-lg-column flex-sm-row">
        <div className="mb-2"><Image className="img img-fluid" style={{borderRadius: 5}} src={require(('../images/')+bit.coverImage)} alt="Book cover or blog post image"></Image></div>
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
    )
  }
