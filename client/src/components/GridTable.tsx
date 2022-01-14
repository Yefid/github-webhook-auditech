/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import Button from '@mui/material/Button';
import {
	DataGrid,
	GridColDef,
	GridValueGetterParams,
	GridValueGetterFullParams,
	GridRenderCellParams,
	GridSortModel,
	GridSortDirection,
} from '@mui/x-data-grid';
import { Chip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ImageDialog from './ImageDialog';

const columns: GridColDef[] = [
	{
		field: 'pull_request_created_updated',
		headerName: 'Created/Updated',
		width: 160,
		valueGetter: (params: GridValueGetterParams) => {
			const paramsTyped = params as GridValueGetterFullParams;
			const date = paramsTyped.value && new Date(paramsTyped.value);
			return date.toLocaleString('en-GB', {
				timeZone: 'Asia/Jerusalem',
			});
		},
	},
	{
		field: 'repository_full_name',
		headerName: 'Repo name',
		width: 160,
	},
	{ field: 'pull_request_id', headerName: 'Id', width: 110 },
	{
		field: 'action',
		headerName: 'Action',
		width: 100,
	},
	{
		field: 'pull_request_state',
		headerName: 'State',
		width: 130,
		renderCell: (params: GridRenderCellParams<String>) => (
			<strong>
				<Chip
					color={params.value === 'open' ? 'warning' : 'info'}
					variant="outlined"
					label={params.value}
					onClick={() =>
						window.open(params.row.pull_request_html_url, '_blank')
					}
				/>
			</strong>
		),
	},
	{
		field: 'sender_login',
		headerName: 'Pulled by',
		width: 130,
		renderCell: (params: GridRenderCellParams<String>) => (
			<strong>
				<Chip
					avatar={<Avatar alt="Natacha" src={params.row.sender_avatar_url} />}
					label={params.value}
					variant="outlined"
					onClick={() => window.open(params.row.sender_html_url, '_blank')}
				/>
			</strong>
		),
	},
	{ field: 'pull_request_body', headerName: 'Body', width: 130 },

	{
		field: 'screenShot',
		headerName: 'Reference',
		width: 130,
		renderCell: (params: GridRenderCellParams<String>) => (
			<strong>
				<ImageDialog url={params.row.screenshotImg} />
			</strong>
		),
	},
];

interface DataGridProps {
	actions: any;
}

export default function GridTable(props: DataGridProps) {
	const { actions } = props;
	const [sortModel, setSortModel] = React.useState<GridSortModel>([
		{
			field: 'pull_request_created_updated',
			sort: 'desc' as GridSortDirection,
		},
	]);

	return (
		<div style={{ height: '80vh', width: '100%' }}>
			<DataGrid
				sortModel={sortModel}
				onSortModelChange={(model) => setSortModel(model)}
				rows={actions}
				columns={columns}
				getRowId={(row) => row._id}
				disableSelectionOnClick
				// rowsPerPageOptions={[5]}
				pageSize={10}
			/>
		</div>
	);
}
