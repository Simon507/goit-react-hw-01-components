import styled from 'styled-components';

export const UserProfile = styled.div`
  background-color: rgb(206, 197, 197);
  padding: 15px;
  width: 400px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const UserDescription = styled.div`
  background-color: rgb(232, 218, 218);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserPhoto = styled.img`
  border: 0.5px solid black;
  border-radius: 50%;
  background-color: #fff;
`;

export const Name = styled.p`
  text-decoration: underline;
  font-weight: 700;
`;

export const Stats = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Label = styled.span`
  font-weight: 500;
  margin-right: 10px;
`;
