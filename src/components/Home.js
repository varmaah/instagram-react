import React from "react";



export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
           instaMedia: []
        }
    }
 //replace with access token.
    componentDidMount() {
        fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=ReplaceWithACcessToken')
          .then(response => response.json())
          .then(res => {
              this.setState({ instaMedia : res.data });
            });
      }


    render() {
        return(
         <div>
             <p>Instagram Media</p>
             <hr/>
             <ul>
            {this.state.instaMedia.map((data,i) => {
            return  <li key={i}> <img src={data.images.thumbnail.url}></img></li>
          }) } 
        </ul>
         </div>
        )
    }
}

