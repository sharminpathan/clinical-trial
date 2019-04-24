import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';


const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    foregroundColor: 'white',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
};

class ListItemLink extends React.Component {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;
  debugger;

  render() {
    const { icon, primary} = this.props;
    // debugger;
    return (
      <li>
      <ListItem button component={this.renderLink}>
      {(icon != null) ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} className = {styles.root}/>
      </ListItem>
      </li>
    );
  }
}
export default ListItemLink;
