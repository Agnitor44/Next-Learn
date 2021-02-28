import React from 'react'
import {useRouter} from 'next/router'
import Article_id from '../../../components/Article_id'
export default function article({article}) {
    const router = useRouter()
    const {id} = router.query
    return (
        <div>
          {id}
          <Article_id article = {article}/>
        </div>
    )
}

export const getServerSideProps = async(context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}