import { Link } from "react-router-dom";
import * as React from 'react';
import { Text } from '@fluentui/react/lib/Text';
import { Stack } from '@fluentui/react/lib/Stack';
import { IStyleSet, Label, ILabelStyles, Pivot, PivotItem } from '@fluentui/react';
const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};

const NoHybrid = () => {
  return ( 
  <div>
  <Link to="/">Home</Link>
    <Pivot aria-label="Basic Pivot Example">
      <PivotItem
        headerText="My Files"
        headerButtonProps={{
          'data-order': 1,
          'data-title': 'My Files Title',
        }}
      >
        <Label styles={labelStyles}>Pivot #1</Label>
      </PivotItem>
      <PivotItem headerText="Recent">
        <Label styles={labelStyles}>Pivot #2</Label>
      </PivotItem>
      <PivotItem headerText="Shared with me">
        <Label styles={labelStyles}>Pivot #3</Label>
      </PivotItem>
    </Pivot>
  </div> 
  );
 }
 export default NoHybrid;
 // new 
