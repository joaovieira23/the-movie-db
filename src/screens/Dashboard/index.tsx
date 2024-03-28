import { 
  Container, 
  Header,
  Avatar,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  Icon
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
    </Container>
  )
}
