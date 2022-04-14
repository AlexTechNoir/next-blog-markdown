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
        {
          allPosts.map(post => (
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
      </Posts>
    </>
  )
}

const Posts = styled.main`
  grid-area: 2 / 2 / 3 / 3;
`
