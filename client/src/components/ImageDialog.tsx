import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Paper } from '@mui/material';

interface ImageDialogProps {
	url: string;
}

export default function ImageDialog(props: ImageDialogProps) {
	const [open, setOpen] = React.useState(false);

	const { url } = props;

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button variant="outlined" onClick={handleClickOpen}>
				View
			</Button>
			<Dialog fullWidth maxWidth="xl" open={open} onClose={handleClose}>
				<DialogContent>
					<Paper variant="outlined">
						<img
							style={{ maxWidth: '100%', height: 'auto', maxHeight: '100%' }}
							src={url}
							alt="pull request reference"
						/>
					</Paper>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
