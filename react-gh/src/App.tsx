import React, { Component } from 'react';
import { Stack, Text, FontWeights, IStackTokens, IStackStyles, ITextStyles, Separator, ChoiceGroup, IChoiceGroupOption } from '@fluentui/react';
import logo from './logo.svg';
import hybrid1 from './global-transit.png';
import wingTip1 from './es-without-networking.png';
import './App.css';
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardImage,
  IDocumentCardStyles,
} from '@fluentui/react/lib/DocumentCard';
// import { IIconProps } from '@fluentui/react/lib/Icon';
import { ImageFit } from '@fluentui/react/lib/Image';
//import OnPremisesConnectivity from './OnPremisesConnectivity'
import { Link } from "react-router-dom";
//import { DefaultButton } from '@fluentui/react/lib/Button';
//import { useNavigate } from 'react-router-dom';

const options1: IChoiceGroupOption[] = [
  { key: 'A', text: 'We have an Azure tenant with nothing deployed in it.' },
  { key: 'B', text: 'We have an Azure tenant and have deployed resources in a single subscription.' },
  { key: 'C', text: 'We have an Azure tenant and have deployed resources in multiple subscriptions.' },
  { key: 'D', text: 'We have an Azure tenant and have deployed resources in multiple subscriptions that we organize using management groups.' },
  { key: 'E', text: 'We have a mature Azure environment containing many subscriptions and management groups. We want to deploy a greenfield management group hierarchy to plan our migration to the Azure Landing Zone conceptual architecture.' }
];

const options2: IChoiceGroupOption[] = [
  { key: 'A', text: 'Decentralized operations - If you limit the scope of operations to one workload or a small collection of workloads, complexity can be controlled. As such, decentralized operations are the least complex of the common operating models.' },
  { key: 'B', text: 'Centralized operations - Central operations tend to be the norm for technology environments that consist primarily of stable-state workloads. Examples of a stable-state of operations include things like commercial-off-the-shelf (COTS) applications or well-established custom applications that have a slow-release cadence.' },
  { key: 'C', text: 'Enterprise operations - Enterprise operations are the suggested target state for all cloud operations. Enterprise operations balance the need for control and innovation by democratizing decisions and responsibilities.' },
  { key: 'D', text: 'Distributed operations - The existing operating model might be too engrained for the entire organization to shift to a new operating model. For others, global operations and various compliance requirements might prevent specific business units from making a change. A distributing operations approach might be required for those companies. This approach is by far the most complex approach. It requires an integration of one or more of the previously mentioned operating models.' }
];
const options3: IChoiceGroupOption[] = [
  { key: 'A', text: 'None' },
  { key: 'B', text: 'Azure Policy' },
  { key: 'C', text: 'Github' },
  { key: 'D', text: 'Azure DevOps' },
  { key: 'E', text: 'HashiCorp Terraform ' },
  { key: 'F', text: 'Azure Resource Manager' },
  { key: 'G', text: 'Azure Blueprints' },
  { key: 'H', text: 'Azure Bicep' },
];
function _onChange(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void {
  console.dir(option);
}

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

const cardStyles: IDocumentCardStyles = {
  root: { display: 'inline-block', marginRight: 20, marginBottom: 20, width: 320 },
};

export const App: React.FunctionComponent = () => {

  return (
    <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
      <img className="App-logo" src={logo} alt="logo" />
      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to the Enterprise-Scale Landing Zone Generator
      </Text>
      <Text variant="large">Get started and build your Enterprise Scale Landing Zone!</Text>
      <Text variant="large" styles={boldStyle}>
        About your organization
      </Text>
     <ChoiceGroup defaultSelectedKey="B" options={options1} label="Which of the following options best describes your current Azure environment?" required={true} />;
     <ChoiceGroup defaultSelectedKey="B" options={options2} label="What is your organization's current operating model?" required={true} />;
     <ChoiceGroup defaultSelectedKey="B" options={options3} label="Which of the following options best describes your organization's infrastructure as code capabilities?" required={true} />;

      <Text variant="large" styles={boldStyle}>
        What would you like to achieve?
      </Text>
      <div>
        <DocumentCard
          styles={cardStyles}
        >
          <div>
            <Link to="./OnPremisesConnectivity">On-premises Connectivity</Link>
          </div>
          <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={hybrid1} />
          <DocumentCardDetails>
            <DocumentCardTitle title=" " shouldTruncate />
          </DocumentCardDetails>
        </DocumentCard>
        <DocumentCard
          styles={cardStyles}
          onClickHref=""
        >
          <div>
            <Link to="./NoHybrid">Azure without hybrid connectivity</Link>
          </div>
          <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={wingTip1} />
          <DocumentCardDetails>
            <DocumentCardTitle title=" " shouldTruncate />
          </DocumentCardDetails>
        </DocumentCard>
      </div>

    </Stack>
  );
};



