import React from 'react';
import { ScrollView, VStack, Heading, Text } from 'native-base';

import { useNavigation } from '@react-navigation/native';

import { SignInForm } from '@components/Forms/Containers/SignInForm';

import { Button } from '@components/Forms/Button';

export function SignIn() {
  const navigation = useNavigation();

  function handleNavigateToSignUpPage() {
    navigation.navigate('sign-up');
  }

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false} bg="gray.700">
      <VStack flex={1} alignItems="center" justifyContent="center" px={6} pb={4}>
        <Heading color="lightText" fontSize="4xl" mt={24} alignSelf="flex-start">
          Entrar
        </Heading>

        <SignInForm />

        <Text color="gray.300" fontSize="xs" py={4}>Ou então pressione aqui para</Text>

        <Button
          title="Cadastrar"
          width="full"
          variant="outline"
          bg="transparent"
          color="lightBlue.600"
          borderColor="gray.400"
          _pressed={{
            bg: 'lightBlue.900'
          }}
          onPress={handleNavigateToSignUpPage}
        />
      </VStack>
    </ScrollView>
  );
}
