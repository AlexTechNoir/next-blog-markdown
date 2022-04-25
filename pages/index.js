import Head from 'next/head'
import { getAllPosts } from '../lib/api'
import ArticlePreview from '../components/ArticlePreview'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'imgMid',
  ])

  return {
    props: { allPosts },
  }
}

export default function Home({ allPosts }) {
  const [ arePreviewsLoaded, setArePreviewsLoaded ] = useState(false)

  useEffect(() => {
    setArePreviewsLoaded(true)
  },[])

  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts arePreviewsLoaded={arePreviewsLoaded}>
        <h1>Latest</h1>
        <div>
          {
            allPosts.slice(0, 6).map(post => (
              <ArticlePreview 
                key={post.slug}
                title={post.title}
                img={post.imgMid}
                date={post.date}
                slug={post.slug}
              />
            ))
          }
        </div>
      </Posts>
    </>
  )
}

const Posts = styled.main`
  grid-area: 2 / 2 / 4 / 3;
  padding: 1em;
  > :first-child {
    margin: 1em 0 0 1em;
    color: white;
    font-family: 'Titillium Web';
  }
  > :nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    // Odd and even ArticlePreview.js components
    > :nth-child(odd) {
      transition: 
        transform .3s cubic-bezier(0.250, 0.460, 0.450, 0.940), 
        opacity .5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
      transform: ${props => !props.arePreviewsLoaded ? 'translateX(-1000px)' : 'translateX(0)'};
      opacity: ${props => !props.arePreviewsLoaded ? 0 : 1};
      clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
      > div > div {
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.459) 10%);
        right: 0;
        > :first-child {
          float: right;
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
          shape-outside: polygon(100% 0, 0% 100%, 100% 100%);
        }
        > h1 {
          margin-left: 1em;
        }
        > :nth-child(3) {
          margin: 1em 0 .5em 1.5em;
        }
      }
    }
    > :nth-child(even) {
      transition: 
        transform .3s cubic-bezier(0.250, 0.460, 0.450, 0.940), 
        opacity .5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
      transform: ${props => !props.arePreviewsLoaded ? 'translateX(1000px)' : 'translateX(0)'};
      opacity: ${props => !props.arePreviewsLoaded ? 0 : 1};
      clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
      > div > div {
        background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.459) 10%);
        left: 0;
        > :first-child {
          float: left;
          clip-path: polygon(0 0, 0% 100%, 100% 100%);
          shape-outside: polygon(0 0, 0% 100%, 100% 100%);
        }
        > h1 {
          margin-right: 1em;
        }
        > :nth-child(3) {
          margin: 1em 1.5em .5em 0;
        }
      }
    }
  }
`
