import React from 'react';
import { VStack } from 'native-base';

import { Envelope, Key } from 'phosphor-react-native';

import { Input } from '@components/Forms/Input';
import { Button } from '@components/Forms/Button';

import { useForm } from 'react-hook-form';
import { signInResolver } from '@services/validations/sign-in';

import { SignInData } from '@interfaces/auth-interface';

import { useAuth } from '@hooks/useAuth';

export function SignInForm() {
  const { control, handleSubmit, formState: { isSubmitting } } = useForm<SignInData>({
    resolver: signInResolver,
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { signIn } = useAuth();

  async function handleSignIn(data: SignInData) {
    try {
      await signIn(data);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <VStack width="full" mt={12}>
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
        title="Entrar"
        width="full"
        color="white"
        mt={2}
        onPress={handleSubmit(handleSignIn)}
        isLoading={isSubmitting}
      />
    </VStack>
  );
}
