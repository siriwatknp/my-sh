import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, select, array } from '@kadira/storybook-addon-knobs';
import '../../../libs/font-awesome-4.6.3/css/font-awesome.css';
import '../../../libs/bulma-0.4.2/bulma.css';

const stories = storiesOf('Reviews', module);
stories.addDecorator(withKnobs);

import DateStepper from 'components/reviews/DateStepper';
import StepperBridge from 'components/reviews/StepperBridge';

stories.addWithInfo(
  'Date Stepper',
  '',
  () => {
    return (
      <div>
        <div>
          <StepperBridge>
            <DateStepper
              image="https://helpx.adobe.com/lightroom/help/view-lightroom-photos-collections-apple-tv/_jcr_content/main-pars/image_1974408202.img.jpg/Adobe_Lr_Share_Slideshow_1080x1920.jpg"
              title="Day 1"
              subtitle="Lucern"
            />
          </StepperBridge>
          <StepperBridge isActive>
            <DateStepper
              image="https://helpx.adobe.com/lightroom/help/view-lightroom-photos-collections-apple-tv/_jcr_content/main-pars/image_1974408202.img.jpg/Adobe_Lr_Share_Slideshow_1080x1920.jpg"
              title="Day 2"
              subtitle="Lucern"
              isActive
            />
          </StepperBridge>
          <StepperBridge>
            <DateStepper
              image="https://helpx.adobe.com/lightroom/help/view-lightroom-photos-collections-apple-tv/_jcr_content/main-pars/image_1974408202.img.jpg/Adobe_Lr_Share_Slideshow_1080x1920.jpg"
              title="Day 3"
              subtitle="Grindelwald"
            />
          </StepperBridge>
        </div>
      </div>
    )
  }
)