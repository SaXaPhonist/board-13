import QuestionImg from 'assets/images/support.svg';
import { SupportSection } from './styles';

const Support = () => (
  <SupportSection>
    <img alt="ask question for help" src={QuestionImg} />
    <div role="button" className="support-button">
      Support
    </div>
  </SupportSection>
);

export default Support;
