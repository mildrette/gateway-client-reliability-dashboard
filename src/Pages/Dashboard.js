// import React, { useState, useEffect } from "react";
// import Reliability from "./Reliability";
// import CountrySearch from "../Components/CountrySearch";
// import OperatorSearch from "../Components/OperatorSearch";
// import DateSearch from "../Components/DateSearch";
// import { fetchData } from "../Utils/FetchData";
// import { Box, Typography, Grid, Card } from "@mui/material";

// const reliabilityApiUrl = process.env.REACT_APP_RELIABILITY_URL;
// const resilienceApiUrl = process.env.REACT_APP_RESILIENCE_URL;

// export default function Dashboard({ selectedTable }) {
// 	const [rows, setRows] = useState([]);
// 	const [filteredRows, setFilteredRows] = useState([]);
// 	const [selectedCountry, setSelectedCountry] = useState(null);
// 	const [selectedOperator, setSelectedOperator] = useState(null);
// 	const [selectedDate, setSelectedDate] = useState(null);
// 	const [totalEntries, setTotalEntries] = useState(0);
// 	const apiUrl = selectedTable === "reliability" ? reliabilityApiUrl : resilienceApiUrl;

// 	useEffect(() => {
// 		if (rows.length < 1) {
// 			fetchData(apiUrl)
// 				.then((data) => {
// 					setRows(data);
// 					setFilteredRows(data);
// 					setTotalEntries(data.length);
// 				})
// 				.catch((error) => {
// 					console.error("Error fetching data:", error);
// 				});
// 		}
// 	}, [rows, apiUrl]);

// 	useEffect(() => {
// 		if (!selectedCountry || !rows) {
// 			setFilteredRows(rows);
// 			return;
// 		}
// 		const filteredData = rows.filter(
// 			(row) =>
// 				row.country === selectedCountry &&
// 				(!selectedOperator || row.operator === selectedOperator) &&
// 				(!selectedDate || row.date === selectedDate)
// 		);
// 		setFilteredRows(filteredData);
// 	}, [selectedCountry, selectedOperator, selectedDate, rows]);

// 	const handleSelectCountry = (selectedCountry) => {
// 		setSelectedCountry(selectedCountry);
// 	};

// 	const handleSelectOperator = (selectedOperator) => {
// 		setSelectedOperator(selectedOperator);
// 	};

// 	const handleSelectDate = (selectedDate) => {
// 		setSelectedDate(selectedDate);
// 	};

// 	return (
// 		<Box
// 			className="bg"
// 			component="main"
// 			sx={{
// 				px: { md: 3, sm: 3, xs: 2 },
// 				pb: { md: 3, sm: 3, xs: 14 }
// 			}}
// 		>
// 			<Grid container sx={{ p: 2 }}>
// 				<Grid item md={2} sm={0} xs={0}></Grid>
// 				<Grid item md={10} sm={12} xs={12}>
// 					<Grid
// 						container
// 						columnSpacing={4}
// 						rowSpacing={4}
// 						alignItems="flex-end"
// 						sx={{ py: { md: 5, sm: 5, xs: 1 }, pt: { md: 3, xs: 10, sm: 10 } }}
// 					>
// 						<Grid item md={2.5} xs={6}>
// 							<Card sx={{ p: 2 }}>
// 								<Typography textAlign="center" variant="h3" sx={{ fontWeight: 600 }}>
// 									{totalEntries}
// 								</Typography>
// 								<Typography
// 									textAlign="center"
// 									variant="body1"
// 									sx={{
// 										fontWeight: 500,
// 										p: { md: 1, xs: 1, sm: 1 },
// 										fontSize: { md: 14, sm: 14, xs: 12 }
// 									}}
// 								>
// 									Total Gateway Clients
// 								</Typography>
// 							</Card>
// 						</Grid>
// 						<Grid item md={3} xs={6}>
// 							<CountrySearch onSelectCountry={handleSelectCountry} apiUrl={apiUrl} />
// 							{selectedCountry && (
// 								<OperatorSearch
// 									selectedCountry={selectedCountry}
// 									onSelectOperator={handleSelectOperator}
// 									apiUrl={apiUrl}
// 								/>
// 							)}
// 						</Grid>
// 						<Grid item md={3} xs={6}>
// 							<DateSearch onSelectDate={handleSelectDate} apiUrl={apiUrl} />
// 						</Grid>
// 					</Grid>

// 					<Box sx={{ py: 4 }}>
// 						<Grid container>
// 							<Grid item md={12} xs={12}>
// 								<Reliability
// 									rows={filteredRows}
// 									selectedCountry={selectedCountry}
// 									selectedOperator={selectedOperator}
// 									selectedDate={selectedDate}
// 								/>
// 							</Grid>
// 						</Grid>
// 					</Box>
// 				</Grid>
// 			</Grid>
// 		</Box>
// 	);
// }
