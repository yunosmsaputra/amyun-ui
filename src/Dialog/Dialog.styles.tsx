import styled from 'styled-components';

export const DialogStyles = styled.div<{
  additionalClass?: string;
  $isShow?: boolean;
}>`
  background-color: rgba(51, 51, 51, 0.3);
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  display: ${(props) => (props.$isShow ? 'block' : 'none')};
`;

export const DialogContainer = styled.div<{
  $width: number;
  $expandable: boolean;
  $height: number;
}>`
  background-color: #ffffff;
  border-radius: 16px;
  position: absolute;
  top: ${(props) => (props.$expandable ? '12px' : '50%')};
  left: ${(props) => (props.$expandable ? 'unset' : '50%')};
  right: ${(props) => (props.$expandable ? '12px' : 'unset')};
  transform: ${(props) =>
    props.$expandable ? 'unset' : 'translate(-50%, -50%)'};
  width: ${(props) => props.$width}px;
  height: ${(props) =>
    props.$expandable
      ? 'calc(100vh - 24px)'
      : props.$height
        ? `${props.$height}px`
        : 'unset'};
`;

export const DialogTitle = styled.div`
  padding: 18px 18px 18px 24px;
  width: 100%;
  border-bottom: 1px solid #f0f3f7;
  margin-bottom: 10px;
`;

export const DialogClose = styled.div`
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMTUxNjQgNS4xNTE2MkM1LjM3NjY3IDQuOTI2NjYgNS42ODE4NCA0LjgwMDI4IDYuMDAwMDQgNC44MDAyOEM2LjMxODIzIDQuODAwMjggNi42MjM0IDQuOTI2NjYgNi44NDg0NCA1LjE1MTYyTDEyIDEwLjMwMzJMMTcuMTUxNiA1LjE1MTYyQzE3LjI2MjMgNS4wMzcwMSAxNy4zOTQ3IDQuOTQ1NTkgMTcuNTQxMiA0Ljg4MjdDMTcuNjg3NiA0LjgxOTgxIDE3Ljg0NSA0Ljc4NjcxIDE4LjAwNDQgNC43ODUzMkMxOC4xNjM3IDQuNzgzOTQgMTguMzIxNyA0LjgxNDMgMTguNDY5MiA0Ljg3NDY0QzE4LjYxNjcgNC45MzQ5NyAxOC43NTA2IDUuMDI0MDggMTguODYzMyA1LjEzNjc1QzE4Ljk3NiA1LjI0OTQyIDE5LjA2NTEgNS4zODM0IDE5LjEyNTQgNS41MzA4OEMxOS4xODU4IDUuNjc4MzUgMTkuMjE2MSA1LjgzNjM3IDE5LjIxNDcgNS45OTU3MUMxOS4yMTM0IDYuMTU1MDQgMTkuMTgwMiA2LjMxMjUgMTkuMTE3NCA2LjQ1ODkxQzE5LjA1NDUgNi42MDUzMSAxOC45NjMgNi43Mzc3MyAxOC44NDg0IDYuODQ4NDJMMTMuNjk2OCAxMkwxOC44NDg0IDE3LjE1MTZDMTkuMDY3IDE3LjM3NzkgMTkuMTg4IDE3LjY4MTEgMTkuMTg1MiAxNy45OTU3QzE5LjE4MjUgMTguMzEwMyAxOS4wNTYzIDE4LjYxMTMgMTguODMzOCAxOC44MzM4QzE4LjYxMTMgMTkuMDU2MyAxOC4zMTA0IDE5LjE4MjUgMTcuOTk1NyAxOS4xODUyQzE3LjY4MTEgMTkuMTg4IDE3LjM3OCAxOS4wNjcgMTcuMTUxNiAxOC44NDg0TDEyIDEzLjY5NjhMNi44NDg0NCAxOC44NDg0QzYuNjIyMTEgMTkuMDY3IDYuMzE4OTkgMTkuMTg4IDYuMDA0MzUgMTkuMTg1MkM1LjY4OTcyIDE5LjE4MjUgNS4zODg3NCAxOS4wNTYzIDUuMTY2MjUgMTguODMzOEM0Ljk0Mzc2IDE4LjYxMTMgNC44MTc1NiAxOC4zMTAzIDQuODE0ODMgMTcuOTk1N0M0LjgxMjA5IDE3LjY4MTEgNC45MzMwNSAxNy4zNzc5IDUuMTUxNjQgMTcuMTUxNkwxMC4zMDMyIDEyTDUuMTUxNjQgNi44NDg0MkM0LjkyNjY3IDYuNjIzMzkgNC44MDAyOSA2LjMxODIyIDQuODAwMjkgNi4wMDAwMkM0LjgwMDI5IDUuNjgxODMgNC45MjY2NyA1LjM3NjY2IDUuMTUxNjQgNS4xNTE2MloiIGZpbGw9IiM5QzlDOUMiLz4KPC9zdmc+');
  width: 24px;
  height: 24px;
  &:hover {
    cursor: pointer;
  }
`;

export const DialogContent = styled.div<{
  $expandable?: boolean;
  $height?: number;
}>`
  padding: 0 18px 0 24px;
  max-height: ${(props) =>
    props.$expandable
      ? `calc(100vh - 184px)`
      : `calc(${props.$height}px - 160px)`};
  min-height: ${(props) =>
    props.$expandable ? `calc(100vh - 184px)` : `auto`};
  overflow-y: auto;
`;

export const DialogActions = styled.div`
  padding: 18px 18px 18px 22px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #f0f3f7;
  margin-top: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
