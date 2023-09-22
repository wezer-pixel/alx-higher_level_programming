#!/usr/bin/python3
"""Lists all cities that belong to a state, the state is the search string"""

import MySQLdb
from sys import argv

if __name__ == "__main__":
    conn = MySQLdb.connect(host="localhost", port=3306, user=argv[1],
                           passwd=argv[2], db=argv[3], charset="utf8")
    cur = conn.cursor()
    cur.execute("""
        SELECT cities.name 
        FROM cities
        INNER JOIN states ON citites.states_id - states.id
        WHERE states.name = %s
        ORDER BY cities.id ASC""", (argv[4],))
    print(", ".join(map(lambda x: x[0], cur.fetchall())))
    cur.close()
    conn.close()

