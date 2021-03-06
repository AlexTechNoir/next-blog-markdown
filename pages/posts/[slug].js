import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import Error from 'next/error'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { useRouter } from 'next/router'
import ProgressiveImage from '../../components/article/ProgressiveImage'
import Link from 'next/link'
import Head from 'next/head'

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'imgThumbnail',
    'imgSmall',
    'imgSmallWidth',
    'imgMid',
    'imgMidWidth',
    'imgBig',
    'imgBigWidth',
    'articlesAlike',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <Error statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProgressiveImage post={post} />
      <Article>
        <h1 className="title">{post.title}</h1>
        <div className="dateAndAuthor">
          <time dateTime={post.date.substring(0, 10)}>{post.date.substring(0, 10)}</time>
          <span>by {post.author}</span>
        </div>
        <article dangerouslySetInnerHTML={{__html: post.content}}></article>
        <hr/>
        <div>You also might like:</div>
        <ul>
          {
            post.articlesAlike.map(article => (
              <li key={article.slug}>
                <Link href={`/posts/${encodeURIComponent(article.slug)}`} passRef>
                  <a>
                    {article.title}
                  </a>
                </Link>
              </li>
            ))
          }
        </ul>
      </Article>      
    </>
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

const Article = styled.div`
  grid-area: 3 / 2 / 4 / 3;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  max-width: 1024px;
  justify-self: center;
  > .title {
    width: 100%;
    max-width: 1024px;
    text-align: center;
  }
  > .dateAndAuthor {
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
  }
  > article {
    width: 100%;
    max-width: 1024px;
    margin-bottom: 1em;
  }
  > hr {
    width: 100%;
    max-width: 1024px;
  }
  > :nth-child(5) {
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  > ul {
    align-self: flex-start;
    list-style: none;
    > li {
      margin-bottom: 1em;
      list-style-image: url(/icons/car.png);
      > a {
        color: white;
        font-size: 1.75em;
        margin-left: .5em;
        display: inline-block;
        vertical-align: middle;
        text-indent: 0;
      }
      &:hover {
        animation: ${wrooom} .2s 2 linear !important;
      }
    }
  }

  @media only screen and (max-width: 1216px) {
    grid-area: 3 / 1 / 4 / 2;
  }

  @media only screen and (max-width: 768px) {
    > .title {
      font-size: 1.5em;
    }
    > :nth-child(5) {
      font-size: 1.75em;
    }
  }

  @media only screen and (max-width: 428px) {
    > :nth-child(5) {
      font-size: 1.5em;
    }
    > ul > li > a {
      font-size: 1.25em;
    }
  }
`
