import {Style} from 'radium'
import Normalize from './Normalize'
import _ from 'lodash'

class Reset extends Style {
}

Reset.defaultProps = {
    rules: _.assign({}, Normalize, {
        body: {
            boxSizing: 'border-box'
        },
        'html, body, #scheduler': {
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0
        }
    })
};

export default Reset