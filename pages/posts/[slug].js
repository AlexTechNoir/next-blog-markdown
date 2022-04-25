import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import Error from 'next/error'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import ProgressiveImage from '../../components/article/ProgressiveImage'

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
      <ProgressiveImage post={post} />
      <Article>
        <h1>{post.title}</h1>
        <div>
          <time dateTime={post.date.substring(0, 10)}>{post.date.substring(0, 10)}</time>
          <span>by {post.author}</span>
        </div>
        <article dangerouslySetInnerHTML={{__html: post.content}}></article>
      </Article>
    </>
  )
}

const Article = styled.div`
  grid-area: 3 / 2 / 4 / 3;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  > h1 {
    width: 1024px;
    text-align: center;
  }
  > div {
    width: 1024px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
  }
  > article {
    width: 1024px;
  }
`
