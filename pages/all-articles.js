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
      <div className="list">
        <ul>
          {
            allPosts.map(post => (
              <li key={post.slug}>
                <Link href={`/posts/${encodeURIComponent(post.slug)}`} passRef>
                  <a>
                    {post.date.substring(0, 10)} &nbsp;&nbsp;-&nbsp;&nbsp; {post.title}
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
  > .list > ul {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    > li {
      list-style: none;
      font-size: 1.75em;
      margin-bottom: 1em;
      > a {
        color: white;
        display: inline-block;
      }
      &:hover {
        animation: ${wrooom} .2s 2 linear !important;
      }
    }
  } 

  @media only screen and (max-width: 1216px) {
    grid-area: 2 / 1 / 4 / 2;
  }

  @media only screen and (max-width: 1024px) {
    > .list > ul > li {
      font-size: 1.4em;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-top: 0;
    > .list > ul {
      padding-left: 0;
      > li {
        font-size: 1.4em;
      }
    } 
  }

  @media only screen and (max-width: 428px) {
    > h1 {
      font-size: 1.5em;
      margin-top: 0;
    }
    > .list > ul {
      padding-left: 0;
      > li {
        font-size: 1em;
      }
    } 
  }
`
