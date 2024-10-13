import pypyodbc as odbc
import pandas as pd
import json

server = 'azureanimedbsrvlss.database.windows.net'
database= 'animedb'
connection_string='Driver={ODBC Driver 18 for SQL Server};Server=azureanimedbsrvlss.database.windows.net,1433;Database=animedb;Uid=animAIDB;Pwd=@Simao0312;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'


sql = '''select * from [anime-dataset-2023-filtered]
         where anime_id = 1'''


def retrieve_from_database(sql_operation):
    try:
        conn = odbc.connect(connection_string)
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