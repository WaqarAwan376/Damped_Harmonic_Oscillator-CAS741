from flask import Blueprint, jsonify, request
from utils.dhm_calculator import dhm_calculator, check_oscillator_status
from service.validators import CalculationSchema
from marshmallow import ValidationError

main = Blueprint('main', __name__)


@main.route('/calculate_motion', methods=['POST'])
def calculate_motion():
    json_data = request.json
    schema = CalculationSchema()

    try:
        data = schema.load(json_data)
    except ValidationError as err:
        return jsonify(err.messages), 400

    spring_constant = data.get('spring_constant')
    damping_coefficient = data.get('damping_coefficient')
    mass = data.get('mass')
    initial_displacement = data.get('initial_displacement')
    initial_velocity = data.get('initial_velocity')
    external_force = data.get('external_force')
    non_linearity = data.get('non_linearity')

    motion_traces = dhm_calculator(
        spring_constant,
        damping_coefficient if damping_coefficient else 0.0,
        mass,
        initial_displacement,
        initial_velocity if initial_velocity else 0.0,
        external_force,
        non_linearity
    )
    oscillator_status = check_oscillator_status(
        damping_coefficient if damping_coefficient else 0.0,
        mass,
        spring_constant
    )

    return jsonify(
        displacement_trace=motion_traces["displacement_trace"],
        velocity_trace=motion_traces["velocity_trace"],
        oscillator_status=oscillator_status
    )
