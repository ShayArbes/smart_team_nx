import { Background } from '../style/background.style';
import Dashboard from '../components/Dashboard';
import SubNav from '../components/SubNav';
import SimplePaper from '../components/SimplePaper';
import styled from 'styled-components';
import imgPeople from '../../../../../public/img/back.svg';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <Container>
      <Background img={imgPeople} top={'0%'} />
      <SubNav />
      <Dashboard />
      <Background
        img={'https://mui.com/static/themes/onepirate/productCurvyLines.png'}
        top={'90%'}
      />
      <SimplePaper />
      <Background
        img={
          'https://cdn.pixabay.com/photo/2023/05/25/14/13/abstract-8017507_1280.jpg'
        }
        top={'190%'}
      />
    </Container>
  );
}

export default Home;
