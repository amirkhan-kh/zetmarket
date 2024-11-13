import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import { getData } from '@constants';
export const ChartExample = () => {
  const [options] = useState({
    title: {
      text: "Apple's Revenue by Product Category",
    },
    subtitle: {
      text: "In Billion U.S. Dollars",
    },
    data: getData(),
    series: [
      {
        type: "bar",
        xKey: "quarter",
        yKey: "totalPrice",
        yName: "totalPrice",
      },
      
    ],
  });

  return <AgCharts options={options} />;
};

const root = createRoot(document.getElementById("root"));
root.render(<ChartExample />);
