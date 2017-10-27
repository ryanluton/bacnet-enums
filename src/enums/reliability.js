const reliability = {
  no_fault_detected: 0,
  no_sensor: 1,
  over_range: 2,
  under_range: 3,
  open_loop: 4,
  shorted_loop: 5,
  no_output: 6,
  unreliable_other: 7,
  process_error: 8,
  multi_state_fault: 9,
  configuration_error: 10,
  member_fault: 11,
  communication_failure: 12,
  tripped: 13,
  // enumerated values 0-63 are reserved for definition by ASHRAE.
  // enumerated values 64-65535 may be used by others subject to
  // the procedures and constraints described in clause 23.

  //   do the max range inside of enum so that
  //   compilers will allocate adequate sized datatype for enum
  //   which is used to store decoding
  proprietary_min: 64,
  proprietary_max: 65535
};

export default reliability;