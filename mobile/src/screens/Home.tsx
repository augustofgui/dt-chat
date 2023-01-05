import React from 'react';
import { ScrollView } from 'native-base';
import { HomeHeader } from '@components/UI/Headers/Home';

export function Home() {
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false} bg="gray.700">
      <HomeHeader />
    </ScrollView>
  );
}
