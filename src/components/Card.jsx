import React from 'react'

export default class Card extends React.Component {
    render() {

        return (
            <div className='bg-light-green ma2 bw2 pa3 br3 dib shadow-5 grow tc'>
                <img src={`https://robohash.org/${this.props.id}.png?size=200x200`} alt ='robo' />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        )
    }
}