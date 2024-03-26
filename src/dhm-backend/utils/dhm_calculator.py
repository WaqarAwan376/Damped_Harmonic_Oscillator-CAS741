from scipy.integrate import odeint
from utils.numpy_encoder import NumpyEncoder
from utils.ode_solver import ode_solver
import numpy as np
import json


def dhm_calculator(k, c, m, x0, v0, f0, non_linearity):
    # Equation of motion for Damped Harmonic Motion with linear restoring force
    # m*d2x/dt2 + k*x + c*dx/dt = 0

    # Give initial conditions
    init_conditions = [x0, v0]
    t = np.linspace(0, 100, 1000)
    extras = {}



    if f0:
        extras['f0'] = f0
    if non_linearity:
        extras['non_linearity'] = non_linearity

    sol = odeint(ode_solver, init_conditions, t, args=(k, c, m, extras))

    json_dump = json.dumps(
        {
            'displacement_trace': sol[:, 0],
            'velocity_trace': sol[:, 1]
            },
        cls=NumpyEncoder
    )

    sol = json.loads(json_dump)

    return dict(
        displacement_trace=sol["displacement_trace"],
        velocity_trace=sol["velocity_trace"]
    )


def check_oscillator_status(c, m, k):
    c_sq = c**2
    mk = 4*m*k

    if c_sq < mk:
        return "under"
    elif c_sq == mk:
        return "equal"
    elif c_sq > 4*mk:
        return "over"
    else:
        return "none"
