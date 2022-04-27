import Link from 'next/link'
import styled from '@emotion/styled'
import { getAllPosts } from '../lib/api'
import { keyframes } from '@emotion/react'

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
  ])

  return {
    props: { allPosts },
  }
}

export default function AllArticles({ allPosts }) {
  return (
    <Articles>
      <h1>All articles</h1>
      <div>
        <ul>
          {
            allPosts.map(post => (
              <li key={post.slug}>
                <Link href={`/posts/${encodeURIComponent(post.slug)}`} passRef>
                  <a>
                    {post.date.substring(0, 10)} &nbsp;&nbsp;&nbsp; {post.title}
                  </a>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </Articles>
  )
}

const wrooom = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(-5px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  75% {
    transform: translate(0px, -5px);
  }
  100% {
    transform: translate(0px, 0px);
  }
`

const Articles = styled.div`
  grid-area: 2 / 2 / 4 / 3;
  padding: 1em;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    width: 100%;
  }
  > div > ul > li {
    list-style: none;
    font-size: 1.75em;
    margin-bottom: 1em;
    &:hover {
      animation: ${wrooom} .2s 2 linear !important;
    }
    > a {
      color: white;
    }
  }
`
