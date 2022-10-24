import { Link } from "react-router-dom";
import * as React from 'react';

// import { Text } from '@fluentui/react/lib/Text';
// import { Stack } from '@fluentui/react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption, IStyleSet, Label, ILabelStyles, Image, Pivot, PivotItem, Separator, Stack, Text, TextField } from '@fluentui/react';
import { Link as ReactLink } from '@fluentui/react';
import { CodeBlock, adv_stackstyle, getError } from './common'

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};

const deploycmd =
`# Create Resource Group\n` +
`az group create -l + {{}} + -n "deploy.rg"\n\n` +
`# Deploy template with in-line parameters\n` +
`az deployment group create -g\n` + ""

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
        <Separator styles={{ root: { marginTop: '30px !important' } }}><div style={{ display: "flex", alignItems: 'center', }}><b style={{ marginRight: '10px' }}>Deploy Cluster</b><Image src="./bicep.png" alt="Built with bicep" /> <p style={{ marginLeft: '10px' }}>powered by Bicep</p></div> 
        </Separator>
      </PivotItem>
      <PivotItem headerText="Shared with me">
        <Label styles={labelStyles}>Pivot #3</Label>
      </PivotItem>
      <PivotItem headerText="Command Line" itemKey="deployArmCli" itemIcon="PasteAsCode" >
      <Stack horizontal horizontalAlign="space-between" styles={{root: { width: '100%', marginTop: '10px'}}}>
        <Stack.Item>
          <Label >Commands to deploy your fully operational environment</Label>
          <Text>
            Requires <ReactLink href="https://docs.microsoft.com/cli/azure/install-azure-cli" underline> AZ CLI (2.37.0 or greater) </ReactLink>, or execute in the <ReactLink href="http://shell.azure.com/" underline> Azure Cloud Shell </ReactLink>.
          </Text>
        </Stack.Item>

        <Stack.Item  align="end">
          <Stack horizontal tokens={{childrenGap: 5}}>
          <Dropdown
            // errorMessage={getError(invalidArray, 'selectedTemplate')}
            label='Template Version'
            // disabled={process.env.REACT_APP_TEMPLATERELEASE !== undefined}
            selectedKey={"temp1"}
            // onChange={(ev, { key }) => updateFn('selectedTemplate', key)}
            options={options}
            styles={dropdownStyles}
          />
          </Stack>
        </Stack.Item>
      </Stack>
      
      <CodeBlock  lang="github actions"  deploycmd={deploycmd} />

      <Separator styles={{ root: { marginTop: '30px !important' } }}><div style={{ display: "flex", alignItems: 'center', }}><b style={{ marginRight: '10px' }}>Deploy Cluster</b><Image src="./bicep.png" alt="Built with bicep" /> <p style={{ marginLeft: '10px' }}>powered by Bicep</p></div> 
      </Separator>

      </PivotItem>
    </Pivot>
  </div> 
  );
 }
 export default NoHybrid;
 // new 

 const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 200 },
};

const options: IDropdownOption[] = [
  { key: 'temp1', text: '1.0' },
  { key: 'temp2', text: '1.1' },
  { key: 'temp3', text: '1.2' },
];

// const params2file = p => Object.keys(p).filter(p => p !== 'adminPrincipalId' &&
// p !== 'acrPushRolePrincipalId' &&
// p !== 'keyVaultOfficerRolePrincipalId').reduce((a, c) => { return { ...a, parameters: { ...a.parameters, [c]: { value: p[c] } } } }, {
// "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",
// "contentVersion": "1.0.0.0",
// "parameters": {}
// })
