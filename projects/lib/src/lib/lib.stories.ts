import {moduleMetadata, Meta, Story} from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { LibComponent } from './lib.component';
import {HighchartsChartModule} from "highcharts-angular";

export default {
  component: LibComponent,
  decorators: [
    moduleMetadata({
      declarations: [LibComponent],
      imports: [CommonModule,HighchartsChartModule],
    }),
  ],
  title: 'HighCharts',
} as Meta;

const Template: Story<LibComponent> = args => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  message: 'Hello world'
};
