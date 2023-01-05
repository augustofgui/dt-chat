
import React from 'react';
import {
  Button as NativeBaseButton,
  Heading,
  IButtonProps
} from 'native-base';

interface ButtonProps extends IButtonProps {
  title: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton
      bg="lightBlue.600"
      h={14}
      rounded="sm"
      _pressed={{ bg: 'lightBlue.500' }}
      {...rest}
    >
      <Heading color={color} fontSize="md">
        {title}
      </Heading>
    </NativeBaseButton>
  );
}
