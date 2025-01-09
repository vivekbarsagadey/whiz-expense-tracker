import { FlatList, Image, StyleSheet, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { TransactionComponent } from '@/components/transaction/TransactionComponent';
import { useTransactionStore } from '@/stores/useTransactionStore';
import type { Transaction } from '@/types/transaction';

export default function HomeScreen() {
  const { transactions } = useTransactionStore();
  

  const renderTransaction = ({ item }: { item: Transaction }) => (
    <TransactionComponent transaction={item} ></TransactionComponent>
  );


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        <ThemedView style={styles.titleContainer}>
        
      </ThemedView>
        <FlatList
        data={transactions}
        keyExtractor={(txn) => txn.id}
        renderItem={renderTransaction}
        ListEmptyComponent={() => (
          <ThemedView style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No transactions yet</Text>
          </ThemedView>
        )}
      />
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});
