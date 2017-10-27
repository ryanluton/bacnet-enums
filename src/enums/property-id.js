const propertyId = {
  acked_transitions: 0,
  ack_required: 1,
  action: 2,
  action_text: 3,
  active_text: 4,
  active_vt_sessions: 5,
  alarm_value: 6,
  alarm_values: 7,
  all: 8,
  all_writes_successful: 9,
  apdu_segment_timeout: 10,
  apdu_timeout: 11,
  application_software_version: 12,
  archive: 13,
  bias: 14,
  change_of_state_count: 15,
  change_of_state_time: 16,
  notification_class: 17,
  blank_1: 18,
  controlled_variable_reference: 19,
  controlled_variable_units: 20,
  controlled_variable_value: 21,
  cov_increment: 22,
  date_list: 23,
  daylight_savings_status: 24,
  deadband: 25,
  derivative_constant: 26,
  derivative_constant_units: 27,
  description: 28,
  description_of_halt: 29,
  device_address_binding: 30,
  device_type: 31,
  effective_period: 32,
  elapsed_active_time: 33,
  error_limit: 34,
  event_enable: 35,
  event_state: 36,
  event_type: 37,
  exception_schedule: 38,
  fault_values: 39,
  feedback_value: 40,
  file_access_method: 41,
  file_size: 42,
  file_type: 43,
  firmware_revision: 44,
  high_limit: 45,
  inactive_text: 46,
  in_process: 47,
  instance_of: 48,
  integral_constant: 49,
  integral_constant_units: 50,
  issue_confirmed_notifications: 51,
  limit_enable: 52,
  list_of_group_members: 53,
  list_of_object_property_references: 54,
  list_of_session_keys: 55,
  local_date: 56,
  local_time: 57,
  location: 58,
  low_limit: 59,
  manipulated_variable_reference: 60,
  maximum_output: 61,
  max_apdu_length_accepted: 62,
  max_info_frames: 63,
  max_master: 64,
  max_pres_value: 65,
  minimum_off_time: 66,
  minimum_on_time: 67,
  minimum_output: 68,
  min_pres_value: 69,
  model_name: 70,
  modification_date: 71,
  notify_type: 72,
  number_of_apdu_retries: 73,
  number_of_states: 74,
  object_identifier: 75,
  object_list: 76,
  object_name: 77,
  object_property_reference: 78,
  object_type: 79,
  optional: 80,
  out_of_service: 81,
  output_units: 82,
  event_parameters: 83,
  polarity: 84,
  present_value: 85,
  priority: 86,
  priority_array: 87,
  priority_for_writing: 88,
  process_identifier: 89,
  program_change: 90,
  program_location: 91,
  program_state: 92,
  proportional_constant: 93,
  proportional_constant_units: 94,
  protocol_conformance_class: 95,
  // deleted in version 1 revision 2
  protocol_object_types_supported: 96,
  protocol_services_supported: 97,
  protocol_version: 98,
  read_only: 99,
  reason_for_halt: 100,
  recipient: 101,
  recipient_list: 102,
  reliability: 103,
  relinquish_default: 104,
  required: 105,
  resolution: 106,
  segmentation_supported: 107,
  setpoint: 108,
  setpoint_reference: 109,
  state_text: 110,
  status_flags: 111,
  system_status: 112,
  time_delay: 113,
  time_of_active_time_reset: 114,
  time_of_state_count_reset: 115,
  time_synchronization_recipients: 116,
  units: 117,
  update_interval: 118,
  utc_offset: 119,
  vendor_identifier: 120,
  vendor_name: 121,
  vt_classes_supported: 122,
  weekly_schedule: 123,
  attempted_samples: 124,
  average_value: 125,
  buffer_size: 126,
  client_cov_increment: 127,
  cov_resubscription_interval: 128,
  current_notify_time: 129,
  event_time_stamps: 130,
  log_buffer: 131,
  log_device_object_property: 132,
  // the enable property is renamed from log-enable in
  // addendum b to ansi/ashrae 135-2004(135b-2)
  enable: 133,
  log_interval: 134,
  maximum_value: 135,
  minimum_value: 136,
  notification_threshold: 137,
  previous_notify_time: 138,
  protocol_revision: 139,
  records_since_notification: 140,
  record_count: 141,
  start_time: 142,
  stop_time: 143,
  stop_when_full: 144,
  total_record_count: 145,
  valid_samples: 146,
  window_interval: 147,
  window_samples: 148,
  maximum_value_timestamp: 149,
  minimum_value_timestamp: 150,
  variance_value: 151,
  active_cov_subscriptions: 152,
  backup_failure_timeout: 153,
  configuration_files: 154,
  database_revision: 155,
  direct_reading: 156,
  last_restore_time: 157,
  maintenance_required: 158,
  member_of: 159,
  mode: 160,
  operation_expected: 161,
  setting: 162,
  silenced: 163,
  tracking_value: 164,
  zone_members: 165,
  life_safety_alarm_values: 166,
  max_segments_accepted: 167,
  profile_name: 168,
  auto_slave_discovery: 169,
  manual_slave_address_binding: 170,
  slave_address_binding: 171,
  slave_proxy_enable: 172,
  last_notify_record: 173,
  schedule_default: 174,
  accepted_modes: 175,
  adjust_value: 176,
  count: 177,
  count_before_change: 178,
  count_change_time: 179,
  cov_period: 180,
  input_reference: 181,
  limit_monitoring_interval: 182,
  logging_object: 183,
  logging_record: 184,
  prescale: 185,
  pulse_rate: 186,
  scale: 187,
  scale_factor: 188,
  update_time: 189,
  value_before_change: 190,
  value_set: 191,
  value_change_time: 192,
  // enumerations 193-206 are new
  align_intervals: 193,
  // enumeration 194 is unassigned
  interval_offset: 195,
  last_restart_reason: 196,
  logging_type: 197,
  // enumeration 198-201 is unassigned
  restart_notification_recipients: 202,
  time_of_device_restart: 203,
  time_synchronization_interval: 204,
  trigger: 205,
  utc_time_synchronization_recipients: 206,
  // enumerations 207-211 are used in addendum d to ansi/ashrae 135-2004
  node_subtype: 207,
  node_type: 208,
  structured_object_list: 209,
  subordinate_annotations: 210,
  subordinate_list: 211,
  // enumerations 212-225 are used in addendum e to ansi/ashrae 135-2004
  actual_shed_level: 212,
  duty_window: 213,
  expected_shed_level: 214,
  full_duty_baseline: 215,
  // enumerations 216-217 are unassigned
  // enumerations 212-225 are used in addendum e to ansi/ashrae 135-2004
  requested_shed_level: 218,
  shed_duration: 219,
  shed_level_descriptions: 220,
  shed_levels: 221,
  state_description: 222,
  // enumerations 223-225 are unassigned 
  // enumerations 226-235 are used in addendum f to ansi/ashrae 135-2004
  door_alarm_state: 226,
  door_extended_pulse_time: 227,
  door_members: 228,
  door_open_too_long_time: 229,
  door_pulse_time: 230,
  door_status: 231,
  door_unlock_delay_time: 232,
  lock_status: 233,
  masked_alarm_values: 234,
  secured_status: 235,
  // enumerations 236-243 are unassigned 
  // enumerations 244-311 are used in addendum j to ansi/ashrae 135-2004
  absentee_limit: 244,
  access_alarm_events: 245,
  access_doors: 246,
  access_event: 247,
  access_event_authentication_factor: 248,
  access_event_credential: 249,
  access_event_time: 250,
  access_transaction_events: 251,
  accompaniment: 252,
  accompaniment_time: 253,
  activation_time: 254,
  active_authentication_policy: 255,
  assigned_access_rights: 256,
  authentication_factors: 257,
  authentication_policy_list: 258,
  authentication_policy_names: 259,
  authorization_status: 260,
  authorization_mode: 261,
  belongs_to: 262,
  credential_disable: 263,
  credential_status: 264,
  credentials: 265,
  credentials_in_zone: 266,
  days_remaining: 267,
  entry_points: 268,
  exit_points: 269,
  expiry_time: 270,
  extended_time_enable: 271,
  failed_attempt_events: 272,
  failed_attempts: 273,
  failed_attempts_time: 274,
  last_access_event: 275,
  last_access_point: 276,
  last_credential_added: 277,
  last_credential_added_time: 278,
  last_credential_removed: 279,
  last_credential_removed_time: 280,
  last_use_time: 281,
  lockout: 282,
  lockout_relinquish_time: 283,
  master_exemption: 284,
  max_failed_attempts: 285,
  members: 286,
  muster_point: 287,
  negative_access_rules: 288,
  number_of_authentication_policies: 289,
  occupancy_count: 290,
  occupancy_count_adjust: 291,
  occupancy_count_enable: 292,
  occupancy_exemption: 293,
  occupancy_lower_limit: 294,
  occupancy_lower_limit_enforced: 295,
  occupancy_state: 296,
  occupancy_upper_limit: 297,
  occupancy_upper_limit_enforced: 298,
  passback_exemption: 299,
  passback_mode: 300,
  passback_timeout: 301,
  positive_access_rules: 302,
  reason_for_disable: 303,
  supported_formats: 304,
  supported_format_classes: 305,
  threat_authority: 306,
  threat_level: 307,
  trace_flag: 308,
  transaction_notification_class: 309,
  user_external_identifier: 310,
  user_information_reference: 311,
  // enumerations 312-316 are unassigned
  user_name: 317,
  user_type: 318,
  uses_remaining: 319,
  zone_from: 320,
  zone_to: 321,
  access_event_tag: 322,
  global_identifier: 323,
  // enumerations 324-325 are unassigned
  verification_time: 326,
  base_device_security_policy: 327,
  distribution_key_revision: 328,
  do_not_hide: 329,
  key_sets: 330,
  last_key_server: 331,
  network_access_security_policies: 332,
  packet_reorder_time: 333,
  security_pdu_timeout: 334,
  security_time_window: 335,
  supported_security_algorithm: 336,
  update_key_set_timeout: 337,
  backup_and_restore_state: 338,
  backup_preparation_time: 339,
  restore_completion_time: 340,
  restore_preparation_time: 341,
  // enumerations 342-344 are defined in addendum 2008-w
  bit_mask: 342,
  bit_text: 343,
  is_utc: 344,
  group_members: 345,
  group_member_names: 346,
  member_status_flags: 347,
  requested_update_interval: 348,
  covu_period: 349,
  covu_recipients: 350,
  event_message_texts: 351,
  // enumerations 352-363 are defined in addendum 2010-af
  event_message_texts_config: 352,
  event_detection_enable: 353,
  event_algorithm_inhibit: 354,
  event_algorithm_inhibit_ref: 355,
  time_delay_normal: 356,
  reliability_evaluation_inhibit: 357,
  fault_parameters: 358,
  fault_type: 359,
  local_forwarding_only: 360,
  process_identifier_filter: 361,
  subscribed_recipients: 362,
  port_filter: 363,
  // enumeration 364 is defined in addendum 2010-ae
  authorization_exemptions: 364,
  // enumerations 365-370 are defined in addendum 2010-aa
  allow_group_delay_inhibit: 365,
  channel_number: 366,
  control_groups: 367,
  execution_delay: 368,
  last_priority: 369,
  write_status: 370,
  // enumeration 371 is defined in addendum 2010-ao
  property_list: 371,
  // enumeration 372 is defined in addendum 2010-ak
  serial_number: 372,
  // enumerations 373-386 are defined in addendum 2010-i
  blink_warn_enable: 373,
  default_fade_time: 374,
  default_ramp_rate: 375,
  default_step_increment: 376,
  egress_timer: 377,
  in_progress: 378,
  instantaneous_power: 379,
  lighting_command: 380,
  lighting_command_default_priority: 381,
  max_actual_value: 382,
  min_actual_value: 383,
  power: 384,
  transition: 385,
  egress_active: 386
};

export default propertyId;