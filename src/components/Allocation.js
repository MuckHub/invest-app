import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '100%',
    height: '300px',
  },
  content: {
    padding: '12px',
    textAlign: 'center',
  },
  amount: {
    fontSize: '40px',
    color: 'green',
  },
  button: {
    marginTop: '35px',
  },
});

export default function Allocation() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.content}>
        <h2>Under construction</h2>
      </div>
    </Card>
  );
}
