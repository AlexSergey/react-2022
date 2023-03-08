import { Story } from '@storybook/react';

import cityOfGod from '../../mocks/assets/city-of-god.png';

import { ImageComponent, IImage } from './image.component';

export default {
  parameters: {
    breakpoints: {
      breakpointNames: {
        large: '1000',
        medium: '500',
        small: '0',
      },
    },
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
  title: 'Atoms/Image',
};
const ImageLargeTemplate: Story<IImage> = (props): JSX.Element => <ImageComponent.Large {...props} />;

export const ImageLarge: Story<IImage> = ImageLargeTemplate.bind({});
ImageLarge.args = {
  url: cityOfGod,
};
const ImageSmallTemplate: Story<IImage> = (props): JSX.Element => (
  <div style={{ width: '100px' }}>
    <ImageComponent.Small {...props} />
  </div>
);

export const ImageSmall: Story<IImage> = ImageSmallTemplate.bind({});
ImageSmall.args = {
  url: cityOfGod,
};
