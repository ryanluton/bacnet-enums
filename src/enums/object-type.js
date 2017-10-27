const objectType = {
  analog_input: 0,
  analog_output: 1,
  analog_value: 2,
  binary_input: 3,
  binary_output: 4,
  binary_value: 5,
  calendar: 6,
  command: 7,
  device: 8,
  event_enrollment: 9,
  file: 10,
  group: 11,
  loop: 12,
  multi_state_input: 13,
  multi_state_output: 14,
  notification_class: 15,
  program: 16,
  schedule: 17,
  averaging: 18,
  multi_state_value: 19,
  trend_log: 20,
  life_safety_point: 21,
  life_safety_zone: 22,
  accumulator: 23,
  pulse_converter: 24,
  event_log: 25,
  global_group: 26,
  trend_log_multiple: 27,
  load_control: 28,
  structured_view: 29,
  access_door: 30,
  // 31 was lighting output, but BACnet editor changed it...
  access_credential: 32, // addendum 2008-j
  access_point: 33,
  access_rights: 34,
  access_user: 35,
  access_zone: 36,
  credential_data_input: 37, // authentication-factor-input
  network_security: 38, // addendum 2008-g
  bitstring_value: 39, // addendum 2008-w
  characterstring_value: 40, // addendum 2008-w
  date_pattern_value: 41, // addendum 2008-w
  date_value: 42, // addendum 2008-w
  datetime_pattern_value: 43, // addendum 2008-w
  datetime_value: 44, // addendum 2008-w
  integer_value: 45, // addendum 2008-w
  large_analog_value: 46, // addendum 2008-w
  octetstring_value: 47, // addendum 2008-w
  positive_integer_value: 48, // addendum 2008-w
  time_pattern_value: 49, // addendum 2008-w
  time_value: 50, // addendum 2008-w
  notification_forwarder: 51, // addendum 2010-af
  alert_enrollment: 52, // addendum 2010-af
  channel: 53, // addendum 2010-aa
  lighting_output: 54, // addendum 2010-i
  // Enumerated values 0-127 are reserved for definition by ASHRAE.
  // Enumerated values 128-1023 may be used by others subject to
  // the procedures and constraints described in Clause 23.

  /////// DELTA proprietary objects.
  internet_protocol_settings: 311,

  //   do the max range inside of enum so that
  //   compilers will allocate adequate sized datatype for enum
  //   which is used to store decoding
  proprietary_min: 128,
  proprietary_max: 1023,
  max_bacnet_object_type: 1024
};

export default objectType;