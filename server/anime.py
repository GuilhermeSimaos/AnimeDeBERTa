import pypyodbc as odbc
import pandas as pd
import json
import dbconnection as dbconn


def retrieve_from_database(sql_operation):
    try:
        conn = odbc.connect(dbconn.connection_string)
        cursor = conn.cursor()
        cursor.execute(sql_operation)
        
        # Fetch all rows
        dataset = cursor.fetchall()
        columns = [column[0] for column in cursor.description]
        df = pd.DataFrame(dataset, columns=columns)
        
        # Convert DataFrame to JSON
        json_data = df.to_json(orient='records')
        return json_data
    except Exception as e:
        print(f"Error retrieving data: {e}")
        return json.dumps({"error": str(e)})
    finally:
        cursor.close()
        conn.close()