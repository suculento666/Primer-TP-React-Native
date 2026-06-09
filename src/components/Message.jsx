import React from 'react';
import { Text } from 'react-native';
import styles from '../styles/styles';

/**
 * Message
 * Responsabilidad: mostrar el resultado del intento de login.
 * Recibe message desde App y elige el estilo según el contenido.
 * Si no hay mensaje, no renderiza nada.
 */
const Message = ({ message }) => {
  if (!message) return null;

  const isSuccess = message.toLowerCase().includes('correcto');

  return (
    <Text
      style={isSuccess ? styles.messageSuccess : styles.messageError}
      accessible={true}
      accessibilityRole="alert"
    >
      {message}
    </Text>
  );
};

export default Message;
