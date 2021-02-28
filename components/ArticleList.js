import React from 'react'
import Link from 'next/link'
export default function ArticleList({articles}) {
    return (
        <div>
               {articles.map(item => (
                <Link href = {`articles/${item.id}`} >
                    <h2>{item.title}</h2>
                </Link>
               ) )}

        </div>
    )
}
