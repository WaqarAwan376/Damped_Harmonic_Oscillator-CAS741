from flask import Blueprint, jsonify, request
from utils.dhm_calculator import dhm_calculator

main = Blueprint('main', __name__)


@main.route('/calculate_motion', methods=['POST'])
def calculate_motion():
    spring_constant = request.json['spring_constant']
    damping_coefficient = request.json['damping_coefficient']
    mass = request.json['mass']
    initial_displacement = request.json['initial_displacement']
    initial_velocity = request.json['initial_velocity']
    external_force = request.json.get('external_force')
    non_linearity = request.json.get('non_linearity')

    motion_traces = dhm_calculator(
        spring_constant,
        damping_coefficient,
        mass,
        initial_displacement,
        initial_velocity,
        external_force,
        non_linearity
    )

    return jsonify(
        displacement_trace=motion_traces["displacement_trace"],
        velocity_trace=motion_traces["velocity_trace"]
    )
