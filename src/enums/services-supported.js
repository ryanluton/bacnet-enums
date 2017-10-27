const servicesSupported = {
  /* alarm and event services */
  acknowledge_alarm: 0,
  confirmed_cov_notification: 1,
  confirmed_event_notification: 2,
  get_alarm_summary: 3,
  get_enrollment_summary: 4,
  get_event_information: 39,
  subscribe_cov: 5,
  subscribe_cov_property: 38,
  life_safety_operation: 37,
  /* file access services */
  atomic_read_file: 6,
  atomic_write_file: 7,
  /* object access services */
  add_list_element: 8,
  remove_list_element: 9,
  create_object: 10,
  delete_object: 11,
  read_property: 12,
  read_prop_conditional: 13,
  read_prop_multiple: 14,
  read_range: 35,
  write_property: 15,
  write_prop_multiple: 16,
  write_group: 40,
  /* remote device management services */
  device_communication_control: 17,
  private_transfer: 18,
  text_message: 19,
  reinitialize_device: 20,
  /* virtual terminal services */
  vt_open: 21,
  vt_close: 22,
  vt_data: 23,
  /* security services */
  authenticate: 24,
  request_key: 25,
  i_am: 26,
  i_have: 27,
  unconfirmed_cov_notification: 28,
  unconfirmed_event_notification: 29,
  unconfirmed_private_transfer: 30,
  unconfirmed_text_message: 31,
  time_synchronization: 32,
  utc_time_synchronization: 36,
  who_has: 33,
  who_is: 34
};

export default servicesSupported;