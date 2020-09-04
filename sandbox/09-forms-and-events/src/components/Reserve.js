import React from "react"


export default class Reserve extends React.Component {
    
    constructor(props) {
        // JavaScript black magic
        super();
        // JavaScript black magic
        this.updateName = this.updateName.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateSmoking = this.updateSmoking.bind(this);
        this.updateExtras = this.updateExtras.bind(this);
        this.updateBranch = this.updateBranch.bind(this)
    }
    
    state = {
        announcement:"Welcome!",
        name:"",
        date:"",
        smoking:'cannot-smoke',
        extras: {
            'wet-tissues':false,
            'free-flow':false,
            'live-music':false
        },
        branch:''
    }
    
    placeReservation() {
        alert("Reserve button pressed!")
    }
    
    updateName(event) {
        this.setState({
            name:event.target.value
        })
    }
    
    updateDate(event) {
        this.setState({
            date:event.target.value
        })
    }
    
    updateSmoking(event) {
        this.setState({
            smoking:event.target.value
        })
    }
    
    updateExtras(event) {
        
    
        let existing = {...this.state.extras};
        existing[event.target.value] = !existing[event.target.value]
        
        this.setState({
            extras:existing
        })
    }

    updateBranch(event) {
        this.setState({
            branch:event.target.value
        })
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
                        <input type='name' value={this.state.name} placeholder='Your name' onChange={this.updateName}/>
                    </div>
                    <div>
                        <input type='date' value={this.state.date} placeholder='Date' onChange={this.updateDate}/>
                    </div>
                   
                    <div>
                        <input type='radio' name='smoking' onChange={this.updateSmoking} value='can-smoke' checked={this.state.smoking}/>Smoking
                        <input type='radio' name='smoking' onChange={this.updateSmoking} value='cannot-smoke' checked={this.state.smoking}/>No Smoking
                    </div>
                    <div>
                        <input type='checkbox' checked={this.state.extras['wet-tissues']}onChange={this.updateExtras} name='extras' value='wet-tissues'/>Wet Tissues
                        <input type='checkbox' checked={this.state.extras['free-flow']} onChange={this.updateExtras} name='extras' value='free-flow'/>Free-flow drinks
                        <input type='checkbox' checked={this.state.extras['live-music']} onChange={this.updateExtras} name='extras' value='live-music'/>Live Music
                    </div>
                    <div>
                    <select name='branch' value={this.state.branch} onChange='updateBranch'>
                        <option value='yishun'>Yishun</option>
                        <option value='ngee-ann'>Ngee Ann City</option>
                        <option value='centralpoint'>Central Point</option>
                    </select>
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
