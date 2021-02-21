import pymysql

def get_conn():
    conn = pymysql.connect(host="127.0.0.1",
                           user="root",
                           password="123456",
                           db="canada_covid_data",
                           charset="utf8")
    cursor = conn.cursor()
    return conn, cursor

def close_conn(conn, cursor):
    cursor.close()
    conn.close()

def query(sql, *args):
    conn, cursor = get_conn()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res

def get_c1_data():
    sql = """
          SELECT numconf, numconf - numdeaths - numrecover,
          numdeaths, numrecover FROM total_data
          WHERE prname = "Canada" AND date = "05-01-2021"
          """

    res = query(sql)
    return res[0]

def get_c2_data():
	sql = "SELECT * FROM core_data_canada WHERE date >= " \
		  "(NOW() - INTERVAL 30 DAY)"
	res = query(sql)
	return res

def get_l1_data():
	sql = "SELECT date, conf_add FROM add_data_canada " \
		  "WHERE date >= (NOW() - INTERVAL 30 DAY)"
	res = query(sql)
	return res

def get_l2_data():
	sql = "SELECT date, exist_add FROM add_data_canada " \
		  "WHERE date >= (NOW() - INTERVAL 30 DAY)"
	res = query(sql)
	return res

def get_r1_data():
	sql = "SELECT prname, numconf FROM core_data_provinces " \
		  "WHERE date = '2021-01-07' ORDER BY numconf DESC LIMIT 5"
	res = query(sql)
	return res

def get_r2_data():
	sql = "SELECT date, alberta, ontario, quebec FROM top_three_data"
	res = query(sql)
	return res

if __name__ == '__main__':
    print(get_l1_data())