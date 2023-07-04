#!/usr/bin/python3

"""Defines a locked class"""

class LockedClass:
    """
    Stops User from Instanciating new Locked class attributes exept if the new instance attribute is called 'first_name'.
    """

    __slots__ = ["first_name"]
