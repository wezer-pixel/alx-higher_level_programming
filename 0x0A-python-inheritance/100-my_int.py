#!/usr/bin/python3
"""
Class MyInt
"""


class MyInt(int):
    """Made of int only"""
    def __new__(cls, *args, **kwargs):
        """instance of the class"""
        return super(MyInt, cls).__new__(cls, *args, **kwargs)

    def __eq__(self, other):
        """what was != is now =="""
        return int(self) != other

    def __ne__(self, other):
        """what was == is now !="""
        return int(self) == other
