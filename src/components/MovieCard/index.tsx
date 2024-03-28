
import { 
  Container,
  Type,
  Title,
  Footer,
  Category,
  Icon,
  CategoryName,
  DateLaunch,
} from './styles'

export function MovieCard() {
  return (
    <Container>
      <Type>Tipo: Filme</Type>
      <Title>Arremesso Final</Title>

      <Footer>
        <Category>
          <Icon name="star" />
          <CategoryName>Ação</CategoryName>
        </Category>
        <DateLaunch>27/03/2024</DateLaunch>
      </Footer>
    </Container>
  )
}