import React, {Component} from 'react';
import Welcome from '../../components/welcome/index';
class WelcomeContainer extends Component {  
    
    render() {
        return (
        <div style={{backgroundImage: `url(${"static/assets/City-HD-Images-04506.jpg"})`,height:"930px",backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <Welcome/>
      </div>
        );
    }
}
export default WelcomeContainer;