import Radium from 'radium'
import React, {Component} from 'react'

import SchedulerStore from '../stores/SchedulerStore.jsx'
import Slot from '../components/Slot.jsx'

let getSlotState = () => {
    return {
        slots: SchedulerStore.getSlots()
    };
};

class Scheduler extends Component {
    constructor() {
        super();

        this.state = getSlotState();
    }

    // Add change listeners to stores
    componentDidMount() {
        SchedulerStore.addChangeListener(this._onChange.bind(this));
    }

    // Remove change listeners from stores
    componentWillUnmount() {
        SchedulerStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange() {
        this.setState(getSlotState());
    }

    render() {
        let slots = SchedulerStore.getSlots(),
            slotHtml = slots.map((s) => {
                return (
                    <Slot key={s.id} slot={s}/>
                );
            });

        return (
            <section style={styles.app}>
                <h1>Simple Daily Scheduler</h1>
                <p>Double-click the time slot below to request or modify an appointment</p>
                <ul style={styles.slots}>
                    {slotHtml}
                </ul>
            </section>
        );
    }
}

module.exports = Radium(Scheduler);

const styles = {
    app: {
        background: 'rgba(241,241,241,1)',
        border: 0,
        borderRadius: 4,
        boxSizing: 'border-box',
        color: 'rgb(51,51,51,1)',
        height: '100%',
        padding: '1.5em',
        width: '100%',
    },
    slots: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
};