import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Chart from './Chart';

import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const TimeSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const InvestSlider = withStyles({
  root: {
    height: 8,
    color:
      'linear-gradient(90deg, rgba(48,62,224,1) 0%, rgba(38,154,0,1) 33%, rgba(245,13,58,1) 100%)',
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '100%',
    height: 'fit-content',
  },
  content: {},
  description: {
    backgroundColor: '#ecf9e7',
  },
  text: {
    padding: '20px',
  },
  main: {
    display: 'flex',
  },
  margin: {
    margin: '13px',
  },
  target: {
    marginTop: '20px',
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    marginTop: '20px',
    marginLeft: '20px',
    marginBottom: '20px',
  },
  sliders: {
    width: '200px',
    marginTop: '20px',
    marginLeft: '40px',
    textAlign: 'center',
  },
  stocks: {
    marginLeft: '60px',
    marginTop: '20px',
  },
  violet: {
    color: '#c17ab9',
  },
  blue: {
    color: '#56cdda',
  },
  orange: {
    color: '#fec171',
  },
  chart: {
    marginTop: '50px',
    marginBottom: '50px',
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
});

const marks = [
  {
    value: 1,
    label: 'Low',
  },
  {
    value: 10,
    label: 'High',
  },
];

export default function Projections() {
  const classes = useStyles();

  const [investSliderValue, setInvestSliderValue] = React.useState(4);
  const [yearsSliderValue, setYearsSliderValue] = React.useState(15);
  const [stocks, setStocks] = React.useState();
  const [investment, setInvestment] = React.useState(100);
  const [conribution, setConribution] = React.useState(0);
  const [target, setTarget] = React.useState(0);

  useEffect(() => {
    changeStocks(investSliderValue);
  }, []);

  const handleInvestAmount = (event) => {
    setInvestment(event.target.value);
  };

  const handleContribution = (event) => {
    setConribution(event.target.value);
  };

  const handleTarget = (event) => {
    setTarget(event.target.value);
  };

  const changeStocks = (value) => {
    let result = { stocks: 0, bonds: 0 };
    switch (value) {
      case 1:
        result = { stocks: 13.3, bonds: 81.7 };
        break;
      case 2:
        result = { stocks: 31.9, bonds: 63.3 };
        break;
      case 3:
        result = { stocks: 41.5, bonds: 53.4 };
        break;
      case 4:
        result = { stocks: 49.1, bonds: 46.1 };
        break;
      case 5:
        result = { stocks: 55.9, bonds: 39.1 };
        break;
      case 6:
        result = { stocks: 62.6, bonds: 32.6 };
        break;
      case 7:
        result = { stocks: 68.4, bonds: 26.6 };
        break;
      case 8:
        result = { stocks: 74.2, bonds: 20.7 };
        break;
      case 9:
        result = { stocks: 79.9, bonds: 15.1 };
        break;
      case 10:
        result = { stocks: 95.1, bonds: 0 };
        break;
      default:
        result = 'No value found';
    }
    setStocks(result);
  };

  const handleChangeInvest = (event, newValue) => {
    setInvestSliderValue(newValue);
    changeStocks(newValue);
  };

  const handleChangeYear = (event, newValue) => {
    setYearsSliderValue(newValue);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.content}>
        <div className={classes.description}>
          <div className={classes.text}>
            The tool below provides illustrations of the performance your
            portfolio could achieve. You can use it to see how changing the
            amount you invest, your portfolio’s risk level, and time horizon,
            could alter your returns. To apply changes to your actual portfolio
            click on the Apply changes button below.
          </div>
        </div>

        <duv className={classes.main}>
          <div className={classes.inputs}>
            <FormControl className={classes.margin} variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-amount'>
                Initial investment
              </InputLabel>
              <OutlinedInput
                type='number'
                id='outlined-adornment-amount'
                value={investment}
                onChange={handleInvestAmount}
                startAdornment={
                  <InputAdornment position='start'>$</InputAdornment>
                }
                labelWidth={123}
              />
            </FormControl>
            <FormControl className={classes.margin} variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-amount'>
                Monthly investment
              </InputLabel>
              <OutlinedInput
                type='number'
                id='outlined-adornment-amount'
                value={conribution}
                onChange={handleContribution}
                startAdornment={
                  <InputAdornment position='start'>$</InputAdornment>
                }
                labelWidth={140}
              />
            </FormControl>
          </div>

          <div className={classes.sliders}>
            <Typography id='non-linear-slider' gutterBottom>
              Investement Risk
            </Typography>
            <InvestSlider
              value={investSliderValue}
              min={1}
              step={1}
              max={10}
              scale={(x) => x * 1}
              onChange={handleChangeInvest}
              marks={marks}
              valueLabelDisplay='auto'
              aria-labelledby='non-linear-slider'
            />

            <Typography id='non-linear-slider' gutterBottom>
              Time Period
            </Typography>
            <TimeSlider
              value={yearsSliderValue}
              min={2}
              step={1}
              max={30}
              scale={(x) => x * 1}
              onChange={handleChangeYear}
              valueLabelDisplay='auto'
              aria-labelledby='non-linear-slider'
            />
            <div>{yearsSliderValue} years</div>
          </div>

          <div className={classes.stocks}>
            <div>
              <span className={classes.violet}>{stocks?.stocks}% </span>Stocks
            </div>
            <div>
              <span className={classes.blue}>{stocks?.bonds}% </span>Bonds
            </div>
            <div>
              <span className={classes.orange}>5% </span>Alternatives
            </div>
            <FormControl className={classes.target} variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-amount'>
                Target
              </InputLabel>
              <OutlinedInput
                type='number'
                id='outlined-adornment-amount'
                value={target}
                onChange={handleTarget}
                startAdornment={
                  <InputAdornment position='start'>$</InputAdornment>
                }
                labelWidth={50}
              />
            </FormControl>
          </div>
        </duv>
      </div>
      <div className={classes.chart}>
        {investment >= 100 ? (
          <Chart
            years={yearsSliderValue}
            investementRisk={investSliderValue}
            investmentAmount={investment}
            contribution={conribution}
            target={target}
          />
        ) : (
          <p className={classes.error}>
            Your initial investment must be at least $100
          </p>
        )}
      </div>
    </Card>
  );
}
