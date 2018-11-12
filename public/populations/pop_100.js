const pop_100 = [
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 14,
        "to": 16,
        "gater": 10
      },
      {
        "weight": 0.02579995185218059,
        "from": 15,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.32645986638372293,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "weight": -0.07210075275704085,
        "from": 7,
        "to": 13,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "gater": 2
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": 0.8249885281005332,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "weight": 1,
        "from": "13",
        "to": "13",
        "gater": null
      },
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "weight": -0.09198563040078761,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "ABSOLUTE",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "gater": 2
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "weight": 0.051942294775326886,
        "from": 2,
        "to": 13,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "weight": 0.028225733398241054,
        "from": 16,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
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
        "gater": 2
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "weight": -0.007989554414620056,
        "from": 5,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
        "index": "13"
      },
      {
        "bias": 0.09851579145508071,
        "type": "hidden",
        "squash": "TANH",
        "index": "14"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
        "index": "15"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "STEP",
        "index": "16"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "gater": 2
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "gater": 2
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "gater": 2
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "weight": 0.06801449026444115,
        "from": 14,
        "to": 13,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "weight": 1,
        "from": "15",
        "to": "15",
        "gater": null
      },
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.060707896373666,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
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
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.007869651766810204,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "13"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "ABSOLUTE",
        "index": "14"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "15"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 15,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 15,
        "gater": 2
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 14,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.015939243364120198,
        "from": 15,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.0025035767249438623,
        "from": 15,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "gater": 2
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05390717430925537,
        "from": 1,
        "to": 13,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "gater": 2
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 16,
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "weight": -0.07069187483570101,
        "from": 9,
        "to": 13,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
        "index": "13"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "14"
      },
      {
        "bias": 0.46619017045978495,
        "type": "hidden",
        "squash": "IDENTITY",
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
        "weight": 1,
        "from": "12",
        "to": "12",
        "gater": null
      },
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
        "index": "13"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "14"
      },
      {
        "bias": 0.6220102576281475,
        "type": "hidden",
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": 0.07896434333117869,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "BENT_IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "13"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "15"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 15,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 15,
        "gater": 2
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 15,
        "gater": 2
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 14,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09976995134140765,
        "from": 15,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.013643091281551584,
        "from": 15,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
        "index": "15"
      },
      {
        "bias": 0.02443282277198859,
        "type": "hidden",
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
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
        "weight": 0.627076428336773,
        "from": 7,
        "to": 14,
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
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 14,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.04592928670673152,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.021092554453789797,
        "from": 16,
        "to": 17,
        "gater": 2
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "ABSOLUTE",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "gater": 2
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "weight": -0.06161677622956026,
        "from": 6,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "BENT_IDENTITY",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.06068472897908017,
        "from": 4,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "weight": 0.1758186143531974,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "gater": 2
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
        "index": "13"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "14"
      },
      {
        "bias": 0.03650923223372646,
        "type": "hidden",
        "squash": "ABSOLUTE",
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
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
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
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 16,
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 14,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 14,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 15,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "gater": 2
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": -0.09198563040078761,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "13"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "14"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "15"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 15,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.627076428336773,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 15,
        "gater": 2
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.043896063119557016,
        "from": 10,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 15,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 13,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 14,
        "to": 15,
        "gater": null
      },
      {
        "weight": 0.06129304307184688,
        "from": 15,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.09029807405340198,
        "from": 15,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
        "gater": 10
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": 2
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
        "index": "15"
      },
      {
        "bias": -0.028697200735796985,
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
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 17,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
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
        "weight": 0.627076428336773,
        "from": 7,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
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
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "to": 17,
        "gater": null
      },
      {
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 17,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 14,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.02579995185218059,
        "from": 15,
        "to": 17,
        "gater": null
      },
      {
        "weight": 0.08187311629054195,
        "from": 6,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.006153001626415661,
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
        "bias": -0.008041657916816145,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "12"
      },
      {
        "bias": -0.0382040512573624,
        "type": "hidden",
        "squash": "TANH",
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
        "squash": "IDENTITY",
        "index": "15"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "ABSOLUTE",
        "index": "16"
      }
    ],
    "connections": [
      {
        "weight": 0.019394912780290458,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 16,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 16,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 14,
        "gater": null
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
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 16,
        "gater": null
      },
      {
        "weight": 0.1758186143531974,
        "from": 13,
        "to": 12,
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
        "weight": -0.0054261080817622764,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0035699518291907734,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6921209696040505,
        "from": 16,
        "to": 13,
        "gater": null
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
      }
    ],
    "input": 12,
    "output": 1
  }
]