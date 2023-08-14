import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container } from './styles';

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();

  return <Container {...rest} placeholderTextColor={COLORS.GRAY_300} />;
}
