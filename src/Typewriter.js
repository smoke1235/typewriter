// Load all the important modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import malarkey from "malarkey";

// Load the styling
import "./typewriter.css";

class Typewriter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            typeSpeed: props.typeSpeed,
            deleteSpeed: props.deleteSpeed,
            pauseDuration: props.pauseDuration,
            repeat: props.repeat
        };

        this.placeText = this.placeText.bind(this);
    }

    // Place the text on the screen
    placeText(text) {
        const element = this.refs.typewriter;
        element.textContent = text;
    }

    render() {
        // Check of the suplied text is a array
        // eslint-disable-next-line
        if (typeof this.props.text !== "object") {
            return null;
        }

        // Load the typewrite maganisme
        var typewriter = malarkey(this.placeText, this.state);
        var textArray = this.props.text;

        // Place the text in the typewrite
        for (var text in textArray) {
            typewriter.type(textArray[text]).pause().delete();
        }

        return (<div className="typewriter" ref="typewriter" />);
    }
}

Typewriter.displayName = "Typewriter";

Typewriter.defaultProps = {
    typeSpeed: 50,
    deleteSpeed: 50,
    pauseDuration: 2000,
    repeat: true
};

Typewriter.propTypes = {
  text: PropTypes.array.isRequired
};

export default Typewriter;
