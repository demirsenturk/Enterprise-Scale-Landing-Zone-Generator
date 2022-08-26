import { Link } from "react-router-dom";
import * as React from 'react';
import { Text } from '@fluentui/react/lib/Text';
import { Stack } from '@fluentui/react/lib/Stack';
import { IStyleSet, Label, ILabelStyles, Pivot, PivotItem } from '@fluentui/react';
const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};
const OnPremisesConnectivity = () => {
  return ( 
  <div>
  <Link to="/">Home</Link>
  <h2>Strategic Migration Assessment and Readiness Tool</h2> 
    <Pivot aria-label="Basic Pivot Example">
      <PivotItem
        headerText="Business strategy"
        headerButtonProps={{
          'data-order': 1,
          'data-title': 'My Files Title',
        }}
      >
        <Label styles={labelStyles}>
          Has your company identified a compelling business reason for moving to the cloud?</Label>
      </PivotItem>
      <PivotItem headerText="Identity and access management">
        <Label styles={labelStyles}>Pivot #2</Label>
      </PivotItem>
      <PivotItem headerText="Shared with me">
        <Label styles={labelStyles}>Pivot #3</Label>
      </PivotItem>
      
    </Pivot>
   
  </div>
  );
 }
 export default OnPremisesConnectivity;
 // new 

const tokens = {
  sectionStack: {
    childrenGap: 10,
  },
  headingStack: {
    childrenGap: 5,
  },
};

export const TextWrapExample = () => (
  <Stack tokens={tokens.sectionStack}>
    <Stack tokens={tokens.headingStack}>
      <Text variant={'large'} block>
        Wrap (Default)
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Text>
    </Stack>
    <Stack tokens={tokens.headingStack}>
      <Text variant={'large'} block>
        No Wrap
      </Text>
      <Text nowrap>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Text>
    </Stack>
  </Stack>
  
);

function _onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
  console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
}
