def ode_solver(init_conditions, t, k, c, m):
    x, v = init_conditions

    dxdt = v
    dvdt = (-k * x - c * v) / m
    return [dxdt, dvdt]
