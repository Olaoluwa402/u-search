import React from 'react';

import {Grid, Typography, Paper} from '@material-ui/core';

const VideoItem = ({video, onVideoSelect}) => {
	return (
		<Grid item xs={12}>
			<Paper style={{display:'flex', alignItems:'center', cursor:'pointer'}} onClick={() => onVideoSelect(video)}>
				<img style={{marginRight:'10px'}}  src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
				<Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
			</Paper>
		</Grid>
  );
}


export default VideoItem;