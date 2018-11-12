const pop_60 = [
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": 3
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.4933025625723453,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": 7
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": 0.08327468382444114,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": 0.0199693572334195,
        "type": "hidden",
        "squash": "BIPOLAR_SIGMOID",
        "index": "12"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "13"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "14"
      }
    ],
    "connections": [
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 14,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.03646565638720406,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.08988271004034373,
        "from": 12,
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
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "12"
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
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 12,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.005144358184712858,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04645262650541855,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": 3
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "12"
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
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 12,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.04893971099182304,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.07077396572972239,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": 3
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "12"
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
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 12,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09399218715484198,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.036189465785647135,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": 7
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "12"
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
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 12,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.00931578669404294,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0848959774998447,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
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
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.03372791659297465,
        "type": "hidden",
        "squash": "ABSOLUTE",
        "index": "12"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "13"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "14"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.6700635436596618,
        "from": 10,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.06318869145292463,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.08790557714715463,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": 9
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": 1,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": 5
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": 3
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": 3
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": 7
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": 0.044982425875962184,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "13"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "14"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 14,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.05776406889118464,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.006808582782999201,
        "from": 13,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": 9
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": 10
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": 1,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "RELU",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "ABSOLUTE",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": 0.00444995292301073,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "13"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "14"
      }
    ],
    "connections": [
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 14,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 13,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.02091149061916764,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09036716231552192,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": 3
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.6700635436596618,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.3031262327121218,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": 0.412290632492641,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.029210477870597495,
        "from": 10,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.13535007569486868,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": 3
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": 10
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": 3
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.07516103790943403,
        "type": "hidden",
        "squash": "STEP",
        "index": "13"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "14"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 14,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 14,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
        "to": 14,
        "gater": null
      },
      {
        "weight": -0.09000546148523775,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0026530196450951227,
        "from": 13,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09035164201775162,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.05944102036239984,
        "from": 12,
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
        "bias": -0.22492941257329924,
        "type": "hidden",
        "squash": "TANH",
        "index": "12"
      },
      {
        "bias": -0.03811503156614826,
        "type": "output",
        "squash": "TANH",
        "index": "13"
      }
    ],
    "connections": [
      {
        "weight": 0.035600396405395696,
        "from": 0,
        "to": 13,
        "gater": 0
      },
      {
        "weight": -0.0040132973697539764,
        "from": 2,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.01956791631869023,
        "from": 3,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.04701359523230902,
        "from": 4,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.04083051735281473,
        "from": 5,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.09394134366811277,
        "from": 6,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.05096965990562152,
        "from": 7,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.044903219236555984,
        "from": 8,
        "to": 13,
        "gater": null
      },
      {
        "weight": 0.036410984715377515,
        "from": 9,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.009874795254639634,
        "from": 10,
        "to": 13,
        "gater": null
      },
      {
        "weight": 1,
        "from": 12,
        "to": 13,
        "gater": null
      },
      {
        "weight": -0.013535726750334473,
        "from": 1,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.007989554414620056,
        "from": 5,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.6470283611108495,
        "from": 7,
        "to": 12,
        "gater": null
      },
      {
        "weight": 0.46119990643741793,
        "from": 11,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.052961514243956564,
        "from": 13,
        "to": 12,
        "gater": null
      },
      {
        "weight": -0.050631271706439086,
        "from": 11,
        "to": 13,
        "gater": null
      }
    ],
    "input": 12,
    "output": 1
  }
]