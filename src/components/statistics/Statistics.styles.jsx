import styled from 'styled-components';

export const StatisicsSection = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 400px;
  padding: 15px;
  margin-bottom: 30px;
  align-items: center;
  gap: 10px;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  border: 1px solid black;
  width: 80px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
