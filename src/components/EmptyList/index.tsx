import { Container } from '@components/Header/styles';
import { Message } from './styles';

type EmptyListProps = {
  message: string;
};

export function EmptyList({ message }: EmptyListProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
