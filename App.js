import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import LoginForm from './src/components/LoginForm';
import Message from './src/components/Message';
import styles from './src/styles/styles';

// Credenciales hardcodeadas (requisito del TP)
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = '1234';

/**
 * App
 * Responsabilidad:
 * - Guardar los estados: username, password, message
 * - Validar usuario y contraseña en handleLogin()
 * - Decidir qué mensaje mostrar
 * - Renderizar LoginForm y Message
 */
export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setMessage('Login correcto ✓');
    } else {
      setMessage('Usuario o contraseña incorrectos, vuelva a intentar');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        onLogin={handleLogin}
      />
      <Message message={message} />
    </View>
  );
}
