import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SimpleCard from './Card';
import Projections from './Projections';
import Allocation from './Allocation';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabBar: {
    backgroundColor: 'white',
    color: 'black',
  },
  button: {
    marginLeft: '170px',
    marginTop: '10px',
    marginBottom: '10px',
    padding: '12px',
  },
}));

export default function ProfileTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          TabIndicatorProps={{ style: { backgroundColor: 'green' } }}
          className={classes.tabBar}
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Overview' {...a11yProps(0)} />
          <Tab label='Projections' {...a11yProps(1)} />
          <Tab label='Allocation' {...a11yProps(2)} />

          <Button
            className={classes.button}
            variant='contained'
            color='primary'
          >
            + Add Funds
          </Button>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SimpleCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Projections />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Allocation />
      </TabPanel>
    </div>
  );
}
