import React from 'react';
import { VStack } from 'native-base';

import { User, IdentificationBadge, Envelope, Key } from 'phosphor-react-native';

import { Input } from '@components/Forms/Input';
import { Button } from '@components/Forms/Button';

import { useForm } from 'react-hook-form';
import { signUpResolver } from '@services/validations/sign-up';

import { SignUpData } from '@interfaces/auth-interface';

export function SignUpForm() {
  const { control, handleSubmit, formState: { isSubmitting } } = useForm<SignUpData>({
    resolver: signUpResolver,
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: ''
    }
  });

  async function handleSignUp(data: SignUpData) {
    console.log(data);
  }

  return (
    <VStack
      width="full"
      mt={12}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Input
        control={control}
        inputName="name"
        placeholder="Nome"
        autoCorrect={false}
        autoCapitalize="none"
        leftIcon={User}
      />
      <Input
        control={control}
        inputName="username"
        placeholder="Nickname"
        autoCorrect={false}
        autoCapitalize="none"
        leftIcon={IdentificationBadge}
      />
      <Input
        control={control}
        inputName="email"
        placeholder="E-mail"
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        leftIcon={Envelope}
      />
      <Input
        control={control}
        inputName="password"
        placeholder="Senha"
        autoCapitalize="none"
        secureTextEntry
        leftIcon={Key}
      />

      <Button
        title="Cadastrar"
        width="full"
        color="white"
        mt={2}
        onPress={handleSubmit(handleSignUp)}
        isLoading={isSubmitting}
      />
    </VStack>
  );
}
