from flask import Blueprint, jsonify, request
from utils.dhm_calculator import dhm_calculator, check_oscillator_status

main = Blueprint('main', __name__)


@main.route('/calculate_motion', methods=['POST'])
def calculate_motion():
    spring_constant = request.json.get('spring_constant')
    damping_coefficient = request.json.get('damping_coefficient')
    mass = request.json.get('mass')
    initial_displacement = request.json.get('initial_displacement')
    initial_velocity = request.json.get('initial_velocity')
    external_force = request.json.get('external_force')
    non_linearity = request.json.get('non_linearity')

    motion_traces = dhm_calculator(
        spring_constant,
        damping_coefficient,
        mass,
        initial_displacement,
        initial_velocity if initial_velocity else 0.0,
        external_force,
        non_linearity
    )
    oscillator_status = check_oscillator_status(
        damping_coefficient,
        mass,
        spring_constant
    )

    return jsonify(
        displacement_trace=motion_traces["displacement_trace"],
        velocity_trace=motion_traces["velocity_trace"],
        oscillator_status=oscillator_status
    )
