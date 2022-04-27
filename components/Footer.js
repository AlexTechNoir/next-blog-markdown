import styled from '@emotion/styled'
import Link from 'next/link'

export default function Footer() {
  return (
    <StyledFooter>
      <span>
        &quot;Carsss!&quot;
      </span>
      <Link href="/" passRef>
        <a>
          <img src="/icons/twitter.svg" alt="twitter icon" width="24" height="24" />
        </a>
      </Link>
      <Link href="/" passRef>
        <a>
          <img src="/icons/rss.svg" alt="rss icon" width="24" height="24" />
        </a>
      </Link>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  grid-area: 4 / 1 / 5 / 4;
  color: white;
  background-color: rgb(0, 17, 255);
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    margin: 1em;
  }
  > a {
    height: 24px;
    &:hover {
      opacity: 0.7;
    }
  }
`
