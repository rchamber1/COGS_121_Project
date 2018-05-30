
var chart2 = c3.generate({
bindto: '#chart3',
        data: {
          columns: [
            ['Total Time', 6, 8, 6, 5, 10, 12],
            ['Average Time', 4, 3, 2, 1, 2, 3]
          ],
          type: 'bar'
        },
        axis: {
          x: {
            label: {
              text: 'Condition',
              position: 'outer-center',
            },
            type: 'category',
            categories: ["Parkinson's", "Alzheimer's", 'Seizure', 'Stroke', 'ALS', 'MS'],
            tick: {
              centered: true
            }
          },
          y: {
            label: {
              text: 'Time (hours)',
              position: 'outer-middle'
            },
            max: 10,
            min: 0,
            padding: {
              top: 0,
              bottom: 0
            }
          }
        },
        legend: {
          show: true
        }
});

