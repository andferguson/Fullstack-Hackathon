const pop_1000 = [
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.7036596036503027,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "BENT_IDENTITY",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "BIPOLAR",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": 5
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.009740046339509117,
        "from": 1,
        "to": 12,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.010831737164057026,
        "from": 9,
        "to": 15,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.8173975349763928,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05564125163876654,
        "from": 16,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "BENT_IDENTITY",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": 5
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.370621876110098,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "BIPOLAR_SIGMOID",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 12
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.6265488507479151,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": 7
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.049973886918934035,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": 7
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "BIPOLAR_SIGMOID",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.033043173056966565,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "BIPOLAR_SIGMOID",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.033043173056966565,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": 5
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": 11
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03207378855284797,
        "from": 13,
        "to": 12,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 16,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": 0.11267716235612601,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "BIPOLAR",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": 5
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "TANH",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.049973886918934035,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": 7
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": -0.878487000576408,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 16
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.9007271273814413,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "BIPOLAR_SIGMOID",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": 0.5802927635011409,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.11722803397536552,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 8
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": 0.08860194185936071,
        "from": 16,
        "to": 14,
        "gater": 4
      },
      {
        "weight": 0.02579995185218059,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02935141092123486,
        "from": 4,
        "to": 16,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": 0.7763205838399236,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "ABSOLUTE",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.05649400397846982,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "15"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "16"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "17"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "18"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 18,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 18,
        "gater": 5
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 18,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 18,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 18,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 18,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 18,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 18,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 18,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.022083223745516814,
        "from": 14,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 17,
        "to": 13,
        "gater": 6
      },
      {
        "weight": 0.05944102036239984,
        "from": 16,
        "to": 18,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 16,
        "gater": 13
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 15,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 18,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05564125163876654,
        "from": 18,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.0035699518291907734,
        "from": 15,
        "to": 16,
        "gater": 9
      },
      {
        "weight": -0.02465085665400793,
        "from": 18,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 17,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.02579995185218059,
        "from": 17,
        "to": 18,
        "gater": null
      },
      {
        "weight": -0.005707479349051428,
        "from": 16,
        "to": 15,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": 5
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": 0.7763205838399236,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.774616018861386,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "BIPOLAR_SIGMOID",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05564125163876654,
        "from": 16,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.06585085554993714,
        "from": 13,
        "to": 12,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.7036596036503027,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": -0.01744392691614452,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": 4
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "14"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "15"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "16"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": 7
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": 5
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 15,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 15,
        "to": 13,
        "gater": 6
      },
      {
        "weight": 0.05564125163876654,
        "from": 16,
        "to": 13,
        "gater": 5
      },
      {
        "weight": 0.05944102036239984,
        "from": 14,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 15,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0327395113796559,
        "from": 16,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.01025740554345736,
        "from": 15,
        "to": 14,
        "gater": 9
      }
    ],
    "input": 12,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "9"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "10"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "11"
      },
      {
        "bias": -0.010216855556019144,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "15"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "RELU",
        "index": "16"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "17"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 13,
        "gater": 13
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.03990364504266833,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.03428089632404707,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.32215805473414905,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 15,
        "gater": 13
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.9858408287952751,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0553394983978309,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02154620544942798,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.06949535647940133,
        "from": 11,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007936744186082395,
        "from": 16,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09514390044437046,
        "from": 17,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.02212874226255561,
        "from": 16,
        "to": 13,
        "gater": 6
      },
      {
        "weight": -0.0035699518291907734,
        "from": 14,
        "to": 15,
        "gater": 9
      },
      {
        "weight": 0.05564125163876654,
        "from": 17,
        "to": 13,
        "gater": 5
      },
      {
        "weight": -0.015450422228700855,
        "from": 16,
        "to": 14,
        "gater": 9
      },
      {
        "weight": -0.07791958934280885,
        "from": 17,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 16,
        "to": 17,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  }
]