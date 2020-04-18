import _ from 'lodash';

export function contactsArrayFilter(contacts) {
  var CONTACT_DATA = [];

  pushValidator(CONTACT_DATA, {
    title: 'A',
    data: contacts.filter((contact) => contact.name[0] == 'A'),
  });
  pushValidator(CONTACT_DATA,{
    title: 'B',
    data: contacts.filter((contact) => contact.name[0] == 'B'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'C',
    data: contacts.filter((contact) => contact.name[0] == 'C'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'D',
    data: contacts.filter((contact) => contact.name[0] == 'D'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'E',
    data: contacts.filter((contact) => contact.name[0] == 'E'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'F',
    data: contacts.filter((contact) => contact.name[0] == 'F'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'G',
    data: contacts.filter((contact) => contact.name[0] == 'G'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'H',
    data: contacts.filter((contact) => contact.name[0] == 'H'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'I',
    data: contacts.filter((contact) => contact.name[0] == 'I'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'J',
    data: contacts.filter((contact) => contact.name[0] == 'J'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'K',
    data: contacts.filter((contact) => contact.name[0] == 'K'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'L',
    data: contacts.filter((contact) => contact.name[0] == 'L'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'M',
    data: contacts.filter((contact) => contact.name[0] == 'M'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'N',
    data: contacts.filter((contact) => contact.name[0] == 'N'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'O',
    data: contacts.filter((contact) => contact.name[0] == 'O'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'P',
    data: contacts.filter((contact) => contact.name[0] == 'P'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'Q',
    data: contacts.filter((contact) => contact.name[0] == 'Q'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'R',
    data: contacts.filter((contact) => contact.name[0] == 'R'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'S',
    data: contacts.filter((contact) => contact.name[0] == 'S'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'T',
    data: contacts.filter((contact) => contact.name[0] == 'T'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'U',
    data: contacts.filter((contact) => contact.name[0] == 'U'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'V',
    data: contacts.filter((contact) => contact.name[0] == 'V'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'W',
    data: contacts.filter((contact) => contact.name[0] == 'W'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'X',
    data: contacts.filter((contact) => contact.name[0] == 'X'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'Y',
    data: contacts.filter((contact) => contact.name[0] == 'Y'),
  })
  pushValidator(CONTACT_DATA,{
    title: 'Z',
    data: contacts.filter((contact) => contact.name[0] == 'Z'),
  })
  return CONTACT_DATA;
}

function pushValidator(array, object) {
  if (!_.isEmpty(object.data)) {
    array.push(object);
  } else return;
}
