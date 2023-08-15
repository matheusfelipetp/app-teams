import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { ButtonIconSyleProps, Container, Icon } from './style';

type ButtonProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconSyleProps;
};

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
