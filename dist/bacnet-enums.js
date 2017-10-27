(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bacnetEnums"] = factory();
	else
		root["bacnetEnums"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _applicationTag = __webpack_require__(1);
	
	Object.defineProperty(exports, 'applicationTag', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_applicationTag).default;
	  }
	});
	
	var _objectType = __webpack_require__(2);
	
	Object.defineProperty(exports, 'objectType', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_objectType).default;
	  }
	});
	
	var _propertyId = __webpack_require__(3);
	
	Object.defineProperty(exports, 'propertyId', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_propertyId).default;
	  }
	});
	
	var _propertyState = __webpack_require__(4);
	
	Object.defineProperty(exports, 'propertyState', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_propertyState).default;
	  }
	});
	
	var _unitsId = __webpack_require__(5);
	
	Object.defineProperty(exports, 'unitsId', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_unitsId).default;
	  }
	});
	
	var _polarity = __webpack_require__(6);
	
	Object.defineProperty(exports, 'polarity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_polarity).default;
	  }
	});
	
	var _errorCode = __webpack_require__(7);
	
	Object.defineProperty(exports, 'errorCode', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_errorCode).default;
	  }
	});
	
	var _servicesSupported = __webpack_require__(8);
	
	Object.defineProperty(exports, 'servicesSupported', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_servicesSupported).default;
	  }
	});
	
	var _daysOfWeek = __webpack_require__(9);
	
	Object.defineProperty(exports, 'daysOfWeek', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_daysOfWeek).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var applicationTag = {
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
	  'tag': 16
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
	
	exports.default = applicationTag;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var objectType = {
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
	
	exports.default = objectType;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var propertyId = {
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
	
	exports.default = propertyId;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var propertyState = {
	  boolean_value: 0,
	  binary_value: 1,
	  event_type: 2,
	  polarity: 3,
	  program_change: 4,
	  program_state: 5,
	  reason_for_halt: 6,
	  reliability: 7,
	  event_state: 8,
	  system_status: 9,
	  units: 10,
	  unsigned_value: 11,
	  life_safety_mode: 12,
	  life_safety_state: 13,
	  restart_reason: 14,
	  door_alarm_state: 15,
	  action: 16,
	  door_secured_status: 17,
	  door_status: 18,
	  door_value: 19,
	  file_access_method: 20,
	  lock_status: 21,
	  life_safety_operation: 22,
	  maintenance: 23,
	  node_type: 24,
	  notify_type: 25,
	  security_level: 26,
	  shed_state: 27,
	  silenced_state: 28,
	  access_event: 30,
	  zone_occupancy_state: 31,
	  access_cred_disable_reason: 32,
	  access_cred_disable: 33,
	  authentication_status: 34
	};
	
	exports.default = propertyState;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var unitsId = {
	  // acceleration
	  meters_per_second_per_second: 166,
	  // area
	  square_meters: 0,
	  square_centimeters: 116,
	  square_feet: 1,
	  square_inches: 115,
	  // currency
	  currency1: 105,
	  currency2: 106,
	  currency3: 107,
	  currency4: 108,
	  currency5: 109,
	  currency6: 110,
	  currency7: 111,
	  currency8: 112,
	  currency9: 113,
	  currency10: 114,
	  // electrical
	  milliamperes: 2,
	  amperes: 3,
	  amperes_per_meter: 167,
	  amperes_per_square_meter: 168,
	  ampere_square_meters: 169,
	  decibels: 199,
	  decibels_millivolt: 200,
	  decibels_volt: 201,
	  farads: 170,
	  henrys: 171,
	  ohms: 4,
	  ohm_meters: 172,
	  milliohms: 145,
	  kilohms: 122,
	  megohms: 123,
	  microsiemens: 190,
	  millisiemens: 202,
	  siemens: 173,
	  // 1 mho equals 1 siemens
	  siemens_per_meter: 174,
	  teslas: 175,
	  volts: 5,
	  millivolts: 124,
	  kilovolts: 6,
	  megavolts: 7,
	  volt_amperes: 8,
	  kilovolt_amperes: 9,
	  megavolt_amperes: 10,
	  volt_amperes_reactive: 11,
	  kilovolt_amperes_reactive: 12,
	  megavolt_amperes_reactive: 13,
	  volts_per_degree_kelvin: 176,
	  volts_per_meter: 177,
	  degrees_phase: 14,
	  power_factor: 15,
	  webers: 178,
	  // energy
	  joules: 16,
	  kilojoules: 17,
	  kilojoules_per_kilogram: 125,
	  megajoules: 126,
	  watt_hours: 18,
	  kilowatt_hours: 19,
	  megawatt_hours: 146,
	  watt_hours_reactive: 203,
	  kilowatt_hours_reactive: 204,
	  megawatt_hours_reactive: 205,
	  btus: 20,
	  kilo_btus: 147,
	  mega_btus: 148,
	  therms: 21,
	  ton_hours: 22,
	  // enthalpy
	  joules_per_kilogram_dry_air: 23,
	  kilojoules_per_kilogram_dry_air: 149,
	  megajoules_per_kilogram_dry_air: 150,
	  btus_per_pound_dry_air: 24,
	  btus_per_pound: 117,
	  // entropy
	  joules_per_degree_kelvin: 127,
	  kilojoules_per_degree_kelvin: 151,
	  megajoules_per_degree_kelvin: 152,
	  joules_per_kilogram_degree_kelvin: 128,
	  // force
	  newton: 153,
	  // frequency
	  cycles_per_hour: 25,
	  cycles_per_minute: 26,
	  hertz: 27,
	  kilohertz: 129,
	  megahertz: 130,
	  per_hour: 131,
	  // humidity
	  grams_of_water_per_kilogram_dry_air: 28,
	  percent_relative_humidity: 29,
	  // length
	  micrometers: 194,
	  millimeters: 30,
	  centimeters: 118,
	  kilometers: 193,
	  meters: 31,
	  inches: 32,
	  feet: 33,
	  // light
	  candelas: 179,
	  candelas_per_square_meter: 180,
	  watts_per_square_foot: 34,
	  watts_per_square_meter: 35,
	  lumens: 36,
	  luxes: 37,
	  foot_candles: 38,
	  // mass
	  milligrams: 196,
	  grams: 195,
	  kilograms: 39,
	  pounds_mass: 40,
	  tons: 41,
	  // mass flow
	  grams_per_second: 154,
	  grams_per_minute: 155,
	  kilograms_per_second: 42,
	  kilograms_per_minute: 43,
	  kilograms_per_hour: 44,
	  pounds_mass_per_second: 119,
	  pounds_mass_per_minute: 45,
	  pounds_mass_per_hour: 46,
	  tons_per_hour: 156,
	  // power
	  milliwatts: 132,
	  watts: 47,
	  kilowatts: 48,
	  megawatts: 49,
	  btus_per_hour: 50,
	  kilo_btus_per_hour: 157,
	  horsepower: 51,
	  tons_refrigeration: 52,
	  // pressure
	  pascals: 53,
	  hectopascals: 133,
	  kilopascals: 54,
	  millibars: 134,
	  bars: 55,
	  pounds_force_per_square_inch: 56,
	  millimeters_of_water: 206,
	  centimeters_of_water: 57,
	  inches_of_water: 58,
	  millimeters_of_mercury: 59,
	  centimeters_of_mercury: 60,
	  inches_of_mercury: 61,
	  // temperature
	  degrees_celsius: 62,
	  degrees_kelvin: 63,
	  degrees_kelvin_per_hour: 181,
	  degrees_kelvin_per_minute: 182,
	  degrees_fahrenheit: 64,
	  degree_days_celsius: 65,
	  degree_days_fahrenheit: 66,
	  delta_degrees_fahrenheit: 120,
	  delta_degrees_kelvin: 121,
	  // time
	  years: 67,
	  months: 68,
	  weeks: 69,
	  days: 70,
	  hours: 71,
	  minutes: 72,
	  seconds: 73,
	  hundredths_seconds: 158,
	  milliseconds: 159,
	  // torque
	  newton_meters: 160,
	  // velocity
	  millimeters_per_second: 161,
	  millimeters_per_minute: 162,
	  meters_per_second: 74,
	  meters_per_minute: 163,
	  meters_per_hour: 164,
	  kilometers_per_hour: 75,
	  feet_per_second: 76,
	  feet_per_minute: 77,
	  miles_per_hour: 78,
	  // volume
	  cubic_feet: 79,
	  cubic_meters: 80,
	  imperial_gallons: 81,
	  milliliters: 197,
	  liters: 82,
	  us_gallons: 83,
	  // volumetric flow
	  cubic_feet_per_second: 142,
	  cubic_feet_per_minute: 84,
	  cubic_feet_per_hour: 191,
	  cubic_meters_per_second: 85,
	  cubic_meters_per_minute: 165,
	  cubic_meters_per_hour: 135,
	  imperial_gallons_per_minute: 86,
	  milliliters_per_second: 198,
	  liters_per_second: 87,
	  liters_per_minute: 88,
	  liters_per_hour: 136,
	  us_gallons_per_minute: 89,
	  us_gallons_per_hour: 192,
	  // other
	  degrees_angular: 90,
	  degrees_celsius_per_hour: 91,
	  degrees_celsius_per_minute: 92,
	  degrees_fahrenheit_per_hour: 93,
	  degrees_fahrenheit_per_minute: 94,
	  joule_seconds: 183,
	  kilograms_per_cubic_meter: 186,
	  kw_hours_per_square_meter: 137,
	  kw_hours_per_square_foot: 138,
	  megajoules_per_square_meter: 139,
	  megajoules_per_square_foot: 140,
	  no_units: 95,
	  newton_seconds: 187,
	  newtons_per_meter: 188,
	  parts_per_million: 96,
	  parts_per_billion: 97,
	  percent: 98,
	  percent_obscuration_per_foot: 143,
	  percent_obscuration_per_meter: 144,
	  percent_per_second: 99,
	  per_minute: 100,
	  per_second: 101,
	  psi_per_degree_fahrenheit: 102,
	  radians: 103,
	  radians_per_second: 184,
	  revolutions_per_minute: 104,
	  square_meters_per_newton: 185,
	  watts_per_meter_per_degree_kelvin: 189,
	  watts_per_square_meter_degree_kelvin: 141,
	  per_mille: 207,
	  grams_per_gram: 208,
	  kilograms_per_kilogram: 209,
	  grams_per_kilogram: 210,
	  milligrams_per_gram: 211,
	  milligrams_per_kilogram: 212,
	  grams_per_milliliter: 213,
	  grams_per_liter: 214,
	  milligrams_per_liter: 215,
	  micrograms_per_liter: 216,
	  grams_per_cubic_meter: 217,
	  milligrams_per_cubic_meter: 218,
	  micrograms_per_cubic_meter: 219,
	  nanograms_per_cubic_meter: 220,
	  grams_per_cubic_centimeter: 221,
	  becquerels: 222,
	  megabecquerels: 224,
	  gray: 225,
	  milligray: 226,
	  microgray: 227,
	  sieverts: 228,
	  millisieverts: 229,
	  microsieverts: 230,
	  microsieverts_per_hour: 231,
	  decibels_a: 232,
	  nephelometric_turbidity_unit: 233,
	  ph: 234,
	  grams_per_square_meter: 235,
	  minutes_per_degree_kelvin: 236,
	  // enumerated values 0-255 are reserved for definition by ASHRAE.
	  // enumerated values 256-65535 may be used by others subject to
	  // the procedures and constraints described in clause 23.
	  // the last enumeration used in this version is 236.
	  max_units: 237,
	  //   do the max range inside of enum so that
	  //   compilers will allocate adequate sized datatype for enum
	  //   which is used to store decoding
	  proprietary_range_min: 256,
	  proprietary_range_max: 65535
	};
	
	exports.default = unitsId;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var polarity = {
	  normal: 0,
	  reverse: 1
	};
	
	exports.default = polarity;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var errorCode = {
	  // valid for all classes
	  other: 0,
	
	  // error class - device
	  device_busy: 3,
	  configuration_in_progress: 2,
	  operational_problem: 25,
	
	  // error class - object
	  dynamic_creation_not_supported: 4,
	  no_objects_of_specified_type: 17,
	  object_deletion_not_permitted: 23,
	  object_identifier_already_exists: 24,
	  read_access_denied: 27,
	  unknown_object: 31,
	  unsupported_object_type: 36,
	
	  // error class - property
	  character_set_not_supported: 41,
	  datatype_not_supported: 47,
	  inconsistent_selection_criterion: 8,
	  invalid_array_index: 42,
	  invalid_data_type: 9,
	  not_cov_property: 44,
	  optional_functionality_not_supported: 45,
	  property_is_not_an_array: 50,
	  // read_access_denied: 27,
	  unknown_property: 32,
	  value_out_of_range: 37,
	  write_access_denied: 40,
	
	  // error class - resources
	  no_space_for_object: 18,
	  no_space_to_add_list_element: 19,
	  no_space_to_write_property: 20,
	
	  // error class - security
	  authentication_failed: 1,
	  // character_set_not_supported: 41,
	  incompatible_security_levels: 6,
	  invalid_operator_name: 12,
	  key_generation_error: 15,
	  password_failure: 26,
	  security_not_supported: 28,
	  timeout: 30,
	
	  // error class - services
	  // character_set_not_supported: 41,
	  cov_subscription_failed: 43,
	  duplicate_name: 48,
	  duplicate_object_id: 49,
	  file_access_denied: 5,
	  inconsistent_parameters: 7,
	  invalid_configuration_data: 46,
	  invalid_file_access_method: 10,
	  invalid_file_start_position: 11,
	  invalid_parameter_data_type: 13,
	  invalid_time_stamp: 14,
	  missing_required_parameter: 16,
	  // optional_functionality_not_supported: 45,
	  property_is_not_a_list: 22,
	  service_request_denied: 29,
	
	  // error class - vt
	  unknown_vt_class: 34,
	  unknown_vt_session: 35,
	  no_vt_sessions_available: 21,
	  vt_session_already_closed: 38,
	  vt_session_termination_failure: 39,
	
	  // unused 
	  reserved1: 33,
	  // new error codes from new addenda
	  abort_buffer_overflow: 51,
	  abort_invalid_apdu_in_this_state: 52,
	  abort_preempted_by_higher_priority_task: 53,
	  abort_segmentation_not_supported: 54,
	  abort_proprietary: 55,
	  abort_other: 56,
	  invalid_tag: 57,
	  network_down: 58,
	  reject_buffer_overflow: 59,
	  reject_inconsistent_parameters: 60,
	  reject_invalid_parameter_data_type: 61,
	  reject_invalid_tag: 62,
	  reject_missing_required_parameter: 63,
	  reject_parameter_out_of_range: 64,
	  reject_too_many_arguments: 65,
	  reject_undefined_enumeration: 66,
	  reject_unrecognized_service: 67,
	  reject_proprietary: 68,
	  reject_other: 69,
	  unknown_device: 70,
	  unknown_route: 71,
	  value_not_initialized: 72,
	  invalid_event_state: 73,
	  no_alarm_configured: 74,
	  log_buffer_full: 75,
	  logged_value_purged: 76,
	  no_property_specified: 77,
	  not_configured_for_triggered_logging: 78,
	  unknown_subscription: 79,
	  parameter_out_of_range: 80,
	  list_element_not_found: 81,
	  busy: 82,
	  communication_disabled: 83,
	  success: 84,
	  access_denied: 85,
	  bad_destination_address: 86,
	  bad_destination_device_id: 87,
	  bad_signature: 88,
	  bad_source_address: 89,
	  bad_timestamp: 90,
	  cannot_use_key: 91,
	  cannot_verify_message_id: 92,
	  correct_key_revision: 93,
	  destination_device_id_required: 94,
	  duplicate_message: 95,
	  encryption_not_configured: 96,
	  encryption_required: 97,
	  incorrect_key: 98,
	  invalid_key_data: 99,
	  key_update_in_progress: 100,
	  malformed_message: 101,
	  not_key_server: 102,
	  security_not_configured: 103,
	  source_security_required: 104,
	  too_many_keys: 105,
	  unknown_authentication_type: 106,
	  unknown_key: 107,
	  unknown_key_revision: 108,
	  unknown_source_message: 109,
	  not_router_to_dnet: 110,
	  router_busy: 111,
	  unknown_network_message: 112,
	  message_too_long: 113,
	  security_error: 114,
	  addressing_error: 115,
	  write_bdt_failed: 116,
	  read_bdt_failed: 117,
	  register_foreign_device_failed: 118,
	  read_fdt_failed: 119,
	  delete_fdt_entry_failed: 120,
	  distribute_broadcast_failed: 121,
	  unknown_file_size: 122,
	  abort_apdu_too_long: 123,
	  abort_application_exceeded_reply_time: 124,
	  abort_out_of_resources: 125,
	  abort_tsm_timeout: 126,
	  abort_window_size_out_of_range: 127,
	  file_full: 128,
	  inconsistent_configuration: 129,
	  inconsistent_object_type: 130,
	  internal_error: 131,
	  not_configured: 132,
	  out_of_memory: 133,
	  value_too_long: 134,
	  abort_insufficient_security: 135,
	  abort_security_error: 136,
	  max_bacnet_error_code: 137,
	  // enumerated values 0-255 are reserved for definition by ASHRAE.
	  // enumerated values 256-65535 may be used by others subject to
	  // the procedures and constraints described in clause 23.
	
	  //   do the max range inside of enum so that
	  //   compilers will allocate adequate sized datatype for enum
	  //   which is used to store decoding
	  first_proprietary_error_code: 256,
	  last_proprietary_error_code: 65535
	};
	
	exports.default = errorCode;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var servicesSupported = {
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
	
	exports.default = servicesSupported;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var daysOfWeek = {
	  monday: 0,
	  tuesday: 1,
	  wednesday: 2,
	  thursday: 3,
	  friday: 4,
	  saturday: 5,
	  sunday: 6,
	  max_bacnet_days_of_week: 7
	};
	
	exports.default = daysOfWeek;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=bacnet-enums.js.map