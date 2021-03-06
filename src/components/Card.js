import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

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

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.content}>
        <div className={classes.amount}>$0</div>
        <h2>Fund your account</h2>
        <div>Please use the button below to fund your account</div>
        <Button className={classes.button} variant='contained' color='primary'>
          + Add Funds
        </Button>
      </div>
    </Card>
  );
}
