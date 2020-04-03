import React, {Component} from 'react';


import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar, VideoList, VideoDetail} from './components';


import './App.css';


class App extends Component {
  state= {
    videos:[],
    selectedVideo:null
  }

  componentDidMount(){
    this.handleSubmit('CSS');
  }

  onSelectVideo = (video) => {
    this.setState({selectedVideo:video});
  }

  handleSubmit = async (searchTerm) => {
    try{
         const response = await youtube.get('search', {
        params: {
          part:'snippet',
          maxResults:6,
          key:process.env.REACT_APP_API_KEY,
          q:searchTerm
        }
    });
     


     this.setState({
        videos:response.data.items,
        selectedVideo:response.data.items[0]
     })
    }catch(err){
      console.log(err);
    }
  }

  render() {
    const {selectedVideo, videos} = this.state;
    return (
        <Grid justify="center" container spacing={6}>
          <Grid item xs={12}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit}/>
              </Grid>

              <Grid item xs={12} md={8}>
                  <VideoDetail video={selectedVideo}/>
              </Grid>
              <Grid item xs={12} md={4}>
                <VideoList videos={videos} onSelectVideo={this.onSelectVideo} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  );
  }
}

export default App;
