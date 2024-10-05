import styled from "styled-components";
import {blueColorLib, neutralColorLib} from "../color";

export const SelectTreeStyles = styled.div`
    position: relative;
`

export const SelectTreeContainerStyles = styled.div<{
  $isFocused?: boolean
}>`
    width: 100%;
    padding: 8px 10px 8px 12px;
    border: 1px solid ${(props) => props.$isFocused ? blueColorLib.border : neutralColorLib.stroke};
    border-radius: 6px;
    line-height: 16px;
`

export const SelectTreePoupStyles = styled.div`
  width: 100%;
    background-color: ${neutralColorLib.white};
    box-shadow: 0px 12px 19px 0px rgba(143, 143, 143, 0.32);
    border: 1px solid ${neutralColorLib.stroke};
    border-radius: 8px;
    position: absolute;
    top: 38px;
    max-height: 160px;
    overflow-y: auto;
    z-index: 20;
`

export const SelectTreePopupListStyles = styled.div<{
  $paddingLeft: number;
}>`
    padding: 4px 12px 4px ${(props) => `${props.$paddingLeft}px`};
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`

export const SelectTreePopupListStylesChild = styled.div`
    padding-left: 14px;
`