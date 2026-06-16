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
    <View style={styles.formWrapper}>

      {/* Card blanca con el logo */}
      <View style={styles.logoCard}>
        <Image
          source={{
            uri: 'https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png',
          }}
          style={styles.logo}
          accessible={true}
          accessibilityLabel="Logo Coca-Cola"
        />
      </View>

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
