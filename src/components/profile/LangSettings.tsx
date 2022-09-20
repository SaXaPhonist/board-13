import flagImg from 'assets/images/Flag_UK.png';
import { LangContainer } from './styles';

const LangSettings = () => {
  return (
    <LangContainer>
      <img alt="choose language" src={flagImg} />
    </LangContainer>
  );
};

export default LangSettings;
