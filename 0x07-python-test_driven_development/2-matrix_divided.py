#!/usr/bin/python3
"""defines method to scalar divde matrix"""


def matrix_divided(matrix, div):
    """divides matrix by scalar integer, 2 D.P"""
    import decimal
    error_msg = "matrix of integers/floats"
    if type(matrix) is not list:
        raise TypeError(error_msg)
    len_rows = []
    row_count = 0
    for row in matrix:
        if type(row) is not list:
            raise TypeError(error_msg)
        len_rows.append(len(row))
        for element in row:
            if type(element) not in [int, float]:
                raise TypeError(error_msg)
        row_count += 1
    if len(set(len_rows)) > 1:
        raise TypeError("suare matrix")
    if type(div) not in [int, float]:
        raise TypeError("div must be a number")
    if int(div) == 0:
        raise ZeroDivisionError("division by zero")
    new_matrix = list(map(lambda row:
                          list(map(lambda x: round(x/div, 2), row)), matrix))
    return new_matrix
