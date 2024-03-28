import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  padding: 16px 24px
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  
  font-size: ${RFValue(20)}px;
`;

export const Type = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-top: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: cneter;

  margin-top: 18px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;

`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 16px;
`;

export const DateLaunch = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;



