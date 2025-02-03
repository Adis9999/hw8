import React from "react";
import styled from "styled-components";

const ExpenseFilter = ({ value, onChange }) => {
  const yearText = value === "All" ? "All" : `${value} is selected`;
// показывает какое время выбрано

  return (
    <Box>
      <StyledText>{yearText}</StyledText>

      <div>
        <StyledLabel htmlFor="filter">Filter By Year</StyledLabel>
        <StyledSelect value={value} onChange={onChange} id="filter">
          <option value="All">All</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </StyledSelect>
      </div>
    </Box>
  );
};

export default ExpenseFilter;

const StyledSelect = styled.select`
  padding: 8px 20px;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
`;
const StyledLabel = styled.label`
  margin-right: 20px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

const StyledText = styled.div`
  color: purple;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
`;
