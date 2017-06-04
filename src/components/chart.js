import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function avergage(data) {
    return _.round(_.sum(data) / data.length);
}
export default (props) => {

  return (
    <div>
      <Sparklines width={150} height={80} data={props.data}>
        <SparklinesLine color = {props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{avergage(props.data)} {props.units}</div>
    </div>
  );
};
