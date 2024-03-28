import { Card } from "../../components/Card";
import { MovieCard } from "../../components/MovieCard";
import { 
  Container, 
  Header,
  Avatar,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  Icon,
  CardWrapper,
  ListMovies,
  Title
 } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/45154356?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>João</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <CardWrapper>
        <Card 
          topTitle="Top 1 em filmes hoje"
          genre="Ação"
          movie="Donzela"
          synopsis="Era uma vez, uma rainha manipuladora e um dragão mortífero que mexeram com a donzela errada. uma aventura de arrepiar os cabelos com Millie Bobby Brown."
        />
        <Card 
          topTitle="Top 2 em filmes hoje"
          genre="Infantil"
          movie="Pedro Coelho 2"
          synopsis="Pedro e sua família resolvem sair do jardim de Tomás e Bia para dar um pulo na cidade. Eles se metem em confusões e acabam precisando da ajuda de amigos antigos."
        />
        <Card 
          topTitle="Top 3 em filmes hoje"
          genre="Ação"
          movie="Suits"
          synopsis="Mesmo sem se formar e sem licença para advogar um jovem impressiona um importante advogado e consegue uma cobiçada posição em sua firma."
        />
      </CardWrapper>

      <ListMovies>
        <Title>Listagem</Title>

        <MovieCard />
      </ListMovies>
    </Container>
  )
}
