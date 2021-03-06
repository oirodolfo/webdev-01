/* eslint-disable */
import React from 'react';
import TextField from 'material-ui/TextField';
/* eslint-enable */
import ValidatorComponent from './ValidatorComponent';

export default class TextValidator extends ValidatorComponent {
  render() {
    // eslint-disable-next-line
        const { errorMessages, validators, requiredError, helperText, validatorListener, ...rest } = this.props;
    const { isValid } = this.state;
    return (
      <TextField
        {...rest}
        error={!isValid}
        ref={(r) => { this.input = r; }}
        helperText={(!isValid && this.getErrorMessage()) || helperText}
      />
    );
  }
}
