import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {
  StyledFontAwesomeContainer,
  StyledBubbleAndFontAwesomeContainer,
  StyledBubble,
  StyledBubbleContainer,
  StyledCaretDown,
  IconContainer,
} from './InformationIcons.styles';

type InformationIconsProps = {
  arrayText?: string[];
  text?: string;
  rightPositioned?: boolean;
};

const InformationIcons = ({ arrayText, text, rightPositioned }: InformationIconsProps) => {
  const [isBubbleDisplayed, setDisplayBubble] = useState<boolean>(false);

  const handleClickWrapper = () => {
    setDisplayBubble(!isBubbleDisplayed);
  };

  return (
    <StyledBubbleAndFontAwesomeContainer>
      <StyledFontAwesomeContainer>
        <IconContainer>
          <FontAwesomeIcon
            icon={faCircleInfo}
            onClick={handleClickWrapper}
          />
        </IconContainer>
        {isBubbleDisplayed && (
          <StyledBubbleContainer>
            <StyledBubble rightPositioned={rightPositioned}>
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
            <StyledCaretDown />
          </StyledBubbleContainer>
        )}
      </StyledFontAwesomeContainer>
    </StyledBubbleAndFontAwesomeContainer>
  );
};

export default InformationIcons;
