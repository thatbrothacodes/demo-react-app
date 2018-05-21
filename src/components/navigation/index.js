import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Navigation = props => (
    <Drawer
      variant="persistent"
      anchor={props.anchor}
      open={props.open}
      classes={{
        paper: props.classes.drawerPaper,
      }}
    >
      <div className={props.classes.drawerHeader}>
        <IconButton onClick={props.handleDrawerCloseHandler}>
          {props.theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button component="a" href="crm">
          <ListItemText primary="CRM" />
        </ListItem>
        <ListItem button component="a" href="performance">
          <ListItemText primary="Performance" />
        </ListItem>
        <ListItem button component="a" href="poker">
          <ListItemText primary="Poker" />
        </ListItem>
      </List>
    </Drawer>
  );

  Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    anchor: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleDrawerCloseHandler: PropTypes.func.isRequired
  };

  export default Navigation;