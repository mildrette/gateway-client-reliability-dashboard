import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function DateSearch({ onSelectDate, apiUrl }) {
	const [dates, setDates] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchDates = async () => {
			try {
				const response = await fetch(apiUrl);
				const data = await response.json();
				const dateKey = Object.prototype.hasOwnProperty.call(data[0], "date") ? "date" : "regdate";
				const uniqueDates = Array.from(new Set(data.map((item) => item[dateKey])));
				setDates(uniqueDates);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching dates:", error);
				setLoading(false);
			}
		};

		fetchDates();
	}, []);

	const handleSelectDate = (selectedDate) => {
		onSelectDate(selectedDate);
	};

	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			{loading ? (
				<TextField label="Loading..." variant="standard" disabled fullWidth />
			) : dates.length > 1 ? (
				<Autocomplete
					id="date-search"
					size="small"
					options={dates}
					onChange={(event, value) => handleSelectDate(value)}
					renderInput={(params) => (
						<TextField
							{...params}
							label="Filter by Date"
							variant="standard"
							InputProps={{
								...params.InputProps,
								type: "search"
							}}
						/>
					)}
				/>
			) : (
				<TextField label="No options" variant="standard" disabled fullWidth />
			)}
		</Stack>
	);
}
