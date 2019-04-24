import React from 'react';
import PropTypes from 'prop-types';

export default class ReportIframe extends React.Component{

  PropTypes: {
    src: React.PropTypes.string.isRequired,
    onLoad: React.PropTypes.func
  }

  componentDidMount(){
    this.refs.iframe.getDOMNode().addEventListener('load', this.props.onLoad);
  }

  render() {
    return <iframe ref="iframe" {...this.props}/>;
  }
}
