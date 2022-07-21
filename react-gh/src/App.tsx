import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles, Separator } from '@fluentui/react';
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
      <div>
        <DocumentCard
          styles={cardStyles}
          onClickHref="https://github.com/demirsenturk/Enterprise-Scale-Landing-Zone-Generator/blob/main/react-gh/src/OnPremConnectivity.tsx"
        >
          <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={hybrid1} />
          <DocumentCardDetails>
            <DocumentCardTitle title="On-premises connectivity" shouldTruncate />
          </DocumentCardDetails>
        </DocumentCard>
        <DocumentCard
          styles={cardStyles}
          onClickHref="http://bing.com"
        >
          <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={wingTip1} />
          <DocumentCardDetails>
            <DocumentCardTitle title="Azure without hybrid connectivity test" shouldTruncate />
          </DocumentCardDetails>
        </DocumentCard>
      </div>
      <Text variant="large">For a guide on how to customize this project, check out our repository and Fluent UI documentation.</Text>
      <Text variant="large" styles={boldStyle}>
        Essential links
      </Text>
      <Stack horizontal tokens={stackTokens} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fluentui#/get-started/web">Docs</Link>
        <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Stack Overflow</Link>
        <Link href="https://github.com/Azure/Enterprise-Scale">Enterprise-Scale Reference</Link>
        <Link href="https://github.com/demirsenturk/Enterprise-Scale-Landing-Zone-Generator">Github</Link>
      </Stack>
      <Text variant="large" styles={boldStyle}>
        Design system
      </Text>
      <Stack horizontal tokens={stackTokens} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web/icons">Icons</Link>
        <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web">Styles</Link>
        <Link href="https://aka.ms/themedesigner">Theme designer</Link>
      </Stack>
    </Stack>
  );
};
