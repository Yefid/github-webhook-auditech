import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';
import Main from './pages/Main';

const theme = createTheme({
	typography: {
		fontFamily: 'Assistant, sans-serif',
	},
});
function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Main />
			</ThemeProvider>
		</div>
	);
}

export default App;
