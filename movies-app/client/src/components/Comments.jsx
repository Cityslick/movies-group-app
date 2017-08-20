import React, { Component } from 'react';

class Comments extends Component {
    constructor() {
    super();
    this.state = {
      comments: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);  
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value, 
    });
  }


  render() {
      return(
        <div className="comment">
          <form onSubmit={(e) => this.props.handleCommentSubmit(e, this.state.comments)}>
                <label> Comments
                    <input type="text" name="comments" placeholder="Comments" value={this.state.comments} onChange={this.handleInputChange} />
                </label>
                
                <input type="submit" value="Add Comment" />
          </form>
        </div>
      )
  }

}

export default Comments;