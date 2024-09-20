import styled from "styled-components";
import {blueColorLib, neutralColorLib} from "../color";

export const BreadcrumbStyles = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

export const BreadcrumbText = styled.div<{
    $isActive: boolean;
}>`
    font-size: 12px;
    color: ${(props) => props.$isActive ? blueColorLib.main : neutralColorLib.black};
    font-weight: ${(props) => props.$isActive ? 600 : 'normal'};
`

export const BreadcrumbArrow = styled.div`
    content: '';
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIiBmaWxsPSJub25lIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNDA1MzMgNS40Njk2N0M4LjY5ODIyIDUuNzYyNTYgOC42OTgyMiA2LjIzNzQ0IDguNDA1MzMgNi41MzAzM0w0LjY1NTMzIDEwLjI4MDNDNC4zNjI0NCAxMC41NzMyIDMuODg3NTYgMTAuNTczMiAzLjU5NDY3IDEwLjI4MDNDMy4zMDE3OCA5Ljk4NzQ0IDMuMzAxNzggOS41MTI1NiAzLjU5NDY3IDkuMjE5NjdMNi44MTQzNCA2TDMuNTk0NjcgMi43ODAzM0MzLjMwMTc4IDIuNDg3NDQgMy4zMDE3OCAyLjAxMjU2IDMuNTk0NjcgMS43MTk2N0MzLjg4NzU2IDEuNDI2NzggNC4zNjI0NCAxLjQyNjc4IDQuNjU1MzMgMS43MTk2N0w4LjQwNTMzIDUuNDY5NjdaIiBmaWxsPSIjN0Y3RjgwIi8+Cjwvc3ZnPg==");
    width: 12px;
    height: 12px;
`