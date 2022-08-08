import React, { Component } from 'react';
import { Stack, Text, FontWeights, IStackTokens, IStackStyles, ITextStyles, Separator } from '@fluentui/react';
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
            <Link to="./noHybrid">Azure without hybrid connectivity</Link>
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

    </Stack>
  );
};

