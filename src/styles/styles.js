import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Contenedor principal: fondo gris claro
container: {
  flex: 1,
  backgroundColor: '#f0f0f0',
  alignItems: 'center',
  justifyContent: 'flex-start',
},

  // Wrapper del formulario completo
formWrapper: {
  width: '100%',
  alignItems: 'center',
  paddingHorizontal: 30,
  marginTop: 30,
},

  // Card blanca que contiene el logo
  logoCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 32,
    // sombra Android
    elevation: 2,
    // sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  // Logo dentro de la card
  logo: {
    width: 260,
    height: 110,
    resizeMode: 'contain',
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

  linkText: {
  color: '#7B2FBE',
  fontWeight: '600',
},

loginCard: {
  width: '100%',
  backgroundColor: '#fff',
  padding: 25,
  borderRadius: 12,
  elevation: 4,
},
header: {
  width: '100%',
  backgroundColor: '#7B2FBE',
  paddingVertical: 18,
  borderRadius: 8,
  marginBottom: 25,
  alignItems: 'center',
},

headerTitle: {
  color: '#fff',
  fontSize: 22,
  fontWeight: 'bold',
},
});

export default styles;
