import React from 'react';
import { addDecorator } from '@storybook/react';
import 'rc-dialog/assets/index.css';
import { DialogConnector } from '../src/ui/dialog/DialogConnector/DialogConnector';

addDecorator((story) => (
  <>
    {story()}
    <DialogConnector />
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
