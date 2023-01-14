import { NotFoundContainer, NotFoundHeader, NotFoundText, NotFoundTexts } from 'views/NotFound/NotFound.styles'

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTexts>
        <NotFoundHeader> Error 404 </NotFoundHeader>
        <NotFoundText>
          Whoops. Looks like this page doesn't exist!
        </NotFoundText>
      </NotFoundTexts>
    </NotFoundContainer>
  )
}

export default NotFound
