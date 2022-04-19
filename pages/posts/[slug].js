import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import Error from 'next/error'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

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
    'ogImage',
    'coverImage',
    'imgWidth',
    'imgHeight',
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
    <Article>
      <h1>{post.title}</h1>
      <img
        src={post.coverImage}
        alt={`Cover Image for ${post.title}`}
        width={post.imgWidth}
        height={post.imgHeight}
      />
      <div>
        <time dateTime={post.date.substring(0, 10)}>{post.date.substring(0, 10)}</time>
        <span>{post.author.name}</span>
      </div>
      <article dangerouslySetInnerHTML={{__html: post.content}}></article>
    </Article>
  )
}

const Article = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  > h1 {
    width: 1024px;
    text-align: center;
  }
  > img {
    margin-bottom: 1em;
    max-width: 1024px;
    width: 100%;
    height: 100%;
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
