import Link from 'next/link'
import Card from '@mui/material/Card'
import { CardActionArea } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export default function ArticlePreview({ title, coverImage, date, author, slug, excerpt }) {
  useEffect(() => {
    const buttons = document.querySelectorAll('.card')
    buttons.forEach(button => button.tabIndex = -1)
  }, [])

  const customMuiStyles = {
    maxWidth: 345,
    '> button > div > p': {
      marginBottom: '1em'
    },
    '.title': {
      fontWeight: 600
    },
    '.dateAndAuthor': {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }

  return (
    <Link href={`/posts/${slug}`} passHref>
      <StyledLink>
        <Card sx={customMuiStyles}>
          <CardActionArea className="card" disableRipple>
            <CardMedia
              component="img"
              height="140"
              image={coverImage}
              alt={`car image`}
            />
            <CardContent>
              <Typography className="title" gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {excerpt}
              </Typography>
              <div className="dateAndAuthor">
                <Typography variant="body1" component="div">
                  {date.substring(0, 10)}
                </Typography>
                <Typography variant="body1" component="div">
                  {author.name}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </StyledLink>
    </Link>
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

const StyledLink = styled.a`
  &:hover {
    animation: .2s 2 ${wrooom} linear; 
  }
`
