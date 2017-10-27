const applicationTag = {
  'null': 0,
  'boolean': 1,
  'unsigned_int': 2,
  'signed_int': 3,
  'real': 4,
  'double': 5,
  'octet_string': 6,
  'character_string': 7,
  'bit_string': 8,
  'enumerated': 9,
  'date': 10,
  'time': 11,
  'object_id': 12,
  'reserve1': 13,
  'reserve2': 14,
  'reserve3': 15,
  'tag': 16,
  // extra stuff - complex tagged data - not specifically enumerated
  // means : "nothing", an empty list, not even a null character
  //'emptylist',
  //// bacnetweeknday
  //'weeknday',
  //// bacnetdaterange
  //'daterange',
  //// bacnetdatetime
  //'datetime',
  //// bacnettimestamp
  //'timestamp',
  //// error class, error code
  //'error',
  //// bacnetdeviceobjectpropertyreference
  //'device_object_property_reference',
  //// bacnetdeviceobjectreference
  //'device_object_reference',
  //// bacnetobjectpropertyreference
  //'object_property_reference',
  //// bacnetdestination (recipient_list)
  //'destination',
  //// bacnetrecipient
  //'recipient',
  //// bacnetcovsubscription
  //'cov_subscription',
  //// bacnetcalendarentry
  //'calendar_entry',
  //// bacnetweeklyschedule
  //'weekly_schedule',
  //// bacnetspecialevent
  //'special_event',
  //// bacnetreadaccessspecification
  //'read_access_specification',
  //// bacnetlightingcommand
  //'lighting_command'
};

export default applicationTag;
