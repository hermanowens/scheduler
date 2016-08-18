import {EventEmitter} from 'events'
import _ from 'lodash'

// Variable Declarations
const CHANGE_EVENT = 'change';

let SchedulerStore = _.extend({}, EventEmitter.prototype, {
    _slots: [
        {
            id: 0,
            time: '9:00am - 10:00am',
            name: '',
            phone: '',
            scheduled: false
        },
        {
            id: 1,
            time: '10:00am - 11:00am',
            name: '',
            phone: '',
            scheduled: false
        },
        {
            id: 2,
            time: '11:00am - 12:00pm',
            name: '',
            phone: '',
            scheduled: false
        },
        {
            id: 3,
            time: '12:00pm - 1:00pm',
            name: '',
            phone: '',
            scheduled: false
        },
        {
            id: 4,
            time: '1:00pm - 2:00pm',
            name: '',
            phone: '',
            scheduled: false
        },
        {
            id: 5,
            time: '2:00pm - 3:00pm',
            name: '',
            phone: '',
            scheduled: false
        },
        {
            id: 6,
            time: '3:00pm - 4:00pm',
            name: '',
            phone: '',
            scheduled: false
        },
        {
            id: 7,
            time: '4:00pm - 5:00pm',
            name: '',
            phone: '',
            scheduled: false
        },
        {
            id: 8,
            time: '5:00pm - 6:00pm',
            name: '',
            phone: '',
            scheduled: false
        }
    ],

    /*
     * Get full collection of time slots.
     */

    getSlots: function () {
        return this._slots;
    },

    updateSlot: function (id, slot) {
        this._slots[id] = _.extend({}, this._slots[id], slot);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

export default SchedulerStore;