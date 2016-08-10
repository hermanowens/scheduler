import Radium from 'radium'
import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom';

import SchedulerActions from '../actions/SchedulerActions.jsx'
import Popup from './Popup.jsx'

class Slot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            isPopupOpen: false,
            currentSlot: {}
        };
    }

    _onDoubleClick() {
        this.setState({
            isEditing: true,
            isPopupOpen: true
        });

        /*
         * This is supposed to focus on the name text box, when editing the schedule.
         * However, I need to revisit to ensure it's working properly in all situations.
         */
        ReactDOM.findDOMNode(this.refs.nameInput).focus();
    }

    _onNameChange(e) {
        this.state.currentSlot.name = e.target.value;
    }

    _onPhoneChange(e) {
        this.state.currentSlot.phone = e.target.value;
    }

    _onSave() {
        let currentSlot = this.state.currentSlot;
        currentSlot.scheduled = true;
        SchedulerActions.updateSlot(this.props.slot.id, currentSlot);
        this.setState({isEditing: false});
        this.closePopup();
    }

    closePopup() {
        this.setState({isPopupOpen: false});
    }

    render() {
        let slot = this.props.slot, form;

        if (this.state.isEditing) {
            form = (
                <div style={styles.form}>
                    <button style={styles.close} onClick={this.closePopup.bind(this)}>X</button>
                    <h3 style={styles.heading}>{slot.time}</h3>
                    <input ref="nameInput" style={styles.text} onBlur={this._onNameChange.bind(this)} placeholder="Name"
                           defaultValue={slot.name}/>
                    <input style={styles.text} onBlur={this._onPhoneChange.bind(this)} placeholder="Phone"
                           defaultValue={slot.phone}/>
                    <button style={styles.button} onClick={this._onSave.bind(this)} type="submit">Schedule</button>
                </div>
            );
        }

        return (
            <li ref='slotItem' style={[
                styles.slot,
                slot.scheduled && styles.scheduled
            ]} className={this.state.scheduled ? 'scheduled' : 'slot'}>
                <label style={styles.label} onDoubleClick={this._onDoubleClick.bind(this)}>{slot.time}</label>
                <Popup isOpen={this.state.isPopupOpen} closePopupProp={this.closePopup.bind(this)}>
                    {form !== undefined ? form : ''}
                </Popup>
            </li>
        );
    }
}

module.exports = Radium(Slot);

const styles = {
    button: {
        background: 'rgba(0, 150, 150, .9)',
        border: 1,
        borderRadius: 5,
        boxSizing: 'border-box',
        fontSize: '1.3em',
        padding: 6,
        marginBottom: 8,
        width: '50%'
    },
    close: {
        background: 'transparent',
        border: 0,
        fontWeight: 'bold',
        position: 'absolute',
        right: 6,
        top: 6
    },
    form: {
        alignItems: 'center',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
    },
    heading: {
        boxSizing: 'border-box',
        marginTop: 0
    },
    label: {
        display: 'block'
    },
    scheduled: {
        background: 'rgba(255, 0, 0, .6)',

        ':hover': {
            background: 'rgba(255, 0, 0, .8)'
        }
    },
    slot: {
        background: 'rgba(0, 0, 0, .2)',
        borderRadius: 5,
        boxSizing: 'border-box',
        marginTop: 6,
        padding: 10,

        ':hover': {
            background: 'rgba(0, 0, 0, .3)'
        }
    },
    text: {
        border: 1,
        borderRadius: 5,
        boxSizing: 'border-box',
        fontSize: '1.2em',
        padding: 6,
        marginBottom: 8,
        width: '100%'
    }
};