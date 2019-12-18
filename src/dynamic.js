import jsonCreator from 'json-creator';

[
    {"value" : "S1","type":"_input"},
    {"value" : "s","type":"_sn"},
    {"value":"one","type":"_select", "options":[{"value":"one","name":"one"},{"value":"two","name":"two"}]},
    {"value":"Spanish","type":"_select", "options":[{"value":"Spanish","name":"Spanish"},{"value":"English","name":"English"}]},
    {"value":"1","type":"_rating"}
  
  
  ];
  const _input = ["Sha","Alo","Dar","Mer","Kua","dui","eds"];

export default  jsonCreator(
    {
        name: ['${_.firstName}', '${_.lastName}'],
        age: '${RANDINT(_.from, _.to)}',
        options:'${options}'
    },
    {
        value: 'Charlie',
        type: 'Green',
        from: 10,
        to: 50
    }
);
 


