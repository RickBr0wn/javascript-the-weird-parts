handleHashInUserName = name => name.charAt(0) === '#'

removeHashFromName = name => name.slice(1)

handleInput = (event, input) =>{
  this.setState({[input]: event.target.value})
}