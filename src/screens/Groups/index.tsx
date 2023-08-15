import { Button } from '@components/Button';
import { EmptyList } from '@components/EmptyList';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Loader } from '@components/Loader';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupGetAll } from '@storage/group/groupGetAll';
import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { Container } from './styles';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate('new');
  };

  const fetchGroups = async () => {
    try {
      setIsLoading(true);

      const data = await groupGetAll();
      setGroups(data);
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenGroup = (group: string) => {
    navigation.navigate('players', { group });
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, []),
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <EmptyList message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
