import { ThemeProvider } from './components/ThemeContext';
import ThemeToggle from './components/ThemeToogle';
import ThemedComponent from './components/ThemedComponent';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Aplicación con Contexto de Tema</h1>
        <ThemeToggle />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
