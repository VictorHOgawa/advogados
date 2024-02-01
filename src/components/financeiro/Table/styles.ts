import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

interface StatusProps {
  paid: boolean;
}
export const TableContainer = styled.div`
  overflow: auto;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.secondary_60};
  margin-top: 3%;
  @media (min-width: 1200px) {
    margin-right: 0;
  }
`;
export const TableContent = styled.div`
  overflow: hidden;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
`;
export const TableHeader = styled(Row)`
  padding: 5px 0;
  font-weight: bold;
  margin: 0;
`;
export const TableCol = styled(Col)`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;
export const TableRows = styled(TableContainer)`
  margin: 0;
  font-size: 1.25rem;
`;
export const TableRow = styled(TableHeader)`
  font-weight: normal;
  margin-top: 5px;
  color: ${({ theme }) => theme.color.gray_80};
`;
export const Status = styled.div<StatusProps>`
  background-color: ${({ theme, paid }) => (paid ? theme.color.green_60: theme.color.yellow_40)};
  color: white;
  border-Radius: 5px;
  border: none;
  width: 6rem;
  min-width: 6rem;
  display: flex;
  padding: 0.2rem 0rem 0.2rem 0rem;
  align-Items: center;
  justify-content: center;
  font-Size: 1rem;
  @media (max-width: 500px) {
    font-size: ${({paid}) => (paid ? '1rem' : '0.7rem')};
    width: 4.2rem;
    min-width: 4.2rem;
  }
`;