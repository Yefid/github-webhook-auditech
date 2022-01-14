import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import githubWebhookUtils from '../utils/githubWebhookUtils';
import GridTable from '../components/GridTable';

export default function Main() {
	const [actions, setActions] = useState([]);
	const getAllActions = async () => {
		const resp = await githubWebhookUtils.getAllActions();
		setActions(resp.data);
		return resp.data;
	};

	useEffect(() => {
		getAllActions();
	}, []);

	return (
		<Container maxWidth="xl">
			<Box mt={2}>
				<Box mt={2} mb={2}>
					<Typography variant="h2" color="initial">
						Pull requests
					</Typography>
				</Box>

				<GridTable actions={actions} />
			</Box>
		</Container>
	);
}
