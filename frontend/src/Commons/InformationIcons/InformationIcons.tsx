import { useState, useEffect, useRef } from 'react';
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
};

const InformationIcons = ({
  arrayText,
  text,
  rightPositioned,
  toggleIcon,
  headerDesktop,
  toggleEnabled,
}: InformationIconsProps) => {
  const [localBubbleDisplay, setLocalBubbleDisplay] = useState<boolean>(false);
  const bubbleRef = useRef<HTMLDivElement>(null);
  /**
   * @desc  works alongside handleClickOutside function. triggers the set state to opposite of each other.
   *        it's important so the user can still click the icon to close it, not only clicking outside the DOM element
   */
  const handleClickWrapper = () => {
    const newBubbleDisplay = !localBubbleDisplay;
    setLocalBubbleDisplay(newBubbleDisplay);
  };
  /**
   * @desc        a helper function that sets the bubbleDisplay to false when it clicks elsewhere in the DOM
   *              uses MouseEvent that checks if event was triggered outside of the DOM element referenced by current
   * @param event MouseEvent to check which HTMLDivElement was clicked.
   */
  const handleClickOutside = (event: MouseEvent) => {
    if (bubbleRef.current && !bubbleRef.current.contains(event.target as Node)) {
      setLocalBubbleDisplay(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <StyledBubbleAndFontAwesomeContainer
      ref={bubbleRef}
      toggleEnabled={toggleEnabled}
    >
      <IconContainer toggleIcon={toggleIcon}>
        <FontAwesomeIcon
          icon={faCircleInfo}
          onClick={handleClickWrapper}
        />
      </IconContainer>
      {localBubbleDisplay && (
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
