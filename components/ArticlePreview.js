import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'

export default function ArticlePreview({ title, coverImage, date, author, slug, excerpt, imgHeight, imgWidth }) {
  return (
    <Link href={`/posts/${slug}`} passHref>
      <StyledLink>
        <div>
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            layout="responsive"
            width={imgWidth}
            height={imgHeight}
          />
          <h1>{title}</h1>
          <time dateTime={date.substring(0, 10)}></time>
          <div>{author.name}</div>
          <div>{excerpt}</div>
        </div>
      </StyledLink>
    </Link>
  )
}

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  width: 100%;
  > div {
    display: flex;
    flex-direction: column;
    margin: 1em;
    padding: 1em;
  }
`
