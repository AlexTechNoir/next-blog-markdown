import Head from 'next/head'
import { getAllPosts } from '../lib/api'
import ArticlePreview from '../components/ArticlePreview'
import styled from '@emotion/styled'

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts>
        <h1>Latest</h1>
        <div>
          {
            allPosts.slice(0, 6).map(post => (
              <ArticlePreview 
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
                imgHeight={800}
                imgWidth={1024}
              />
            ))
          }
        </div>
      </Posts>
    </>
  )
}

const Posts = styled.main`
  grid-area: 2 / 2 / 3 / 3;
  margin-top: 1em;
  padding: 1em;
  > :first-child {
    margin: 1em;
    color: white;
    font-family: 'Quando';
  }
  > :nth-child(2) {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-items: center;
    align-items: start;
    column-gap: 1em;
    row-gap: 3em;
  }
`
