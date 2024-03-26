from marshmallow import Schema, fields, validate


class ExternalForceSchema(Schema):
    type = fields.Str(required=True)
    value = fields.Float(required=True, validate=validate.Range(min=0))


class CalculationSchema(Schema):
    spring_constant = fields.Float(required=True, validate=validate.Range(min=0.0001))
    damping_coefficient = fields.Float(required=False, validate=validate.Range(min=0))
    mass = fields.Float(required=True, validate=validate.Range(min=0.0001))
    initial_displacement = fields.Float(required=True, validate=validate.Range(min=0.0001))
    initial_velocity = fields.Float(required=False, validate=validate.Range(min=0))
    external_force = fields.Nested(ExternalForceSchema(), required=False)
    non_linearity = fields.Float(required=False, validate=validate.Range(min=0))
