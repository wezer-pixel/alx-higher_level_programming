#!/usr/bin/python3
"""
Class BaseGeometry
"""


class BaseGeometry:
    """public attribute area"""
    def area(self):
        """gives an exception when called"""
        raise Exception("area() is not implemented")
