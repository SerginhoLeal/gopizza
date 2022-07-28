import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export type TypeProps = 'primary' | 'secondary';

type ContainerProps = {
  type: TypeProps;
};

export const Container = styled(RectButton)<ContainerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;

  justify-content: center;
  align-items: center;

  ${({ theme, type }) => css`
    border-radius: ${theme.settings.border_radius};
    background-color: ${type === 'primary' ? theme.colors.primary_900 : theme.colors.primary_800};
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.small};
    font-family: ${theme.fonts.text};
    color: ${theme.colors.title};
  `}
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.title
}))``;