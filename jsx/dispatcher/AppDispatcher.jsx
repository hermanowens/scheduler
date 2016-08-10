import {Dispatcher} from 'flux'

import SchedulerStore from '../stores/SchedulerStore.jsx'

let AppDispatcher = new Dispatcher();

AppDispatcher.register((action) => {
    let name, phone;

    switch (action.actionType) {
        case 'UPDATE':
            name = action.name.trim();
            phone = action.phone.trim();

            if (name !== '' && phone !== '') {
                SchedulerStore.updateSlot(action.id, {
                    name: name,
                    phone: phone,
                    scheduled: action.scheduled
                });

                SchedulerStore.emitChange();
            }
            break;
        default:
            return true; // no operation
    }
});

export default AppDispatcher;
