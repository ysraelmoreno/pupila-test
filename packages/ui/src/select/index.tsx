import { useState } from "react";
import {
  SelectContainer,
  SelectOption,
  SelectOptionsWrapper,
  SelectWrapper,
} from "./styles";

interface SelectProps {
  placeholder?: string;
  options?: string[];
  defaultValue?: string;
  onOptionSelect?: (selected: string) => void;
}

export const Select = ({
  placeholder,
  options,
  onOptionSelect,
  defaultValue,
}: SelectProps) => {
  const [selected, setSelected] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectWrapper>
      <SelectContainer onClick={() => setIsOpen(!isOpen)}>
        {selected ? selected : placeholder}
      </SelectContainer>
      {isOpen && (
        <SelectOptionsWrapper>
          {options?.map((option) => (
            <SelectOption
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);

                if (onOptionSelect) {
                  onOptionSelect(option);
                }
              }}
            >
              {option}
            </SelectOption>
          ))}
        </SelectOptionsWrapper>
      )}
    </SelectWrapper>
  );
};
