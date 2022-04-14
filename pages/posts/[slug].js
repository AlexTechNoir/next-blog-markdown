import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import Error from 'next/error'
import Image from 'next/image'
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
    'coverImage'
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
  console.log(post)
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <Error statusCode={404} />
  }

  return (
    <Article>
      <title>{post.title}</title>
      <Image
        src={post.coverImage}
        alt={`Cover Image for ${post.title}`}
        layout="responsive"
        width={1024}
        height={800}
      />
      <time dateTime={post.date.substring(0, 10)}>{post.date.substring(0, 10)}</time>
      <span>{post.author.name}</span>
      <p>{post.content}</p>
    </Article>
  )
}

const Article = styled.article`
  grid-area: 2 / 2 / 3 / 3;
  padding: 1em;
`
