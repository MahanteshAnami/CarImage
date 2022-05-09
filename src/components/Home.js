import React, { Component } from 'react';


/** This component for Individual Card, which is used in other components **/
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentImage: '',
            isClickOnImage: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickButton = this.handleClickButton.bind(this);
    }

    handleClick(e) {
        console.log(e);

        let image = e.target.currentSrc;
        let actualImage = image.replace(200, 640);

        this.setState({isClickOnImage: true, currentImage: actualImage});
    }

    handleClickButton(e) {
        this.setState({isClickOnImage: false, currentImage: ''});
    }


    render() {
        return (
            <>
                <div className="wrapper">
                    {!this.state.isClickOnImage && this.state.currentImage === '' ?  this.props.imageData && this.props.imageData.map((element, index) =>
                     (
                     <div className="images">
                        <img key={index} src={`https://${element.uri}?rule=mo-200.jpg`} alt="" height='300px' width='300px'
                             onClick={this.handleClick}   />
                     </div>
                     )
                    ) : (
                    <>

                        <div className="single-image">
                           <button onClick={this.handleClickButton} className="button"> Back to All Car Images</button>
                           <img src={this.state.currentImage} alt="" height='300px' width='300px' />

                        </div>

                        </>
                        )
                    }
                </div>
            </>
        )
    }
}

export default Home