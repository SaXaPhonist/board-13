import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { CalendarContainer, CalendarDays, MonthController } from './styles';

const Calendar = () => {
  return (
    <CalendarContainer className="calendar">
      <MonthController>
        <p>September</p>
        <div>
          <ArrowBack className="month-arrow" />
          <ArrowForward className="month-arrow" />
        </div>
      </MonthController>
      <CalendarDays>
        <div className="weekdays">
          <div>Mn</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>St</div>
          <div>Su</div>
        </div>
        <div className="days">
          <div className="">1</div>
          <div className="">2</div>
          <div className="">3</div>
          <div className="">4</div>
          <div className="">5</div>
          <div className="">6</div>
          <div className="">7</div>
          <div className="">8</div>
          <div className="">9</div>
          <div className="">10</div>
          <div className="">11</div>
          <div className="current-day">12</div>
          <div className="days-between">13</div>
          <div className="days-between">14</div>
          <div className="days-between">15</div>
          <div className="days-between">16</div>
          <div className="final-day">17</div>
          <div className="">18</div>
          <div className="">19</div>
          <div className="">20</div>
          <div className="">21</div>
          <div className="">22</div>
          <div className="">23</div>
          <div className="">24</div>
          <div className="">25</div>
          <div className="">26</div>
          <div className="">27</div>
          <div className="">28</div>
          <div className="">29</div>
          <div className="">30</div>
          <div className="next-month">1</div>
          <div className="next-month">2</div>
          <div className="next-month">3</div>
          <div className="next-month">4</div>
          <div className="next-month">5</div>
        </div>
      </CalendarDays>
    </CalendarContainer>
  );
};

export default Calendar;
