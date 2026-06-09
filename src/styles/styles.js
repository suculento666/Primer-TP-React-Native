import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Contenedor principal
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  // Logo
  logo: {
    width: 220,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 40,
  },

  // Inputs
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: '#7B2FBE',
    borderRadius: 6,
    paddingHorizontal: 14,
    marginBottom: 14,
    backgroundColor: '#fff',
    fontSize: 15,
    color: '#333',
  },

  // Botón INGRESAR
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#7B2FBE',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  // Links secundarios
  linkText: {
    color: '#555',
    fontSize: 14,
    marginTop: 6,
    textAlign: 'center',
  },

  // Mensaje éxito
  messageSuccess: {
    marginTop: 16,
    color: '#2e7d32',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },

  // Mensaje error
  messageError: {
    marginTop: 16,
    color: '#c62828',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
