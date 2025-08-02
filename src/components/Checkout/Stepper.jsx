// StepperFunction.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

// Step Components
import OrderReview from './OrderReview';
import OrderCredentials from './OrderCredentials';
import MyAddresses from '../client/MyAddresses';
import PaymentGateway from './PaymentGateway';

const steps = ['Review Your Product', 'Order Credentials', 'Payment', 'Order Confirmation'];

export default function StepperFunction() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const orderDetails = useSelector((state) => state.buyingItemSlice.value);
  const [order, setOrder] = React.useState({});

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  React.useEffect(() => {
    
    setOrder(JSON.parse(localStorage.getItem("orderDetails")));


  }, [orderDetails]);

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <OrderReview order={order} />;
      case 1:
        return <MyAddresses/>;
      case 2:
        return <PaymentGateway order={order} />;
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '2rem 0' }}>
      <Box sx={{ width: '60%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ mt: 2, mb: 1 }}>{renderStepContent(activeStep)}</Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
        
              <Button onClick={handleNext}  disabled ={activeStep === steps.length - 2 ? true : false}>
                Next
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}