import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedComponent = () => {
  const { theme } = useContext(ThemeContext);

  const lightStyle = {
    backgroundColor: '#fff',
    color: '#000',
    padding: '20px',
    textAlign: 'center'
  };

  const darkStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center'
  };

  return (
    <div style={theme === 'light' ? lightStyle : darkStyle}>
      <p>Este es un componente con el tema {theme}.</p>
    </div>
  );
};

export default ThemedComponent;
