import React, { Component } from 'react'
import { glassesArr } from './dataGlassess'

export default class BaiTapThuKinh extends Component {

  state = {
    glass: {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }

  renderGlassesList = () => {
    return glassesArr.map((item, index) => {
      return <img onClick={() => {this.handleChangeGlass(item) }} className='ml-2 p-2 border border-width-1' style={{width: '110px', cursor: 'pointer'}} key={index} src={item.url} />
    })
  }

  handleChangeGlass = (newGlass) => {
    this.setState({
      glass: newGlass
    })
  }

  render() {
    return (
<div style={{backgroundImage: 'url(./glassesImage/background.jpg)', minHeight: '100vh', backgroundSize: 'cover'}}>
  <div style={{backgroundColor: 'rgba(0, 0, 0, 0.498)', width: '100vw', height: '100vh'}}>
    <h3 style={{textAlign: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: '20px 0'}}>
      TRY GLASSES APP ONLINE
    </h3>
    <div className="container">
      <div className="row">
        <div style={{position: 'relative'}} className="col-6">
          <img style={{width: '180px', marginLeft: '350px', position: 'absolute'}} src="./glassesImage/model.jpg" alt='' />
          <img style={{position: 'absolute', width: '90px', top: '55px', right: '70px', opacity: '0.9'}} src={this.state.glass.url} alt='' />
          <div style={{backgroundColor: 'rgba(222, 184, 135, 0.372)', position: 'absolute', top: '140px', right: '24px', width: '180px', height: '80px'}}>
            <p style={{color: 'blueviolet', marginBottom: '0'}}>{this.state.glass.name}</p>
            <p style={{color: 'black', fontSize: '10px'}}>{this.state.glass.desc}</p>
          </div>
        </div>
        <div className="col-6">
          <img style={{width: '180px'}} src="./glassesImage/model.jpg" alt='' />
        </div>
      </div>

    </div>
      <div className='bg-light container text-center mt-5 d-flex justify-content-center p-5'>
        {this.renderGlassesList()}
      </div>
  </div>
</div>



    )
  }
}
