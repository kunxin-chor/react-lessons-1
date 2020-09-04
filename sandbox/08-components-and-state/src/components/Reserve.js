import React from "react"


export default class Reserve extends React.Component {
    
    state = {
        announcement:"Welcome!"
    }
    
    placeReservation() {
        alert("Reserve button pressed!")
    }
    
    render() {
        return (
            <div style={css.form}>
                <h1>Reservation Form</h1>
                <div style={css.announcement}>
                {this.state.announcement}
                </div>
                <form>
                    <div>
                        <input type='name' placeholder='Your name'/>
                    </div>
                    <div>
                        <input type='date' placeholder='Date'/>
                    </div>
                    <input type='button' value='Reserve' onClick={this.placeReservation}/>
                </form>
            </div>
        )
    }
}

const css = {
    form : {
        margin:'10px'
    },
    announcement: {
        margin:'10px'
    }
}
