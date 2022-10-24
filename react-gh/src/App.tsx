// React Imports
import React from 'react';
import { Stack, Text, FontWeights, IStackTokens, IStackStyles, ITextStyles } from '@fluentui/react';
import { Link as ReactLink } from '@fluentui/react';
import { ImageFit } from '@fluentui/react/lib/Image';
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardImage,
  IDocumentCardStyles,
} from '@fluentui/react/lib/DocumentCard';
import { Link } from "react-router-dom";
// Media Imports
import logo from './logo.svg';
import hybrid1 from './global-transit.png';
import wingTip1 from './es-without-networking.png';
import './App.css';

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

      <Text variant="large" styles={boldStyle}>
        What would you like to achieve?
      </Text>
      <div>
        <DocumentCard
          styles={cardStyles}
        >
          <div>
            <Link style={{textDecoration: 'none'}} to="./OnPremisesConnectivity">On-premises Connectivity</Link>
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
            <Link style={{textDecoration: 'none'}} to="./NoHybrid">Azure without hybrid connectivity</Link>
          </div>
          <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={wingTip1} />
          <DocumentCardDetails>
            <DocumentCardTitle title=" " shouldTruncate />
          </DocumentCardDetails>
        </DocumentCard>
      </div>
      <Text variant="large">Get started and build your Enterprise Scale Landing Zone!</Text>
      <Text variant="large" styles={boldStyle}>
        Essential links
      </Text>
      <Stack horizontal tokens={stackTokens} horizontalAlign="center">
        <ReactLink href="https://github.com/demirsenturk/Enterprise-Scale-Landing-Zone-Generator">Project Github</ReactLink>
        <ReactLink href="https://github.com/Azure/Enterprise-Scale">Azure Enterpise-Scale Reference</ReactLink>
        <ReactLink href="https://developer.microsoft.com/en-us/fluentui#/get-started/web">Fluent UI Docs</ReactLink>
      </Stack>
      <Text variant="large" styles={boldStyle}>
        Design system
      </Text>
      <Stack horizontal tokens={stackTokens} horizontalAlign="center">
        <ReactLink href="https://developer.microsoft.com/en-us/fluentui#/styles/web/icons">Icons</ReactLink>
        <ReactLink href="https://developer.microsoft.com/en-us/fluentui#/styles/web">Styles</ReactLink>
        <ReactLink href="https://aka.ms/themedesigner">Theme designer</ReactLink>
      </Stack>
    </Stack>
  );
};



