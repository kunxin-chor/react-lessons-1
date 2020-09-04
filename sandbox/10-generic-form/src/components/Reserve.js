import React from "react"


export default class Reserve extends React.Component {
    
    constructor(props) {
        // JavaScript black magic
        super();
        // JavaScript black magic
        this.handleChange = this.handleChange.bind(this);
        this.updateExtras = this.updateExtras.bind(this);
      
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
        branch:'yishun'
    }
    
    placeReservation() {
        alert("Reserve button pressed!")
    }
    
    handleChange(event)
    {
        
        let changes = {
            
        }
        
        changes[event.target.name] = event.target.value;
        
        this.setState(changes)
        
        // or use this shortcut
        // this.setState({
        //     [event.target.name] : event.target.value
        // })
    }
    
    updateExtras(event) {
        
    
        let existing = {...this.state.extras};
        existing[event.target.value] = !existing[event.target.value]
        
        this.setState({
            extras:existing
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
                        <input type='name' value={this.state.name} placeholder='Your name' name='name' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type='date' value={this.state.date} placeholder='Date' name='date' onChange={this.handleChange}/>
                    </div>
                   
                    <div>
                        <input type='radio' name='smoking' onChange={this.handleChange} value='can-smoke' checked={this.state.smoking==='can-smoke'}/>Smoking
                        <input type='radio' name='smoking' onChange={this.handleChange} value='cannot-smoke' checked={this.state.smoking==='cannot-smoke'}/>No Smoking
                    </div>
                    <div>
                        <input type='checkbox' checked={this.state.extras['wet-tissues']}onChange={this.updateExtras} name='extras' value='wet-tissues'/>Wet Tissues
                        <input type='checkbox' checked={this.state.extras['free-flow']} onChange={this.updateExtras} name='extras' value='free-flow'/>Free-flow drinks
                        <input type='checkbox' checked={this.state.extras['live-music']} onChange={this.updateExtras} name='extras' value='live-music'/>Live Music
                    </div>
                    <div>
                    <select name='branch' value={this.state.branch} onChange={this.handleChange}>
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
