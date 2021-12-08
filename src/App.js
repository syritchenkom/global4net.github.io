import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Grid } from '@mui/material';

import Details from './pages/Details';
import Home from './pages/Home';

function App() {
	//"homepage": "https://syritchenkom.github.io/global4net/",
	return (
		<>
			<Grid container spacing={7}>
				<Grid item xs={12} sm={12} md={4} lg={3}>
					<BrowserRouter>
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route path="/details/:country" element={<Details />} />
						</Routes>
					</BrowserRouter>
				</Grid>
			</Grid>
		</>
	);
}

export default App;