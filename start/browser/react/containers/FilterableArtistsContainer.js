import React, {Component} from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
/*this component will implement filtering on artist page, so as the user types in the name of the artist, we filter the result list to only show those artist*/
export default class FilterableArtistsContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue : ''
    };
    this.getInputValue = this.getInputValue.bind(this);
  }
  getInputValue(event){
    const value =  event.target.value;
    this.setState({inputValue: value});
  }
  render(){
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist =>
    artist.name.match(inputValue));
    
    return(
      <div>
        <FilterInput getValue={this.getInputValue}/>
        <Artists artists={filteredArtists}/>
      </div>
    )
  }
}