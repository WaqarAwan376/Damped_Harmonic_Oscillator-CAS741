import math
import numpy as np


def get_omega(k,m,c):
    return math.sqrt(k/m - (c/(2*m))**2)


def ode_solver(init_conditions, t, k, c, m, extras):
    x, v = init_conditions
    dxdt = v
    # dvdt = ((-k * x)/m) - ((c * v)/m)
    # dvdt = (-k * x - c * v+0.2) / m
    f_ext = 0
    non_linear_value=0
    if 'f0' in extras.keys():
        if extras['f0']['type'] == 'constant':
            f_ext = extras['f0']['value']
        else:
            f_ext = np.exp(-0.05 * t) * extras['f0']['value'] * np.sin(get_omega(k, m, c) * t)

    if 'non_linearity' in extras.keys():
        non_linear_value = extras['non_linearity']
    dvdt = ((-k * x) - (c * v) - (non_linear_value*x**3) + f_ext) / m

    return [dxdt, dvdt]
