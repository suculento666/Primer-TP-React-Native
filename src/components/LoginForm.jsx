import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles';

/**
 * LoginForm
 * Responsabilidad: mostrar el formulario completo.
 * No valida nada, no tiene estado propio.
 * Recibe todo por props desde App.
 */
const LoginForm = ({ username, setUsername, password, setPassword, onLogin }) => {
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>

      {/* Logo */}
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png',
        }}
        style={styles.logo}
        accessible={true}
        accessibilityLabel="Logo Coca-Cola"
      />

      {/* Input usuario */}
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        accessible={true}
        accessibilityLabel="Campo de usuario"
      />

      {/* Input contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        accessible={true}
        accessibilityLabel="Campo de contraseña"
      />

      {/* Botón ingresar */}
      <TouchableOpacity
        style={styles.button}
        onPress={onLogin}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Ingresar"
      >
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>

      {/* Links secundarios */}
      <Text style={styles.linkText}>Olvidaste la clave?</Text>
      <Text style={styles.linkText}>Crear Cuenta</Text>

    </View>
  );
};

export default LoginForm;
