import React, { Fragment } from 'react'
import { SinglePost, SinglePostBreadCrumb } from '@/components/Blog/SinglePost'

const SinglePostPage = ({ params }: { params: { id: string } }) => {
  return (
    <Fragment>
        <SinglePostBreadCrumb id={params.id}/>
        <SinglePost id={params.id}/>
    </Fragment>
  )
}

export default SinglePostPage