import React from 'react';

const Counter = () => {

   const LikeCounter = () => {
        this.setState({
        count: this.state.count + 1
    });
    };
    
    return (
        <div>
            <p><button onClick={LikeCounter}></button>Likes: {this.state.count}</p>
        </div>
      );
}
 
export default Counter;