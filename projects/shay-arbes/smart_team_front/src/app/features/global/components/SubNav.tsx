import styled from "styled-components";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
const Contener = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const StyledBox = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  width: 60%;
  top: 40px;
  position: fixed;
  z-index: 10;
  opacity: 1;
  background: rgb(255 255 255 / 67%);
  color: rgb(52, 71, 103);
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem,
    rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 1;
  background: transparent;
  color: rgb(52, 71, 103);
  box-shadow: none;
`;
interface Btn {
  backgroundColor?: string;
  fontSize?: string;
  color?: string;
  margin?: string;
  backgroundColorHover?: string;
  borderRadius?: string;
  padding?: string;
  colorActive?: string;
}

const StyledButton = styled.button<Btn>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    color: black;
    transition-duration: 0.4s;
    background: rgba(212, 212, 212, 0.3);
    cursor: pointer;
  }
  background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff00"};
  color: ${({ color }) => color || "black"};
  margin: 2px 2%;
  border: 0px;
  width: 120px;
  border-radius: 9px;
  padding: 0.5em 1em;
  cursor: pointer;
`;

const GroupBut = styled.div`
  display: flex;
`;
export default function SubNav() {
  const handleClick = () => {
    navigate("/a");
  };
  const navigate = useNavigate();
  return (
    <Contener>
      <StyledBox>
        <InnerBox>
          <GroupBut>
            <StyledButton
              test-id="btn"
              onClick={() => {
                handleClick();
              }}
            >
              כל הדילים
              <GridViewOutlinedIcon />
            </StyledButton>
            <StyledButton>
              חיפוש דיל <SearchOutlinedIcon />
            </StyledButton>
            <StyledButton color="white" backgroundColor={"#d87d0c"}>
              צור דיל <AddIcon />
            </StyledButton>
          </GroupBut>
        </InnerBox>
      </StyledBox>
    </Contener>
  );
}
