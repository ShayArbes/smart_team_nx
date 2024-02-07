import { useNavigate } from "react-router-dom";
import {
  StyledTypography,
  TextContainer,
  Container,
  Img,
  ActionButtons,
  StyledButton,
} from "../style/Dashboard.style";

function Dashboard() {
  const navigate = useNavigate();
  function signUp() {
    navigate("/sign_up");
  }
  function login() {
    navigate("/login");
  }
  return (
    <Container>
      <TextContainer>
        <StyledTypography>
          הצטרפו לקהילה של הרכישה הקבוצתית והשיגו עסקאות בלעדיות במחירים מוזלים
          באמצעות כוחה של קנייה קולקטיבית.
        </StyledTypography>
        <Img src="../../../../public/img/group.svg"></Img>
      </TextContainer>

      <ActionButtons>
        <StyledButton
          onClick={() => {
            signUp();
          }}
        >
          הרשמה
        </StyledButton>
        <StyledButton
          onClick={() => {
            login();
          }}
        >
          כניסה
        </StyledButton>
      </ActionButtons>
    </Container>
  );
}

export default Dashboard;
