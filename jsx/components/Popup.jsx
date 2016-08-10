import Radium from 'radium'
import React, {Component, PropTypes} from 'react'

class Popup extends Component {
    render() {
        if (this.props.isOpen === false)
            return null;

        return (
            <section style={styles.popupContainer}>
                <div style={styles.popup}>
                    {this.props.children}
                </div>
                <div style={styles.backdrop} onClick={this.props.closePopupProp}></div>
            </section>
        )
    }
}

module.exports = Radium(Popup);

const styles = {
    backdrop: {
        background: 'rgba(0, 0, 0, .8)',
        boxSizing: 'border-box',
        height: '100%',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: -1
    },
    popup: {
        background: 'rgba(200, 200, 200, 1)',
        borderRadius: 10,
        boxSizing: 'border-box',
        height: 200,
        padding: 20,
        position: 'relative',
        width: 300
    },
    popupContainer: {
        alignItems: 'center',
        boxSizing: 'border-box',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 2
    }
};