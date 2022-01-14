import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
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
				<Box mt={3} mb={3}>
					<Typography variant="h2" color="initial" display="inline">
						Pull requests{' '}
					</Typography>
					<Link
						href="https://github.com/Yefid/demo-repository/pulls"
						target="_blank"
						underline="none"
					>
						<Typography variant="h4" display="inline" color="primary">
							(demo-repository pull)
						</Typography>
					</Link>
				</Box>

				<GridTable actions={actions} />
			</Box>
		</Container>
	);
}
