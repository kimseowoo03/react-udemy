import ChartBar from "./ChartBar";
import "./ChartBar.css";
import './Chart.css'

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const toTalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={toTalMaximum} label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
