import React from "react";
import major from "../../../../Models/major";
import { Bar } from "react-chartjs-2";
const Statistic: React.FC<{ majors: major[] }> = ({ majors }) => {
  let data = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  let min = 0;
  let max = 10;
  if (majors)
    for (var i = 0; i < majors.length; i++) {
      const advices = majors[i].advices;
      if (advices)
        for (var j = 0; j < advices?.length; j++) {
          const ratings = advices[j].rating;
          const votings = advices[j].voting;
          let multiplied = 0;
          for (var k = 0; k < votings.length; k++) {
            multiplied += votings[k].result;
          }
          if (multiplied === 0) multiplied = 1;
          data[i][0] += stringToInt(ratings[0]) * multiplied;
          if (data[i][0] > max) max = data[i][0];
          if (data[i][0] < min) min = data[i][0];
          for (var k = 1; k < ratings.length; k++) {
            data[i][k] += stringToIntPref(ratings[k]) * multiplied;
            if (data[i][k] > max) max = data[i][k];
            if (data[i][k] < min) min = data[i][k];
          }
        }
    }

  function stringToInt(str: string) {
    if (str.localeCompare("سهل جداً") === 0) return 2;
    else if (str.localeCompare("سهل") === 0) return 1;
    else if (str.localeCompare("محايد") === 0) return 0;
    else if (str.localeCompare("متوسط الصعوبة") === 0) return -1;
    else if (str.localeCompare("صعب") === 0) return -2;
    else if (str.localeCompare("صعب جداً") === 0) return -3;
    return 0;
  }
  function stringToIntPref(str: string) {
    if (str.localeCompare("ممتاز") === 0) return 3;
    else if (str.localeCompare("جيد جداً") === 0) return 2;
    else if (str.localeCompare("جيد") === 0) return 1;
    else if (str.localeCompare("محايد") === 0) return 0;
    else if (str.localeCompare("مقبول") === 0) return -1;
    else if (str.localeCompare("سيء") === 0) return -2;
    else if (str.localeCompare("سيء جداً") === 0) return -3;
    return 0;
  }

  return (
    <div>
      <Bar
        height={400}
        width={600}
        data={{
          labels: [
            "سهولة الدراسة",
            "فرص العمل",
            "المواصلات",
            "كفائة الطاقم التدريسي",
          ],
          datasets: [
            {
              label: `${majors[0].name + " في " + majors[0].university}`,
              data: data[0],
              backgroundColor: "#eb596e",

              borderColor: "rgba(255, 206, 86, 0.2)",

              borderWidth: 1,
            },
            {
              label: `${majors[1].name + " في " + majors[1].university}`,
              data: data[1],
              backgroundColor: "rgba(54, 162, 235, 1)",

              borderColor: "rgba(54, 162, 235, 0.2)",

              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRation: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  suggestedMax: max,
                  suggestedMin: min,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};
export default Statistic;
