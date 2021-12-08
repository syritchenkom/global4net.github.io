import React from 'react';
import { Timeline } from '@mui/lab';
import {
	Card,
	CardActionArea,
	CardContent,
	Grid,
	Typography
} from '@mui/material';
import '../scss/Countries.scss';

// import Details from '../pages/Details';

const Countries = ({ country, setCountry, countries, setCountries }) => {
	return (
		<>
			<Grid item className="countries">
				<Timeline className="countriesUl">
					{countries.map((country, index) => {
						const { capital, name, region } = country;

						// const currencyCode = Object.keys(currencies || {})[0];

						return (
							<Card key={index} className="countryCard">
								<CardActionArea
									className="countryButton"
									href={`/details/${name.common}`}>
									<CardContent className="countryPage">
										<Typography
											variant="h3"
											component="h3"
											className="countryTitle">
											<span>{name.common}</span>
										</Typography>
										<Typography variant="h5" component="h5">
											Capital:
											<span>{capital?.[0]}</span>
										</Typography>
										<Typography variant="h5" component="h5" gutterBottom>
											Region:
											<span>{region}</span>
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						);
					})}
				</Timeline>
			</Grid>
			{/* <Details countries={countries} /> */}
		</>
	);
};

export default Countries;