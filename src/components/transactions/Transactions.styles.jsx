import styled from 'styled-components';

export const HeadRow = styled.tr`
  display: flex;
`;

export const TableHead = styled.th`
  width: 200px;
  display: flex;
  background: #0a65b5;
  color: white;
  padding: 10px 20px;
  justify-content: center;
  border: 1px solid black;
`;

export const DataRow = styled.tr`
  display: flex;
  &&:nth-child(even) {
    background-color: #b5cb85;
  }
  &&:nth-child(odd) {
    background-color: #8ac6e1;
  }
`;

export const TableData = styled.td`
  padding: 10px 20px;
  display: flex;
  width: 100%;
  border: 1px solid black;
  justify-content: center;
`;
