import React from 'react';
import {
  ScrollView,
  VStack,
  Heading,
  Box,
  IconButton,
  useTheme
} from 'native-base';

import { useNavigation } from '@react-navigation/native';
import { SignUpForm } from '@components/Forms/Containers/SignUpForm';

import { ArrowBendUpLeft } from 'phosphor-react-native';

export function SignUp() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false} bg="gray.700">
      <Box safeAreaTop />
      <IconButton
        icon={<ArrowBendUpLeft size={26} color={colors.gray[100]} />}
        _pressed={{ bg: 'gray.500' }}
        onPress={handleNavigateBack}
        alignSelf="flex-start"
        ml={4}
        mt={4}
      />

      <VStack flex={1} alignItems="center" justifyContent="center" px={6} pb={4}>
        <Heading color="lightText" fontSize="4xl" mt={12} alignSelf="flex-start">
          Cadastrar
        </Heading>

        <SignUpForm />
      </VStack>
    </ScrollView>
  );
}
