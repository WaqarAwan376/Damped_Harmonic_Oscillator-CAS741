from flask import Flask, jsonify, request
from utils.dhm_calculator import dhm_calculator

app = Flask(__name__)


@app.route('/hello')
def hello_world():
    return "Hello World!"


@app.route('/calculate_motion', methods=['POST'])
def calculate_motion():
    spring_constant = request.json['spring_constant']
    damping_coefficient = request.json['damping_coefficient']
    mass = request.json['mass']
    initial_displacement = request.json['initial_displacement']
    initial_velocity = request.json['initial_velocity']

    motion_traces = dhm_calculator(
        spring_constant,
        damping_coefficient,
        mass,
        initial_displacement,
        initial_velocity
    )

    print(motion_traces["displacement_trace"])

    return jsonify(
        displacement_trace=motion_traces["displacement_trace"],
        velocity_trace=motion_traces["velocity_trace"]
    )


if __name__ == '__main__':
    app.run(port=8000, debug=True)
