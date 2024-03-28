import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Emphasis,
  Details
 } from './styles'

 interface CardProps {
  topTitle: string;
  movie: string;
  genre: string;
  synopsis: string
 }

export function Card({ topTitle, movie, genre, synopsis }: CardProps) {
  return (
    <Container>
      <Header>
        <Title>{topTitle}</Title>
        <Icon name="play-circle" />
      </Header>

      <Footer>
        <Emphasis>
          {movie}
        </Emphasis>

        <Details>{`Gênero: ${genre}`}</Details>
        <Details>{`Sinopse: ${synopsis}`}</Details>
      </Footer>
    </Container>
  )
}