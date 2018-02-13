const requests = [
  {
    id: 'lmttyp',
    device: 'P:LMTTYP',
    output: 'text'
  },
  {
    id: 'lmttyp',
    device: 'P:LMTTYP.STATUS.READY',
    output: 'status'
  },
  {
    id: 'reset',
    device: 'P:LMTTYP.STATUS.READY',
    output: 'status'
  },
  {
    id: 'lmtgw',
    device: 'P:LMTGW',
    output: 'text'
  },
  {
    id: 'lmtwsz',
    device: 'P:LMTWSZ',
    output: 'text'
  },
  {
    id: 'acrate',
    device: 'P:ACRATE',
    output: 'text'
  },
  {
    id: 'lmtd12Set',
    device: 'P:LMTD12.SETTING',
    output: 'text'
  },
  {
    id: 'lmtd12Status',
    device: 'P:LMTD12.STATUS.ON',
    output: 'status'
  },
  {
    id: 'lmtd12Status',
    device: 'P:LMTD12.STATUS.ON',
    output: 'onOff'
  },
  {
    id: 'lmtd13Set',
    device: 'P:LMTD13.SETTING',
    output: 'text'
  },
  {
    id: 'lmtd13Status',
    device: 'P:LMTD13.STATUS.ON',
    output: 'status'
  },
  {
    id: 'lmtd13Status',
    device: 'P:LMTD13.STATUS.ON',
    output: 'onOff'
  },
  {
    id: 'lmtd1dSet',
    device: 'P:LMTD1D.SETTING',
    output: 'text'
  },
  {
    id: 'lmtd1dStatus',
    device: 'P:LMTD1D.STATUS.ON',
    output: 'status'
  },
  {
    id: 'lmtd1dStatus',
    device: 'P:LMTD1D.STATUS.ON',
    output: 'onOff'
  },
  {
    id: 'lmtd23Set',
    device: 'P:LMTD23.SETTING',
    output: 'text'
  },
  {
    id: 'lmtd23Status',
    device: 'P:LMTD23.STATUS.ON',
    output: 'status'
  },
  {
    id: 'lmtd23Status',
    device: 'P:LMTD23.STATUS.ON',
    output: 'onOff'
  },
  {
    id: 'lmtd2dSet',
    device: 'P:LMTD2D.SETTING',
    output: 'text'
  },
  {
    id: 'lmtd2dStatus',
    device: 'P:LMTD2D.STATUS.ON',
    output: 'status'
  },
  {
    id: 'lmtd2dStatus',
    device: 'P:LMTD2D.STATUS.ON',
    output: 'onOff'
  },
  {
    id: 'lmtd3dSet',
    device: 'P:LMTD3D.SETTING',
    output: 'text'
  },
  {
    id: 'lmtd3dStatus',
    device: 'P:LMTD3D.STATUS.ON',
    output: 'status'
  },
  {
    id: 'lmtd3dStatus',
    device: 'P:LMTD3D.STATUS.ON',
    output: 'onOff'
  },
  {
    id: 'lmtav10',
    device: 'P:LMTAV1.SETTING[0]',
    output: 'text'
  },
  {
    id: 'lmtav11',
    device: 'P:LMTAV1.SETTING[1]',
    output: 'text'
  },
  {
    id: 'lmtav20',
    device: 'P:LMTAV2.SETTING[0]',
    output: 'text'
  },
  {
    id: 'lmtav21',
    device: 'P:LMTAV2.SETTING[1]',
    output: 'text'
  },
  {
    id: 'lmtav30',
    device: 'P:LMTAV3.SETTING[0]',
    output: 'text'
  },
  {
    id: 'lmtav31',
    device: 'P:LMTAV3.SETTING[1]',
    output: 'text'
  },
  {
    id: 'lmtavd0',
    device: 'P:LMTAVD.SETTING[0]',
    output: 'text'
  },
  {
    id: 'lmtavd1',
    device: 'P:LMTAVD.SETTING[1]',
    output: 'text'
  },
  {
    id: 'lmtamx',
    device: 'P:LMTAMX.SETTING',
    output: 'text'
  },
  {
    id: 'lmtsn1',
    device: 'P:LMTSN1',
    output: 'text'
  },
  {
    id: 'lmtsn2',
    device: 'P:LMTSN2',
    output: 'text'
  },
  {
    id: 'lmtsn3',
    device: 'P:LMTSN3',
    output: 'text'
  },
  {
    id: 'lmtsnd',
    device: 'P:LMTSND',
    output: 'text'
  },
  {
    id: 'lmtd12',
    device: 'P:LMTD12',
    output: 'text'
  },
  {
    id: 'lmtd13',
    device: 'P:LMTD13',
    output: 'text'
  },
  {
    id: 'lmtd1d',
    device: 'P:LMTD1D',
    output: 'text'
  },
  {
    id: 'lmtd23',
    device: 'P:LMTD23',
    output: 'text'
  },
  {
    id: 'lmtd2d',
    device: 'P:LMTD2D',
    output: 'text'
  },
  {
    id: 'lmtd3d',
    device: 'P:LMTD3D',
    output: 'text'
  },
]

const settings = [
  {
    id: 'reset',
    device: 'P:LMTTYP',
    eventType: 'click',
    type: 'reset'
  },
  {
    id: 'lmtd12Set',
    device: 'P:LMTD12',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtd12Status',
    device: 'P:LMTD12',
    eventType: 'click',
    type: 'toggle'
  },
  {
    id: 'lmtd13Set',
    device: 'P:LMTD13',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtd13Status',
    device: 'P:LMTD13',
    eventType: 'click',
    type: 'toggle'
  },
  {
    id: 'lmtd1dSet',
    device: 'P:LMTD1D',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtd1dStatus',
    device: 'P:LMTD1D',
    eventType: 'click',
    type: 'toggle'
  },
  {
    id: 'lmtd23Set',
    device: 'P:LMTD23',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtd23Status',
    device: 'P:LMTD23',
    eventType: 'click',
    type: 'toggle'
  },
  {
    id: 'lmtd2dSet',
    device: 'P:LMTD2D',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtd2dStatus',
    device: 'P:LMTD2D',
    eventType: 'click',
    type: 'toggle'
  },
  {
    id: 'lmtd3dSet',
    device: 'P:LMTD3D',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtd3dStatus',
    device: 'P:LMTD3D',
    eventType: 'click',
    type: 'toggle'
  },
  {
    id: 'lmtav10',
    device: 'P:LMTAV1[0]',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtav11',
    device: 'P:LMTAV1[1]',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtav20',
    device: 'P:LMTAV2[0]',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtav21',
    device: 'P:LMTAV2[1]',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtav30',
    device: 'P:LMTAV3[0]',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtav31',
    device: 'P:LMTAV3[1]',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtavd0',
    device: 'P:LMTAVD[0]',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtavd1',
    device: 'P:LMTAVD[1]',
    eventType: 'change',
    type: 'set'
  },
  {
    id: 'lmtamx',
    device: 'P:LMTAMX',
    eventType: 'change',
    type: 'set'
  }
]

const plots = [
  {
    id: 'channel1',
    device: 'P:LMTRW1[:]@P,67',
    type: 'array'
  },
  {
    id: 'channel2',
    device: 'P:LMTRW2[:]@P,67',
    type: 'array'
  },
  {
    id: 'channel4',
    device: 'P:LMTRW4[:]@P,67',
    type: 'array'
  },
  {
    id: 'channel3',
    device: 'P:LMTRW3[:]@P,67',
    type: 'array'
  },
  {
    id: 'ring12',
    device: 'P:LMTD12@P,1000',
    type: 'time'
  },
  {
    id: 'ring13',
    device: 'P:LMTD13@P,1000',
    type: 'time'
  },
  {
    id: 'ring1dump',
    device: 'P:LMTD1D@P,1000',
    type: 'time'
  },
  {
    id: 'ring23',
    device: 'P:LMTD23@P,1000',
    type: 'time'
  },
  {
    id: 'ring2dump',
    device: 'P:LMTD2D@P,1000',
    type: 'time'
  },
  {
    id: 'ring3dump',
    device: 'P:LMTD3D@P,1000',
    type: 'time'
  },
]