import PropTypes from 'prop-types'

export default {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }