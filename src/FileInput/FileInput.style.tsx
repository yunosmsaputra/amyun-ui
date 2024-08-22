import styled from 'styled-components';
import { blueColorLib, neutralColorLib } from '../color';

export const FileInputStyle = styled.div`
  padding: 12px;
  background-color: ${blueColorLib.surface};
  border: 1px dashed ${blueColorLib.main};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const FilePreview = styled.div`
  background-color: ${neutralColorLib.white};
  border: 1px solid ${neutralColorLib.divider};
  border-radius: 8px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconEye = styled.div`
  content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiBmaWxsPSJub25lIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9ImV2ZW5vZGQiIGNsaXBSdWxlPSJldmVub2RkIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSJNNy45OTk5OCA2LjY2NjY3QzcuNjQ2MzYgNi42NjY2NyA3LjMwNzIyIDYuODA3MTUgNy4wNTcxOCA3LjA1NzJDNi44MDcxMyA3LjMwNzI0IDYuNjY2NjUgNy42NDYzOCA2LjY2NjY1IDhDNi42NjY2NSA4LjM1MzYzIDYuODA3MTMgOC42OTI3NyA3LjA1NzE4IDguOTQyODFDNy4zMDcyMiA5LjE5Mjg2IDcuNjQ2MzYgOS4zMzMzNCA3Ljk5OTk4IDkuMzMzMzRDOC4zNTM2MSA5LjMzMzM0IDguNjkyNzUgOS4xOTI4NiA4Ljk0Mjc5IDguOTQyODFDOS4xOTI4NCA4LjY5Mjc3IDkuMzMzMzIgOC4zNTM2MyA5LjMzMzMyIDhDOS4zMzMzMiA3LjY0NjM4IDkuMTkyODQgNy4zMDcyNCA4Ljk0Mjc5IDcuMDU3MkM4LjY5Mjc1IDYuODA3MTUgOC4zNTM2MSA2LjY2NjY3IDcuOTk5OTggNi42NjY2N1pNNi4xMTQzNyA2LjExNDM5QzYuNjE0NDYgNS42MTQyOSA3LjI5Mjc0IDUuMzMzMzQgNy45OTk5OCA1LjMzMzM0QzguNzA3MjMgNS4zMzMzNCA5LjM4NTUxIDUuNjE0MjkgOS44ODU2IDYuMTE0MzlDMTAuMzg1NyA2LjYxNDQ4IDEwLjY2NjcgNy4yOTI3NiAxMC42NjY3IDhDMTAuNjY2NyA4LjcwNzI1IDEwLjM4NTcgOS4zODU1MyA5Ljg4NTYgOS44ODU2MkM5LjM4NTUxIDEwLjM4NTcgOC43MDcyMyAxMC42NjY3IDcuOTk5OTggMTAuNjY2N0M3LjI5Mjc0IDEwLjY2NjcgNi42MTQ0NiAxMC4zODU3IDYuMTE0MzcgOS44ODU2MkM1LjYxNDI3IDkuMzg1NTMgNS4zMzMzMiA4LjcwNzI1IDUuMzMzMzIgOEM1LjMzMzMyIDcuMjkyNzYgNS42MTQyNyA2LjYxNDQ4IDYuMTE0MzcgNi4xMTQzOVoiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9IiM5QzlDOUMiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9ImV2ZW5vZGQiIGNsaXBSdWxlPSJldmVub2RkIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSJNMi4zNDEzMiA4QzMuMTY0OTkgMTAuMzMwOSA1LjM4ODggMTIgNy45OTk5OCAxMkMxMC42MTE4IDEyIDEyLjgzNSAxMC4zMzEgMTMuNjU4NiA4QzEyLjgzNSA1LjY2OTAzIDEwLjYxMTggNCA3Ljk5OTk4IDRDNS4zODg4IDQgMy4xNjQ5OSA1LjY2OTA2IDIuMzQxMzIgOFpNMS4wMDI2MSA3LjgwMDI3QzEuOTM2NzEgNC44MjU2OCA0LjcxNTgzIDIuNjY2NjcgNy45OTk5OCAyLjY2NjY3QzExLjI4NDggMi42NjY2NyAxNC4wNjMzIDQuODI1NzEgMTQuOTk3NCA3LjgwMDI3QzE1LjAzODIgNy45MzAzIDE1LjAzODIgOC4wNjk3MSAxNC45OTc0IDguMTk5NzRDMTQuMDYzMyAxMS4xNzQzIDExLjI4NDggMTMuMzMzMyA3Ljk5OTk4IDEzLjMzMzNDNC43MTU4MyAxMy4zMzMzIDEuOTM2NzEgMTEuMTc0MyAxLjAwMjYxIDguMTk5NzRDMC45NjE3NzcgOC4wNjk3MSAwLjk2MTc3NyA3LjkzMDMgMS4wMDI2MSA3LjgwMDI3WiIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0iIzlDOUM5QyIvPgogICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==');
  &:hover {
    content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiBmaWxsPSJub25lIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9ImV2ZW5vZGQiIGNsaXBSdWxlPSJldmVub2RkIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSJNNy45OTk5OCA2LjY2NjY3QzcuNjQ2MzYgNi42NjY2NyA3LjMwNzIyIDYuODA3MTUgNy4wNTcxOCA3LjA1NzJDNi44MDcxMyA3LjMwNzI0IDYuNjY2NjUgNy42NDYzOCA2LjY2NjY1IDhDNi42NjY2NSA4LjM1MzYzIDYuODA3MTMgOC42OTI3NyA3LjA1NzE4IDguOTQyODFDNy4zMDcyMiA5LjE5Mjg2IDcuNjQ2MzYgOS4zMzMzNCA3Ljk5OTk4IDkuMzMzMzRDOC4zNTM2MSA5LjMzMzM0IDguNjkyNzUgOS4xOTI4NiA4Ljk0Mjc5IDguOTQyODFDOS4xOTI4NCA4LjY5Mjc3IDkuMzMzMzIgOC4zNTM2MyA5LjMzMzMyIDhDOS4zMzMzMiA3LjY0NjM4IDkuMTkyODQgNy4zMDcyNCA4Ljk0Mjc5IDcuMDU3MkM4LjY5Mjc1IDYuODA3MTUgOC4zNTM2MSA2LjY2NjY3IDcuOTk5OTggNi42NjY2N1pNNi4xMTQzNyA2LjExNDM5QzYuNjE0NDYgNS42MTQyOSA3LjI5Mjc0IDUuMzMzMzQgNy45OTk5OCA1LjMzMzM0QzguNzA3MjMgNS4zMzMzNCA5LjM4NTUxIDUuNjE0MjkgOS44ODU2IDYuMTE0MzlDMTAuMzg1NyA2LjYxNDQ4IDEwLjY2NjcgNy4yOTI3NiAxMC42NjY3IDhDMTAuNjY2NyA4LjcwNzI1IDEwLjM4NTcgOS4zODU1MyA5Ljg4NTYgOS44ODU2MkM5LjM4NTUxIDEwLjM4NTcgOC43MDcyMyAxMC42NjY3IDcuOTk5OTggMTAuNjY2N0M3LjI5Mjc0IDEwLjY2NjcgNi42MTQ0NiAxMC4zODU3IDYuMTE0MzcgOS44ODU2MkM1LjYxNDI3IDkuMzg1NTMgNS4zMzMzMiA4LjcwNzI1IDUuMzMzMzIgOEM1LjMzMzMyIDcuMjkyNzYgNS42MTQyNyA2LjYxNDQ4IDYuMTE0MzcgNi4xMTQzOVoiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9IiMyNjcxZDkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9ImV2ZW5vZGQiIGNsaXBSdWxlPSJldmVub2RkIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSJNMi4zNDEzMiA4QzMuMTY0OTkgMTAuMzMwOSA1LjM4ODggMTIgNy45OTk5OCAxMkMxMC42MTE4IDEyIDEyLjgzNSAxMC4zMzEgMTMuNjU4NiA4QzEyLjgzNSA1LjY2OTAzIDEwLjYxMTggNCA3Ljk5OTk4IDRDNS4zODg4IDQgMy4xNjQ5OSA1LjY2OTA2IDIuMzQxMzIgOFpNMS4wMDI2MSA3LjgwMDI3QzEuOTM2NzEgNC44MjU2OCA0LjcxNTgzIDIuNjY2NjcgNy45OTk5OCAyLjY2NjY3QzExLjI4NDggMi42NjY2NyAxNC4wNjMzIDQuODI1NzEgMTQuOTk3NCA3LjgwMDI3QzE1LjAzODIgNy45MzAzIDE1LjAzODIgOC4wNjk3MSAxNC45OTc0IDguMTk5NzRDMTQuMDYzMyAxMS4xNzQzIDExLjI4NDggMTMuMzMzMyA3Ljk5OTk4IDEzLjMzMzNDNC43MTU4MyAxMy4zMzMzIDEuOTM2NzEgMTEuMTc0MyAxLjAwMjYxIDguMTk5NzRDMC45NjE3NzcgOC4wNjk3MSAwLjk2MTc3NyA3LjkzMDMgMS4wMDI2MSA3LjgwMDI3WiIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0iIzI2NzFEOSIvPgogICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==');
    cursor: pointer;
  }
`;

export const IconDelete = styled.div`
  content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiBmaWxsPSJub25lIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9ImV2ZW5vZGQiIGNsaXBSdWxlPSJldmVub2RkIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSJNNS43MjM4NiAxLjcyMzg1QzUuOTczOTEgMS40NzM4IDYuMzEzMDQgMS4zMzMzMyA2LjY2NjY3IDEuMzMzMzNIOS4zMzMzM0M5LjY4Njk1IDEuMzMzMzMgMTAuMDI2MSAxLjQ3MzggMTAuMjc2MSAxLjcyMzg1QzEwLjUyNjIgMS45NzM5IDEwLjY2NjcgMi4zMTMwNCAxMC42NjY3IDIuNjY2NjZWMy45OTk5OUgxMi42NTk4QzEyLjY2MzkgMy45OTk5NiAxMi42NjggMy45OTk5NiAxMi42NzIyIDMuOTk5OTlIMTMuMzMzM0MxMy43MDE1IDMuOTk5OTkgMTQgNC4yOTg0NyAxNCA0LjY2NjY2QzE0IDUuMDM0ODUgMTMuNzAxNSA1LjMzMzMzIDEzLjMzMzMgNS4zMzMzM0gxMy4yODc0TDEyLjc1MzcgMTIuODA4N0MxMi43MTc3IDEzLjMxMzIgMTIuNDkxOSAxMy43ODU1IDEyLjEyMTggMTQuMTMwMkMxMS43NTE2IDE0LjQ3NSAxMS4yNjQ1IDE0LjY2NjcgMTAuNzU4NyAxNC42NjY3SDUuMjQxMzVDNC43MzU0OSAxNC42NjY3IDQuMjQ4NDIgMTQuNDc1IDMuODc4MjMgMTQuMTMwMkMzLjUwODA5IDEzLjc4NTUgMy4yODIzMSAxMy4zMTMzIDMuMjQ2MzYgMTIuODA4OEwyLjcxMjU3IDUuMzMzMzNIMi42NjY2N0MyLjI5ODQ4IDUuMzMzMzMgMiA1LjAzNDg1IDIgNC42NjY2NkMyIDQuMjk4NDcgMi4yOTg0OCAzLjk5OTk5IDIuNjY2NjcgMy45OTk5OUgzLjMyNzgzQzMuMzMxOTcgMy45OTk5NiAzLjMzNjA5IDMuOTk5OTYgMy4zNDAyMSAzLjk5OTk5SDUuMzMzMzNWMi42NjY2NkM1LjMzMzMzIDIuMzEzMDQgNS40NzM4MSAxLjk3MzkgNS43MjM4NiAxLjcyMzg1Wk00LjA0OTMgNS4zMzMzM0w0LjU3NjMxIDEyLjcxMzhDNC41ODgyOCAxMi44ODIgNC42NjM1NSAxMy4wMzk2IDQuNzg2OTUgMTMuMTU0NUM0LjkxMDM0IDEzLjI2OTQgNS4wNzI3IDEzLjMzMzMgNS4yNDEzMyAxMy4zMzMzSDEwLjc1ODdDMTAuOTI3MyAxMy4zMzMzIDExLjA4OTcgMTMuMjY5NCAxMS4yMTMxIDEzLjE1NDVDMTEuMzM2NCAxMy4wMzk2IDExLjQxMTcgMTIuODgyMiAxMS40MjM3IDEyLjcxNEwxMS45NTA3IDUuMzMzMzNINC4wNDkzWk05LjMzMzMzIDMuOTk5OTlINi42NjY2N1YyLjY2NjY2SDkuMzMzMzNWMy45OTk5OVpNNi42NjY2NyA2LjY2NjY2QzcuMDM0ODYgNi42NjY2NiA3LjMzMzMzIDYuOTY1MTQgNy4zMzMzMyA3LjMzMzMzVjExLjMzMzNDNy4zMzMzMyAxMS43MDE1IDcuMDM0ODYgMTIgNi42NjY2NyAxMkM2LjI5ODQ4IDEyIDYgMTEuNzAxNSA2IDExLjMzMzNWNy4zMzMzM0M2IDYuOTY1MTQgNi4yOTg0OCA2LjY2NjY2IDYuNjY2NjcgNi42NjY2NlpNOS4zMzMzMyA2LjY2NjY2QzkuNzAxNTIgNi42NjY2NiAxMCA2Ljk2NTE0IDEwIDcuMzMzMzNWMTEuMzMzM0MxMCAxMS43MDE1IDkuNzAxNTIgMTIgOS4zMzMzMyAxMkM4Ljk2NTE0IDEyIDguNjY2NjcgMTEuNzAxNSA4LjY2NjY3IDExLjMzMzNWNy4zMzMzM0M4LjY2NjY3IDYuOTY1MTQgOC45NjUxNCA2LjY2NjY2IDkuMzMzMzMgNi42NjY2NloiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9IiM5QzlDOUMiLz4KICAgICAgICAgICAgICAgICAgICA8L3N2Zz4=');
  &:hover {
    content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiBmaWxsPSJub25lIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9ImV2ZW5vZGQiIGNsaXBSdWxlPSJldmVub2RkIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSJNNS43MjM4NiAxLjcyMzg1QzUuOTczOTEgMS40NzM4IDYuMzEzMDQgMS4zMzMzMyA2LjY2NjY3IDEuMzMzMzNIOS4zMzMzM0M5LjY4Njk1IDEuMzMzMzMgMTAuMDI2MSAxLjQ3MzggMTAuMjc2MSAxLjcyMzg1QzEwLjUyNjIgMS45NzM5IDEwLjY2NjcgMi4zMTMwNCAxMC42NjY3IDIuNjY2NjZWMy45OTk5OUgxMi42NTk4QzEyLjY2MzkgMy45OTk5NiAxMi42NjggMy45OTk5NiAxMi42NzIyIDMuOTk5OTlIMTMuMzMzM0MxMy43MDE1IDMuOTk5OTkgMTQgNC4yOTg0NyAxNCA0LjY2NjY2QzE0IDUuMDM0ODUgMTMuNzAxNSA1LjMzMzMzIDEzLjMzMzMgNS4zMzMzM0gxMy4yODc0TDEyLjc1MzcgMTIuODA4N0MxMi43MTc3IDEzLjMxMzIgMTIuNDkxOSAxMy43ODU1IDEyLjEyMTggMTQuMTMwMkMxMS43NTE2IDE0LjQ3NSAxMS4yNjQ1IDE0LjY2NjcgMTAuNzU4NyAxNC42NjY3SDUuMjQxMzVDNC43MzU0OSAxNC42NjY3IDQuMjQ4NDIgMTQuNDc1IDMuODc4MjMgMTQuMTMwMkMzLjUwODA5IDEzLjc4NTUgMy4yODIzMSAxMy4zMTMzIDMuMjQ2MzYgMTIuODA4OEwyLjcxMjU3IDUuMzMzMzNIMi42NjY2N0MyLjI5ODQ4IDUuMzMzMzMgMiA1LjAzNDg1IDIgNC42NjY2NkMyIDQuMjk4NDcgMi4yOTg0OCAzLjk5OTk5IDIuNjY2NjcgMy45OTk5OUgzLjMyNzgzQzMuMzMxOTcgMy45OTk5NiAzLjMzNjA5IDMuOTk5OTYgMy4zNDAyMSAzLjk5OTk5SDUuMzMzMzNWMi42NjY2NkM1LjMzMzMzIDIuMzEzMDQgNS40NzM4MSAxLjk3MzkgNS43MjM4NiAxLjcyMzg1Wk00LjA0OTMgNS4zMzMzM0w0LjU3NjMxIDEyLjcxMzhDNC41ODgyOCAxMi44ODIgNC42NjM1NSAxMy4wMzk2IDQuNzg2OTUgMTMuMTU0NUM0LjkxMDM0IDEzLjI2OTQgNS4wNzI3IDEzLjMzMzMgNS4yNDEzMyAxMy4zMzMzSDEwLjc1ODdDMTAuOTI3MyAxMy4zMzMzIDExLjA4OTcgMTMuMjY5NCAxMS4yMTMxIDEzLjE1NDVDMTEuMzM2NCAxMy4wMzk2IDExLjQxMTcgMTIuODgyMiAxMS40MjM3IDEyLjcxNEwxMS45NTA3IDUuMzMzMzNINC4wNDkzWk05LjMzMzMzIDMuOTk5OTlINi42NjY2N1YyLjY2NjY2SDkuMzMzMzNWMy45OTk5OVpNNi42NjY2NyA2LjY2NjY2QzcuMDM0ODYgNi42NjY2NiA3LjMzMzMzIDYuOTY1MTQgNy4zMzMzMyA3LjMzMzMzVjExLjMzMzNDNy4zMzMzMyAxMS43MDE1IDcuMDM0ODYgMTIgNi42NjY2NyAxMkM2LjI5ODQ4IDEyIDYgMTEuNzAxNSA2IDExLjMzMzNWNy4zMzMzM0M2IDYuOTY1MTQgNi4yOTg0OCA2LjY2NjY2IDYuNjY2NjcgNi42NjY2NlpNOS4zMzMzMyA2LjY2NjY2QzkuNzAxNTIgNi42NjY2NiAxMCA2Ljk2NTE0IDEwIDcuMzMzMzNWMTEuMzMzM0MxMCAxMS43MDE1IDkuNzAxNTIgMTIgOS4zMzMzMyAxMkM4Ljk2NTE0IDEyIDguNjY2NjcgMTEuNzAxNSA4LjY2NjY3IDExLjMzMzNWNy4zMzMzM0M4LjY2NjY3IDYuOTY1MTQgOC45NjUxNCA2LjY2NjY2IDkuMzMzMzMgNi42NjY2NloiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9IiNGRjU2NTYiLz4KICAgICAgICAgICAgICAgICAgICA8L3N2Zz4=');
    cursor: pointer;
  }
`;
