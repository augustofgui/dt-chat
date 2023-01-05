import React from 'react';
import { useTheme, Box, HStack, VStack, Image, IconButton, Text, Pressable } from 'native-base';

import { useAuth } from '@hooks/useAuth';
import { SignOut } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

export function HomeHeader() {
  const { colors } = useTheme();
  const { user, signOut } = useAuth();

  const navigation = useNavigation();

  function handleNavigateToSignOutPage() {
    navigation.navigate('profile');
  }

  async function handleSignOut() {
    await signOut();
  }

  return(
    <>
      <Box safeAreaTop bg="gray.700" />
      <HStack
        width="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.700"
        h={20}
        px={4}
      >
        <Pressable onPress={handleNavigateToSignOutPage}>
          <HStack alignItems="center" justifyContent="center">
            <Box
              width={14}
              height={14}
              bg="gray.700"
              borderRadius={100}
              borderWidth={1}
              borderColor="gray.500"
            />
            <VStack alignItems="flex-start" ml="3">
              <Text color="white">Olá,</Text>
              <Text color="white" fontSize="md" fontFamily="heading">{user?.name}</Text>
            </VStack>
          </HStack>
        </Pressable>

        <IconButton
          icon={<SignOut size={26} color={colors.gray[300]} />}
          _pressed={{ bg: 'gray.500' }}
          onPress={handleSignOut}
        />
      </HStack>
    </>
  );
}
