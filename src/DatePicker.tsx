import React, { useEffect } from "react";

import { DateRange, DefinedRange, Range } from 'react-date-range';
import { ko } from 'date-fns/locale';
import { sub } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DatePicker: React.FunctionComponent = () =>{
  const [state, setState] = React.useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleDefinedRangeButtonClick = (type: string) => {
    switch(type) {
      case 'today':
        setState([{
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }])
        break;
      case 'lastWeek':
        setState([{
          startDate: new Date(),
          endDate: sub(new Date(), {weeks: 1}),
          key: 'selection'
        }])
        break;
      case 'lastMonth':
        setState([{
          startDate: new Date(),
          endDate: sub(new Date(), {months: 1}),
          key: 'selection'
        }])
        break;
    }
  }

  useEffect(() => {
    console.log(state[0]);
  }, [state])

  return (
    <>
      <div>
        <div>
          <button onClick={() => handleDefinedRangeButtonClick('today')}>today</button>
          <button onClick={() => handleDefinedRangeButtonClick('lastWeek')}>lastWeek</button>
          <button onClick={() => handleDefinedRangeButtonClick('lastMonth')}>this month</button>
        </div>
        <input type="text" />
        {/* <div>
          <DefinedRange
            onChange={item => setState([item.selection])}
            ranges={state}
          />;
        </div> */}
        <DateRange 
          editableDateInputs={true}
          onChange={item => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          months={2}
          dateDisplayFormat="yyyy-MM-dd"
          locale={ko}
        />
      </div>

    </>
  );
}

export default DatePicker;
