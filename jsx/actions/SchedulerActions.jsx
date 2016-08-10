import AppDispatcher from '../dispatcher/AppDispatcher.jsx'

const SchedulerActions = {
    updateSlot: function (id, slot) {
        AppDispatcher.dispatch({
            actionType: 'UPDATE',
            id: id,
            name: slot.name,
            phone: slot.phone,
            scheduled: slot.scheduled
        });
    }
};

export default SchedulerActions;