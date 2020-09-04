{"changed":true,"filter":false,"title":"Reserve.js","tooltip":"/sandbox/09-forms-and-events/src/components/Reserve.js","value":"import React from \"react\"\n\n\nexport default class Reserve extends React.Component {\n    \n    constructor(props) {\n        // JavaScript black magic\n        super();\n        // JavaScript black magic\n        this.updateName = this.updateName.bind(this);\n        this.updateDate = this.updateDate.bind(this);\n        this.updateSmoking = this.updateSmoking.bind(this);\n        this.updateExtras = this.updateExtras.bind(this);\n        this.updateBranch = this.updateBranch.bind(this)\n    }\n    \n    state = {\n        announcement:\"Welcome!\",\n        name:\"\",\n        date:\"\",\n        smoking:'cannot-smoke',\n        extras: {\n            'wet-tissues':false,\n            'free-flow':false,\n            'live-music':false\n        },\n        branch:''\n    }\n    \n    placeReservation() {\n        alert(\"Reserve button pressed!\")\n    }\n    \n    updateName(event) {\n        this.setState({\n            name:event.target.value\n        })\n    }\n    \n    updateDate(event) {\n        this.setState({\n            date:event.target.value\n        })\n    }\n    \n    updateSmoking(event) {\n        this.setState({\n            smoking:event.target.value\n        })\n    }\n    \n    updateExtras(event) {\n        \n    \n        let existing = {...this.state.extras};\n        existing[event.target.value] = !existing[event.target.value]\n        \n        this.setState({\n            extras:existing\n        })\n    }\n\n    updateBranch(event) {\n        this.setState({\n            branch:event.target.value\n        })\n    }\n\n    render() {\n        return (\n            <div style={css.form}>\n                <h1>Reservation Form</h1>\n                <div style={css.announcement}>\n                {this.state.announcement}\n                </div>\n                <form>\n                    <div>\n                        <input type='name' value={this.state.name} placeholder='Your name' onChange={this.updateName}/>\n                    </div>\n                    <div>\n                        <input type='date' value={this.state.date} placeholder='Date' onChange={this.updateDate}/>\n                    </div>\n                   \n                    <div>\n                        <input type='radio' name='smoking' onChange={this.updateSmoking} value='can-smoke' checked={this.state.smoking}/>Smoking\n                        <input type='radio' name='smoking' onChange={this.updateSmoking} value='cannot-smoke' checked={this.state.smoking}/>No Smoking\n                    </div>\n                    <div>\n                        <input type='checkbox' checked={this.state.extras['wet-tissues']}onChange={this.updateExtras} name='extras' value='wet-tissues'/>Wet Tissues\n                        <input type='checkbox' checked={this.state.extras['free-flow']} onChange={this.updateExtras} name='extras' value='free-flow'/>Free-flow drinks\n                        <input type='checkbox' checked={this.state.extras['live-music']} onChange={this.updateExtras} name='extras' value='live-music'/>Live Music\n                    </div>\n                    <div>\n                    <select name='branch' value={this.state.branch} onChange='updateBranch'>\n                        <option value='yishun'>Yishun</option>\n                        <option value='ngee-ann'>Ngee Ann City</option>\n                        <option value='centralpoint'>Central Point</option>\n                    </select>\n                    </div>\n                    <input type='button' value='Reserve' onClick={this.placeReservation}/>\n                </form>\n            </div>\n        )\n    }\n}\n\nconst css = {\n    form : {\n        margin:'10px'\n    },\n    announcement: {\n        margin:'10px'\n    }\n}\n","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":49,"column":5},"end":{"row":49,"column":6},"action":"insert","lines":[" "],"id":1}]]},"ace":{"folds":[],"scrolltop":1621.8996505737305,"scrollleft":75.5,"selection":{"start":{"row":84,"column":134},"end":{"row":84,"column":134},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":74,"state":["jsx",1],"mode":"ace/mode/javascript"}},"timestamp":1573547207544}