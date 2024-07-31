import { useState, Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {
  StyledBubbleAndFontAwesomeContainer,
  StyledBubble,
  StyledBubbleContainer,
  StyledCaretDown,
  IconContainer,
  DesktopCaretDown,
} from './InformationIcons.styles';

type InformationIconsProps = {
  arrayText?: string[];
  text?: string;
  rightPositioned?: boolean;
  toggleIcon?: boolean;
  headerDesktop?: boolean;
  toggleEnabled?: boolean;
  isBubbleDisplayed?: boolean;
  setDisplayedBubble?: Dispatch<SetStateAction<boolean>>;
};

const InformationIcons = ({
  arrayText,
  text,
  rightPositioned,
  toggleIcon,
  headerDesktop,
  toggleEnabled,
  isBubbleDisplayed,
  setDisplayedBubble,
}: InformationIconsProps) => {
  const handleClickWrapper = () => {
    // for optional values
    if (setDisplayedBubble) {
      setDisplayedBubble(!isBubbleDisplayed);
    }
  };

  return (
    <StyledBubbleAndFontAwesomeContainer toggleEnabled={toggleEnabled}>
      <IconContainer toggleIcon={toggleIcon}>
        <FontAwesomeIcon
          icon={faCircleInfo}
          onClick={handleClickWrapper}
        />
      </IconContainer>
      {isBubbleDisplayed && (
        <StyledBubbleContainer headerDesktop={headerDesktop}>
          <DesktopCaretDown headerDesktop={headerDesktop} />
          <StyledBubble
            rightPositioned={rightPositioned}
            headerDesktop={headerDesktop}
          >
            {arrayText && arrayText.length > 0 ? (
              <ul>
                {arrayText.map((singleText: string) => (
                  <li key={singleText}>{singleText}</li>
                ))}
              </ul>
            ) : (
              text && <p>{text}</p>
            )}
          </StyledBubble>
          <StyledCaretDown headerDesktop={headerDesktop} />
        </StyledBubbleContainer>
      )}
    </StyledBubbleAndFontAwesomeContainer>
  );
};

export default InformationIcons;
